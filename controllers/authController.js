const authService = require('../services/authService');

/**
 * @author      :   tuannk
 * @return      :   null
 * @access      :   public
 * @function    :   login
 */
exports.postLogin = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let data;

    authService.login(username, password).then((result) => {
        if(result === true) {
            data = {
                username: username,
                password: password
            }
            //req.session.user = data;
            res.jsonp({
                status: true,
                data: data
            });
        }
    }).catch((result) => {
        if(result === false) {
            res.jsonp({
                status: false,
                data: null
            });
        }
    });
};
