import React, { useState } from "react";
import styles from "../../styles/RowProduct.module.css";
import { Card, Typography, makeStyles, Grid, Button } from "@material-ui/core";
import Image from "next/image";
import { StoredDataType } from "../../store/types/types";
import { AddToCart, Heart, ZoomGlass, Star } from "../icons/icons";
import { useRouter } from "next/dist/client/router";

const useStyles = makeStyles({
  searchResultCard: {
    boxShadow: "0px 2px 2px rgba(0,0,0,.2)",
    transition: "all .3s",
  },
  productTitle: {
    color: "#111C85",
    marginBottom: 13,
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: "20px",
    cursor: "pointer",
    textTransform: "capitalize",
  },
  btn: {
    maxWidth: 31,
    minWidth: 31,
    minHeight: 32,
    maxHeight: 32,
    borderRadius: 500,
    padding: 6,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backfaceVisibility: "hidden",
  },
});

const RowProduct: React.FC<{ product: StoredDataType; href: string }> = ({
  product,
  href,
}) => {
  const router = useRouter();
  const classes = useStyles();
  const stars = [1, 2, 3, 4, 5];

  const [hover, setHover] = useState(false);
  console.log(hover);

  const onMouseEnterHandler = () => {
    setHover(true);
  };
  const onMouseExitHandler = () => {
    setHover(false);
  };
  const openSpecificProductHandler = (href: string) => {
    if (hover) {
      return;
    }
    router.push(href);
  };

  return (
    <Grid>
      <Card
        key={product.id}
        className={`${styles.searchResult} ${classes.searchResultCard}`}
        onClick={() => {
          !hover && openSpecificProductHandler(href);
        }}
      >
        <div className={styles.searchResultImage}>
          <Image src={product.img} alt="product img" />
        </div>
        <div className={styles.searchResultText}>
          <Typography variant="subtitle1" className={classes.productTitle}>
            {product.title.trim().length > 19
              ? `${product.title.slice(0, 19)}...`
              : product.title}
          </Typography>
          <div className={styles.colorFulDotsContainer}>
            <span className={styles.colorFulDot} />
            <span className={styles.colorFulDot} />
            <span className={styles.colorFulDot} />
          </div>
          <span className={styles.searchResultPriceRating}>
            <Typography
              variant="caption"
              style={{
                lineHeight: "16.41px",
                color: "#111C85",
                marginRight: 9,
              }}
            >
              ${product.price}
            </Typography>
            <Typography
              variant="caption"
              style={{
                lineHeight: "16.41px",
                color: "#FF2AAA",
                textDecoration: "line-through",
                marginRight: 16,
              }}
            >
              ${product.orignalPrice}
            </Typography>
            <span>
              {stars.map((star) => {
                return (
                  <Star
                    key={star}
                    color={star <= product.rating ? "#FFC416" : "#B2B2B2"}
                  />
                );
              })}
            </span>
          </span>

          <Typography variant="body2" style={{ color: "#9295AA" }}>
            {product.text}
          </Typography>

          <span
            className={styles.searchResultIconContainer}
            onMouseOver={onMouseEnterHandler}
            onMouseLeave={onMouseExitHandler}
          >
            <Button className={classes.btn}>
              <AddToCart />
            </Button>
            <Button className={classes.btn}>
              <Heart />
            </Button>
            <Button className={classes.btn}>
              <ZoomGlass />
            </Button>
          </span>
        </div>
      </Card>
    </Grid>
  );
};

export default RowProduct;
