const User = require("../models/user");

async function registerationUser(req, res) {
    const { name, email, password } = req.body;
    if(!req.body) return res.status(400).json({ error: "form data is required"})
    await User.create({
        name,
        email,
        password,
    })
    res.redirect("/login");
}

module.exports = {registerationUser}