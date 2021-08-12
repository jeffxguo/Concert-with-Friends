import React from 'react';
import { Box, Typography, IconButton, makeStyles } from '@material-ui/core';
import { COLORS } from '../constants/Colors';
import Avatar from '@material-ui/core/Avatar';
import fb from '../images/fb.png'
import ig from '../images/ig.png'
import MusicNoteIcon from '@material-ui/icons/MusicNote';

export default function Contact(member) {
    const classes = useStyles();
    let initialAvatar;
    if (member.avatar && member.avatar.data) {
        initialAvatar = new Buffer.from(member.avatar.data).toString("ascii");
    }
    return (
        <Box borderRadius="borderRadius" className={classes.box}>
            <div className={classes.content}>
                <Avatar src={initialAvatar} alt={member?.username} className={classes.memberImage} />
                <div className={classes.details}>
                    <div className={classes.title}>
                        <div style={{ flex: 1 }}>
                            <Typography style={{ fontWeight: 700 }}><span style={{ fontSize: "1.2em" }}>{member.name} </span></Typography>
                        </div>
                        <div style={{ textAlign: "right", flex: 1 }}>
                            <Typography>{member.taste && member.taste !== "N/A" && member.taste !== "" &&
                                <>
                                    <span style={{ fontSize: ".9em", color: COLORS.grey, fontWeight: 600 }}>{member.taste}</span>
                                    <MusicNoteIcon style={{ color: COLORS.pink, marginLeft: '.5em' }} />
                                </>
                            }</Typography>
                        </div>
                    </div>
                    <div className={classes.contactInfo} style={{ marginTop: 10 }}>
                        <Typography style={{ marginRight: 40 }}><span style={{ color: COLORS.highlight, fontWeight: 700 }}>Phone </span>{member.phone}</Typography>
                        <Typography><span style={{ color: COLORS.highlight, fontWeight: 700 }}>Email </span> {member.email}</Typography>
                    </div>
                    <div className={classes.socials}>
                        {member.instagram && <IconButton style={{
                            marginRight: 10,
                            color: COLORS.black,
                        }}>
                            <a href={`https://www.instagram.com/${member.instagram}`} target="blank">
                                <img className={classes.iconImage} src={ig} alt={"instagram"} />
                            </a>
                        </IconButton>}
                        {member.facebook && <IconButton style={{
                            marginRight: 10,
                            color: COLORS.black,
                        }}>
                            <a href={`https://www.facebook.com/${member.facebook}`} target="blank">
                                <img className={classes.iconImage} src={fb} alt={"facebook"} />
                            </a>
                        </IconButton>}
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
        fontSize: '1.1em',
        width: '100%',
    },
    content: {
        display: 'flex',
        flexDirection: 'row'
    },
    title: {
        flexDirection: "row",
        display: "flex",
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
    },
    iconImage: {
        width: "1.2em"
    }
}));