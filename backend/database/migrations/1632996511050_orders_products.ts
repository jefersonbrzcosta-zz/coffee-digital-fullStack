import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class OrderProduct extends BaseSchema {
  protected tableName = "order_product";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");

      table.integer("order_id");
      table.integer("product_id");
      table.integer("quantity");
      table.string("comment");
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
