import { AppBar, Button, Menu, MenuItem, Toolbar, Typography, IconButton, makeStyles } from '@material-ui/core';
import NavigationRoundedIcon from '@material-ui/icons/NavigationRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { COLORS } from '../constants/Colors';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { userActions }  from '../actions/user.actions';
import Geocoder from 'react-native-geocoding';
 

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
  },
  nav: {
    color: COLORS.black,
    margin: ".5em 1em",
    fontSize: "1.2em",
  }
}));

export default function Navbar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const loggedIn = useSelector(state => state.user.loggedIn);
  const dispatch = useDispatch();

  const [currentLoc, setCurrentLoc] = React.useState({
    lat: 49.2780527602363,
    lng: -123.10832917554698
  });
  const[currentCity,setCurrentCity]= useState([])

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentLoc({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }


useEffect (() => {
  Geocoder.init("AIzaSyDaB9iZHEtafiTwgos1qZF0S6iKuW4UpIo");

Geocoder.from(currentLoc)
.then(json => {
//var addressComponent = json.results[0].address_components[3].long_name;
  setCurrentCity(json.results[0].address_components[3].long_name)
})
.catch(error => console.warn(error));

}, []) 

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleLogout = () => {
    setAnchorEl(null);
    return dispatch(userActions.logout());
  }

  const handleOpenProfile = () => {
    if (loggedIn) {
      props.handleOpenProfile();
    }
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "white", boxShadow: "none", padding: "0 10%", color: COLORS.black }}>
        <Toolbar>
          <Button edge="start" className={classes.menuButton} color={COLORS.highlight} aria-label="navigation">
            <NavigationRoundedIcon />
            <a className={classes.location} style={{ color: COLORS.black }}>{currentCity}</a>
          </Button>
          <Typography variant="h1" className={classes.title}>
            Concert w/ Friends
          </Typography>
          <Link color="inherit" to="/" className={classes.nav}>
            Groups
          </Link>
          <Link color="inherit" to="/map" className={classes.nav}>
            Map
          </Link>
          {
            loggedIn ?
              <div>
                <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickMenu}>
                  <AccountCircleRoundedIcon style={{ height: 40, width: 40 }} />
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleOpenProfile}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/mygroups">
                      My Groups
                    </Link>
                  </MenuItem>
                  <MenuItem >
                    <Link to="/" onClick={handleLogout}>
                      Logout
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
              :
              <Link to="/login" className={classes.nav}>
                Login
              </Link>

          }

        </Toolbar>
      </AppBar>
    </div>
  );
}
