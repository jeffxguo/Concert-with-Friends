import { actionTypes } from '../constants/ActionTypes';
import { getWithExpiry } from '../helpers/session-expire';

let user = getWithExpiry('user');
const initialState = user ? { loggedIn: true, user } : {};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_REQUEST:
            return {
            loggingIn: true,
            user: action.user
            }
        case actionTypes.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case actionTypes.LOGIN_FAILURE:
            return {};
        case actionTypes.LOGOUT:
            return {};
        case actionTypes.ADDGROUP_SUCCESS:
            return {
                groupAdded: true,
                loggedIn: true,
                user: action.user
            };
        case actionTypes.ADDGROUP_FAILURE:
            return {};
        case actionTypes.UPDATEPROFILE_SUCCESS:
            return {
                profileUpdated: true,
                loggedIn: true,
                user: action.user
            };
        case actionTypes.UPDATEPROFILE_FAILURE:
            return {};
        case actionTypes.UPLOADAVATAR_SUCCESS:
            return {
                avatarUploaded: true,
                loggedIn: true,
                user: action.user
            };
        case actionTypes.UPLOADAVATAR_FAILURE:
            return {};
        case actionTypes.DELETEGROUP_SUCCESS:
            return {
                groupLeft: true,
                loggedIn: true,
                user: action.user
            };
        case actionTypes.DELETEGROUP_FAILURE:
            return {};
        default:
            return state
    }
}

export default userReducer;