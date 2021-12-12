import React, { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { Typography, makeStyles, Select, MenuItem } from "@material-ui/core";
import { Pagination } from "@mui/material";
import Header from "../../components/partials/Header/Header";
import styles from "../../styles/SearchResultPage.module.css";
import Image from "next/image";
import NextLink from "next/link";

import {
  AddToCart,
  ArrowDown,
  GridIcon,
  Heart,
  Menu,
  Star,
  ZoomGlass,
} from "../../components/icons/icons";
import { storedData } from "../../data/allData";
import FriendCompanies from "../../components/partials/FriendCompanies/FriendCompanies";

const useStyles = makeStyles({
  color151875: {
    color: "#151875",
  },
  select: {
    fontSize: 16,
    marginRight: 4,
    "& > div": {
      padding: "0 !important",
      fontSize: 16,
      fontFamily: "Lato",
      fontWeight: 400,
      color: "#8A8FB9",
      "&:focus": {
        backgroundColor: "transparent",
      },
    },
    "& > svg": {
      color: "#f1f1f1",
      fontSize: 20,
    },
  },
  menuItem: {
    fontSize: 16,
    lineHeight: "16px",
    fontWeight: 400,
    color: "#000",
    textTransform: "capitalize",
    padding: "5px 10px",
  },
});

let isInitial = true;

export default function Pages() {
  const classes = useStyles();
  const router = useRouter();
  const searchQuery = router.query.searchResult;
  const [sortBy, setSortBy] = useState("best match");
  const [page, setPage] = useState(1);
  const stars = [1, 2, 3, 4, 5];

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    document
      .getElementById("searchControlInfoContainer")
      .scrollIntoView({ behavior: "smooth" });
  }, [page]);

  const sortChangeHandler = (event) => {
    setSortBy(event.target.value);
  };
  const pageChangeHandler = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const filteredData = storedData.filter((data) =>
    data.type.includes(`${searchQuery}`)
  );
  console.log(filteredData);

  return filteredData.length > 0 ? (
    <React.Fragment>
      <Header heading="Shop List" path="Shop List" />

      {/* search control and information container  */}
      <section
        id="searchControlInfoContainer"
        className={styles.searchControlInfoContainer}
      >
        <div className={styles.searchInfo}>
          <Typography
            variant="h6"
            className={classes.color151875}
            style={{ textTransform: "capitalize" }}
          >
            {`${searchQuery} Search Result`}
          </Typography>
          <Typography
            variant="overline"
            style={{ fontFamily: "lato", textTransform: "capitalize" }}
            color="primary"
          >
            About {filteredData.length} results
          </Typography>
        </div>
        {/* result per page */}
        <span style={{ marginRight: 27 }} className={styles.displayflex}>
          <Typography
            variant="subtitle2"
            style={{ color: "#3F509E", marginRight: 8 }}
          >
            Per Page:
          </Typography>
          <input
            className={styles.input}
            style={{ width: 55, height: 25 }}
            value="10"
            readOnly
          />
        </span>

        <div className={styles.displayflex}>
          <Typography
            variant="subtitle2"
            style={{ color: "#3F509E", marginRight: 8 }}
          >
            Sort By:
          </Typography>
          <span className={styles.searchControlSortDropdown}>
            <Select
              className={classes.select}
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={sortBy}
              onChange={sortChangeHandler}
              disableUnderline
            >
              {sortBy === "best match" ? (
                <MenuItem className={classes.menuItem} value={sortBy}>
                  Best Match
                </MenuItem>
              ) : (
                <MenuItem className={classes.menuItem} value="best match">
                  Best Match
                </MenuItem>
              )}
              <MenuItem className={classes.menuItem} value="low to high">
                Low To High
              </MenuItem>

              <MenuItem className={classes.menuItem} value="high to low">
                High To Low
              </MenuItem>
            </Select>
            <ArrowDown />
          </span>
        </div>

        <span className={styles.displayflex}>
          <Typography variant="subtitle2" style={{ color: "#3F509E" }}>
            View:
          </Typography>
          <span className={styles.searchControlViewIconContainer}>
            <GridIcon />
            <Menu />
          </span>
          <input className={styles.input} style={{ width: 162, height: 30 }} />
        </span>
      </section>

      {/* search result container */}
      <section className={styles.searchResultsContainer}>
        <div className={styles.searchResultSideFilterBar}></div>
        <div className={styles.searchResultsInnerContainer}>
          {filteredData.slice((page - 1) * 10, page * 10).map((product) => {
            return (
              <div key={product.id} className={styles.searchResult}>
                <NextLink href={product.link}>
                  <div className={styles.searchResultImage}>
                    <Image src={product.img} alt="product img" />
                  </div>
                </NextLink>
                <div className={styles.searchResultText}>
                  <NextLink href={product.link}>
                    <Typography
                      variant="subtitle1"
                      style={{
                        color: "#111C85",
                        marginBottom: 13,
                        fontSize: 18,
                        fontWeight: "bold",
                        lineHeight: "20px",
                        cursor: "pointer",
                      }}
                    >
                      {product.title.trim().length > 19
                        ? `${product.title.slice(0, 19)}...`
                        : product.id}
                    </Typography>
                  </NextLink>
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
                            color={
                              star <= product.rating ? "#FFC416" : "#B2B2B2"
                            }
                          />
                        );
                      })}
                      {/* <Star color="#B2B2B2" /> */}
                    </span>
                  </span>

                  <Typography variant="body2" style={{ color: "#9295AA" }}>
                    {product.text}
                  </Typography>

                  <span className={styles.searchResultIconContainer}>
                    <span>
                      <AddToCart />
                    </span>
                    <span>
                      <Heart />
                    </span>
                    <span>
                      <ZoomGlass />
                    </span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.paginationContainer}>
          <Pagination
            count={Math.ceil(filteredData.length / 10)}
            variant="outlined"
            className={styles.pagination}
            page={page}
            onChange={pageChangeHandler}
          />
        </div>
      </section>

      <FriendCompanies />
    </React.Fragment>
  ) : (
    <Typography style={{ textAlign: "center", margin: "10rem" }} variant="h3">
      No Search Result Found !!
    </Typography>
  );
}
