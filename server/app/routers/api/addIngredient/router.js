const express = require("express");

const router = express.Router();


const { addIng } = require("../../../controllers/addIngActions");

router.post("/", addIng)


module.exports = router;
