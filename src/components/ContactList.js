import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { COLORS } from '../constants/Colors';
import Contact from './Contact';

export default function ContactList(group) {
    const classes = useStyles();
    return (
        <Box borderRadius="borderRadius" className={classes.box} style={{ display: "block", textAlign: "left", backgroundColor: COLORS.white}}>
            <div className={classes.text}>
                <h2>{group.name}</h2>
                <Typography variant="h1" style={{ color: COLORS.grey }}>Contact List</Typography>
            </div>
            <Box className={classes.contactBox} borderRadius="borderRadius" justify="center">
                {(group !== null) && group.members.map((member, i) => {
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