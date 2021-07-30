import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { COLORS } from '../constants/Colors';

export default function ProfileGroups(group) {
    const classes = useStyles();

    return (
        <Box borderRadius="borderRadius" className={classes.box}>
            <div className={classes.content}>
                <img className={classes.groupImage} src={group.image}
                    alt={"Group"} />
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
        width: "12em",
        height: "8em",
        backgroundSize: "cover"
    },
    box: {
        backgroundColor: "white",
        color: COLORS.black,
        padding: '1em',
        fontSize: '22px',
        height: '10em',
        width: "100%"
    },
    content: {
        display: 'flex',
        flexDirection: 'row'
    },
    details: {
        textAlign: "left",
        marginLeft: "1em",
        flex: 3
    }
}));