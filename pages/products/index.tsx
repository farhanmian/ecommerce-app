import React from "react";
import styles from "../../styles/Products.module.css";
import Header from "../../components/partials/Header/Header";
import { Grid } from "@mui/material";
import { productData } from "../../data/productData";
import Divider from "../../components/partials/Divider/Divider";
import GridProduct from "../../components/GridProduct/GridProduct";

export default function Products() {
  return (
    <React.Fragment>
      <Header heading="Products" path="Products" />
      <Divider />

      <section className={styles.products}>
        <Grid
          container
          columnGap="53px"
          rowGap="81px"
          className={styles.productsContainer}
        >
          {productData.map((product, i) => {
            return (
              <GridProduct
                key={product.id}
                product={product}
                href={`products/${product.type}`}
              />
            );
          })}
        </Grid>
      </section>
      <Divider />
    </React.Fragment>
  );
}
