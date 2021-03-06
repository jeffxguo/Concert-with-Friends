const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const bcrypt = require("bcrypt");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const path = require('path');
const app = express();

const NODE_ENV = process.env.NODE_ENV || "development";
if (NODE_ENV === "development") {
  require('dotenv').config();
}
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;

const passportLocal = require("passport-local").Strategy;

const User = require("./schema/user");
const Group = require("./schema/group");

var usersRouter = require('./routes/users');
var groupsRouter = require('./routes/groups');

mongoose.connect(
    MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log("Mongoose Is Connected");
    }
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(
    session({
        secret: "secretcode",
        resave: true,
        saveUninitialized: true,
    })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passport.config")(passport);

app.use('/users', usersRouter);
app.use('/groups', groupsRouter);

app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) {
            res.send({
                statusCode: 500,
                message: "Internal Error"
            });
        } else if (!user) {
            res.send({
                statusCode: 204,
                message: "No User Exists"
            });
        } else {
            req.logIn(user, (err) => {
                if (err) throw err;
                const userInfo = {
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    taste: user.taste,
                    joinedGroups: user.joinedGroups,
                    avatar: user.avatar
                }
                res.send(
                    {
                        statusCode: 200,
                        data: userInfo
                    }
                );
            });
        }
    })(req, res, next);
});

app.post("/register", (req, res) => {
    User.findOne({ username: req.body.username }, async (err, doc) => {
        if (err) {
            res.send(res.send({
                statusCode: 500,
                message: "Internal Server Error",
            }));
        } else if (doc) {
            res.send(res.send({
                statusCode: 204,
                message: "User Already Exists"
            }));
        }
        if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);

            const newUser = new User({
                username: req.body.username,
                password: hashedPassword,
                email: req.body.email,
                phone: req.body.phone,
                taste: req.body.taste,
                facebook: req.body.facebook,
                instagram: req.body.instagram,
                joinedGroups: []
            });
            await newUser.save();
            res.send({
                statusCode: 200,
                message: "User Created"
            });
        }
    });
});

/*app.get("/user", (req, res) => {
    res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});*/

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.listen(PORT, () => {
    console.log("Server Has Started");
});