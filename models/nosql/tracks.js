const mongoose = require("mongoose")

const TracksScheme = new mongoose.Schema(
    // Estructura de Datos ->
    {
        name: {
            type: String
        },
        album: {
            type: String
        },
        cover: {
            type: String,
            validate: {
                validator: (req) => {
                    return true;
                },
                message: "ERROR_URL",
            }
        },
        artist: {
            name: {
                type: String
            },
            nickname: {
                type: String
            },
            nationality: {
                type: String
            }
        },
        duration: {
            start: {
                type: Number
            },
            end: {
                type: Number
            }
        },
        mediaID: {
            type: mongoose.Types.ObjectId
        }
    },
    //Propiedades del Esquema
    // timestamps es para crear CreatedAt, UpdatedAt
    {
        timestamps: true,
        versionKey: false,
    }
)

module.exports = mongoose.model("tracks", TracksScheme)