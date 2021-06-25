import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Button, makeStyles } from '@material-ui/core';

export default function ProfileGroups(group) {
    const classes = useStyles();

    return (
        <Box borderRadius="borderRadius" className={classes.box}>
            <div className={classes.content}>
                <img className={classes.groupImage} src={group.image}
                style={{ top: '2em', height: "6em" }} alt={"Group"}/>
                <div className={classes.details}>
                    <Typography variant="h2">{group.name}</Typography>
                    <Typography>{group.details}</Typography>
                </div>
            </div>
        </Box>
    )
}

const useStyles = makeStyles(theme => ({
    groupImage: {
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
        marginTop: 10,
        flex: 3
    }
}));