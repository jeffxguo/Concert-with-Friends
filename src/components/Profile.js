import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import MailRoundedIcon from '@material-ui/icons/MailRounded';
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  avatarImage: {
    margin: "5% 0 5% 50%",
    width: "50px",
    height: "50px"
  }
}));

export default function Profile(props) {
  const classes = useStyles();
  const theme = useTheme();
  // TODO: Mocked profileData which will be replaced with actual data
  const profile = useSelector(state => state.user.user.data);
  const profileData = {
    "username": [<PersonRoundedIcon />, profile.username || ''],
    "email": [<MailRoundedIcon />, profile.email || ''],
    "phone": [<PhoneRoundedIcon />, profile.phone || ''],
    "taste": [<MusicNoteRoundedIcon />, profile.taste || '']
  }

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={props.isOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={props.handleCloseProfile}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <Avatar className={classes.avatarImage} alt={profile?.username} src='../images/avatar.png'></Avatar>
        <Divider />
        <List>
          {Object.values(profileData).map((text, index) => (
            <ListItem button key={text} alignItems="flex-start">
              <ListItemIcon>
                {text[0]}
              </ListItemIcon>
              <ListItemText primary={text[1]} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
