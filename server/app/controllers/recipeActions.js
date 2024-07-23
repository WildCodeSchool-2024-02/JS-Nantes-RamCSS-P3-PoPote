// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const recipes = await tables.recipe.readAll();

    // Respond with the items in JSON format
    res.json(recipes);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const recipe = await tables.recipe.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (recipe == null) {
      res.sendStatus(404);
    } else {
      res.json(recipe);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  const recipe = req.body;

  try {
    const insertId = await tables.recipe.create(recipe);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// read recipes specific to user
const readByUser = async (req, res, next) => {
  try {
    // Fetch specific recipes from the database based on the provided userID
    const recipes = await tables.recipe.readByUser(req.params.userId);
    
    // If no recipes are found for the user, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the recipes in JSON format
    if (recipes.length === 0) {
      res.sendStatus(404);
    } else {
      res.json(recipes);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res) => {
  try  {
    const {id} = req.body;
const deleteRecipe = await tables.recipe.delete(id);

    if(deleteRecipe === 1 ){ res.sendStatus(200);
    } else {
      res.sendStatus(404).send("La suppression de la recette n'a pas abouti");
    }

    } catch (err) {
      console.error(err);
    }
  };

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  readByUser,
  // edit,
  add,
  destroy,
};
