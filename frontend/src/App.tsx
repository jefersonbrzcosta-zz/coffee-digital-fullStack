import { Container } from "@material-ui/core";
import { ProductsList } from "./components/ProductsList";
import { Cart } from "./components/Cart";
import { Order } from "./components/Order";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Container sx={{ pt: 5, pb: 5 }}>
        <Switch>
          <Route exact path="/">
            <ProductsList />
          </Route>
          <Route exact path="/pedido">
            <Cart />
          </Route>
          <Route path="/pedido/:id">
            <Order />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
