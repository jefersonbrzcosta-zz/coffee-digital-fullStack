import { AppBar, Box, Typography, Toolbar } from "@material-ui/core";
import { CartButton } from "../CartButton";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <AppBar position="static">
      <Toolbar color="primary">
        <Typography
          component={Link}
          to="/"
          variant="h6"
          color="inherit"
          sx={{ textDecoration: "none" }}
        >
          Café XYZ
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <CartButton />
      </Toolbar>
    </AppBar>
  );
}
