// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const ingredients = await tables.ingredient.readAll();

    // Respond with the items in JSON format
    res.json(ingredients);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Browse Ingredient of a recipe
const browseSpec = async (req, res, next) => {
try {
  const ingredientsOfRecipe = await tables.ingredient.readSpec(req.params.id);
  
  if (ingredientsOfRecipe == null) {
    res.sendStatus(404);
  } else {
    res.json(ingredientsOfRecipe);
  }
} catch (err) {
  next(err);
}
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const ingredient = await tables.ingredient.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (ingredient == null) {
      res.sendStatus(404);
    } else {
      res.json(ingredient);
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
  // Extract the item data from the request body
  const ingredient = req.body;

  try {
    // Insert the item into the database
    const insertId = await tables.ingredient.create(ingredient);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  browseSpec,
  read,
  // edit,
  add,
  // destroy,
};
