import { Typography } from "@material-ui/core";
import GroupCardList from "./GroupCardList";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { alertActions } from "../actions/alert.actions";

export default function MyGroupsPage() {
    const [groups, setGroups] = useState([])
    const [userGroups, setUserGroups] = useState([])

    const userData = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    const apiKey = "zJPgVpNApZcVc9eYvPnrrjrZkOMgExUO"
    useEffect(() => {
        const userGroups = JSON.parse(localStorage.user).data.joinedGroups
        console.log(userGroups)
        setUserGroups(userGroups)

        userGroups.forEach((eventID) => {
            fetch('https://app.ticketmaster.com/discovery/v2/events/' + eventID + '?apikey=' + apiKey)
                .then(response => response.json())
                .then(async (data) => {
                    console.log(data)
                    setGroups([...groups, data])

                }).catch(err => {
                    console.log(err)
                })

        }
        )
        console.log(groups)
    }, []);

    useEffect(() => {
        if (userData && userData.data && userData.data.joinedGroups) {
            const eventsData = groups.map((event) => ({ ...event, joined: userData.data.joinedGroups.includes(event.id) }))
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