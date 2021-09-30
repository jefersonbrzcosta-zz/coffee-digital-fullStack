import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Products extends BaseSchema {
  protected tableName = "products";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");

      table.string("title", 255);
      table.string("image", 255);
      table.float("price", 8, 2);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
