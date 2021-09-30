import React from "react";
import { useDispatch } from "react-redux";
import { Actions } from "../../store/actions";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  TextField,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Close, Add, Remove } from "@material-ui/icons";
import { Currency } from "../Currency";
import { Product } from "../../store/types";

type Props = Product & {
  open: boolean;
  handleClose: () => any;
};

export function AddToCartDialog({
  id,
  open,
  handleClose,
  image,
  title,
  price,
}: Props) {
  const [quantity, setQuantity] = React.useState<number>(1);
  const [comment, setComment] = React.useState<string>("");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch<React.Dispatch<Actions>>();

  function increase() {
    setQuantity((quantity: number) => quantity + 1);
  }

  function decrease() {
    if (quantity > 0) {
      setQuantity((quantity: number) => quantity - 1);
    }
  }

  function handleAdd() {
    dispatch({
      type: "ADD",
      payload: { id, title, image, price, quantity, comment },
    });
    handleClose();
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      sx={{ minWidth: 400 }}
    >
      <DialogTitle>
        Adicionar ao pedido
        <IconButton sx={{ float: "right" }}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ minWidth: 350 }}>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem>
            <ListItemAvatar>
              <img src={image} width={50} alt="" />
            </ListItemAvatar>
            <ListItemText
              primary={title}
              secondary={<Currency value={price} />}
            />
          </ListItem>
        </List>

        <TextField
          placeholder="Observação"
          multiline
          rows={4}
          fullWidth
          value={comment}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setComment(e.currentTarget.value)
          }
        />
      </DialogContent>
      <DialogActions>
        <IconButton onClick={decrease}>
          <Remove />
        </IconButton>
        <Box
          sx={{
            border: "1px solid rgba(0, 0, 0, 0.23)",
            padding: "5px 10px",
            borderRadius: 4,
            marginRight: "-8px",
          }}
        >
          {quantity}
        </Box>
        <IconButton onClick={increase}>
          <Add />
        </IconButton>
        <Button
          autoFocus
          color="secondary"
          variant="contained"
          onClick={handleAdd}
        >
          Adicionar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
