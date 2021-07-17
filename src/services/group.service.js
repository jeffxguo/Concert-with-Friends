export const groupService = {
    getMembers
};

function getMembers(eventId) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`http://localhost:3001/users/group/${eventId}`, requestOptions).then(response => response.json())
        .then((data) => {
            if (data.statusCode === (404 || 500)) {
                return Promise.reject(data.message);
            }
            return Promise.resolve(data);
        });
}
