const AbstractRepository = require("./AbstractRepository");

class IngredientRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "Ingredient" as configuration
    super({ table: "ingredient" });
  }

  // The C of CRUD - Create operation

  async create(Ingredient) {
    // Execute the SQL INSERT query to add a new Ingredient to the "Ingredient" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, user_id) values (?, ?)`,
      [Ingredient.title, Ingredient.user_id]
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
