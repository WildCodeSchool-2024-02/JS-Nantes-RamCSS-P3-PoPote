const AbstractRepository = require("./AbstractRepository");

class ToolRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "tool" as configuration
    super({ table: "tool" });
  }

  // The C of CRUD - Create operation

  async create(tool) {
    // Execute the SQL INSERT query to add a new tool to the "tool" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name) values (?)`,
      [tool.name]
    );

    // Return the ID of the newly inserted tool
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific tool by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the tool
    return rows[0];
  }

  async readSpecTools(id) {
  
    const [rows] = await this.database.query(
      `SELECT 
    r.id,
    r.title, 
    GROUP_CONCAT(CONCAT(at.quantity,' ',t.name ) SEPARATOR ', ') AS toolList
FROM 
    recipe r
JOIN 
    add_tool at ON r.id = at.recipe_id
JOIN 
    tool t ON t.id = at.tool_id
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

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "tool" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing tool

  // async update(tool) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an tool by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = ToolRepository;
