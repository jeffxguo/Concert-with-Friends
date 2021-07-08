import GoogleMapReact from "google-map-react";
import React, { useState, useEffect } from 'react';
import Geocoder from 'react-native-geocoding';
import { COLORS } from '../constants/Colors';
import pin from "../images/pin.png";

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

      console.log(events[i])
      const date = new Date(events[i].dates.start.dateTime);

      const months = ["JAN", 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

      function openLink() {
        alert("hi")
      }

      const infowindow = new maps.InfoWindow({
        content:
          `<div style='display: flex; max-width: 500px; padding: 10px'>
        <div style='flex:1'>
        <img src=${events[i].images[0].url} style='border-radius: 4px; object-fit: cover; height: 180px; width: 200px'>
        </div>
        <div style='flex: 2; text-align: left; padding-left: 20px;'>
        <div style='font-size: 20px; font-weight: 700'>${events[i].name}</div>
        <div style='font-size: 18px; font-weight: 500; margin-top: 10px;'>
        <img src=${pin} style='object-fit: cover; height: 20px; margin-right: 5px'>
        ${events[i]._embedded.venues[0].name}
        </div>
        <div style='color: ${COLORS.highlight}; margin-top: 10px; font-size: 18px; font-weight: 500'>
        ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}
        </div>
        <br/>
        <button o
        style='background-color: ${COLORS.highlight}; margin-right: 10px; color: #fff; font-size: 20px; border: none; border-radius: 4px; padding: 10px 20px'>Join</button>
        <button onclick="window.open('${events[i].url}');"
        style='background-color: #fff; color: ${COLORS.highlight}; font-size: 20px; border: solid 1px ${COLORS.highlight}; border-radius: 4px; padding: 9px 20px'>Buy Tickets</button>
        </div>
        </div>`
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
    <div style={{ height: "100vh", width: "100%" }}>
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
