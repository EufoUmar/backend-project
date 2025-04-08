const express = require("express")
const path = require("path");
const  {connectToMongoDB}  = require("./connect");
const UserRouter = require("./routes/user")

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

connectToMongoDB("mongodb://127.0.0.1:27017/login-page").then( () => {
    console.log("mongoDB is connected");
});

app.get("/login", (req, res) => {
    res.render("login.ejs");
})
app.get("/register", (req, res) => {
    res.render("register.ejs");
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})