export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export type OrderItem = Product & { quantity: number; comment: string };

export type State = {
  items: Array<OrderItem>;
};

export type OrderType = {
  id: number;
  paid: boolean;
};
