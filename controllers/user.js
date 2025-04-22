const User = require("../models/user");
const { setUser } = require("../services/auth")


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
    return res.redirect("login");
}

// login Checking Controller function

async function loggedInUser(req, res) {
    const { email, password } = req.body;
    console.log(email, password);

    if (!email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }
     const user = await User.findOne({ email, password })
    console.log(user);

     if (!user) {
        return res.status(400).json({ error: "Invalid email or password" });
}

     const toten = setUser(user)
     res.cookie("uid", toten)
     return res.render("home")
}



module.exports = {registerationUser, loggedInUser}