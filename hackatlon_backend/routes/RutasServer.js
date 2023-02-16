const express = require("express")
const router = express.Router()
const Server = require("../Controllers/server")

router.get("/Api-Read",Server.Read)

module.exports = router