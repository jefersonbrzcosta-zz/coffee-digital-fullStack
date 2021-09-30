import React from "react";
import { Button } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { AddToCartDialog } from "../AddToCartDialog";
import { Product } from "../../store/types";

type Props = Product & {
  [key: string]: any;
};

export function AddToCartButton({ id, title, image, price, ...props }: Props) {
  const [open, setOpen] = React.useState<boolean>(false);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setOpen(true);
  }

  return (
    <>
      <Button variant="contained" onClick={handleClick} {...props}>
        <AddShoppingCart />
        Comprar
      </Button>
      <AddToCartDialog
        {...{ id, title, image, price }}
        open={open}
        handleClose={() => setOpen(false)}
      />
    </>
  );
}
