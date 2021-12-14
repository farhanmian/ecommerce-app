import React from "react";
import styles from "../../styles/Products.module.css";
import Header from "../../components/partials/Header/Header";
import { Grid } from "@mui/material";
import { productData } from "../../data/productData";
import Image from "next/image";
import { Typography, makeStyles, Card } from "@material-ui/core";
import Divider from "../../components/partials/Divider/Divider";
import NexLink from "next/link";

const useStyles = makeStyles({
  color151875: {
    color: "#151875",
  },
  colorFB2E86: {
    color: "#FB2E86",
    textDecoration: "line-through",
  },
  productCard: {
    width: 270,
    height: 363,
    borderRadius: 2,
    cursor: "pointer",
    padding: 3,
    boxShadow: "0 3px 3px rgba(0,0,0,.1)",
    transition: "all .3s",
    "&:hover": {
      boxShadow: "1px 6px 10px rgba(0,0,0,.16)",
    },
  },
});

export default function Products() {
  const classes = useStyles();
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
          {productData.map((product) => {
            return (
              <Grid item key={product.id}>
                <NexLink href={`products/${product.type}`}>
                  <Card
                    className={`${classes.productCard} ${styles.productCard}`}
                  >
                    <div className={styles.productImageContainer}>
                      <Image src={product.img} alt={product.title} />
                    </div>
                    <div className={styles.textContainer}>
                      <Typography
                        variant="subtitle1"
                        className={classes.color151875}
                        style={{ marginBottom: 8, textTransform: "capitalize" }}
                      >
                        {product.title}
                      </Typography>

                      <div className={styles.colorfulDotsContainer}>
                        <span className={styles.colorfulDot} />
                        <span className={styles.colorfulDot} />
                        <span className={styles.colorfulDot} />
                      </div>

                      <div className={styles.productPriceContainer}>
                        <Typography
                          variant="caption"
                          style={{
                            fontFamily: "Josefin Sans",
                            fontWeight: 400,
                          }}
                          className={classes.color151875}
                        >
                          ${product.price.toFixed(2)}
                        </Typography>

                        <Typography
                          variant="caption"
                          style={{
                            fontFamily: "Josefin Sans",
                            fontWeight: 400,
                          }}
                          className={classes.colorFB2E86}
                        >
                          ${product.orignalPrice.toFixed(2)}
                        </Typography>
                      </div>
                    </div>
                  </Card>
                </NexLink>
              </Grid>
            );
          })}
        </Grid>
      </section>
      <Divider />
    </React.Fragment>
  );
}
