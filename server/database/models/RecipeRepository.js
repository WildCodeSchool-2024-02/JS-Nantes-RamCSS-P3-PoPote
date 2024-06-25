const AbstractRepository = require("./AbstractRepository");

class RecipeRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "Recipe" as configuration
    super({ table: "recipe" });
  }

  // The C of CRUD - Create operation

  async create(recipe) {
    // Execute the SQL INSERT query to add a new Recipe to the "Recipe" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, url_photo) values (?, ?)`,
      [recipe.title, recipe.url_photo]
    );

    // Return the ID of the newly inserted Recipe
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific Recipe by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the Recipe
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all Recipes from the "Recipe" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of Recipes
    return rows;
  }

  async readAddIngredient() {
    const [rows] = await this.database.query(`SELECT r.title, r.user_id, i.name, i.nutritional_value, ai.quantity, ai.unit
FROM recipe r
JOIN add_ingredient ai ON r.id = ai.recipe_id
JOIN ingredient i ON i.id = ai.ingredient_id;  `);
    return rows;
  }
  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing Recipe

  // async update(Recipe) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an Recipe by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = RecipeRepository;
