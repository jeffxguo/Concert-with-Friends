import { authHeader } from '../helpers/auth-header';

export const userService = {
    login,
    logout,
    register,
    addGroup,
    updateProfile,
    getGroups,
    deleteGroup
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`http://localhost:3001/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            console.log(user);
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`http://localhost:3001/register`, requestOptions).then(handleResponse);
}

function addGroup(userId, eventId) {
    const requestOptions = {
        method: 'PUT',
        headers: { /*...authHeader(),*/ 'Content-Type': 'application/json' },
        body: JSON.stringify({eventId: eventId})
    };

    return fetch(`http://localhost:3001/users/${userId}`, requestOptions).then(response => response.json())
    .then((data) => {
        if (data.statusCode === (404 || 500 || 204)) {
            return Promise.reject(data.message);
        }
        localStorage.setItem('user', JSON.stringify(data));
        return Promise.resolve(data);
    });
}

function updateProfile(userId, newProfileData) {
    const requestOptions = {
        method: 'PUT',
        headers: { /*...authHeader(),*/ 'Content-Type': 'application/json' },
        body: JSON.stringify(newProfileData)
    };

    return fetch(`http://localhost:3001/users/${userId}/edit-profile`, requestOptions).then(response => response.json())
    .then((data) => {
        if (data.statusCode === (404 || 500)) {
            return Promise.reject(data.message);
        }
        console.log(data);
        localStorage.setItem('user', JSON.stringify(data));
        return Promise.resolve(data);
    });
}

function getGroups(userId) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`http://localhost:3001/groups/${userId}`, requestOptions).then(handleResponse);
}

function deleteGroup(userId, eventId) {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({eventId: eventId})
    };

    return fetch(`http://localhost:3001/users/${userId}`, requestOptions).then(response => response.json())
    .then((data) => {
        if (data.statusCode === (404 || 500)) {
            return Promise.reject(data.message);
        }
        localStorage.setItem('user', JSON.stringify(data));
        return Promise.resolve(data);
    });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (response.status === 401 || data.statusCode === (204 || 500)) {
            // auto logout if 401 response returned from api
            logout();
            // location.reload(true);
        
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
        }
        return data;
    });
}