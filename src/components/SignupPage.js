import React, { useState } from 'react';
import { IconButton, Grid, Button, TextField, MenuItem, makeStyles } from '@material-ui/core';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';

const useStyles = makeStyles({
    title: {
        "fontFamily": `"Open Sans", "Helvetica", "Arial", sans-serif`
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
                                    <TextField fullWidth label="Username" name="username" size="small" type="text" variant="outlined" required/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Email" name="email" size="small" type="email" variant="outlined" required/>
                            </Grid>
                            <Grid item xs={12}>
                                    <TextField fullWidth label="Mobile" name="mobile" size="small" type="tel" variant="outlined" required/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Password" name="password" size="small" type="password" variant="outlined" required/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    select
                                    label="Select"
                                    value={musicTaste}
                                    onChange={(e) => setMusicTaste(e.target.value)}
                                    helperText="Please select your music taste"
                                    variant="outlined"
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
