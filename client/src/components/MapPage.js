import GoogleMapReact from "google-map-react";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { COLORS } from '../constants/Colors';
import pin from "../images/pin.png"

import { userActions } from '../actions/user.actions';
import { alertActions } from '../actions/alert.actions';

export default function GoogleMaps() {
  const [events, setEvents] = useState([]);
  const loggedIn = useSelector(state => state.user.loggedIn);
  const userData = useSelector(state => state.user.user);
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

  const API_KEY = process.env.REACT_APP_API_KEY || '';
  const BS_URL_KEY = process.env.REACT_APP_BS_URL_KEY || '';

  const [currentLoc, setCurrentLoc] = useState({
    lat: 0,
    lng: 0
  });

  const ModelsMap = async (map, maps) => {
    const handleClickJoin = (eventId, eventName) => {
      if (userData && userData.data && userData.data._id) {
        dispatch(userActions.addGroup(userData.data._id, eventId, userData.data.username, userData.data.email, userData.data.phone, eventName));
      }
    }

    const handleClickLeave = (eventId) => {
      if (userData && userData.data && userData.data._id) {
        dispatch(userActions.deleteGroup(userData.data._id, eventId));
      }
    }

    const getCurrentLongLat = () => {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    }

    const getCurrentCity = async () => {
      try {
        const position = await getCurrentLongLat();
        const currentLoc = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
        map.setCenter(currentLoc);
        setCurrentLoc(currentLoc);
        return currentLoc;
      } catch (error) {
        console.warn(error)
        return null;
      }
    }

    return getCurrentCity().then((currentLoc) => {
      let url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}`
      if (currentLoc) {
        url += '&geoPoint=' + currentLoc.lat + "," + currentLoc.lng + '&keyword=music&radius=50'

        fetch(url)
          .then(response => response.json())
          .then(data => {
            let events = data._embedded.events;
            if (userData && userData.data && userData.data.joinedGroups) {
              events = events.map((event) => ({ ...event, joined: userData.data.joinedGroups.includes(event.id) }));
            }

            for (let i = 0; i < events.length; i++) {
              const marker = new maps.Marker({
                position: { lat: parseFloat(events[i]._embedded.venues[0].location.latitude), lng: parseFloat(events[i]._embedded.venues[0].location.longitude) },
                map
              })
              const date = new Date(events[i].dates.start.dateTime);
              const months = ["JAN", 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

              const infowindow = new maps.InfoWindow({
                content:
                  `<div id="content" style='display: flex; max-width: 500px; padding: 10px'>
              <div style='flex:1'>
              <img src=${events[i].images[0].url} style='border-radius: 4px; object-fit: cover; height: 180px; width: 200px'>
              </div>
              <div style='flex: 2; text-align: left; padding-left: 20px;'>
              <div style='font-size: 1.2em; font-weight: 700'>${events[i].name}</div>
              <div style='font-size: 1.1em; font-weight: 500; margin-top: 10px;'>
              <img src=${pin} style='object-fit: cover; height: 20px; margin-right: 5px'>
              ${events[i]._embedded.venues[0].name}
              </div>
              <div style='color: ${COLORS.highlight}; margin-top: 10px; font-size: 1.1em; font-weight: 500'>
              ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}
              </div>
              <br/>
              <div id="join-leave" style='display: inline-block'>
              <button id=${events[i].joined ? "leave-group" : "add-group"}
              style='background-color: ${events[i].joined ? COLORS.lightRed : COLORS.highlight}; margin-right: 10px; color: #fff; font-size: 1.2em; border: none; border-radius: 4px; padding: .5em 1em'>${events[i].joined ? "Leave" : "Join"}</button>
              </div>
              <button onclick="window.open('${events[i].url}');"
              style='background-color: #fff; color: ${COLORS.highlight}; font-size: 1.2em; border: solid 1px ${COLORS.highlight}; border-radius: 4px; padding: .5em 1em'>Buy Tickets</button>
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
              const handleClick = (e) => {
                if (loggedIn && userData) {
                  if (document.getElementById("add-group")) {
                    handleClickJoin(events[i].id, events[i].name);
                    document.getElementById("add-group").setAttribute("style", `background-color: ${COLORS.lightRed}; margin-right: 10px; color: #fff; font-size: 1.2em; border: none; border-radius: 4px; padding: 10px 20px`);
                    document.getElementById("add-group").innerText = "Leave";
                    document.getElementById("add-group").id = "leave-group";
                  }
                  else if (document.getElementById("leave-group")) {
                    handleClickLeave(events[i].id);
                    document.getElementById("leave-group").setAttribute("style", `background-color: ${COLORS.highlight}; margin-right: 10px; color: #fff; font-size: 1.2em; border: none; border-radius: 4px; padding: 10px 20px`);
                    document.getElementById("leave-group").innerText = "Join";
                    document.getElementById("leave-group").id = "add-group";
                  }
                  return;
                } else {
                  dispatch(alertActions.error("You need to login first"));
                  setTimeout(() => {
                    dispatch(alertActions.clear());
                  }, 3000);
                  return;
                }
              };
              maps.event.addListener(infowindow, 'domready', () => {
                if (document.getElementById("join-leave")) {
                  document.getElementById("join-leave").addEventListener("click", handleClick)
                }
              })
            }
            return events;
          });
      }
    });
  }

  useEffect(() => {
    if (userData && userData.data && userData.data.joinedGroups) {
      const eventsData = events?.map((event) => ({ ...event, joined: userData.data.joinedGroups.includes(event.id) }))
      setEvents(eventsData);
    }
  }, [userData]);

  useEffect(() => {
    if (alert && alert.message) {
      window.alert(alert.message);
    }
  }, [alert]);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: BS_URL_KEY }}
        defaultCenter={{
          lat: 0,
          lng: 0
        }}
        defaultZoom={12}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => ModelsMap(map, maps).then(
          (events) => {
            setEvents(events);
          })}
      ></GoogleMapReact>
    </div>
  );
};
