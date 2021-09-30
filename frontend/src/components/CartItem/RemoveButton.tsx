import React, { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { Actions } from "../../store/actions";

import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";

type Props = {
  id: number;
};

export function RemoveButton({ id }: Props) {
  const dispatch = useDispatch<Dispatch<Actions>>();

  function handleClick() {
    dispatch({ type: "REMOVE", payload: { id } });
  }
  return (
    <IconButton onClick={handleClick}>
      <Close />
    </IconButton>
  );
}
