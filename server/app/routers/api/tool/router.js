const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import tool-related actions
const { browse, read, add } = require("../../../controllers/toolActions");

// Route to get a list of tools
router.get("/", browse);

// Route to get a specific tool by ID
router.get("/:id", read);

// Route to add a new tool
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
