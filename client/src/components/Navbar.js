import { AppBar, Button, Menu, MenuItem, Toolbar, Typography, IconButton, makeStyles } from '@material-ui/core';
import NavigationRoundedIcon from '@material-ui/icons/NavigationRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { COLORS } from '../constants/Colors';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { userActions } from '../actions/user.actions';
import Geocoder from 'react-native-geocoding';
import logo from '../images/logo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: COLORS.highlight
  },
  title: {
    flexGrow: 1
  },
  location: {
    fontSize: "1.1em"
  },
  nav: {
    color: COLORS.black,
    margin: "1em",
    fontSize: "1.1em",
  }
}));

export default function Navbar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const loggedIn = useSelector(state => state.user.loggedIn);
  const dispatch = useDispatch();

  const [currentLoc, setCurrentLoc] = React.useState({
    lat: 0,
    lng: 0
  });
  const [currentCity, setCurrentCity] = useState([])

  const getCurrentLongLat = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }


  const getCurrentCity = async () => {

    Geocoder.init("AIzaSyDaB9iZHEtafiTwgos1qZF0S6iKuW4UpIo");

    try {
      const position = await getCurrentLongLat();
      const currentLoc = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
      const json = await Geocoder.from(currentLoc)
      let currentCity = json.results[0].address_components[3].long_name
      setCurrentLoc(currentLoc);
      setCurrentCity(currentCity);
      return currentCity;

    } catch (error) {
      console.warn(error)
      return null;
    }

  }

  useEffect(() => {
    getCurrentCity();
  }, [])


  // useEffect (() => {
  //   Geocoder.init("AIzaSyDaB9iZHEtafiTwgos1qZF0S6iKuW4UpIo");

  // Geocoder.from(currentLoc)
  // .then(json => {
  // //var addressComponent = json.results[0].address_components[3].long_name;
  //   setCurrentCity(json.results[0].address_components[3].long_name)
  // })
  // .catch(error => console.warn(error));

  // }, []) 

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
          <Button edge="start" className={classes.menuButton} aria-label="navigation">
            <NavigationRoundedIcon />
            <a className={classes.location} style={{ color: COLORS.black }}>{currentCity}</a>
          </Button>
          <Link to="/" className={classes.title}>
            <Typography variant="h1" >
              <img style={{ marginLeft: 40, width: "9em" }} src={logo} alt={"logo"} />
            </Typography>
          </Link>
          <Link color="inherit" to="/home" className={classes.nav}>
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
