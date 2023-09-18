const express = require("express");
const router = express.Router();
const { getItems } = require("../controllers/tracks");

router.get("/", getItems);

module.exports = router;