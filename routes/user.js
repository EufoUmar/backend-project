const express = require("express")
const { registerationUser } = require("../controllers/user")

const router = express.Router()

router.post("/", registerationUser)

module.exports = router