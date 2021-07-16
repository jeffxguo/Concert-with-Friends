const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const bcrypt = require("bcrypt");
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

const passportLocal = require("passport-local").Strategy;


const User = require("./schema/user");
const Group = require("./schema/group");

var usersRouter = require('./routes/users');
var groupsRouter = require('./routes/groups');

mongoose.connect(
    "mongodb+srv://admin:HsCPYvslxRPm2nyP@cluster0.fhpsk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log("Mongoose Is Connected");
    }
);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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
                    joinedGroups: user.joinedGroups
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
                joinedGroups: [],
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


app.listen(3001, () => {
    console.log("Server Has Started");
});