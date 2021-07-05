import React, { Component, useEffect, useState } from 'react';
import { testData } from '../testEvent';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Geocode from "react-geocode";
import CardList from "./CardList";
import EventCard from './Card'





const MapContainer = (props)=> {
  

  //console.log(CardList.data)  // logs the postal code
  // console.log(mapData.events[0]._embedded.venues[0].address.line1); //log address
  // console.log(mapData.events.length);

  const [data, setData] = useState(JSON.parse(testData).events)

  console.log(data[0]._embedded.venues[0].postalCode);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  const [mapState, setMapState] = useState({
    showingInfoWindow: false,  
    activeMarker: {},          
    selectedPlace: {}         
  });
  
  const containerStyle = {
    width: '1440px',
    height: '800px'
  };
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
      if (!navigator.geolocation) {
          setStatus('Geolocation is not supported by your browser');
      } else {
          setStatus('Locating...');
          navigator.geolocation.getCurrentPosition((position) => {
              setStatus(null);
              setIsLoading(false);
              console.log(position);
              setLat(position.coords.latitude);
              setLng(position.coords.longitude);
          }, () => {
              setStatus('Unable to retrieve your location');
          });
      }
  },[navigator.geolocation]);


  const center = {
    lat: lat,
    lng: lng
  };

    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyDaB9iZHEtafiTwgos1qZF0S6iKuW4UpIo"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds();
      map.fitBounds(bounds);
      setMap(map)
    }, [])
  
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])

    
  
  // state = {
  //   showingInfoWindow: false,  // Hides or shows the InfoWindow
  //   activeMarker: {},          // Shows the active marker upon click
  //   selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
  // };

  const onMarkerClick = (props, marker, e) =>
  setMapState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

const onClose = props => {
  if (mapState.showingInfoWindow) {
    setMapState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};

Geocode.setApiKey("AIzaSyDaB9iZHEtafiTwgos1qZF0S6iKuW4UpIo");

Geocode.fromAddress(data[0]._embedded.venues[0].postalCode).then(
  response => {
    const { markerLat, markerLng } = response.results[0].geometry.location;
    console.log(markerLat, markerLng);
  },
  error => {
    console.error(error);
  }
);




// return isLoading? <p>isLoading</p> : (
//     <Map
//       google={props.google}
//       zoom={14}
//       style={mapStyles}
//       initialCenter={
//         {
//           lat: 49.281406462562934,
//           lng: -123.12820819842196
//         }
//       }
//       >
//       <Marker
//         onClick={onMarkerClick}
//         name={'Commodore Ballroom'}
//       />
//       <InfoWindow
//         marker={mapState.activeMarker}
//         visible={mapState.showingInfoWindow}
//         onClose={onClose}
//       >npm i -S @react-google-maps/api
//         <div>
//           <h4>{mapState.selectedPlace.name}</h4>
//         </div>
//       </InfoWindow>
//       </Map>
//   );
  
return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { /* Child components, such as markers, info windows, etc. */}
    </GoogleMap>
) : <></>
}

export default React.memo(MapContainer)

