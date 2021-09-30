import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { State } from "../../store/types";
import { Currency } from "../Currency";

export function CartButton() {
  const total = useSelector((state: State) =>
    state.items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
  );
  return (
    <Button color="inherit" component={Link} to="/pedido">
      <ShoppingCart />
      <Typography variant="body1" sx={{ ml: 1 }}>
        <Currency value={total} />
      </Typography>
    </Button>
  );
}
