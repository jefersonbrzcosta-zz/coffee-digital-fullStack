import {
  BaseModel,
  column,
  manyToMany,
  ManyToMany,
} from "@ioc:Adonis/Lucid/Orm";
import Order from "App/Models/Order";

export default class Product extends BaseModel {
  @manyToMany(() => Order, {
    pivotColumns: ["quantity"],
  })
  public orders: ManyToMany<typeof Order>;

  @column({ isPrimary: true })
  public id: number;

  @column()
  public title: string;
  @column()
  public image: string;
  @column()
  public price: number;
  @column()
  public quantity: number;
}
