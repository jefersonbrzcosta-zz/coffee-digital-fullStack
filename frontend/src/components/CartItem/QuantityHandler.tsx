import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, IconButton } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import { State, OrderItem } from "../../store/types";
import { Actions } from "../../store/actions";

type Props = {
  id: number;
};

export function QuantityHandler({ id }: Props) {
  const product: OrderItem = useSelector(
    (state: State) => state.items.find((p) => p.id === id) || ({} as OrderItem)
  );
  const dispatch = useDispatch<Dispatch<Actions>>();

  function updateQuantity(quantity: number) {
    dispatch({
      type: "UPDATE",
      payload: {
        ...product,
        quantity,
      },
    });
  }

  function increase() {
    updateQuantity(product.quantity + 1);
  }

  function decrease() {
    if (product.quantity > 0) {
      updateQuantity(product.quantity - 1);
    }
  }

  return (
    <>
      <IconButton onClick={decrease}>
        <Remove />
      </IconButton>
      <Box
        sx={{
          border: "1px solid rgba(0, 0, 0, 0.23)",
          padding: "5px 10px",
          borderRadius: 4,
        }}
      >
        {product.quantity}
      </Box>
      <IconButton onClick={increase}>
        <Add />
      </IconButton>
    </>
  );
}
