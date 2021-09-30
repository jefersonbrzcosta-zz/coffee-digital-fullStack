import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Chat } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { OrderItem, State } from "../../store/types";
import { Actions } from "../../store/actions";

type Props = {
  id: number;
};

export function CommentBox({ id }: Props) {
  const dispatch = useDispatch<React.Dispatch<Actions>>();
  const product = useSelector(
    (state: State) => state.items.find((p) => p.id === id) || ({} as OrderItem)
  );
  const { comment: _comment } = product;
  const [open, setOpen] = React.useState<boolean>(false);
  const [comment, setComment] = React.useState<string>(_comment);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  function handleClose() {
    setComment(_comment);
    setOpen(false);
  }

  function handleSave() {
    dispatch({
      type: "UPDATE",
      payload: {
        ...product,
        comment,
      },
    });
    setOpen(false);
  }

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <Chat />
      </IconButton>
      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
        <DialogTitle>Editar observações</DialogTitle>
        <DialogContent sx={{ minWidth: 350 }}>
          <TextField
            fullWidth
            multiline
            minRows={5}
            value={comment}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setComment(e.currentTarget.value)
            }
          />
        </DialogContent>
        <DialogActions sx={{ pl: 3, pr: 3 }}>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
