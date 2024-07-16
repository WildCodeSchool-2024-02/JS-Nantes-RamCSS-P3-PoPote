const tables = require("../../database/tables");

// Create an row in add_ingredient and link ingredient and recipe
const addTool = async (req, res, next) => {
    const { recipeId, toolArray } = req.body;
       
    try {
      // Utilisation de map pour itérer sur ingredientArray et créer des entrées pour chaque ingrédient
       await toolArray.map( (el) => {
        const toolData = {
          recipe_id: recipeId,
          tool_id: el.id,
          quantity: el.quantity,
        };

     return tables.add_tool.createAddTool(toolData);
    });
 
      res.status(201).json({ message: "Tools added successfully" });
    } catch (err) {
      next(err);
    }
  };

  module.exports = {
    addTool,
  };