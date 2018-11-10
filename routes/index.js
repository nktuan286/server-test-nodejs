var express = require('express');
var router = express.Router();

const authController = require('../controllers/authController');
const weatherController = require('../controllers/weatherController');

/* GET home page. */
router.post('/fetch-weather', weatherController.getWeather);
router.post('/do-login', authController.postLogin);

module.exports = router;
