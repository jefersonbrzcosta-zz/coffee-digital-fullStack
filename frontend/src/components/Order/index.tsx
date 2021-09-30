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
    paid: false,
  });

  const [items, setItems] = React.useState<Array<OrderItemType>>([]);

  React.useEffect(() => {
    fetchOrder(id).then((response: any) => {
      setOrder({ ...response.data, paid: response.data.paid });
      setItems(response.data.products);
    });
  }, [id]);

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
      {!!order.paid && (
        <Typography variant="h5" align="center" sx={{ p: 4 }}>
          Pago
        </Typography>
      )}
      <PayButton
        id={id}
        disabled={!!order.paid}
        onPay={() => setOrder((order: OrderType) => ({ ...order, paid: true }))}
      />
    </>
  );
}
