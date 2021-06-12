import React from 'react';
import { Container, Grid, Button, TextField, makeStyles } from '@material-ui/core';
import { COLORS } from '../constants/Colors';

const useStyles = makeStyles({
    root: {
	  width: "50%",
      padding: 50,
	  marginTop: 150,
	  border: `0.5px solid ${COLORS.darkBlue}`,
	  borderRadius: 10,
	  boxShadow: `1px 1px 3px 3px ${COLORS.darkBlue}`
    }
});

export default function LoginPage(props) {
    const classes = useStyles();
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        props.handleLoginSubmit();
    }
	return (
		<Container className={classes.root}>
			<form>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField fullWidth label="Email" name="email" size="small" variant="outlined" />
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									label="Password"
									name="password"
									size="small"
									type="password"
									variant="outlined"
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Button color="primary" fullWidth type="button" variant="contained" onClick={handleLoginSubmit}>
							Log in
						</Button>
					</Grid>
					<Grid item xs={12} spacing={3}>
						<span>Don't have an account?</span>
						<Button color="secondary">
							Sign in here!
						</Button>
					</Grid>
				</Grid>
			</form>
		</Container>
	);
}
