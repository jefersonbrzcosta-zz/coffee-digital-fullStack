// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from "App/Models/Product";

export default class ProductsController {
  public async index() {
    const products = await Product.all();
    return products;
  }
}
