import React from "react";
import { Grid } from "@material-ui/core";
import { ProductCard } from "../ProductCard";
import { Product } from "../../store/types";
import { fetchProducts } from "../../services/api";

const staticProducts = [
  { id: 1, title: "product title #1", price: 1.11, image: "/images/400.png" },
  { id: 2, title: "product title #2", price: 2.22, image: "/images/400.png" },
  { id: 3, title: "product title #3", price: 3.33, image: "/images/400.png" },
  { id: 4, title: "product title #4", price: 4.44, image: "/images/400.png" },
];

export function ProductsList() {
  const [products, setProducts] =
    React.useState<Array<Product>>(staticProducts);

  // @todo: uncomment to fetch from api
  // React.useEffect(() => {
  //   fetchProducts()
  //     .then((response: any) => setProducts(response.data))
  //     .catch((e: any) => {
  //       alert("Erro ao comunicar com o servidor!");
  //       console.error(e);
  //     });
  // }, []);

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
