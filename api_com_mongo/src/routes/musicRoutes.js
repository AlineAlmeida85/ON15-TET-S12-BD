const controller = require("../controller/musicController")

const express = require("express")

const router = express.Router()

router.post("/music/create", controller.createMusic)

module.exports = router