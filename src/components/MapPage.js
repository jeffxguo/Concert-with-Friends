import GoogleMapReact from "google-map-react";
import React, { useState, useEffect } from 'react';
import Geocoder from 'react-native-geocoding';


const GoogleMaps = ({ latitude, longitude }) => {
  // const [events, setEvents] = useState([])
  const apiKey = "zJPgVpNApZcVc9eYvPnrrjrZkOMgExUO"
  const google = window.google

  useEffect(() => {
    // fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=' + apiKey + '&city=vancouver&segmentId=KZFzniwnSyZfZ7v7nJ')
    //     .then(response => response.json())
    //     .then(data => setEvents(data._embedded.events));
  }, []);

  // console.log(events)


  const [currentLoc, setCurrentLoc] = React.useState({
    lat: 49.2780527602363,
    lng: -123.10832917554698
  });


  const ModelsMap = async (map, maps) => {

    const getCurrentLongLat = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setCurrentLoc({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        });
      }
    }

    const getCurrentCity = async () => {
      Geocoder.init("AIzaSyDaB9iZHEtafiTwgos1qZF0S6iKuW4UpIo");

      try {
        const json = await Geocoder.from(currentLoc)
        let currentCity = json.results[0].address_components[3].long_name
        return currentCity;
      } catch (error) {
        console.warn(error)
        return null;
      }
    }



    getCurrentLongLat();
    const currentCity = await getCurrentCity();
    const response = await fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=' + apiKey + '&city=' + currentCity + '&segmentId=KZFzniwnSyZfZ7v7nJ');
    const data = await response.json();
    const events = data._embedded.events;
    console.log({ events });


    for (let i = 0; i < events.length; i++) {
      const marker = new maps.Marker({
        position: { lat: parseFloat(events[i]._embedded.venues[0].location.latitude), lng: parseFloat(events[i]._embedded.venues[0].location.longitude) },
        map
      })

      const infowindow = new maps.InfoWindow({

        content: `<div style='float:left'><img src=${events[i].images[0].url}></div><div style='float:right; padding: 10px;'><b>${events[i].name}</b><br/>${events[i]._embedded.venues[0].name}<br/>${events[i].dates.start.localDate}<br/>${events[i].dates.start.localTime}<br/><button onclick="myFunction()">Join</button></div>`
      });

      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
      })
    }
  }










  return (
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDaB9iZHEtafiTwgos1qZF0S6iKuW4UpIo" }}
        defaultCenter={currentLoc}
        defaultZoom={12}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => ModelsMap(map, maps)}
      ></GoogleMapReact>
    </div>
  );
};

export default GoogleMaps;
