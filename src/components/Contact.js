import React from 'react';
import { Box, Typography, Icon, IconButton, Container, Grid, Button, makeStyles } from '@material-ui/core';
import { COLORS } from '../constants/Colors';
import fb from '../images/fb.png'
import ig from '../images/ig.png'

export default function Contact(member) {
    const classes = useStyles();

    return (
        <Box borderRadius="borderRadius" className={classes.box}>
            <div className={classes.content}>
                <img className={classes.memberImage} src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} alt={"Member"} />
                <div className={classes.details}>
                    <Typography style={{ fontSize: "1.2em", fontWeight: 700 }}>{member.name}</Typography>
                    <div className={classes.contactInfo} style={{ marginTop: 10 }}>
                        <Typography style={{ marginRight: 40 }}><span style={{ color: COLORS.highlight, fontWeight: 700 }}>Phone </span>{member.phone}</Typography>
                        <Typography><span style={{ color: COLORS.highlight, fontWeight: 700 }}>Email </span> {member.email}</Typography>
                    </div>
                    <div className={classes.socials}>
                        <IconButton style={{
                            marginRight: 10,
                            color: COLORS.black,
                        }}>
                            <a href={`https://www.instagram.com/${member.instagram}`} target="blank">
                                <img className={classes.iconImage} src={ig} alt={"instagram"} />
                            </a>
                        </IconButton>
                        <IconButton style={{
                            marginRight: 10,
                            color: COLORS.black,
                        }}>
                            <a href={`https://www.facebook.com/${member.facebook}`} target="blank">
                                <img className={classes.iconImage} src={fb} alt={"facebook"} />
                            </a>
                        </IconButton>
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
        backgroundColor: COLORS.bgGrey,
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
    },
    contactInfo: {
        display: 'flex',
        flexDirection: 'row',
    },
    socials: {
        display: 'flex',
        flexDirection: 'row'
    }
}));