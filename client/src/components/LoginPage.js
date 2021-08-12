import React, { useState, useEffect } from 'react';
import { Container, Grid, Button, TextField, makeStyles } from '@material-ui/core';
import { COLORS } from '../constants/Colors';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../actions/user.actions';
import { alertActions } from '../actions/alert.actions';

const useStyles = makeStyles(theme => ({
	root: {
		[theme.breakpoints.down('sm')]: {
			width: "20%",
			height: "20%",
			padding: 30
		},
		[theme.breakpoints.down('md')]: {
			width: "30%",
			height: "30%",
			padding: 40
		},
		[theme.breakpoints.up('lg')]: {
			width: "40%",
			height: "40%",
			padding: 50
		},
		marginTop: "12%",
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

export default function LoginPage() {
	const classes = useStyles();
	const [credInputs, setCredInputs] = useState({
		username: '',
		password: ''
	})
	const { username, password } = credInputs;
	const alert = useSelector(state => state.alert);
	const loggingIn = useSelector(state => state.user.loggingIn);
	const dispatch = useDispatch();
	const location = useLocation();

	// reset login status
	useEffect(() => {
		dispatch(userActions.logout());
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setCredInputs(inputs => ({ ...inputs, [name]: value }));
	}

	const handleLoginSubmit = (e) => {
		e.preventDefault();
		if (username === "" || password === "") {
			dispatch(alertActions.error('Please fill out the blank entries'));
			setTimeout(() => {
			  dispatch(alertActions.clear());
			}, 3000);
			return;
		}
		if (username && password) {
			// get return url from location state or default to home page
			const { from } = location.state || { from: { pathname: "/" } };
			dispatch(userActions.login(username, password, from));
		}
		return;
	}
	return (
		<Container className={classes.root} style={{ marginBottom: "30vh" }}>
			{alert.message &&
				<div style={{ position: "fixed", zIndex: 100, width: "30vw", left: 0, textAlign: "center", bottom: 80, margin: "0 35vw 0 35vw" }} className={`alert ${alert.type}`}>{alert.message}</div>
			}
			{
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
										className={classes.txtInput}
										name="password"
										size="small"
										type="password"
										variant="outlined"
										placeholder="Password"
										onChange={handleChange}
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<Button color="primary" fullWidth type="button" variant="contained" onClick={handleLoginSubmit}>
								{loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
								<div style={{ color: "white" }}>
									Log in
								</div>
							</Button>
						</Grid>
						<Grid item xs={12} spacing={3}>
							<span>Don't have an account?</span>
							<Link to="/register">
								<Button color="secondary">
									Sign up here!
								</Button>
							</Link>
						</Grid>
					</Grid>
				</form>
			}
		</Container>
	);
}
