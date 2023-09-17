const express = require("express")
const router = express.Router();

router.get('/', (req, res) => {

    const data = ["hola", "efe"]

    res.send(data)
})


module.exports = router