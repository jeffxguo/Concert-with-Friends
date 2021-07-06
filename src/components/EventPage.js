import { Typography } from "@material-ui/core";
import CardList from "./CardList";
import background from "../images/eventPage.jpg";
import SearchBar from "./SearchBar";
import React, { useState, useEffect } from 'react';

export default function EventPage() {
    const [events, setEvents] = useState([])
    const apiKey = "zJPgVpNApZcVc9eYvPnrrjrZkOMgExUO"
    useEffect(() => {
        fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=' + apiKey + '&city=vancouver&segmentId=KZFzniwnSyZfZ7v7nJ')
            .then(response => response.json())
            .then(data => setEvents(data._embedded.events));
    }, []);

    const handleSearch = async (keywords, city, genre) => {
        let url = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=' + apiKey
        if (keywords) url += "&keyword=" + keywords
        if (city) url += "&city=" + city
        if (genre) url += "&genreId=" + genre
        url += "&segmentId=KZFzniwnSyZfZ7v7nJ"

        console.log(url)
        fetch(url)
            .then(response => response.json())
            .then(data => setEvents(data?._embedded?.events))

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