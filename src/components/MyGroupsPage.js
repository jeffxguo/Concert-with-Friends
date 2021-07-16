import { Typography } from "@material-ui/core";
import GroupCardList from "./GroupCardList";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { alertActions } from "../actions/alert.actions";
import { userService } from "../services/user.service";

export default function MyGroupsPage() {
    const [groups, setGroups] = useState([])

    const userData = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    const apiKey = "btyHtEL9FKUl9n1MqrTr0OTs33iD0MGi"
    useEffect(() => {

        userService.getGroups(userData.data._id).then(userGroups => {
            let data = []
            userGroups.forEach((eventID) => {
                fetch('https://app.ticketmaster.com/discovery/v2/events/' + eventID + '?apikey=' + apiKey)
                    .then(response => response.json())
                    .then(async (group) => {
                        data.push(group)
                        setGroups([...data])
                    }).catch(err => {
                        console.log(err)
                    })
            }
            )
            console.log(groups)
        })

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