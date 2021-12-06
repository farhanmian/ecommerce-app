import styles from "../styles/Home.module.css";
import Image from "next/image";
import lamp from "../assets/img/headerlamp.png";
import couch from "../assets/img/headerCouch.png";
import { Button, Typography, makeStyles } from "@material-ui/core";
import { Grid } from "@mui/material";
import { ZoomGlass, AddToCart, Heart, Sale } from "../components/icons/icons";
import React, { useState } from "react";
import chair1 from "../assets/img/chair1.png";
import chair2 from "../assets/img/chair2.png";
import chair3 from "../assets/img/chair3.png";
import chair4 from "../assets/img/chair4.png";
import chair5 from "../assets/img/chair5.png";
import chair6 from "../assets/img/chair6.png";
import chair7 from "../assets/img/chair7.png";
import chair8 from "../assets/img/chair8.png";

const featuredProductData = [
  {
    img: chair1,
    name: "Cantilever chair",
    code: "Code - Y523201",
    price: "42.00",
  },
  {
    img: chair2,
    name: "Cantilever chair",
    code: "Code - Y523201",
    price: "42.00",
  },
  {
    img: chair3,
    name: "Cantilever chair",
    code: "Code - Y523201",
    price: "42.00",
  },
  {
    img: chair4,
    name: "Cantilever chair",
    code: "Code - Y523201",
    price: "42.00",
  },
];

const latestProductsLink = [
  "New Arrival",
  "Best Seller",
  "Featured",
  "Special Offer",
];

const latestProductsData = [
  {
    img: chair8,
    title: "title",
    price: 42,
    orignalPrice: 65,
    category: "New Arrival",
    sale: false,
    id: 1,
  },
  {
    img: chair5,
    title: "title",
    price: 42,
    orignalPrice: 65,
    category: "New Arrival",
    sale: true,
    id: 2,
  },
  {
    img: chair1,
    title: "title",
    price: 42,
    orignalPrice: 65,
    category: "New Arrival",
    sale: false,
    id: 3,
  },
  {
    img: chair6,
    title: "title",
    price: 42,
    orignalPrice: 65,
    category: "New Arrival",
    sale: false,
    id: 4,
  },
  {
    img: chair7,
    title: "title",
    price: 42,
    orignalPrice: 65,
    category: "New Arrival",
    sale: false,
    id: 5,
  },
  {
    img: chair4,
    title: "title",
    price: 42,
    orignalPrice: 65,
    category: "New Arrival",
    sale: false,
    id: 6,
  },
];

const useStyles = makeStyles({
  darkPurple: {
    color: "#1A0B5B",
  },
  featuredProduct: {
    transition: "all .2s",
    "& > span": {
      color: "#151875",
    },
    "&:hover > *": {
      transition: "all .2s",
      color: "#fff",
    },
  },
  latestProductsLink: {
    fontWeight: 400,
    textTransform: "capitalize",
    fontFamily: "lato",
    cursor: "pointer",
  },
  color151875: {
    color: "#151875",
  },
});

export default function Home() {
  const classes = useStyles();
  const [latestProductLink, setLatestProductLink] = useState("New Arrival");

  return (
    <React.Fragment>
      <section className={styles.home}>
        <div className={styles.header}>
          <div className={styles.textContainer}>
            <div className={styles.lampImg}>
              <Image src={lamp} alt="img" />
            </div>
            <div className={styles.text}>
              <Typography
                variant="body2"
                color="secondary"
                style={{ marginBottom: 12 }}
              >
                Best Furniture For Your Castle....
              </Typography>
              <Typography variant="h1" style={{ marginBottom: 12 }}>
                New Furniture Collection Trends in 2021
              </Typography>
              <Typography
                variant="body2"
                style={{ marginBottom: 27 }}
                color="primary"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing <br /> in phasellus non in justo.
              </Typography>

              <Button
                style={{ padding: "16px 40px", borderRadius: 2 }}
                variant="contained"
                color="secondary"
                disableElevation
              >
                <Typography
                  variant="subtitle2"
                  style={{ fontFamily: "Josefin Sans" }}
                >
                  Shop Now
                </Typography>
              </Button>
            </div>
          </div>

          <div className={styles.imgContainer}>
            <Image src={couch} alt="couch" />
          </div>

          <div className={styles.btnContainer}>
            <Button
              variant="contained"
              color="secondary"
              style={{
                minWidth: 10,
                minHeight: 10,
                padding: 0,
                borderRadius: "0",
              }}
              disableElevation
            />
            <Button
              variant="outlined"
              style={{
                minWidth: 10,
                minHeight: 10,
                padding: 0,
                borderRadius: "0",
                border: "1px solid #fb2e86",
              }}
              disableElevation
            />
            <Button
              variant="outlined"
              style={{
                minWidth: 10,
                minHeight: 10,
                padding: 0,
                borderRadius: "0",
                border: "1px solid #fb2e86",
              }}
              disableElevation
            />
          </div>
        </div>

        <div className={styles.featuredProducts}>
          <Typography variant="h2" className={classes.darkPurple}>
            Featured Products
          </Typography>

          <div className={styles.featuredProductsContainer}>
            <div className={styles.featuredProductsInnerContainer}>
              {featuredProductData.map((product, i) => {
                return (
                  <div
                    className={`${styles.featuredProduct} ${classes.featuredProduct}`}
                    key={i}
                  >
                    <div className={styles.featuredProductIconContainer}>
                      <div
                        className={`${styles.featuredProductIcon} ${styles.addToCart}`}
                      >
                        <AddToCart />
                      </div>
                      <div className={styles.featuredProductIcon}>
                        <Heart />
                      </div>
                      <div className={styles.featuredProductIcon}>
                        <ZoomGlass />
                      </div>
                    </div>
                    <div className={styles.featuredProductImgContainer}>
                      <Image src={product.img} alt={product.name} />
                    </div>
                    <Typography
                      variant="subtitle1"
                      color="secondary"
                      style={{ lineHeight: "21.6px", fontWeight: 700 }}
                    >
                      {product.name}
                    </Typography>
                    <div className={styles.productImageBtnContainer}>
                      <span className={styles.productImgBtn1} />
                      <span className={styles.productImgBtn2} />
                      <span className={styles.productImgBtn3} />
                    </div>
                    <Typography
                      variant="caption"
                      style={{ lineHeight: "16.41px" }}
                    >
                      {product.code}
                    </Typography>
                    <Typography
                      variant="caption"
                      style={{
                        lineHeight: "16.41px",
                      }}
                    >
                      ${product.price}
                    </Typography>
                  </div>
                );
              })}
            </div>

            <div className={styles.featuredProductsBtnContainer}>
              <span
                className={`${styles.featuredProductsBtn} ${styles.featuredProductsActiveBtn}`}
              />
              <span className={styles.featuredProductsBtn} />
              <span className={styles.featuredProductsBtn} />
              <span className={styles.featuredProductsBtn} />
            </div>
          </div>
        </div>

        <div className={styles.latestProducts}>
          <Typography variant="h2" style={{ color: "#151875" }}>
            Leatest Products
          </Typography>

          {/* latestProducts links */}
          <div className={styles.latestProductsLinkContainer}>
            {latestProductsLink.map((link) => {
              return (
                <Typography
                  key={link}
                  variant="body1"
                  className={`${classes.latestProductsLink}`}
                  style={{
                    color: latestProductLink === link ? "#FB2E86" : "#151875",
                  }}
                  onClick={() => {
                    setLatestProductLink(link);
                  }}
                >
                  {link}
                </Typography>
              );
            })}
          </div>

          {/* latestProducts product  */}
          <Grid
            container
            justifyContent="center"
            columnGap="37px"
            rowGap="120px"
            className={styles.latestProductsContainer}
          >
            {latestProductsData.map((product) => {
              return (
                product.category === latestProductLink && (
                  <Grid item key={product.id} className={styles.latestProduct}>
                    <div className={styles.latestProductImgContainer}>
                      {product.sale && (
                        <span className={styles.latestProductSaleImg}>
                          <Sale />
                        </span>
                      )}
                      <Image src={product.img} alt={product.title} />
                    </div>
                    <div className={styles.productText}>
                      <Typography
                        variant="body2"
                        className={classes.color151875}
                        style={{
                          lineHeight: "18.75px",
                          borderBottom: "2px solid #EEEFFB",
                          transform: "rotate(0.36deg)",
                        }}
                      >
                        Comfort Handy Craft
                      </Typography>
                      <span>
                        <Typography
                          variant="caption"
                          style={{ fontFamily: "Josefin Sans" }}
                          className={classes.color151875}
                        >
                          ${product.price}
                        </Typography>
                        <Typography
                          variant="overline"
                          style={{
                            fontFamily: "Josefin Sans",
                            textDecoration: "line-through",
                          }}
                          color="secondary"
                        >
                          ${product.orignalPrice}
                        </Typography>
                      </span>
                    </div>
                  </Grid>
                )
              );
            })}
          </Grid>
        </div>
      </section>
    </React.Fragment>
  );
}

/// full lamp img size = 387px
/// overflow lamp img = 82px
/// text container size = 644px
/// full container width including lamp img and text = 949px
/// product hover icons container width = 126px and container height = 30px

/// latest products container width = 1164px
/// each latest product width = 360px & height = 306px
/// each latest product width on hover = 370px & height = 314
