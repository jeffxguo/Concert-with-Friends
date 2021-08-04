
import { actionTypes } from '../constants/ActionTypes';
import { userService } from '../services/user.service';
import { history } from '../helpers/history';
import { alertActions } from './alert.actions';

export const userActions = {
  register,

  // updateProfileImage: (image) => ({ type: actionTypes.UPDATE_PROFILE_PICTURE, payload: { image } }),

  // updateProfile: (user) => ({ type: actionTypes.UPDATE_USER, payload: { user } }),

  login,
  logout,
  getGroups,
  addGroup,
  updateProfile,
  deleteGroup
}

function register(user) {
  return dispatch => {
    dispatch(request(user));

    userService.register(user)
      .then(
        user => {
          dispatch(success());
          history.push('/login');
          dispatch(alertActions.success('Registration successful'));
          setTimeout(() => {
            dispatch(alertActions.clear());
          }, 3000);
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
          setTimeout(() => {
            dispatch(alertActions.clear());
          }, 3000);
        }
      );
  }

  function request(user) { return { type: actionTypes.REGISTER_REQUEST, user } }
  function success(user) { return { type: actionTypes.REGISTER_SUCCESS, user } }
  function failure(error) { return { type: actionTypes.REGISTER_FAILURE, error } }
}

function login(username, password, from) {
  return dispatch => {
    dispatch(request({ username }));

    userService.login(username, password)
      .then(
        user => {
          dispatch(success(user));
          history.push(from);
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
          setTimeout(() => {
            dispatch(alertActions.clear());
          }, 3000);
        }
      );
  };

  function request(user) { return { type: actionTypes.LOGIN_REQUEST, user } }
  function success(user) { return { type: actionTypes.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: actionTypes.LOGIN_FAILURE, error } }
}

function logout() {
  userService.logout();
  return { type: actionTypes.LOGOUT };
}

function addGroup(userId, eventId, _name, _email, _phone, _event) {
  return dispatch => {
    userService.addGroup(userId, eventId, _name, _email, _phone, _event)
      .then(
        user => {
          dispatch(success(user));
          dispatch(alertActions.success('Joined group successfully'));
          setTimeout(() => {
            dispatch(alertActions.clear());
          }, 3000);
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
          setTimeout(() => {
            dispatch(alertActions.clear());
          }, 3000);
        }
      );
  };

  function success(user) { return { type: actionTypes.ADDGROUP_SUCCESS, user } }
  function failure(error) { return { type: actionTypes.ADDGROUP_FAILURE, error } }
}

function updateProfile(userId, newProfileData) {
  return dispatch => {
    userService.updateProfile(userId, newProfileData)
      .then(
        user => {
          dispatch(success(user));
          dispatch(alertActions.success('Update profile successfully'));
          setTimeout(() => {
            dispatch(alertActions.clear());
          }, 3000);
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function success(user) { return { type: actionTypes.UPDATEPROFILE_SUCCESS, user } }
  function failure(error) { return { type: actionTypes.UPDATEPROFILE_FAILURE, error } }
}

function getGroups(userId) {
  return dispatch => {
    userService.getGroups(userId)
      .then(
        user => {
          dispatch(success(user));
        },
        error => {
          dispatch(failure(error.toString()));
        }
      );
  };

  function success(user) { return { type: actionTypes.ADDGROUP_SUCCESS, user } }
  function failure(error) { return { type: actionTypes.ADDGROUP_FAILURE, error } }
}

function deleteGroup(userId, groupId) {
  return dispatch => {
    userService.deleteGroup(userId, groupId)
      .then(
        user => {
          dispatch(success(user));
          dispatch(alertActions.success('Left group successfully'));
          setTimeout(() => {
            dispatch(alertActions.clear());
          }, 3000);
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
          setTimeout(() => {
            dispatch(alertActions.clear());
          }, 3000);
        }
      );
  };

  function success(user) { return { type: actionTypes.DELETEGROUP_SUCCESS, user } }
  function failure(error) { return { type: actionTypes.DELETEGROUP_FAILURE, error } }
}


