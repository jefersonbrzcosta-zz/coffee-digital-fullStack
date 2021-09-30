import {
  Badge,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { OrderItem as OrderItemType } from "../../store/types";
import { Currency } from "../Currency";

export function OrderItem({
  title,
  quantity,
  image,
  price,
  comment,
}: OrderItemType) {
  return (
    <ListItem sx={{ mb: 2 }}>
      <Badge badgeContent={quantity} color="primary">
        <ListItemAvatar>
          <img src={image} width={50} alt="" />
        </ListItemAvatar>
      </Badge>
      <ListItemText primary={title} secondary={comment} />
      <Currency value={price} />
    </ListItem>
  );
}
