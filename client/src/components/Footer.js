import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { COLORS } from '../constants/Colors';

import logo from '../images/logo.png'

export default function Footer(props) {
    const classes = useStyles();

    return (
        <Box className={classes.root} style={{ backgroundColor: COLORS.lightGrey }}>
            <div className={classes.content}>
                <div className={classes.links}>
                    <img style={{ marginLeft: 40, width: "16em" }} src={logo} alt={"logo"} />
                </div>
                <div className={classes.links}>
                    <Typography style={{ fontSize: '1em', fontWeight: 'bold', color: COLORS.highlight, marginBottom: ".5em" }}> Sitemap </Typography>
                    <div>
                        <Link to="/" style={{ color: COLORS.black, textDecorationColor: COLORS.black }}>
                            Home
                        </Link>
                    </div>
                    <div>
                        <Link to="/home" style={{ color: COLORS.black, textDecorationColor: COLORS.black }}>
                            Groups
                        </Link>
                    </div>
                    <div>
                        <Link to="/map" style={{ color: COLORS.black, textDecorationColor: COLORS.black }}>
                            Map
                        </Link>
                    </div>
                </div>
                <div className={classes.links}>
                    <Typography style={{ fontSize: '1em', fontWeight: 'bold', color: COLORS.highlight, marginBottom: ".5em" }}> Repo </Typography>
                    <a href="https://github.com/jeffxguo/Concert-with-Friends" rel="noreferrer" target="_blank" style={{ color: COLORS.black, textDecorationColor: COLORS.black }}>
                        Github
                    </a>
                </div>
            </div>
            <div className={classes.copyright}>
                <Typography style={{ color: COLORS.black, fontSize: '1em' }}>Copyright © 2021 Concert with Friends</Typography>
                <Typography style={{ color: COLORS.black, fontSize: '1em', marginTop: '.5em' }}>concertwithfriends@gmail.com</Typography>
            </div>
        </Box>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '15em',
        'flex-direction': 'column',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: '1em',
        justifyContent: "center"
    },
    links: {
        'flex-direction': 'column',
        margin: '1em 4em',
        textAlign: "left"
    },
    copyright: {
        marginTop: '2em',
        paddingBottom: '4em',
        backgroundColor: COLORS.lightGrey

    }
}))