const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const recipeRouter = require("./recipe/router");

router.use("/recipe", recipeRouter);
router.post("/recipe", recipeRouter);

const toolRouter = require("./tool/router");

router.use("/tool", toolRouter);

const ingredientRouter = require("./ingredient/router");

router.use("/ingredient", ingredientRouter);

const commentRouter = require("./comment/router");

router.use("/comment", commentRouter);

const categoryRouter = require("./category/router");

router.use("/category", categoryRouter);

const userRouter = require("./user/router");
const { login } = require("../../controllers/authActions");
const {
  credentialsValidation,
} = require("../../services/credentialValidation");

router.use("/user", userRouter);
router.post("/login", credentialsValidation, login);

const uploadRouter = require("./uploads/router");

router.use("/upload", uploadRouter);

/* ************************************************************************* */

module.exports = router;
