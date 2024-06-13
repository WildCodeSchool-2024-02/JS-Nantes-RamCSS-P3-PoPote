const AbstractRepository = require("./AbstractRepository");

class CategoryRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "Category" as configuration
    super({ table: "category" });
  }

  // The C of CRUD - Create operation

  async create(category) {
    // Execute the SQL INSERT query to add a new Category to the "Category" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name) values (?)`,
      [category.name]
    );

    // Return the ID of the newly inserted Category
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific Category by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the Category
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all Categorys from the "Category" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of Categorys
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing Category

  // async update(Category) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an Category by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = CategoryRepository;
