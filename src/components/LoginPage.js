import React, { useState } from 'react';
import { Container, Grid, Button, TextField, makeStyles } from '@material-ui/core';
import { COLORS } from '../constants/Colors';
import SignupPage from './SignupPage';

const useStyles = makeStyles(theme => ({
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
}));

export default function LoginPage(props) {
	const classes = useStyles();
	const [isRegistered, setRegister] = useState(null);

	const handleLoginSubmit = (e) => {
		e.preventDefault();
		return props.handleLoginSubmit();
	}
	return (
		<Container className={classes.root}>
			{isRegistered === false ?
				<SignupPage handleClickBack={() => setRegister(null)} handleSignupSubmit={() => setRegister(true)} /> : // display signup page if  user is not registered
				<form>
					<Grid container spacing={3}>
						<Grid className={classes.title} item xs={12}>
							<h3>Login</h3>
						</Grid>
						<Grid item xs={12}>
							<Grid container spacing={2}>
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
										className={classes.txtInput}
										name="password"
										size="small"
										type="password"
										variant="outlined"
										placeholder="Password"
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
							<Button color="secondary" onClick={() => { setRegister(false) }}>
								Sign up here!
							</Button>
						</Grid>
					</Grid>
				</form>
			}
		</Container>
	);
}
