const mongoose = require("mongoose")

const StorageScheme = new mongoose.Schema(
    // Estructura de Datos ->
    {
        url: {
            type: String
        },
        filename: {
            type: Number
        }
    },
    //Propiedades del Esquema
    // timestamps es para crear CreatedAt, UpdatedAt
    {
        timestamps: true,
        versionKey: false,
    }
)

module.exports = mongoose.model("storages", StorageScheme)