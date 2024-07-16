const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import recipe-related actions
const { browse, read, add } = require("../../../controllers/recipeActions");

// Route to get a list of recipes
router.get("/", browse);

// Route to get a specific recipe by ID
router.get("/:id", read);

// Route to add a new recipe
router.post("/", add);


/* ************************************************************************* */

module.exports = router;
