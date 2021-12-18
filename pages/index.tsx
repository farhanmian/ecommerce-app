import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import NextLink from "next/link";
import { Button, Typography, makeStyles, Card } from "@material-ui/core";
import { Grid } from "@mui/material";

import lamp from "../assets/img/headerlamp.png";
import couch from "../assets/img/headerCouch.png";
import couch2 from "../assets/img/featureOfLatestTrending.png";

import {
  ZoomGlass,
  AddToCart,
  Heart,
  Sale,
  Tick,
} from "../components/icons/icons";

import {
  // featuredProductData,
  latestProductsLink,
  shopexFeaturesData,
  // latestProductsData,
  // trendingProductsData,
  trendingProductsOtherTrendingData,
  otherTrendingChairData,
  discountItemLink,
  discountItemData,
  // topCategoriesItemData,
  topCategoryBtnData,
} from "../data/indexData";
import { storedData } from "../data/allData";
import Divider from "../components/partials/Divider/Divider";
import { useAppContext } from "../store/context/appContext";

const useStyles = makeStyles({
  headerBtn: {
    padding: "16px 40px",
    borderRadius: 2,
    textTransform: "capitalize",
  },
  latestProductCard: {
    transition: "all .3s",
    borderRadius: 2,
    padding: 3,
  },
  uniqueFeatureOfLatestTrendingProductsBtn: {
    padding: "14px 24px",
    minWidth: 157,
    borderRadius: 2,
    marginRight: 19,
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  btnEffect: {
    "&:hover": {
      boxShadow: "1px 5px 5px rgba(0,0,0,.12)",
    },
    "&:active": {
      boxShadow: "none",
    },
  },
  topCategoryBtn: {
    backgroundColor: "#08D15F",
    color: "#fff",
    position: "absolute",
    padding: "9px 18px",
    "&:hover": {
      boxShadow: "0px 3px 4px rgba(0,0,0,.12)",
      backgroundColor: "#03B851",
    },
    "&:active": {
      boxShadow: "none",
    },
  },
  fontJosefinSans: {
    fontFamily: "Josefin Sans",
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
  darkPurple: {
    color: "#1A0B5B",
  },
});

const Home = () => {
  const test = useAppContext();
  console.log(test);

  const classes = useStyles();
  const [latestProductLink, setLatestProductLink] = useState(
    "LatestProductsNew Arrival"
  );
  const [discountItemActiveLink, setDiscountItemActiveLink] =
    useState("Wood Chair");
  const [topCategoryActiveLink, setTopCategoryActiveLink] = useState("1");

  /// filtering data
  const featuredProductData = storedData.filter((product) => {
    return product.category.includes("FeaturedProducts");
  });
  const latestProductsData = storedData.filter((product) => {
    return product.category.includes("LatestProducts");
  });
  const trendingProductsData = storedData.filter((product) => {
    return product.category.includes("TrendingProducts");
  });
  const topCategoriesItemData = storedData.filter((product) => {
    return product.category.includes("TopCategories");
  });

  return (
    <React.Fragment>
      {/* header section */}
      <header className={styles.header}>
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
              style={{ marginBottom: 28 }}
              color="primary"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing <br /> in phasellus non in justo.
            </Typography>

            <Button
              className={`${classes.headerBtn} ${classes.btnEffect}`}
              variant="contained"
              color="secondary"
              disableElevation
            >
              <Typography
                variant="subtitle2"
                className={classes.fontJosefinSans}
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
      </header>
      <Divider />

      {/* featured product section */}
      <section className={styles.featuredProducts}>
        <Typography variant="h2" className={classes.darkPurple}>
          Featured Products
        </Typography>

        <div className={styles.featuredProductsContainer}>
          <div className={styles.featuredProductsInnerContainer}>
            {featuredProductData.map((product, i) => {
              return (
                <NextLink
                  key={i}
                  href={`products/${product.type[0]}/${product.id}`}
                >
                  <div
                    className={`${styles.featuredProduct} ${classes.featuredProduct}`}
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
                      <Image src={product.img} alt={product.title} />
                    </div>
                    <Typography
                      variant="subtitle1"
                      color="secondary"
                      style={{ lineHeight: "21.6px", fontWeight: 700 }}
                    >
                      {product.title}
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
                      Code - Y523201
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
                </NextLink>
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
      <Divider />

      {/* latest product section */}
      <section className={styles.latestProducts}>
        <Typography variant="h2" style={{ color: "#151875" }}>
          Latest Products
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
                  color:
                    latestProductLink === `LatestProducts${link}`
                      ? "#FB2E86"
                      : "#151875",
                }}
                onClick={() => {
                  setLatestProductLink(`LatestProducts${link}`);
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
              product.categoryLink.includes(latestProductLink) && (
                <NextLink
                  href={`products/${product.type[0]}/${product.id}`}
                  key={i}
                >
                  <Grid item className={styles.latestProduct}>
                    <Card
                      className={`${styles.latestProductCard} ${classes.latestProductCard}`}
                    >
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
                            transform: "rotate(0.36deg)",
                          }}
                        >
                          {product.title}
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
                    </Card>
                  </Grid>
                </NextLink>
              )
            );
          })}
        </Grid>
      </section>
      <Divider />

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
      <Divider />

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
                className={`${classes.btnEffect} ${classes.uniqueFeatureOfLatestTrendingProductsBtn}`}
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
                    fontWeight: 600,
                  }}
                  className={classes.color151875}
                >
                  B&B Italian Sofa
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
      <Divider />

      {/* trending products */}
      <section className={styles.trendingProducts}>
        <Typography
          variant="h2"
          className={classes.color151875}
          style={{ marginBottom: 38 }}
        >
          Trending Products
        </Typography>

        <Grid
          container
          columnGap="28px"
          rowGap="40px"
          className={styles.trendingProductsContainer}
        >
          {trendingProductsData.map((product) => {
            return (
              <NextLink
                key={product.id}
                href={`/products/${product.type[0]}/${product.id}`}
              >
                <Grid item className={styles.mainTrendingProduct}>
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
              </NextLink>
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
      <Divider />

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
                        borderRadius: 2,
                        fontSize: 17,
                        lineHeight: "20px",
                      }}
                      className={classes.btnEffect}
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
      <Divider />

      {/* top categories section */}
      <section className={styles.topCategories}>
        <Typography variant="h2" className={classes.color151875}>
          Top Categories
        </Typography>
        <Grid
          container
          columnGap="40px"
          className={styles.topCategoriesInnerContainer}
        >
          {topCategoriesItemData.map((product) => {
            return (
              product.categoryLink.includes(topCategoryActiveLink) && (
                <Grid key={product.id} item className={styles.topCategory}>
                  <div className={styles.topCategoryImageContainer}>
                    <div className={styles.topCategoryImage}>
                      <Image src={product.img} alt={product.title} />
                    </div>
                    <NextLink
                      href={`products/${product.type[0]}/${product.id}`}
                    >
                      <Button
                        variant="contained"
                        className={`${styles.topCategoryImageBtn} ${classes.topCategoryBtn}`}
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
                    </NextLink>
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
      <Divider />
    </React.Fragment>
  );
};

export default Home;

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

//// utility classes material-ui

/// material ui theme spacing =  default spacing = 8px
