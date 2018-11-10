const constant = require('../common/constants');
const weatherService = require('../services/weatherService');

/**
 * @author      :   tuannk
 * @return      :   null
 * @access      :   public
 * @function    :   getWeather
 */
exports.getWeather = (req, res) => {
    const city = req.body.city;
    const temp = req.body.temp; // 16.047079,108.206230
    const api = constant.API_KEY;
    //const url = `https://samples.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
    const url = `https://api.darksky.net/forecast/${api}/${temp}`;

    weatherService.fetchWeather(url).then((result) => {
        res.jsonp({
            status: true,
            data: result
        });
    }).catch((err) => {
        res.jsonp({
            status: false,
            error: err
        });
    });
};
