const AbstractRepository = require("./AbstractRepository");

class CommentRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "Comment" as configuration
    super({ table: "comment" });
  }

  // The C of CRUD - Create operation

  async create(Comment) {
    // Execute the SQL INSERT query to add a new Comment to the "Comment" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, user_id) values (?, ?)`,
      [Comment.title, Comment.user_id]
    );

    // Return the ID of the newly inserted Comment
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific Comment by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the Comment
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all Comments from the "Comment" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of Comments
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing Comment

  // async update(Comment) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an Comment by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = CommentRepository;
