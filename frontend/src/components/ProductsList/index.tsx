import React from "react";
import { Grid } from "@material-ui/core";
import { ProductCard } from "../ProductCard";
import { Product } from "../../store/types";
import { fetchProducts } from "../../services/api";

export function ProductsList() {
  const [products, setProducts] = React.useState<Array<Product>>([]);

  React.useEffect(() => {
    fetchProducts()
      .then((response: any) => setProducts(response.data))
      .catch((e: any) => {
        alert("Erro ao comunicar com o servidor!");
        console.error(e);
      });
  }, []);

  return (
    <Grid container direction="row" spacing={3} wrap="wrap">
      {products.map((product: Product) => (
        <Grid item key={product.id} xs={12} md={6} lg={3}>
          <ProductCard {...product} />
        </Grid>
      ))}
    </Grid>
  );
}
