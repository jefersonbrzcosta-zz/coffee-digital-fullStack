import { Product, OrderItem } from "./types";

export interface AddToCart {
  readonly type: "ADD";
  payload: OrderItem;
}
export interface RemoveFromCart {
  readonly type: "REMOVE";
  payload: { id: number };
}
export interface UpdateQuantity {
  readonly type: "UPDATE";
  payload: OrderItem;
}
export type Actions = AddToCart | RemoveFromCart | UpdateQuantity;
