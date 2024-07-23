const express = require("express");

const router = express.Router();

const { addTool } = require("../../../controllers/addToolActions");

router.post("/", addTool);

module.exports = router;
