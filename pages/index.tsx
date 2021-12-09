import styles from "../styles/Home.module.css";
import Image from "next/image";
import NextLink from "next/link";
import { Button, Typography, makeStyles } from "@material-ui/core";
import { Grid } from "@mui/material";
import {
  ZoomGlass,
  AddToCart,
  Heart,
  Sale,
  Tick,
} from "../components/icons/icons";
import React, { useState } from "react";
import lamp from "../assets/img/headerlamp.png";
import couch from "../assets/img/headerCouch.png";
import couch2 from "../assets/img/featureOfLatestTrending.png";
import discountItemCouch from "../assets/img/couch.png";
import discountItemPlasticChair from "../assets/img/discountItemChair.png";
import chair1 from "../assets/img/chair1.png";
import chair2 from "../assets/img/chair2.png";
import chair3 from "../assets/img/chair3.png";
import chair4 from "../assets/img/chair4.png";
import chair5 from "../assets/img/chair5.png";
import chair6 from "../assets/img/chair6.png";
import chair7 from "../assets/img/chair7.png";
import chair8 from "../assets/img/chair8.png";
import chair9 from "../assets/img/chair9.png";
import chair10 from "../assets/img/chair10.png";
import chair11 from "../assets/img/chair11.png";
import chair12 from "../assets/img/chair12.png";
import otherTrendingChair1 from "../assets/img/other-trending-chair1.png";
import otherTrendingChair2 from "../assets/img/other-trending-chair2.png";
import otherTrendingChair3 from "../assets/img/other-trending-chair3.png";
import woodChair from "../assets/img/wood-chair.png";
import trendingClock from "../assets/img/trending-clock.png";
import trendingDrawer from "../assets/img/trending-drawer.png";
import freeDelivery from "../assets/img/free-delivery.png";
import fullHoursSupport from "../assets/img/24-hours-support.png";
import cashback from "../assets/img/cashback.png";
import premiumQuality from "../assets/img/premium-quality.png";
import FriendCompanies from "../components/partials/FriendCompanies/FriendCompanies";

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

const shopexFeaturesData = [
  {
    img: freeDelivery,
  },
  {
    img: cashback,
  },
  {
    img: premiumQuality,
  },
  {
    img: fullHoursSupport,
  },
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

const trendingProductsData = [
  {
    title: "Cantilever chair",
    img: chair9,
    price: 26.0,
    orignalPrice: 42,
    id: 1,
    category: "mainTrendingProduct",
  },
  {
    title: "Cantilever chair",
    img: chair10,
    price: 26.0,
    orignalPrice: 42,
    id: 2,
    category: "mainTrendingProduct",
  },
  {
    title: "Cantilever chair",
    img: chair11,
    price: 26.0,
    orignalPrice: 42,
    id: 3,
    category: "mainTrendingProduct",
  },
  {
    title: "Cantilever chair",
    img: chair7,
    price: 26.0,
    orignalPrice: 42,
    id: 4,
    category: "mainTrendingProduct",
  },
];
const trendingProductsOtherTrendingData = [
  {
    title: "23% off in all products",
    link: "Shop Now",
    goto: "clock",
    img: trendingClock,
    imgStyle: { width: 213, height: 207 },
  },
  {
    title: "23% off in all products",
    link: "View Collection",
    goto: "drawer",
    img: trendingDrawer,
    imgStyle: { width: 312, height: 173 },
  },
];
const otherTrendingChairData = [
  {
    title: "Executive Seat chair",
    price: 32,
    img: otherTrendingChair1,
  },
  {
    title: "Executive Seat chair",
    price: 32,
    img: otherTrendingChair2,
  },
  {
    title: "Executive Seat chair",
    price: 32,
    img: otherTrendingChair3,
  },
];
const discountItemLink = ["Wood Chair", "Plastic Chair", "Sofa Collection"];
const discountItemData = [
  {
    offer: "20% Discount Of All Products",
    img: woodChair,
    imgStyle: { width: 699 },
    productTitle: "Eams Wood Chair Compact",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.",
    category: "Wood Chair",
    id: 1,
    features: [
      "High Quality Soft foam.",
      "Adjustable Seat Height, Armrest.",
      "Simple neutral colours.",
      "Frame Material: Solid Wood.",
    ],
  },
  {
    offer: "18% Discount Of All Products",
    img: discountItemPlasticChair,
    imgStyle: {
      width: 500,
      height: "max-content",
      top: "50%",
      transform: "translateY(-50%)",
    },
    productTitle: "Eams Plastic Chair Compact",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.",
    category: "Plastic Chair",
    id: 2,
    features: [
      "High Quality Frame Material",
      "Clear lines and geomatric figures",
      "Simple neutral colours.",
      "Material expose like metals",
    ],
  },
  {
    offer: "25% Discount Of All Products",
    img: discountItemCouch,
    imgStyle: { width: 580 },
    productTitle: "Sofa Collection",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.",
    category: "Sofa Collection",
    id: 3,
    features: [
      "Material expose like metals",
      "Clear lines and geomatric figures",
      "Simple neutral colours.",
      "Material expose like metals",
    ],
  },
];
const topCategoriesItemData = [
  {
    img: chair12,
    title: "Mini LCW Chair",
    price: 56,
    category: 1,
    id: 1,
  },
  {
    img: chair1,
    title: "Mini LCW Chair",
    price: 56,
    category: 1,
    id: 2,
  },
  {
    img: chair9,
    title: "Mini LCW Chair",
    price: 56,
    category: 1,
    id: 3,
  },
  {
    img: chair2,
    title: "Mini LCW Chair",
    price: 56,
    category: 1,
    id: 4,
  },
  {
    img: chair3,
    title: "Mini LCW Chair",
    price: 56,
    category: 2,
    id: 5,
  },
  {
    img: chair11,
    title: "Mini LCW Chair",
    price: 56,
    category: 2,
    id: 6,
  },
  {
    img: chair5,
    title: "Mini LCW Chair",
    price: 56,
    category: 2,
    id: 7,
  },
  {
    img: chair6,
    title: "Mini LCW Chair",
    price: 56,
    category: 2,
    id: 8,
  },
  {
    img: chair7,
    title: "Mini LCW Chair",
    price: 56,
    category: 3,
    id: 9,
  },
  {
    img: chair8,
    title: "Mini LCW Chair",
    price: 56,
    category: 3,
    id: 10,
  },
  {
    img: chair10,
    title: "Mini LCW Chair",
    price: 56,
    category: 3,
    id: 11,
  },
  {
    img: chair4,
    title: "Mini LCW Chair",
    price: 56,
    category: 3,
    id: 12,
  },
];
const topCategoryBtnData = [1, 2, 3];

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
  const [discountItemActiveLink, setDiscountItemActiveLink] =
    useState("Wood Chair");
  const [topCategoryActiveLink, setTopCategoryActiveLink] = useState(1);

  return (
    <React.Fragment>
      {/* header section */}
      <section className={styles.header}>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing <br /> in phasellus non in justo.
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
      </section>

      {/* featured product section */}
      <section className={styles.featuredProducts}>
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
      </section>

      {/* latest product section */}
      <section className={styles.latestProducts}>
        <Typography variant="h2" style={{ color: "#151875" }}>
          Leatest Products
        </Typography>

        {/* latestProducts links */}
        <div className={styles.latestProductsLinkContainer}>
          {latestProductsLink.map((link, i) => {
            return (
              <Typography
                key={i}
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
          justifyContent="space-between"
          alignItems="flex-start"
          columnGap="37px"
          rowGap="120px"
          className={styles.latestProductsContainer}
        >
          {latestProductsData.map((product, i) => {
            return (
              product.category === latestProductLink && (
                <Grid item key={i} className={styles.latestProduct}>
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
      </section>

      {/* feature shopex to offer section  */}
      <section className={styles.shopexFeatures}>
        <Typography
          variant="h2"
          className={classes.color151875}
          style={{ marginBottom: 55 }}
        >
          What Shopex Offer!
        </Typography>
        <Grid container columnGap="28px">
          {shopexFeaturesData.map((feature, i) => {
            return (
              <Grid key={i} item className={styles.feature}>
                <span className={styles.featureImage}>
                  <Image src={feature.img} alt="img" />
                </span>
                <Typography
                  variant="h6"
                  className={classes.color151875}
                  style={{ marginBottom: 20 }}
                >
                  24/7 Support
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    lineHeight: "25.6px",
                    color: "#bab6ce",
                    marginBottom: 45,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br /> Massa purus gravida.
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </section>

      {/* feature of latest and trending products */}
      <section className={styles.featureOfLatestTrendingProducts}>
        <div className={styles.featureOfLatestTrendingInnerContainer}>
          <div className={styles.featureOfLatestTrendingImage}>
            <Image src={couch2} alt="couch2" />
          </div>

          <div className={styles.featureOfLatestTrendingText}>
            <Typography
              variant="h4"
              className={classes.color151875}
              style={{ fontWeight: "bold", marginBottom: 29 }}
            >
              Unique Features Of leatest & Trending Poducts
            </Typography>

            <span className={styles.fetureText}>
              <span
                className={`${styles.featureOfLatestTrendingPinkBall} ${styles.featureTextBall}`}
              />
              <Typography
                variant="subtitle2"
                style={{ color: "#ACABC3", lineHeight: "21.12px" }}
              >
                All frames constructed with hardwood solids and laminates
              </Typography>
            </span>

            <span className={styles.fetureText}>
              <span
                className={`${styles.featureOfLatestTrendingBlueBall} ${styles.featureTextBall}`}
              />
              <Typography
                variant="subtitle2"
                style={{ color: "#ACABC3", lineHeight: "21.12px" }}
              >
                Reinforced with double wood dowels, glue, screw - nails corner
                blocks and machine nails
              </Typography>
            </span>

            <span
              className={styles.fetureText}
              style={{
                marginBottom: 38,
              }}
            >
              <span
                className={`${styles.featureOfLatestTrendingSkyblueBall} ${styles.featureTextBall}`}
              />
              <Typography
                variant="subtitle2"
                style={{
                  color: "#ACABC3",
                  lineHeight: "21.12px",
                }}
              >
                Arms, backs and seats are structurally reinforced
              </Typography>
            </span>

            <div className={styles.featureOfLatestTrendingBtnAndPrice}>
              <Button
                variant="contained"
                style={{
                  padding: "14px 24px",
                  minWidth: 157,
                  borderRadius: 0,
                  marginRight: 19,
                  textTransform: "capitalize",
                }}
                color="secondary"
                disableElevation
              >
                Add To Cart
              </Button>
              <span className={styles.featureOfLatestTrendingPrice}>
                <Typography
                  variant="caption"
                  style={{
                    lineHeight: "16.41px",
                    marginBottom: 3,
                    fontFamily: "Josefin Sans",
                  }}
                  className={classes.color151875}
                >
                  B&B Italian Sofa{" "}
                </Typography>
                <Typography
                  variant="caption"
                  style={{ lineHeight: "16.8px" }}
                  className={classes.color151875}
                >
                  $32.00
                </Typography>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* trending products */}
      <section className={styles.trendingProducts}>
        <Typography
          variant="h2"
          className={classes.color151875}
          style={{ marginBottom: 39 }}
        >
          Trending Products
        </Typography>

        <Grid
          container
          columnGap="29px"
          className={styles.trendingProductsContainer}
        >
          {trendingProductsData.map((product) => {
            return (
              <Grid
                item
                key={product.id}
                className={styles.mainTrendingProduct}
              >
                <div className={styles.mainTrendingProductImage}>
                  <Image src={product.img} alt={product.title} />
                </div>
                <Typography
                  variant="body2"
                  style={{
                    lineHeight: "25.6px",
                    fontFamily: "lato",
                    fontWeight: 700,
                  }}
                  className={classes.color151875}
                >
                  {product.title}
                </Typography>
                <span className={styles.mainTrendingProductPriceContainer}>
                  <Typography
                    variant="caption"
                    style={{ fontFamily: "Josefin Sans" }}
                    className={classes.color151875}
                  >
                    ${product.price.toFixed(2)}
                  </Typography>
                  <Typography
                    variant="overline"
                    style={{
                      color: "#b9bad6",
                      lineHeight: "12px",
                      fontWeight: 400,
                      textDecoration: "line-through",
                    }}
                  >
                    ${product.orignalPrice.toFixed(2)}
                  </Typography>
                </span>
              </Grid>
            );
          })}

          {trendingProductsOtherTrendingData.map((product, i) => {
            return (
              <Grid
                key={i}
                item
                className={`${styles.otherTrendingProduct} ${
                  styles["otherTrendingProduct" + i]
                }`}
              >
                <Typography
                  variant="h5"
                  style={{ fontSize: 26, lineHeight: "26px", marginBottom: 11 }}
                  className={classes.color151875}
                >
                  {product.title}
                </Typography>
                <NextLink href={product.goto}>
                  <Typography
                    variant="subtitle2"
                    color="secondary"
                    style={{ fontWeight: 600 }}
                  >
                    {product.link}
                  </Typography>
                </NextLink>
                <div
                  className={styles.otherTrendingProductImage}
                  style={product.imgStyle}
                >
                  <Image src={product.img} alt={product.title} />
                </div>
              </Grid>
            );
          })}

          <div className={styles.otherTrendingChairContainer}>
            {otherTrendingChairData.map((product, i) => {
              return (
                <div key={i} className={styles.otherTrendingChair}>
                  <div className={styles.otherTrendingChairImage}>
                    <Image src={product.img} alt={product.title} />
                  </div>
                  <div className={styles.otherTrendingChairText}>
                    <Typography
                      variant="subtitle2"
                      style={{
                        lineHeight: "18.75px",
                        marginBottom: 5,
                        fontWeight: "bold",
                      }}
                      className={classes.color151875}
                    >
                      {product.title}
                    </Typography>
                    <Typography
                      variant="overline"
                      style={{
                        textDecoration: "line-through",
                        lineHeight: "12px",
                        fontWeight: 400,
                      }}
                      className={classes.color151875}
                    >
                      ${product.price.toFixed(2)}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
        </Grid>
      </section>

      {/* discount item section */}
      <section className={styles.discountItemMainContainer}>
        <Typography variant="h2" className={classes.color151875}>
          Discount Item
        </Typography>
        <div className={styles.discountItemInnerContainer}>
          <div className={styles.discountItemLinkContainer}>
            {discountItemLink.map((link, i) => {
              return (
                <Typography
                  key={i}
                  variant="body1"
                  className={classes.color151875}
                  style={{
                    color: discountItemActiveLink === link ? "#FB2E86" : "",
                    fontWeight: 400,
                  }}
                  onClick={() => {
                    setDiscountItemActiveLink(link);
                  }}
                >
                  {link}
                </Typography>
              );
            })}
          </div>

          {discountItemData.map((item) => {
            return (
              item.category === discountItemActiveLink && (
                <div key={item.id} className={styles.discountItem}>
                  <div className={styles.discountItemText}>
                    <Typography
                      variant="h4"
                      className={classes.color151875}
                      style={{
                        marginBottom: 16,
                        fontWeight: "bold",
                      }}
                    >
                      {item.offer}
                    </Typography>
                    <Typography
                      variant="h6"
                      style={{
                        fontSize: 21,
                        lineHeight: "27.72px",
                        letterSpacing: "0.015em",
                        marginBottom: 20,
                      }}
                      color="secondary"
                    >
                      {item.productTitle}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        fontSize: 17,
                        fontFamily: "lato",
                        lineHeight: "30px",
                        fontWeight: 400,
                        marginBottom: 28,
                        color: "#B7BACB",
                      }}
                    >
                      {item.text}
                    </Typography>

                    <Grid
                      container
                      justifyContent="space-between"
                      rowGap="10px"
                      className={styles.discountItemFeatures}
                    >
                      {item.features.map((feature, i) => {
                        return (
                          <Grid
                            key={i}
                            item
                            className={styles.discountItemFeature}
                          >
                            <Tick />
                            <Typography
                              variant="body2"
                              style={{
                                lineHeight: "30px",
                                letterSpacing: "0.02em",
                                color: "#B8B8DC",
                                fontFamily: "lato",
                              }}
                            >
                              {feature}
                            </Typography>
                          </Grid>
                        );
                      })}
                    </Grid>

                    <Button
                      variant="contained"
                      color="secondary"
                      style={{
                        width: 200,
                        height: 57,
                        textTransform: "capitalize",
                        borderRadius: 0,
                        fontSize: 17,
                        lineHeight: "20px",
                      }}
                      disableElevation
                    >
                      Shop Now
                    </Button>
                  </div>
                  <div
                    className={styles.discountItemImage}
                    style={item.imgStyle}
                  >
                    <Image src={item.img} alt={item.productTitle} />
                  </div>
                </div>
              )
            );
          })}
        </div>
      </section>

      {/* top categories section */}
      <section className={styles.topCategories}>
        <Typography variant="h2" className={classes.color151875}>
          Top Categories
        </Typography>
        <Grid
          container
          columnGap="39px"
          className={styles.topCategoriesInnerContainer}
        >
          {topCategoriesItemData.map((product) => {
            return (
              product.category === topCategoryActiveLink && (
                <Grid key={product.id} item className={styles.topCategory}>
                  <div className={styles.topCategoryImageContainer}>
                    <div className={styles.topCategoryImage}>
                      <Image src={product.img} alt={product.title} />
                    </div>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#08D15F",
                        color: "#fff",
                        position: "absolute",
                        padding: "9px 18px",
                      }}
                      className={styles.topCategoryImageBtn}
                      disableElevation
                    >
                      <Typography
                        variant="overline"
                        style={{
                          textTransform: "capitalize",
                          lineHeight: "12px",
                        }}
                      >
                        View Shop
                      </Typography>
                    </Button>
                  </div>
                  <Typography
                    variant="subtitle1"
                    style={{
                      fontSize: 20,
                      lineHeight: "20px",
                      marginBottom: 13,
                    }}
                    className={classes.color151875}
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    style={{ lineHeight: "16px", fontFamily: "Josefin Sans" }}
                    className={classes.color151875}
                  >
                    {product.price}
                  </Typography>
                </Grid>
              )
            );
          })}

          <div className={styles.topCategoryBtnContainer}>
            {topCategoryBtnData.map((btn) => {
              return (
                <span
                  key={btn}
                  className={`${styles.topCategoryBtn} ${
                    topCategoryActiveLink === btn
                      ? styles.topCategoryActiveBtn
                      : ""
                  }`}
                  onClick={() => {
                    setTopCategoryActiveLink(btn);
                  }}
                />
              );
            })}
          </div>
        </Grid>
      </section>

      {/* friend companies */}
      <FriendCompanies />
    </React.Fragment>
  );
}

/// full lamp img size = 387px
/// overflow lamp img = 82px
/// text container size = 644px
/// full container width including lamp img and text = 949px
/// product hover icons container width = 126px and container height = 30px

/// latest products container width & shopex-feature width = 1164px
/// each latest product width = 360px & height = 306px
/// each latest product width on hover = 370px & height = 314

/// featureshopex feature on hover transform: translateY(5px)

/// unique features of latest & trending products width = 1050px & height = 550px
