const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

const port = 3000

app.listen(port, () => {
    console.log('Servidor Online en: http://localhost:'+ port)
})