import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Orders extends BaseSchema {
  protected tableName = "orders";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.boolean("paid");
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
