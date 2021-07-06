const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    eventid: String,
    usersJoined: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Group', groupSchema);