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
        groupService.getMembers(props.id).then(memberIds => {
            const array = [...memberIds]
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
                <Typography variant="h2" style={{ color: COLORS.black, fontWeight: 600 }}>{props.name}</Typography>
            </div>
            <div className={classes.contactText}>
                <Typography style={{ color: COLORS.grey, marginTop: "2em", fontWeight: 600 }}>Contact List</Typography>
            </div>
            <Box className={classes.contactBox} borderRadius="borderRadius" justify="center">
                {members.map((member, i) => {
                    return (
                        <div className={classes.items} key={i}>
                            <Contact name={member.username} avatar={member.avatar} phone={member.phone} email={member.email}
                                instagram={member.instagram} facebook={member.facebook} taste={member.taste} />
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
    contactText: {
        position: 'absolute',
        left: '3em',
        top: '6em'
    },
    contactBox: {
        position: 'absolute',
        padding: "1em",
        margin: '0 0 0 2em',
        top: '10em',
        height: '37em',
        width: '45em',
        overflowY: 'scroll',
    },
    items: {
        marginBottom: '1em',
    }
}));