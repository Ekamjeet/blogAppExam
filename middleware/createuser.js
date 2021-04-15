const User = require("../models/newUser");

module.exports = async (req, res, next) => {
    if (req.session.admin) {
        next();
    } else {
        res.redirect('/newUser/newUser');
    }
};