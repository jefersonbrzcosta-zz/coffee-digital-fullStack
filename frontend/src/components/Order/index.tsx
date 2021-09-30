import React from "react";
import { useParams } from "react-router";
import { List, Typography } from "@material-ui/core";
import { OrderItem as OrderItemType, OrderType } from "../../store/types";
import { Currency } from "../Currency";
import { OrderItem } from "../OrderItem";
import { PayButton } from "./PayButton";
import { fetchOrder } from "../../services/api";

export function Order() {
  const { id }: any = useParams();
  const [order, setOrder] = React.useState<OrderType>({
    id,
    // @todo: load from api
    paid: false,
  });

  const [items, setItems] = React.useState<Array<OrderItemType>>([
    {
      id: 1,
      title: "product title #1",
      price: 1.11,
      image: "/images/400.png",
      quantity: 1,
      comment: "",
    },
    {
      id: 4,
      title: "product title #4",
      price: 4.44,
      image: "/images/400.png",
      quantity: 1,
      comment: "",
    },
  ]);

  // @todo: uncomment to load from api
  // React.useEffect(() => {
  //   fetchOrder(id).then((response: any) => {
  //     setOrder({ ...order, paid: response.data.paid });
  //     setItems(response.data.items);
  //   });
  // }, []);

  // @todo: load from api
  const total = items.reduce(
    (acc: number, curr: OrderItemType) => acc + curr.price * curr.quantity,
    0
  );

  return (
    <>
      <List>
        {items.map((item: OrderItemType) => (
          <OrderItem key={item.id} {...item} />
        ))}
      </List>
      <Typography variant="h3" align="center" sx={{ p: 4 }}>
        <Currency value={total} />
      </Typography>
      <PayButton
        id={id}
        disabled={order.paid}
        onPay={() => setOrder((order: OrderType) => ({ ...order, paid: true }))}
      />
    </>
  );
}
