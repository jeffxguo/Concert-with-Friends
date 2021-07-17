import React, { useState } from 'react';
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
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import { Avatar } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { COLORS } from '../constants/Colors';

import { userActions } from '../actions/user.actions';

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
  },
  txtInput: {
		backgroundColor: "white",
		borderRadius: 4,
		border: "none",
	},
  editBtn: {
    backgroundColor: COLORS.grey,
    color: "white"
  }
}));

export default function Profile(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [editing, setEditing] = useState(null);

  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.user.data);
  const profileData = {
    "username": [<PersonRoundedIcon />, profile.username || ''],
    "email": [<MailRoundedIcon />, profile.email || ''],
    "phone": [<PhoneRoundedIcon />, profile.phone || ''],
    "taste": [<MusicNoteRoundedIcon />, profile.taste || '']
  }
  const [newInputs, setNewInputs] = useState({
    username: profile.username || '',
    email: profile.email || '',
    phone: profile.phone || '',
    taste: profile.taste || ''
  })

  const handleSaveProfile = () => {
    if (profile._id && newInputs.email && newInputs.phone && newInputs.taste) {
      dispatch(userActions.updateProfile(profile._id, newInputs));
      setEditing(false);
    }
  }

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewInputs(inputs => ({ ...inputs, [name]: value }));
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
          {Object.entries(profileData).map(([key, text], index) => (
            <ListItem button key={text} alignItems="flex-start">
              <ListItemIcon>
                {text[0]}
              </ListItemIcon>
              <ListItemText primary={editing ? <TextField
										className={classes.txtInput}
										name={key}
										size="small"
										variant="outlined"
										defaultValue={text[1]}
										onChange={handleChange}
									/>: text[1]} />
            </ListItem>
          ))}
        </List>
        {
          editing ? 
          <div>
          <Button onClick={handleSaveProfile} variant="contained" color="primary">
          Save
          </Button>
          <Button onClick={() => setEditing(false)}>
          Cancel
          </Button>
          </div> :
          <div>
            <Button onClick={() => setEditing(true)} variant="contained" className={classes.editBtn}>
            Edit
            </Button>
          </div>
        }
      </Drawer>
    </div>
  );
}
