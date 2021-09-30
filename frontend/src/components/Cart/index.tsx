import { useSelector } from "react-redux";
import { OrderItem, State } from "../../store/types";
import { Button, List, Typography } from "@material-ui/core";
import { CartItem } from "../CartItem";
import { Currency } from "../Currency";
import { useHistory } from "react-router-dom";
import { checkout } from "../../services/api";

export function Cart() {
  const items = useSelector((state: State) => state.items);
  const total = items.reduce(
    (acc: number, curr: OrderItem) => acc + curr.price * curr.quantity,
    0
  );
  const history = useHistory();

  function handleCheckout() {
    checkout(items)
      .then((response: any) => {
        history.push(`/pedido/${response.data.id}`);
      })
      .catch((e: any) => {
        alert("Erro ao comunicar com o servidor!");
        console.error(e);
      });
  }

  return (
    <>
      <List>
        {items.map((product: OrderItem) => (
          <CartItem key={product.id} {...product} />
        ))}
      </List>
      <Typography variant="h3" align="center" sx={{ p: 4 }}>
        <Currency value={total} />
      </Typography>
      <Button
        onClick={handleCheckout}
        fullWidth
        variant="contained"
        size="large"
        sx={{ mt: 3, mb: 2 }}
      >
        Finalizar Pedido
      </Button>
    </>
  );
}
