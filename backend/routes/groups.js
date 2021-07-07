const express = require("express");
const router = express.Router();

const User = require("../schema/user");
const Group = require("../schema/group");

// Get groups that user with username is in
router.get("/:username", (req, res) => {
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
            res.send(doc.joinedGroups);
        }
    })
});

module.exports = router;