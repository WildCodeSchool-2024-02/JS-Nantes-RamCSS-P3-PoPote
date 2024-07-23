const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import recipe-related actions
const { browse, read, readByUser, add, destroy } = require("../../../controllers/recipeActions");

// Route to get a list of recipes
router.get("/", browse);

// Route to get a specific recipe by ID
router.get("/:id", read);

// Route to get user recipes in profile
router.get("/user/:userId", readByUser);

// Route to add a new recipe
router.post("/", add);

// Route to delete a specific recipe by ID
router.delete("/id", destroy)

/* ************************************************************************* */

module.exports = router;
