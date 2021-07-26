import { Typography } from "@material-ui/core";
import CardList from "./CardList";
import background from "../images/eventPage.jpg";
import SearchBar from "./SearchBar";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { alertActions } from "../actions/alert.actions";
import { groupService } from '../services/group.service';

export default function EventPage() {
    const [events, setEvents] = useState([]);
    const userData = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    const apiKey = "zJPgVpNApZcVc9eYvPnrrjrZkOMgExUO"
    const [currentLoc, setCurrentLoc] = useState({
        lat: 0,
        lng: 0
    })

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
            setCurrentLoc(currentLoc);
            console.log(currentLoc)

            fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=zJPgVpNApZcVc9eYvPnrrjrZkOMgExUO&geoPoint=' + currentLoc.lat + "," + currentLoc.lng + '&keyword=music&radius=50')
                .then(response => response.json())
                .then(async (data) => {
                    let eventsData = data._embedded.events;
                    eventsData = await Promise.all(eventsData.map(async (event) => ({ ...event, memberNum: await groupService.getMembers(event.id).then(arr => arr.length).catch(err => { console.log(err); }) })));
                    if (userData && userData.data && userData.data.joinedGroups) {
                        eventsData = eventsData.map((event) => ({ ...event, joined: userData.data.joinedGroups.includes(event.id) }))
                    }
                    setEvents(eventsData);
                });

        } catch (error) {
            console.warn(error)
            return null;
        }

    }


    useEffect(() => {
        getCurrentCity();
    }, []);

    useEffect(async () => {
        if (userData && userData.data && userData.data.joinedGroups) {
            let eventsData = await Promise.all(events.map(async (event) => ({ ...event, memberNum: await groupService.getMembers(event.id).then(arr => arr.length).catch(err => { console.log(err); }) })));
            eventsData = eventsData.map((event) => ({ ...event, joined: userData.data.joinedGroups.includes(event.id) }))
            setEvents(eventsData);
        }
    }, [userData]);

    const handleSearch = async (keywords, city, genre, startDate, endDate) => {
        let url = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=' + apiKey
        if (keywords) url += "&keyword=" + keywords
        if (city) url += "&city=" + city
        if (genre) url += "&genreId=" + genre
        url += "&segmentId=KZFzniwnSyZfZ7v7nJ"
        if (startDate) url += "&startDateTime=" + startDate
        if (endDate) url += "&endDateTime=" + endDate

        dispatch(alertActions.clear());
        fetch(url)
            .then(response => response.json())
            .then(async (data) => {
                let eventsData = [];
                if (data._embedded) {
                    eventsData = data._embedded.events;
                }
                eventsData = await Promise.all(eventsData.map(async (event) => ({ ...event, memberNum: await groupService.getMembers(event.id).then(arr => arr.length).catch(err => { console.log(err); }) })));
                if (userData && userData.data && userData.data.joinedGroups) {
                    eventsData = eventsData.map((event) => ({ ...event, joined: userData.data.joinedGroups.includes(event.id) }))
                }
                setEvents(eventsData);
            });
    }

    return (
        <div style={{ margin: "2em 10%", textAlign: "left" }}>
            <div style={{
                backgroundImage: `url(${background})`,
                height: "40vh", width: "100%",
                backgroundSize: "cover"
            }}></div>
            <SearchBar handleSearch={handleSearch} />
            <Typography variant="h1" style={{ margin: "1.5em .5em .5em .5em" }}>Upcoming Events</Typography>
            <CardList events={events ? events : []} />
        </div>
    )
}
