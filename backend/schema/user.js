const mongoose = require("mongoose");
const user = new mongoose.Schema({
    username: String,
    password: String,
    phone: String,
    taste: String,
    email: String,
    joinedGroups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Group' }]
});

module.exports = mongoose.model('User', user);