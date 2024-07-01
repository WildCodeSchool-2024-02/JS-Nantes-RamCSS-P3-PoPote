const AbstractRepository = require("./AbstractRepository");

class IngredientRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "Ingredient" as configuration
    super({ table: "ingredient" });
  }

  // The C of CRUD - Create operation

  async create(ingredient) {
    // Execute the SQL INSERT query to add a new Ingredient to the "Ingredient" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name, nutrional_value) values (?, ?)`,
      [ingredient.name, ingredient.nutrional_value]
    );

    // Return the ID of the newly inserted Ingredient
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific Ingredient by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the Ingredient
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all Ingredients from the "Ingredient" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of Ingredients
    return rows;
  }

  // SQL query for provide all ingredients of a recipe
  async readSpec(id) {
    const [rows] = await this.database.query(
      `SELECT 
    r.id,
    r.title, 
    GROUP_CONCAT(CONCAT(i.name, ' ', ai.quantity, ' ', ai.unit) SEPARATOR ', ') AS ingredientList
FROM 
    recipe r
JOIN 
    add_ingredient ai ON r.id = ai.recipe_id
JOIN 
    ingredient i ON i.id = ai.ingredient_id
WHERE
      r.id = ?
GROUP BY
    r.id,
    r.title;
  `,
      [id]
    );

    return rows[0];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing Ingredient

  // async update(Ingredient) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an Ingredient by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = IngredientRepository;
