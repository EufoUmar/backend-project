const {getUser} = require("../services/auth")

function restrictToLoggedInUserOnly(req, res, next) {
    const token = req.cookies.token;
    if (!token) return res.redirect("login")
       
    const user = getUser(token);
    if (!user) return res.redirect("login");
      
    next();
}

module.exports = restrictToLoggedInUserOnly;