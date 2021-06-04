import { AppBar, Button, Menu, MenuItem, Toolbar, Typography, IconButton, makeStyles } from '@material-ui/core';
import NavigationRoundedIcon from '@material-ui/icons/NavigationRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	},
    location: {
        fontSize: 20
    }
}));

export default function Navbar(props) {
	const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    }
	return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="navigation">
                        <NavigationRoundedIcon />
                        <a className={classes.location}>Vancouver</a>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Concert w/ Friends
                    </Typography>
                    <Button color="inherit">Groups</Button>
                    {
                        props.loggedIn ? 
                        <div>
                        <IconButton color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            <AccountCircleRoundedIcon />
                        </IconButton>
                        <Menu
                          id="simple-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={handleClose}>Profile</MenuItem>
                          <MenuItem onClick={handleClose}>My groups</MenuItem>
                          <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                      </div>
                      : <Button color="inherit" onClick={props.handleClick}>Login</Button>
                    }
                    
                </Toolbar>
            </AppBar>
        </div>
	);
}
