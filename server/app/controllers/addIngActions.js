const tables = require("../../database/tables");

// Create an row in add_ingredient and link ingredient and recipe
const addIng = async (req, res, next) => {
    const { recipeId, ingredientArray } = req.body;
    console.info("ingredientArray", ingredientArray);
    console.info("coucou je suis req.body", req.body);
      
    try {
      // Utilisation de map pour itérer sur ingredientArray et créer des entrées pour chaque ingrédient
       await ingredientArray.map( (el) => {
        const ingredientData = {
          recipe_id: recipeId,
          ingredient_id: el.id,
          quantity: el.quantity,
          unit: el.unit,
        };

        console.info("ceci est ingredientdata", ingredientData);
     return tables.add_ingredient.createAddIng(ingredientData);
    });
 
      res.status(201).json({ message: "Ingredients added successfully" });
    } catch (err) {
      next(err);
    }
  };

  module.exports = {
    addIng,
  };