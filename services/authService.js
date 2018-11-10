module.exports = {
    login: function (username, password) {
        const promise = new Promise(function (resolve, reject) {
            if (username === 'tuannk' && password === '123456') {
                resolve(true);
            } else {
                reject(false);
            }
        });
        return promise;
    }
}