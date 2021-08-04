import React, { useEffect, useState } from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';
import "bootstrap/dist/css/bootstrap.min.css";
import { COLORS } from '../constants/Colors';
import ClearIcon from '@material-ui/icons/Clear';
import Popup from 'reactjs-popup';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from './ContactList';
import moment from 'moment';
import AddToCalendarHOC from 'react-add-to-calendar-hoc';
import Dropdown from 'react-bootstrap/Dropdown'

export default function GroupCard(group) {
    const classes = useStyles();
    const date = new Date(group.date);
    const duration = moment.duration(date - date).asHours();
    const loggedIn = useSelector(state => state.user.loggedIn);
    const userData = useSelector(state => state.user.user);
    const dispatch = useDispatch();

    const MappedDropdown = (args) => (
        <div>
            {args.children.map((link, i) => (
                <Dropdown.Item key={i}>{link}</Dropdown.Item>
            ))}
        </div>
    )
    const AddToCalendarDropdown = AddToCalendarHOC(Button, MappedDropdown);

    const months = ["JAN", 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

    return (
        <div>
            <Card className={classes.card}>
                <CardMedia component='img' src={group.img} style={{
                    height: '15em'
                }} />
                <div>
                    <AddToCalendarDropdown className={classes.addCalendarButton} event={{
                        location: group.address,
                        duration: duration,
                        startDatetime: moment(date).format('YYYYMMDDTHHmmssZ'),
                        endDatetime: moment(date).add(1, 'hours').format('YYYYMMDDTHHmmssZ'),
                        title: group.title
                    }} />
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
                                <Button onClick={() => group.handleClickLeave(group.id)} style={{
                                    color: COLORS.highlight,
                                    textAlign: 'center'
                                }}>
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
        height: '26em',
        width: '22em'
    },
    addCalendarButton: {
        backgroundColor: COLORS.white,
        borderRadius: 4,
        padding: '3px 5px',
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