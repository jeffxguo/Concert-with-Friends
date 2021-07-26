import React, { useEffect } from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import GroupIcon from '@material-ui/icons/Group';
import { makeStyles } from '@material-ui/core/styles';
import "bootstrap/dist/css/bootstrap.min.css";
import { COLORS } from '../constants/Colors';
import { Icon } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../actions/user.actions';
import { alertActions } from '../actions/alert.actions';

export default function EventCard(event) {
    const classes = useStyles();
    const date = new Date(event.date);
    const loggedIn = useSelector(state => state.user.loggedIn);
    const userData = useSelector(state => state.user.user);
    const dispatch = useDispatch();

    const handleClickJoin = () => {
        if (loggedIn && userData && userData.data && userData.data._id) {
            dispatch(userActions.addGroup(userData.data._id, event.id, userData.data.username, userData.data.email, userData.data.phone));
        } else {
            dispatch(alertActions.error("You need to login first"));
        }
    }

    const handleClickLeave = () => {
        if (userData && userData.data && userData.data._id) {
            dispatch(userActions.deleteGroup(userData.data._id, event.id));
        }
    }

    const months = ["JAN", 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

    return (
        <div>
            <Card className={classes.card}>
                <CardMedia component='img' src={event.img} style={{
                    height: '15em'
                }} />
                <div key={event.joined} className={classes.addButton}>
                    {event.joined && loggedIn ?
                        <Button variant="contained" color="secondary" onClick={handleClickLeave}>
                            Leave
                        </Button>
                        : <IconButton style={{
                            backgroundColor: 'white',
                            color: COLORS.black,
                        }} onClick={handleClickJoin}>
                            <AddIcon />
                        </IconButton>
                    }
                </div>
                <div className={classes.priceTag}>
                    <Box borderRadius="borderRadius" className={classes.box}>
                        ${event.price.toFixed(2)}
                    </Box>
                </div>
                <CardContent className={classes.cardContent} >
                    <div className={classes.date}>
                        <Typography variant="h2" style={{ marginLeft: -10, color: COLORS.highlight, textAlign: "center" }}>{months[date.getMonth()]}</Typography>
                        <Typography style={{ marginLeft: -10, fontSize: 46, fontWeight: "700", color: COLORS.black, textAlign: "center" }}>{date.getDate()}</Typography>
                        <Typography style={{ marginLeft: -10, fontSize: 20, fontWeight: "700", color: COLORS.grey, textAlign: "center" }}>({date.getFullYear()})</Typography>
                    </div>
                    <div className={classes.details}>
                        <Typography variant="h2">{event.title}</Typography>
                        <Typography style={{ marginTop: 10 }}>{event.address}</Typography>

                        <div className="row no-gutters" style={{ marginTop: 10 }}>
                            <div className={classes.tag}>
                                <Icon style={{
                                    color: COLORS.grey,
                                    marginRight: 10
                                }}>
                                    <GroupIcon style={{ height: 26 }} />
                                </Icon>
                                <span style={{ fontSize: 20, fontWeight: 600, color: COLORS.black }}>{event.memberNum ? `${event.memberNum} members` : 'No members yet'}</span>
                            </div>
                        </div>

                    </div>

                </CardContent>

            </Card>
        </div>
    )
}

const useStyles = makeStyles({
    tag: {
        marginRight: 10,
        padding: '0px 15px',
        borderStyle: "solid",
        borderColor: COLORS.grey,
        borderWidth: 1,
        borderRadius: 4
    },
    card: {
        position: 'relative',
        height: '30em',
        width: '24em'
    },
    addButton: {
        position: 'absolute',
        top: '20px',
        right: '15px',
    },
    priceTag: {
        position: 'absolute',
        top: '20px',
        left: '15px',
        fontWeight: "700"
    },
    box: {
        backgroundColor: COLORS.highlight,
        color: "#fff",
        padding: '5px 15px',
        fontSize: '22px',

    },
    cardContent: {
        paddingTop: '30px',
        display: "flex",
        flexDirection: "row"
    },
    date: {
        alignText: "center",
        flex: 1,
        display: "flex",
        flexDirection: "column"
    },
    details: {
        textAlign: "left",
        flex: 3
    }
});