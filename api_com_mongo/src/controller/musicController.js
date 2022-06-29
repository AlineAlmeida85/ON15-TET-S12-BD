const MusicModel = require("../models/musicModel")

const createMusic = async (request, response) => {
    try {
        const newMusic = new MusicModel(request.body)
        const savedMusic = await newMusic.save()

        response.status(201).json(savedMusic)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

module.exports = {
    createMusic
}