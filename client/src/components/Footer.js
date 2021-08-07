import React, { useState, useEffect } from 'react';
import { AppBar, Button, Box, Menu, MenuItem, Toolbar, Typography, IconButton, makeStyles } from '@material-ui/core';
import NavigationRoundedIcon from '@material-ui/icons/NavigationRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { Link, NavLink } from 'react-router-dom';
import { COLORS } from '../constants/Colors';

import logo from '../images/logo.png'

export default function Footer(props) {
    const classes = useStyles();


    return (
        <Box className={classes.root} style={{ backgroundColor: COLORS.black }}>
            <div className={classes.content}>
                <div className={classes.links}>
                    <Typography style={{ fontSize: '18px', fontWeight: 'bold', color: COLORS.white }}> Navigation </Typography>
                    <div>
                        <Link to="/" style={{ color: COLORS.white, textDecorationColor: COLORS.white }}>
                            Home
                        </Link>
                    </div>
                    <div>
                        <Link to="/home" style={{ color: COLORS.white, textDecorationColor: COLORS.white }}>
                            Groups
                        </Link>
                    </div>
                    <div>
                        <Link to="/map" style={{ color: COLORS.white, textDecorationColor: COLORS.white }}>
                            Map
                        </Link>
                    </div>
                </div>
                
                <div className={classes.links}>
                    <Typography style={{ fontSize: '18px', fontWeight: 'bold', color: COLORS.white }}> Resources </Typography>
                    <a href="https://github.com/jeffxguo/Concert-with-Friends" rel="noreferrer" target="_blank" style={{ color: COLORS.white, textDecorationColor: COLORS.white }}>
                        Github
                    </a>
                </div>
            </div>
            <div className={classes.copyright}>
                <Typography style={{ color: COLORS.white, fontSize: '14px'}}>Copyright © 2021 Concert with Friends</Typography>
                <Typography style={{ color: COLORS.white, fontSize: '12px'}}>conertwithfriends@gmail.com</Typography>
            </div>
        </Box>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '15em',
        'flex-direction': 'column'
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: '1em',
        'justify-content': 'center',
    },
    links: {
        'flex-direction': 'column',
        margin: '15px',
    },
    copyright: {
        marginTop: '1em'
    }
}))