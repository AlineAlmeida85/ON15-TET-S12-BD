const express = require("express")
    require("dotenv").config()
    const cors = require("cors")
    const db = require("./database/mongooseConnect")
    const musicRoute = require("./routes/musicRoute")

    const app = express()

    app.use(express.json())
    app.use(cors())

    db.connect()

    app.use(musicRoute)

    module.exports = app