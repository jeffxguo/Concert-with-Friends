const express = require("express");
const router = express.Router();

const User = require("../schema/user");
const Group = require("../schema/group");

// Join group
router.put("/:username", (req, res) => {
    var foundUser;
    var foundGroup;
    User.findOne({ username: req.params.username }, async (err, doc) => {
        if (err) {
            res.send({
                statusCode: 500,
                message: "Internal Error"
            });
        } else if (!doc) {
            res.send({
                statusCode: 404,
                message: "User Not Found"
            });
        } else if (doc.joinedGroups.indexOf(req.body.eventId) !== -1) {
            res.send({
                statusCode: 204,
                message: "Already Joined Group"
            });
        } else {
            foundUser = doc;
            Group.findOneAndUpdate({ eventid: req.body.eventId }, { $push: { usersJoined: foundUser._id } }, async (err, doc) => {
                if (err) {
                    res.send({
                        statusCode: 500,
                        message: "Internal Error"
                    });
                } else if (!doc) {
                    const newGroup = new Group({
                        eventid: req.body.eventId,
                        usersJoined: [foundUser._id]
                    });
                    await newGroup.save();
                    User.findOneAndUpdate({ username: req.params.username }, { $push: { joinedGroups: newGroup.eventid } },
                        { new: true }, async (err, doc) => {
                        if (err) {
                            res.send({
                                statusCode: 500,
                                message: "Internal Error"
                            });
                        } else if (!doc) {
                            res.send({
                                statusCode: 404,
                                message: "User Not Found"
                            });
                        } else {
                            res.send({
                                statusCode: 200,
                                data: doc
                            })
                        }
                    });
                } else {
                    foundGroup = doc;
                    User.findOneAndUpdate({ username: req.params.username }, { $push: { joinedGroups: foundGroup.eventid } },
                        { new: true }, async (err, doc) => {
                        if (err) {
                            res.send({
                                statusCode: 500,
                                message: "Internal Error"
                            });
                        } else if (!doc) {
                            res.send({
                                statusCode: 404,
                                message: "User Not Found"
                            });
                        } else {
                            res.send({
                                statusCode: 200,
                                data: doc
                            });
                        }
                    });
                }
            });
        }
    });
});

// Leave group
router.delete("/:username", (req, res) => {
    var foundUser;
    var foundGroup;
    User.findOne({ username: req.params.username }, async (err, doc) => {
        if (err) {
            res.send({
                statusCode: 500,
                message: "Internal Error"
            });
        } else if (!doc) {
            res.send({
                statusCode: 404,
                message: "User Not Found"
            });
        } else {
            foundUser = doc;
            Group.findOneAndUpdate({ eventid: req.body.eventId }, { $pull: { usersJoined: foundUser._id } }, async (err, doc) => {
                if (err) {
                    res.send({
                        statusCode: 500,
                        message: "Internal Error"
                    });
                } else if (!doc) {
                    res.send({
                        statusCode: 404,
                        message: "Group Not Found"
                    });
                } else {
                    foundGroup = doc;
                    User.findOneAndUpdate(
                        { username: req.params.username }, 
                        { $pull: { joinedGroups: foundGroup.eventid } },
                        { new: true }, async (err, doc) => {
                        if (err) {
                            res.send({
                                statusCode: 500,
                                message: "Internal Error"
                            });
                        } else if (!doc) {
                            res.send({
                                statusCode: 404,
                                message: "User Not Found"
                            });
                        } else {
                            res.send({
                                statusCode: 200,
                                data: doc
                            });
                        }
                    });
                }
            });
        }
    });
});

// Get users in group with eventid
router.get("/:eventid", (req, res) => {
    Group.findOne({ eventid: req.params.eventid }, async (err, doc) => {
        if (err) {
            res.send({
                statusCode: 500,
                message: "Internal Error"
            });
        } else if (!doc) {
            res.send({
                statusCode: 404,
                message: "Group Not Found"
            });
        } else {
            res.send(doc.usersJoined);
        }
    })
});


module.exports = router;