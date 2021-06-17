import { AppBar, Button, Menu, MenuItem, Toolbar, Typography, IconButton, makeStyles } from '@material-ui/core';
import NavigationRoundedIcon from '@material-ui/icons/NavigationRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { useState } from 'react';
import { COLORS } from '../constants/Colors';

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

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleLogout = () => {
    props.handleLogout();
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "white", boxShadow: "none", padding: "0 10%", color: COLORS.black }}>
        <Toolbar>
          <Button edge="start" className={classes.menuButton} color={COLORS.highlight} aria-label="navigation">
            <NavigationRoundedIcon />
            <a className={classes.location} style={{ color: COLORS.black }}>Vancouver</a>
          </Button>
          <Typography variant="h1" className={classes.title}>
            Concert w/ Friends
          </Typography>
          <Button color="inherit" onClick={props.handleClickGroups}>Groups</Button>
          <Button color="inherit" onClick={props.handleClickMaps}>Map</Button>
          {
            props.loggedIn ?
              <div>
                <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickMenu}>
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
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
              : <Button color="inherit" onClick={props.handleClickLogin}>Login</Button>
          }

        </Toolbar>
      </AppBar>
    </div>
  );
}

