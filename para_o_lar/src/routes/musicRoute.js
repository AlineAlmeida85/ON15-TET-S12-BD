const controller = require("../controllers/musicController")

    const express = require("express")

    const router = express.Router()

    router.post("/artist/create", controller.createArtist)
    router.get("/artists", controller.findAllArtists)
    router.get("/music/:id", controller.findById)

    module.exports = router