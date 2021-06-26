import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Button, makeStyles } from '@material-ui/core';

export default function Member(member) {
    const classes = useStyles();

    return (
        <Box borderRadius="borderRadius" className={classes.box}>
            <div className={classes.content}>
                <img className={classes.memberImage} src={member.image} alt={"Member"} />
                <div className={classes.details}>
                    <Typography variant="h2">{member.name}</Typography>
                    <div style={{ marginTop: 10 }}>
                        <Typography>Phone: {member.phone}</Typography>
                        <Typography>Email: {member.email}</Typography>
                        <Typography>IG: {member.ig}</Typography>
                    </div>
                </div>
            </div>
        </Box>
    )
}

const useStyles = makeStyles(theme => ({
    memberImage: {
        height: "5em",
        width: "5em",
        backgroundSize: "cover",
        borderRadius: "50%",
    },
    box: {
        position: 'relative',
        backgroundColor: "white",
        color: "black",
        padding: '1em',
        fontSize: '22px',
        width: '100%',
    },
    content: {
        display: 'flex',
        flexDirection: 'row'
    },
    details: {
        marginLeft: "1em",
        textAlign: "Left",
        flex: 3
    }
}));