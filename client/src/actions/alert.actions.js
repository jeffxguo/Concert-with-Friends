import { alertTypes } from '../constants/AlertTypes';

export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: alertTypes.SUCCESS, message };
}

function error(message) {
    return { type: alertTypes.ERROR, message };
}

function clear() {
    return { type: alertTypes.CLEAR };
}