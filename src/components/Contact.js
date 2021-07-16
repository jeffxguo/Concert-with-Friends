import React from 'react';
import { Box, Typography, Icon, IconButton, Container, Grid, Button, makeStyles } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { COLORS } from '../constants/Colors';

export default function Contact(member) {
    const classes = useStyles();

    return (
        <Box borderRadius="borderRadius" className={classes.box}>
            <div className={classes.content}>
                <img className={classes.memberImage} src={member.image} alt={"Member"} />
                <div className={classes.details}>
                    <Typography variant="h2">{member.name}</Typography>
                    <div className={classes.contactInfo} style={{ marginTop: 10 }}>
                        <Typography style={{ marginRight: 10 }}>Phone {member.phone}</Typography>
                        <Typography>Email {member.email}</Typography>
                    </div>
                    <div className={classes.socials}> 
                    {/* These don't do anything */}
                        <IconButton style={{
                            marginRight: 10,
                            color: COLORS.black,
                        }}>
                            <InstagramIcon />
                        </IconButton>
                        <IconButton style={{
                            marginRight: 10,
                            color: COLORS.black,
                        }}>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton style={{
                            marginRight: 10,
                            color: COLORS.black,
                        }}>
                            <WhatsAppIcon />
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
        backgroundColor: COLORS.lightGrey,
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