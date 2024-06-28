const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import user-related actions
const { browse, read, add } = require("../../../controllers/userActions");
const { credentialsValidation } = require("../../../services/credentialValidation");
const { hashPassword } = require("../../../controllers/authActions");

// Route to get a list of users
router.get("/", browse);

// Route to get a specific user by ID
router.get("/:id", read);

// Route to add a new user
router.post("/", credentialsValidation, hashPassword, add);

/* ************************************************************************* */

module.exports = router;
