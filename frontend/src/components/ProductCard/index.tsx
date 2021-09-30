import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Product } from "../../store/types";
import { Currency } from "../Currency";
import { AddToCartButton } from "../AddToCartButton";

type Props = Product & {};

export function ProductCard({ id, title, price, image }: Props) {
  return (
    <Card>
      <CardMedia component="img" height="200" image={image} alt="" />
      <CardContent>
        <Typography variant="h5">{title}</Typography>
      </CardContent>
      <CardActions sx={{ p: 2 }}>
        <Typography variant="h6">
          <Currency value={price} />
        </Typography>
        <AddToCartButton
          {...{ id, title, price, image }}
          sx={{ mr: 0, ml: "auto" }}
        />
      </CardActions>
    </Card>
  );
}
