const fetch = require('node-fetch');

module.exports = {
    fetchWeather: function (url) {
        const promise = new Promise(function (resolve, reject) {
            fetch(url)
                .then((response) => {
                    resolve(response.json());
                })
                .catch((err) => {
                    reject(err);
                });
        });
        return promise;
    }
}