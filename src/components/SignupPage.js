import React, { useState, useEffect } from 'react';
import { ActionCreators } from '../actions/user.actions';
import { useDispatch, useSelector } from 'react-redux';
import { Container, IconButton, Grid, Button, TextField, MenuItem, makeStyles } from '@material-ui/core';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import { COLORS } from '../constants/Colors';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
		width: "30em",
		padding: 50,
		marginTop: 200,
		borderRadius: 10,
		backgroundColor: COLORS.darkBlue,
		color: "white"
	},
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
    const [userProfile, setUserProfile] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
        taste: ""
    })
    const registering = useSelector(state => state.signup.registering);
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    // reset login status
    useEffect(() => {
        dispatch(ActionCreators.logout());
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserProfile(profile => ({ ...profile, [name]: value }));
    }

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        if (userProfile.username && userProfile.email && userProfile.phone && userProfile.password) {
            dispatch(ActionCreators.register(userProfile));
        }
    }
    return (
        <Container className={classes.root}>
            {alert.message &&
				<div className={`alert ${alert.type}`}>{alert.message}</div>
			}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                select
                                name="taste"
                                size="small"
                                placeholder="Select"
                                variant="outlined"
                                className={classes.txtInput}
                                onChange={handleChange}
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
                    {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Register
                    </Button>
                </Grid>
                <Link to="/login">
                    <IconButton color="secondary">
                        <ArrowBackRoundedIcon />
                    </IconButton>
                </Link>
            </Grid>
        </form>
        </Container>
    );
}

