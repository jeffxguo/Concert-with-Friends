import { Typography } from "@material-ui/core";
import GroupCardList from "./GroupCardList";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { alertActions } from "../actions/alert.actions";

export default function MyGroupsPage() {
    const [groups, setGroups] = useState([])

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
                setGroups(eventsData);
            });
    }, []);

    useEffect(() => {
        if (userData && userData.data && userData.data.joinedGroups) {
            const eventsData = groups.map((event) => ({...event, joined: userData.data.joinedGroups.includes(event.id)}))
            setGroups(eventsData);
        }
    }, [userData]);

    return (
        <div style={{ margin: "2em 10%", textAlign: "left" }}>
            <Typography variant="h1" style={{ margin: "1.5em .5em .5em .5em" }}>My Groups</Typography>
            
            {/* Need to GET groups from user and pass event info + group members to GroupCardList */}
            <GroupCardList groups={groups ? groups : []} />
        </div>
    )
}