import React, { useEffect, useState } from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Box from '@material-ui/core/Box';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import { makeStyles } from '@material-ui/core/styles';
import "bootstrap/dist/css/bootstrap.min.css";
import { COLORS } from '../constants/Colors';
import { Icon } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import Popup from 'reactjs-popup';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from './ContactList';
import { userActions } from '../actions/user.actions';
import { alertActions } from '../actions/alert.actions';
import moment from 'moment';
import AddToCalendarHOC from 'react-add-to-calendar-hoc';

export default function GroupCard(group) {
    const classes = useStyles();
    const date = new Date(group.date);
    const loggedIn = useSelector(state => state.user.loggedIn);
    const userData = useSelector(state => state.user.user);
    const dispatch = useDispatch();

    const handleClickLeave = () => {
        if (userData && userData.data && userData.data._id) {
            dispatch(userActions.deleteGroup(userData.data._id, group.id));
        }
    }

    const months = ["JAN", 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

    return (
        <div>
            <Card className={classes.card}>
                <CardMedia component='img' src={group.img} style={{
                    height: '15em'
                }} />
                <div className={classes.addCalendarButton}>
                    <div title="Add to Calendar" className="addeventatc" data-dropdown-y="down">
                        Add to Calendar
                        <span className="start">{moment(date).format('YYYY-MM-DDTHH:mm:ss')}</span>
                        <span className="title">{group.title}</span>
                        <span className="location">{group.address}</span>
                    </div>
                </div>
                <CardContent className={classes.cardContent} >
                    <div className={classes.date}>
                        <Typography variant="h2" style={{ marginLeft: -10, color: COLORS.highlight, textAlign: "center" }}>{months[date.getMonth()]}</Typography>
                        <Typography style={{ marginLeft: -10, fontSize: 46, fontWeight: "700", color: COLORS.black, textAlign: "center" }}>{date.getDate()}</Typography>
                        <Typography style={{ marginLeft: -10, fontSize: 20, fontWeight: "700", color: COLORS.grey, textAlign: "center" }}>({date.getFullYear()})</Typography>
                    </div>
                    <div className={classes.details}>
                        <Typography variant="h2">{group.title}</Typography>
                        <Typography style={{ marginTop: 10 }}>{group.address}</Typography>

                        <div className="row no-gutters" style={{ marginTop: 10 }}>
                            <div className={classes.leaveButton}>
                                <Button style={{
                                    color: COLORS.highlight,
                                    textAlign: 'center'
                                }} onClick={handleClickLeave}>
                                    {"Leave Group"}
                                </Button>
                            </div>
                            <div className={classes.membersButton}>
                                <Popup trigger={<Button style={{
                                    color: COLORS.white,
                                    overlay: {
                                        background: "#FFFF00"
                                    }
                                }}>
                                    {"View Members"}
                                </Button>} modal>
                                    {close => (
                                        <span className={classes.modal} style={{
                                        }}>
                                            <IconButton className={classes.close} onClick={close} style={{
                                                position: 'absolute',
                                                right: '20px',
                                                top: '20px',
                                            }}>
                                                <ClearIcon />
                                            </IconButton>
                                            <ContactList name={group.title} id={group.id} />
                                        </span>
                                    )}
                                </Popup>
                            </div>
                        </div>

                    </div>

                </CardContent>

            </Card>
        </div>
    )
}

const useStyles = makeStyles({
    leaveButton: {
        padding: '0px 10px',
        borderStyle: "solid",
        borderColor: COLORS.highlight,
        borderWidth: 1,
        borderRadius: 4,
        position: 'absolute',
        bottom: '15px',
        left: '30px',
        width: '150px'
    },
    membersButton: {
        padding: '0px 4px',
        backgroundColor: COLORS.highlight,
        borderStyle: "solid",
        borderColor: COLORS.highlight,
        borderWidth: 1,
        borderRadius: 4,
        position: 'absolute',
        bottom: '15px',
        right: '30px',
        width: '150px'
    },
    card: {
        position: 'relative',
        height: '30em',
        width: '24em'
    },
    addCalendarButton: {
        position: 'absolute',
        top: '20px',
        left: '15px',
        'z-index': '1'
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
    },
    modal: {
    }
});