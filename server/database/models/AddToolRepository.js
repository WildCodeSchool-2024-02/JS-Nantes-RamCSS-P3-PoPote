const AbstractRepository = require("./AbstractRepository");

class AddToolRepository extends AbstractRepository {
  constructor() {
    super({ table: "add_tool" });
  }

  async createAddTool(toolData) {
    const [result] = await this.database.query(
      `insert into add_tool (recipe_id, tool_id, quantity) values (?, ?, ?)`,
      [toolData.recipe_id, toolData.tool_id, toolData.quantity]
    );
    return result;
  }
}
module.exports = AddToolRepository;
