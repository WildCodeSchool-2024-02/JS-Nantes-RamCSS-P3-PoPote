// Import the repository modules responsible for handling data operations on the tables
const UserRepository = require("./models/UserRepository");
const ToolRepository = require("./models/ToolRepository");
const RecipeRepository = require("./models/RecipeRepository");
const IngredientRepository = require("./models/IngredientRepository");
const CategoryRepository = require("./models/CategoryRepository");
const CommentRepository = require("./models/CommentRepository");
const AddIngredientRepository = require("./models/AddIngredientRepository");
const AddToolRepository = require("./models/AddToolRepository");

// Create an empty object to hold data repositories for different tables
const tables = {
  user: new UserRepository(),
  tool: new ToolRepository(),
  recipe: new RecipeRepository(),
  ingredient: new IngredientRepository(),
  category: new CategoryRepository(),
  comment: new CommentRepository(),
  add_ingredient : new AddIngredientRepository(),
  add_tool : new AddToolRepository(),
};

/* ************************************************************************* */
// Register data repositories for tables
/* ************************************************************************* */

// Register each repository as data access point for its table

// tables.user = new UserRepository(); --- THEO

/* ************************************************************************* */

// Use a Proxy to customize error messages when trying to access a non-existing table

// Export the Proxy instance with custom error handling
module.exports = new Proxy(tables, {
  get(obj, prop) {
    // Check if the property (table) exists in the tables object
    if (prop in obj) return obj[prop];

    // If the property (table) does not exist, throw a ReferenceError with a custom error message
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
