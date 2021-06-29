import { actionTypes } from '../constants/ActionTypes';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

const authenticationReducer = (state = initialState, action) => {
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
        default:
            return state
    }
}

export default authenticationReducer;