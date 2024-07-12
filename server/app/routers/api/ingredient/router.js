const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import ingredient-related actions
const { browse, browseSpec, read, add } = require("../../../controllers/ingredientActions");

// Route to get a list of ingredients
router.get("/", browse);

// Route to get a list of recipe's ingredients
router.get("/IofR/:id", browseSpec);

// Route to get a specific ingredient by ID
router.get("/:id", read);

// Route to add a new ingredient by an admin
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
