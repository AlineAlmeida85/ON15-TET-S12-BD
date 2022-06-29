const MusicModel = require("../models/musicModel")

    const createArtist = async (request, response) => {
        const {
            artist, title, lounchYear, clipe, composer, category, images
        } = request.body
        if(!artist) {
            return response
                .status(400)
                .json({ message: "O artista não pode estar vazio!" })
        }

        try {
            const newMusic = new MusicModel({
                curtidas: 0,
                artista: artist,
                titulo: title,
                anoDeLancamento: lounchYear,
                clipe,
                compositor: composer,
                categoria: category,
                imagens: images
            })
            const savedMusic = await newMusic.save()

            response.status(201).json(savedMusic)
        } catch (error) {
            response.status(500).json({ message: error.message })
        }
}
const findAllArtists = async(request, response) => {
    try {
        const allArtists = await MusicModel.find()
        response.status(200).json(allArtists)
    } catch (error) {
        response.status(500).json(error)
    }
}

const findById = async (request, response) => {
    try {
        const findMusic = await MusicModel.findById(request.params.id)
        response.status(200).json(findMusic)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}
/*

um get de todos os artistas
um get por id
(opcional) um get por nome
*/
module.exports = {
    createArtist,
    findAllArtists,
    findById
}