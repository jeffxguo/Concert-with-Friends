import { authHeader } from '../helpers/auth-header';

export const userService = {
    login,
    logout,
    register,
    addGroup
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

function addGroup(user, groupId) {
    const requestOptions = {
        method: 'PUT',
        headers: { /*...authHeader(),*/ 'Content-Type': 'application/json' },
        body: JSON.stringify({user, groupId: groupId})
    };

    if (user && user.data && user.data.username) {
        return fetch(`http://localhost:3001/users/${user.data.username}`, requestOptions).then(handleResponse);;
    } else {
        return Promise.reject("User data not found");
    }

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