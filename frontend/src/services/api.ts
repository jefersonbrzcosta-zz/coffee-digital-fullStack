import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3333",
});

type RequestOrderItem = {
  [key: string]: any;
  id: number;
  quantity: number;
  comment: string;
};

export function checkout(items: Array<RequestOrderItem>) {
  return instance.post("/checkout", {
    items: items.map(({ id, quantity, comment }: RequestOrderItem) => ({
      id,
      quantity,
      comment,
    })),
  });
}

export function pay(id: number) {
  return instance.post(`/pay/${id}`);
}

export function fetchOrder(id: number) {
  return instance.get(`/order/${id}`);
}

export function fetchProducts() {
  return instance.get("/products");
}
