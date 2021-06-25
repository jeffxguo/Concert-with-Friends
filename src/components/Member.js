import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Button, makeStyles } from '@material-ui/core';

export default function Member(member) {
    const classes = useStyles();

    return (
        <Box borderRadius="borderRadius" className={classes.box}>
            <div className={classes.content}>
                <img className={classes.memberImage} src={member.image}
                style={{ top: '2em', height: "6em" }} alt={"Member"}/>
                <div className={classes.details}>
                    <Typography variant="h2">{member.name}</Typography>
                    <Typography variant="h6">Contact Info</Typography>
                    <Typography>Phone: {member.phone}</Typography>
                    <Typography>Email: {member.email}</Typography>
                    <Typography>IG: {member.ig}</Typography>
                </div>
            </div>
        </Box>
    )
}

const useStyles = makeStyles(theme => ({
    memberImage: {
        flex: 1
    },
    box: {
        position: 'relative',
        backgroundColor: "white",
        color: "black",
        padding: '5px 15px',
        fontSize: '22px',
        height: '10em',
        width: '30em',
    },
    content: {
        paddingTop: '2em',
        display: 'flex',
        flexDirection: 'row'
    },
    details: {
        textAlign: "center",
        flex: 3
    }
}));