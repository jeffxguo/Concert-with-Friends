import { Box, makeStyles, Typography } from '@material-ui/core';
import { COLORS } from '../constants/Colors';
import React from 'react';
import emailjs from 'emailjs-com';
import Button from "@material-ui/core/Button";

export default function EmailModal() {
    const classes = useStyles();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_hix3o8o','template_p0j9wjm',e.target,'user_a564XBSBeNeDkGfhl5ozI').then (res => {
            console.log(res);
       }).catch(err => console.log(err));
    }
    return (
        <Box borderRadius="borderRadius" className={classes.box} style={{ display: "block", textAlign: "left", backgroundColor: COLORS.white }}>
            <form className={classes.form} onSubmit={sendEmail} >
                <div class="form-group">
                <label>Name</label>
                <input type="text" name = "name" class="form-control" placeholder="Enter name"></input>
                </div>
                <div class="form-group">
                <label>Email address</label>
                <input type="email" name="friend_email" class="form-control"  placeholder="Enter email"></input>
                </div>
                <div class="form-group">
                <label>Message</label>
                <textarea class="form-control" name ="message" rows="4"></textarea>
                </div>
                <div className={classes.sendDiv}>
                    <Button type={'submit'} className={classes.sendBtn}>
                        {"Send"}
                    </Button>  
                </div>
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
        textAlign: 'center'
    }
})); 