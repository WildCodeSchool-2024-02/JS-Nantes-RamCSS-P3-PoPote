const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import comment-related actions
const { browse, read, add } = require("../../../controllers/commentActions");

// Route to get a list of comments
router.get("/", browse);

// Route to get a specific comment by ID
router.get("/:id", read);

// Route to add a new comment
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
