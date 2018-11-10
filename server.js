const express = require('express');
const compression = require('compression');
const router = require('./routes/index');
const bodyParser = require('body-parser');
const constant = require('./common/constants');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();

app.use(compression());

app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// initialize cookie-parser to allow us access the cookies stored in the browser. 
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

app.use('/api', router);

app.listen(constant.PORT, constant.IP, function () {
    console.log("App now running on port: " + constant.PORT + " and IP: " + constant.IP);
});
