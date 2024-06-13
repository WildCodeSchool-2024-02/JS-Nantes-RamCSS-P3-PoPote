const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import category-related actions
const { browse, read, add } = require("../../../controllers/categoryActions");

// Route to get a list of categorys
router.get("/", browse);

// Route to get a specific category by ID
router.get("/:id", read);

// Route to add a new category
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
