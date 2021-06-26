import React, { useState } from 'react';
import { IconButton, Grid, Button, TextField, MenuItem, makeStyles } from '@material-ui/core';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';

const useStyles = makeStyles({
    title: {
        "fontFamily": `"Open Sans", "Helvetica", "Arial", sans-serif`
    },
    txtInput: {
        backgroundColor: "white",
        borderRadius: 4,
        border: "none",
    }
});

const musicTypes = [
    {
        label: "Hip-hop",
        value: "Hip-hop"
    },
    {
        label: "Pop",
        value: "Pop"
    },
    {
        label: "R&B",
        value: "R&B"
    },
    {
        label: "Rock'n'roll",
        value: "Rock'n'roll"
    },
    {
        label: "None of the above",
        value: ""
    }
]

export default function SignupPage(props) {
    const classes = useStyles();
    const [musicTaste, setMusicTaste] = useState("");
    const handleSignupSubmit = (e) => {
        e.preventDefault();
        props.handleSignupSubmit();
    }
    return (
        <form>
            <Grid container spacing={3}>
                <Grid className={classes.title} item xs={12}>
                    <h3>Sign Up</h3>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name="username"
                                size="small"
                                placeholder="Username"
                                variant="outlined"
                                className={classes.txtInput}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name="email"
                                size="small"
                                placeholder="Email"
                                variant="outlined"
                                className={classes.txtInput}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name="phone"
                                size="small"
                                placeholder="Phone"
                                variant="outlined"
                                className={classes.txtInput}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name="password"
                                size="small"
                                placeholder="Password"
                                variant="outlined"
                                className={classes.txtInput}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                select
                                name="select"
                                size="small"
                                placeholder="Select"
                                variant="outlined"
                                className={classes.txtInput}
                                value={musicTaste}
                                onChange={(e) => setMusicTaste(e.target.value)}
                            >
                                {musicTypes.map((option, idx) => (
                                    <MenuItem key={idx} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Button fullWidth color="primary" type="button" variant="contained" onClick={handleSignupSubmit}>
                        Register
                    </Button>
                </Grid>
                <IconButton color="secondary" onClick={props.handleClickBack}>
                    <ArrowBackRoundedIcon />
                </IconButton>
            </Grid>
        </form>
    );
}
