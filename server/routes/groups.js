const express = require("express");
const router = express.Router();

const User = require("../schema/user");
const Group = require("../schema/group");

/**
 * GET: Get all groups that a user with a specific username has joined
 */
router.get("/:userId", (req, res) => {
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
            res.send(doc.joinedGroups);
        }
    })
});

module.exports = router;