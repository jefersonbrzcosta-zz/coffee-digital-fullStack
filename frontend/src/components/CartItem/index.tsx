import { Box, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { OrderItem } from "../../store/types";
import { Currency } from "../Currency";
import { QuantityHandler } from "./QuantityHandler";
import { CommentBox } from "./CommentBox";
import { RemoveButton } from "./RemoveButton";

export function CartItem({ id, title, image, price }: OrderItem) {
  return (
    <ListItem sx={{ mb: 2 }}>
      <ListItemAvatar>
        <img src={image} width={50} alt="" />
      </ListItemAvatar>
      <ListItemText primary={title} secondary={<Currency value={price} />} />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <QuantityHandler id={id} />

        <CommentBox id={id} />
        <RemoveButton id={id} />
      </Box>
    </ListItem>
  );
}
