// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Order from "App/Models/Order";
import Database from "@ioc:Adonis/Lucid/Database";

export default class OrdersController {
  public async get({ params }) {
    const order = await Order.findOrFail(params.id);
    await order.load("products");

    const pivotData = await Database.query()
      .from("order_product")
      .where("order_id", params.id)
      .select("*");

    return {
      id: order.id,
      paid: order.paid,
      products: order.products.map(({ id, title, image, price }) => {
        const { quantity, comment } = pivotData.find(
          (p) => p.product_id === id
        );
        return {
          id,
          title,
          image,
          price,
          quantity,
          comment,
        };
      }),
    };
  }

  public async pay({ params }) {
    await Order.query().where("id", params.id).update({ paid: true });
    return "";
  }

  public async store({ request }) {
    const items = request.input("items");

    const order = await Order.create({ paid: false });

    await Database.table("order_product").multiInsert(
      items.map(({ id: product_id, comment, quantity }) => ({
        order_id: order.id,
        product_id,
        comment,
        quantity,
      }))
    );

    return order;
  }
}
