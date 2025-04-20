const express = require("express")
const { loggedInUser } = require("../controllers/user")

const router = express.Router();

router.post("/", loggedInUser)

module.exports = router;