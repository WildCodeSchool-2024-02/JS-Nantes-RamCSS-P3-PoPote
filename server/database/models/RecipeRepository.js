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
      `insert into ${this.table} (title, url_photo, duration, people_number, step_description, user_id) values (?, ?, ?, ?, ?, ?)`,
      [
        recipe.title,
        recipe.url_photo,
        recipe.duration,
        recipe.people_number,
        recipe.step_description,
        recipe.user_id,
      ]
    );

    // Return the ID of the newly inserted Recipe
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific Recipe +info about add_ingredient ingredient by its ID
    const [rows] = await this.database.query(
      `SELECT 
    r.title, 
    r.url_photo, 
    r.user_id, 
    r.duration, 
    r.people_number, 
    r.step_description, 
    SUM(i.nutritional_value * ai.quantity / 1000) AS nutValue
FROM 
    recipe r
JOIN 
    add_ingredient ai ON r.id = ai.recipe_id
JOIN 
    ingredient i ON i.id = ai.ingredient_id
WHERE 
    r.id = ?
GROUP BY 
    r.id, r.title, r.url_photo, r.user_id, r.duration, r.people_number, r.step_description;
`,
      [id]
    );

    // Return the first row of the result, which represents the Recipe
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all Recipes from the "Recipe" table
    const [rows] = await this.database.query(`
     SELECT 
    r.id,
    r.title, 
    r.url_photo, 
    r.user_id, 
    r.duration, 
    r.people_number, 
    r.step_description, 
    GROUP_CONCAT(i.name) AS ingredients,
    SUM(i.nutritional_value * ai.quantity / 1000) AS nutValue
FROM 
    recipe r
JOIN 
    add_ingredient ai ON r.id = ai.recipe_id
JOIN 
    ingredient i ON i.id = ai.ingredient_id
GROUP BY 
    r.id, 
    r.title, 
    r.url_photo, 
    r.user_id, 
    r.duration, 
    r.people_number, 
    r.step_description;`);

    // Return the array of Recipes
    return rows;
  }

  async readByUser(userId) {
    // Execute the SQL SELECT query to retrieve specific Recipes by its userID
    const [rows] = await this.database.query(
      `SELECT
    r.id, 
    r.title, 
    r.url_photo, 
    r.user_id, 
    r.duration, 
    r.people_number, 
    r.step_description, 
    SUM(i.nutritional_value * ai.quantity / 1000) AS nutValue
FROM 
    recipe r
JOIN 
    add_ingredient ai ON r.id = ai.recipe_id
JOIN 
    ingredient i ON i.id = ai.ingredient_id
WHERE 
    r.user_id = ?
GROUP BY 
    r.id, r.title, r.url_photo, r.user_id, r.duration, r.people_number, r.step_description;
`,
      [userId]
    );

    // Return the array of Recipes
    return rows;
  }

  // requete qui calcul les valeur nutritionnelle des recettes.

  //   async readNutValue() {
  //     const [rows] = await this.database.query(`
  // SELECT r.title, SUM(i.nutritional_value * ai.quantity / 1000) AS nutValue
  //     FROM recipe r
  //     `);
  //     return rows;
  //   }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing Recipe

  // async update(Recipe) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  async delete(id) {
    const [row] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id=?`,
      [id]
    );
    return row.affectedRows;
  }
}

module.exports = RecipeRepository;
