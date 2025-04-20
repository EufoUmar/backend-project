const express = require("express")
const path = require("path");
const  {connectToMongoDB}  = require("./connect");
const UserRouter = require("./routes/user")
const StaticRouter = require("./routes/staticRoute")

const app = express();
const PORT = 3000;

// veiws setup

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// database connection

// middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/register", UserRouter)
app.use("/login", StaticRouter)

connectToMongoDB("mongodb://localhost:27017/login-page").then( () => {
    console.log("mongoDB is connected")
}).catch((err) => {
    console.log("mongoDB connection error", err)
})

app.get("/login", (req, res) => {
    res.render("login.ejs");
})
app.get("/register", (req, res) => {
    res.render("register.ejs");
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})