const AbstractRepository = require("./AbstractRepository");

class AddIngredientRepository extends AbstractRepository {
  constructor() {
    super({ table: "add_ingredient" });
  }

async createAddIng(ingredientData) {
    const [result] = await this.database.query(
      `insert into add_ingredient (recipe_id, ingredient_id, quantity, unit) values (?, ?, ?, ?)`,
      [
        ingredientData.recipe_id,
        ingredientData.ingredient_id,
        ingredientData.quantity,
        ingredientData.unit,
      ]
    );
    return result;
  };


}
  module.exports = AddIngredientRepository;