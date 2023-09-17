const mongoose = require("mongoose")

const UserScheme = new mongoose.Schema(
    // Estructura de Datos ->
    {
        name: {
            type: String
        },
        age: {
            type: Number
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String
        },
        // En role: ["Unicos valores","Permitidos"]
        role: {
            type:["user", "admin"],
            default: "user",
        }
    },
    //Propiedades del Esquema
    // timestamps es para crear CreatedAt, UpdatedAt
    {
        timestamps: true,
        versionKey: false,
    }
)

module.exports = mongoose.model("users", UserScheme)