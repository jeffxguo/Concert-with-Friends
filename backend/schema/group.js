const mongoose = require('mongoose');
var User = require('./user');

const groupSchema = new mongoose.Schema({
    eventid: String,
    usersJoined: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Group', groupSchema);