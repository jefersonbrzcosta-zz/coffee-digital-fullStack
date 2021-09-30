import {
  BaseModel,
  column,
  manyToMany,
  ManyToMany,
} from "@ioc:Adonis/Lucid/Orm";
import Product from "App/Models/Product";

export default class Order extends BaseModel {
  @manyToMany(() => Product, {
    pivotColumns: ["quantity", "comment"],
  })
  public products: ManyToMany<typeof Product>;

  @column({ isPrimary: true })
  public id: number;

  @column()
  public paid: boolean;
}
