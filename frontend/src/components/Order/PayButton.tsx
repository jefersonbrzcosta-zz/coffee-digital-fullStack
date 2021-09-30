import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import { pay } from "../../services/api";
import CreditCardInput from "react-credit-card-input";

type Props = {
  id: number;
  onPay: () => any;
  disabled: boolean;
};

export function PayButton({ id, onPay, disabled }: Props) {
  const [open, setOpen] = React.useState<boolean>(false);

  const [cardNumber, setCardNumber] = React.useState<string>("");
  const [expiry, setExpiry] = React.useState<string>("");
  const [cvc, setCvc] = React.useState<string>("");

  function handleConfirm() {
    pay(id)
      .then(onPay)
      .catch((e) => {
        alert("Erro ao comunicar com o servidor!");
        console.error(e);
      });
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        fullWidth
        variant="contained"
        size="large"
        sx={{ mt: 3, mb: 2 }}
        disabled={disabled}
      >
        Pagar
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Informe os dados do seu cartão de crédito:</DialogTitle>
        <DialogContent>
          <CreditCardInput
            cardNumberInputProps={{
              value: cardNumber,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                setCardNumber(e.currentTarget.value),
            }}
            cardExpiryInputProps={{
              value: expiry,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                setExpiry(e.currentTarget.value),
            }}
            cardCVCInputProps={{
              value: cvc,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                setCvc(e.currentTarget.value),
            }}
            fieldClassName="input"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleConfirm} variant="contained" color="primary">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
