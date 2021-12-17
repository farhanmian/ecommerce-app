import React from "react";
import { Grid, makeStyles, Card, Typography } from "@material-ui/core";
import styles from "../../styles/GridProduct.module.css";
import { ProductPageData as GridProductType } from "../../store/types/types";
import NextLink from "next/link";
import Image from "next/image";

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
    boxShadow: "0 3px 6px rgba(0,0,0,.12)",
    transition: "all .3s",
    "&:hover": {
      boxShadow: "1px 5px 12px rgba(0,0,0,.15)",
    },
  },
});

const GridProduct: React.FC<{ product: GridProductType; href: string }> = ({
  product,
  href,
}) => {
  const classes = useStyles();
  return (
    <Grid item>
      <NextLink href={href}>
        <Card className={`${classes.productCard} ${styles.productCard}`}>
          <div className={styles.productImageContainer}>
            <Image src={product.img} alt={product.title} />
          </div>
          <div className={styles.textContainer}>
            <Typography
              variant="subtitle1"
              className={classes.color151875}
              style={{ marginBottom: 8, textTransform: "capitalize" }}
            >
              {product.title.trim().length > 20
                ? `${product.title.slice(0, 20)}...`
                : product.title}
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
      </NextLink>
    </Grid>
  );
};

export default GridProduct;
