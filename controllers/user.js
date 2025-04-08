const User = require("../models/user");


async function registerationUser(req, res) {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    
    if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }
    await User.create({
        name,
        email,
        password,
    })
    return res.render("/login");
}

// login Checking Controller function

module.exports = {registerationUser}