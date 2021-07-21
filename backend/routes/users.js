const express = require("express");
const router = express.Router();

const User = require("../schema/user");
const Group = require("../schema/group");

/**
 * PUT : Add a group to user with a specific userId
*/
router.put("/:userId", (req, res) => {
    let foundUser;
    let foundGroup;
    User.findOne({ _id: req.params.userId }, async (err, doc) => {
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
                    User.findOneAndUpdate({ _id: req.params.userId }, { $push: { joinedGroups: newGroup.eventid } },
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
                    User.findOneAndUpdate({ _id: req.params.userId }, { $push: { joinedGroups: foundGroup.eventid } },
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

/**
 * DELETE: Delete a group from a user with a specific userId
 */
router.delete("/:userId", (req, res) => {
    let foundUser;
    let foundGroup;
    User.findOne({ _id: req.params.userId }, async (err, doc) => {
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
                        { _id: req.params.userId },
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

/**
 * GET: Get all users of a group with a specific event id
 */
router.get("/group/:eventid", (req, res) => {
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


/**
 * GET: Get user by id
 */
router.get("/:id", (req, res) => {
    User.findOne({ _id: req.params.id }, async (err, doc) => {
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
                name: doc.username,
                phone: doc.phone,
                email: doc.email,
                instagram: doc.instagram,
                facebook: doc.facebook
            });
        }
    })
});

router.put("/:userId/edit-profile", (req, res) => {
    User.findOneAndUpdate({ _id: req.params.userId }, { "$set": { "username": req.body.username, "email": req.body.email, "phone": req.body.phone, "facebook": req.body.facebook, "instagram": req.body.instagram, "taste": req.body.taste } },
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
});

module.exports = router;