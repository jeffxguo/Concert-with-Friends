const mongoose = require("mongoose");
const user = new mongoose.Schema({
    username: String,
    password: String,
    phone: String,
    taste: String,
    email: String,
    facebook: String,
    instagram: String,
    joinedGroups: [String],
    avatar: Buffer
});

module.exports = mongoose.model('User', user);