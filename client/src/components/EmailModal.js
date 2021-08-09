import { Box, makeStyles, Typography } from '@material-ui/core';
import { COLORS } from '../constants/Colors';
import React from 'react';
import emailjs from 'emailjs-com';
import Button from "@material-ui/core/Button";
import { useSelector } from 'react-redux';

export default function EmailModal(group) {
    const classes = useStyles();
    const userData = useSelector(state => state.user.user);
    const date = new Date(group.date);
    const months = ["JAN", 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_hix3o8o','template_p0j9wjm',e.target,'user_a564XBSBeNeDkGfhl5ozI').then (res => {
            console.log(res);
       }).catch(err => console.log(err));
    }
    return (
        <Box borderRadius="borderRadius" className={classes.box} style={{ display: "block", textAlign: "left", backgroundColor: COLORS.white }}>
            <form className={classes.form} onSubmit={sendEmail} >
                <div className="form-group">
                <label>Name</label>
                <input type="text" name = "name" className="form-control" placeholder="Enter name"></input>
                </div>
                <div className="form-group">
                <label>Email address</label>
                <input type="email" name="friend_email" className="form-control"  placeholder="Enter email"></input>
                </div>
                <div className="form-group">
                <label>Message</label>
                <textarea className="form-control" name ="message" rows="4"></textarea>
                </div>
                <div className={classes.sendDiv}>
                    <Button type={'submit'} className={classes.sendBtn}>
                        {"Send"}
                    </Button>  
                </div>
                <input type="hidden" name="group_title" value={group.title}/>
                <input type="hidden" name="group_address" value={group.address}/>
                <input type="hidden" name="group_url" value={group.url}/>
                <input type="hidden" name="group_month" value= {months[date.getMonth()]}/>
                <input type="hidden" name="group_date" value= {date.getDate()}/>
                <input type="hidden" name="group_year" value= {date.getFullYear()}/>
                <input type="hidden" name="user_name" value= {userData.data.username}/>
                <input type="hidden" name="ticket_link" value= {userData.data.username}/>
            </form>
        </Box>
    );
}

const useStyles = makeStyles(theme => ({
    box: {
        width: "30em",
        height: "auto",
    },
    form: {
        padding: "2rem"
    },
    sendDiv: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    sendBtn: {
        color: COLORS.white,
        backgroundColor: COLORS.highlight,
        textAlign: 'center',
        '&:hover': {
            backgroundColor: COLORS.highlight
        }
    }
})); 