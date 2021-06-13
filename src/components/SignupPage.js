import React from 'react';
import { IconButton, Grid, Button, TextField, makeStyles } from '@material-ui/core';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';

const useStyles = makeStyles({
    title: {
        "fontFamily": `"Open Sans", "Helvetica", "Arial", sans-serif`
    }
});

export default function SignupPage(props) {
    const classes = useStyles();
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
								<TextField fullWidth label="Username" name="username" size="small" variant="outlined" />
						</Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Email" name="email" size="small" variant="outlined" />
                        </Grid>
							<Grid item xs={12}>
								<TextField fullWidth label="Password" name="password" size="small" type="password" variant="outlined"/>
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
