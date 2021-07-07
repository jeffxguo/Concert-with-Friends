import { Typography } from "@material-ui/core";
import CardList from "./CardList";
import background from "../images/eventPage.jpg";
import SearchBar from "./SearchBar";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { alertActions } from "../actions/alert.actions";

export default function EventPage() {
    const [events, setEvents] = useState([])
    const userData = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    const apiKey = "zJPgVpNApZcVc9eYvPnrrjrZkOMgExUO"
    useEffect(() => {
        fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=' + apiKey + '&city=vancouver&segmentId=KZFzniwnSyZfZ7v7nJ')
            .then(response => response.json())
            .then(data => {
                let eventsData = data._embedded.events;
                if (userData && userData.data && userData.data.joinedGroups) {
                    eventsData = eventsData.map((event) => ({...event, joined: userData.data.joinedGroups.includes(event.id)}));
                }
                setEvents(eventsData);
            });
    }, []);

    useEffect(() => {
        if (userData && userData.data && userData.data.joinedGroups) {
            const eventsData = events.map((event) => ({...event, joined: userData.data.joinedGroups.includes(event.id)}))
            setEvents(eventsData);
        }
    }, [userData]);

    const handleSearch = async (keywords, city, genre) => {
        let url = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=' + apiKey
        if (keywords) url += "&keyword=" + keywords
        if (city) url += "&city=" + city
        if (genre) url += "&genreId=" + genre
        url += "&segmentId=KZFzniwnSyZfZ7v7nJ"

        console.log(url)
        dispatch(alertActions.clear());
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let eventsData = data?._embedded?.events;
                if (userData && userData.data && userData.data.joinedGroups) {
                    eventsData = eventsData.map((event) => ({...event, joined: userData.data.joinedGroups.includes(event.id)}));
                }
                setEvents(eventsData);
            })

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