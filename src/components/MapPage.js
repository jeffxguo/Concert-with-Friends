import GoogleMapReact from "google-map-react";
import React, { useState, useEffect } from 'react';
import Geocoder from 'react-native-geocoding';


const GoogleMaps = ({ latitude, longitude }) => {
  // const [events, setEvents] = useState([])
  const apiKey = "zJPgVpNApZcVc9eYvPnrrjrZkOMgExUO"
  const google = window.google
  const[currentCity,setCurrentCity]= useState([])

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
    const response = await fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=' + apiKey + '&city='+currentCity+'&segmentId=KZFzniwnSyZfZ7v7nJ');
    const data = await response.json();
    const events = data._embedded.events;
    console.log({events});

    // let dataArray = [];
    // {
    //   events.map((markerJson) => dataArray.push(markerJson));
    // }

    const dataArray = events;

    for (let i = 0; i < dataArray.length; i++) {


      const marker = new maps.Marker({
        position: { lat: parseFloat(dataArray[i]._embedded.venues[0].location.latitude), lng: parseFloat(dataArray[i]._embedded.venues[0].location.longitude) },
        map
      })

      const infowindow = new maps.InfoWindow({
        
        content: "<div style='float:left'><img src='" + dataArray[i].images[0].url + "'></div><div style='float:right; padding: 10px;'><b>" + dataArray[i].name  + "</b><br/>" + dataArray[i]._embedded.venues[0].name + "<br/>" + dataArray[i].dates.start.localDate + "<br/>" + dataArray[i].dates.start.localTime + "<br/>" + '<button onclick="myFunction()">Join</button>'+ "</div>" 
      });
    
      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
      })
    }


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLoc({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }
  

  Geocoder.init("AIzaSyDaB9iZHEtafiTwgos1qZF0S6iKuW4UpIo");

  Geocoder.from(currentLoc)
  .then(json => {
  //var addressComponent = json.results[0].address_components[3].long_name;
    setCurrentCity(json.results[0].address_components[3].long_name)
  })
  .catch(error => console.warn(error));

  console.log(currentCity)



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
