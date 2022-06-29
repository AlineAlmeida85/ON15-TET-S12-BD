const mongoose = require("mongoose")

const MusicSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    artista: String,
    compositor: [String],
    titulo: String,
    categoria: [String],
    anoDeLancamento: Date,
    clipe: Boolean,
    imagens: [String],
    curtidas: Number
}, { timestamps : true })

const Model = mongoose.model("musica", MusicSchema)

module.exports = Model

