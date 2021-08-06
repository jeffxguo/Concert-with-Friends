import { setWithExpiry } from '../helpers/session-expire';
import { groupService } from './group.service';
import emailjs from 'emailjs-com';

export const userService = {
    login,
    logout,
    register,
    addGroup,
    updateProfile,
    uploadAvatar,
    getGroups,
    getUser,
    deleteGroup
};

const TIME_OUT = 1000 * 60 * 60; // 1 hour

emailjs.init("user_wBQ98U5brugzhi3uFKp08");

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            setWithExpiry('user', JSON.stringify(user), TIME_OUT);
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

    return fetch(`/register`, requestOptions).then(handleResponse);
}

function addGroup(userId, eventId, name, email, phone, event) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ eventId: eventId })
    };

    const data = []
    groupService.getMembers(eventId).then(memberIds => {
        const array = [...memberIds]
        array.forEach(id => {
            userService.getUser(id).then(user => {
                data.push(user)
            })
        })
    })

    data.forEach(user => {
        var templateParams = {
            email: user.email,
            event: event,
            name: name,
            contact1: email,
            contact2: phone
        };

        emailjs.send('service_spamsea', 'template_bxy4k56', templateParams)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
    })

    var templateParams = {
        email: 'concertwithfriends@gmail.com',
        event: event,
        name: name,
        contact1: email,
        contact2: phone
    };

    emailjs.send('service_spamsea', 'template_bxy4k56', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });


    return fetch(`/users/${userId}`, requestOptions).then(response => response.json())
        .then((data) => {
            if (data.statusCode === (404 || 500 || 204)) {
                return Promise.reject(data.message);
            }
            setWithExpiry('user', JSON.stringify(data), TIME_OUT);
            return Promise.resolve(data);
        });
}

function updateProfile(userId, newProfileData) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProfileData)
    };

    return fetch(`/users/${userId}/edit-profile`, requestOptions).then(response => response.json())
        .then((data) => {
            if (data.statusCode === (404 || 500)) {
                return Promise.reject(data.message);
            }
            console.log(data);
            setWithExpiry('user', JSON.stringify(data), TIME_OUT);
            return Promise.resolve(data);
        });
}

function uploadAvatar(userId, newAvatarFile) {
    const formData = new FormData();
    formData.append('avatar', newAvatarFile);
    const requestOptions = {
        method: 'PUT',
        body: formData
    };

    return fetch(`/users/${userId}/avatar`, requestOptions).then(response => response.json())
        .then((user) => {
            if (user.statusCode === (404 || 500)) {
                return Promise.reject(user.message);
            }
            console.log(user);
            setWithExpiry('user', JSON.stringify(user), TIME_OUT);
            return Promise.resolve(user);
        });
}

function getGroups(userId) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`/groups/${userId}`, requestOptions).then(handleResponse);
}

function getUser(userId) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`/users/${userId}`, requestOptions).then(handleResponse);
}

function deleteGroup(userId, eventId) {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ eventId: eventId })
    };

    return fetch(`/users/${userId}`, requestOptions).then(response => response.json())
        .then((data) => {
            if (data.statusCode === (404 || 500)) {
                return Promise.reject(data.message);
            }
            setWithExpiry('user', JSON.stringify(data), TIME_OUT);
            return Promise.resolve(data);
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (response.status === 401 || data.statusCode === (204 || 500)) {
            // auto logout if 401 response returned from api
            logout();

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}