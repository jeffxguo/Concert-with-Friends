import { Box, makeStyles, Typography } from '@material-ui/core';
import { COLORS } from '../constants/Colors';
import Contact from './Contact';
import React, { useEffect, useState } from 'react';
import { groupService } from '../services/group.service';
import { userService } from '../services/user.service';

export default function ContactList(props) {
    const [members, setMembers] = useState([])
    useEffect(() => {
        const data = []
        console.log("yy", props.id)
        groupService.getMembers(props.id).then(memberIds => {
            const array = [...memberIds]
            console.log("ye", array)
            array.forEach(id => {
                userService.getUser(id).then(user => {
                    data.push(user)
                    setMembers([...data])
                })
            })

        })
    }, []);

    const classes = useStyles();
    return (
        <Box borderRadius="borderRadius" className={classes.box} style={{ display: "block", textAlign: "left", backgroundColor: COLORS.white }}>
            <div className={classes.text}>
                <h2>{props.name}</h2>
                <Typography variant="h1" style={{ color: COLORS.grey }}>Contact List</Typography>
            </div>
            <Box className={classes.contactBox} borderRadius="borderRadius" justify="center">
                {members.map((member, i) => {
                    console.log(member)
                    return (
                        <div className={classes.items} key={i}>
                            <Contact name={member.name} image={member.image} phone={member.phone} email={member.email} />
                        </div>
                    )
                })}
            </Box>
        </Box>
    );
}

const useStyles = makeStyles(theme => ({
    box: {
        width: "50em",
        height: '50em',
    },
    text: {
        padding: '3em 0 0 3em',
    },
    contactBox: {
        padding: "1em",
        margin: '0 0 0 2em',
        paddingTop: '1em',
        height: '40em',
        width: '45em',
        overflowY: 'scroll',
    },
    items: {
        marginBottom: '1em',
    }
}));