import React from 'react';
import { Container, Grid, Button, TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
      padding: theme.spacing(3),
    },
  }));

export default function LoginPage(props) {
    const classes = useStyles();
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        props.handleLoginSubmit();
    }
	return (
		<Container className={classes.container}>
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
						<Button color="secondary" fullWidth type="button" variant="contained" onClick={handleLoginSubmit}>
							Log in
						</Button>
					</Grid>
				</Grid>
			</form>
		</Container>
	);
}
