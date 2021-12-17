import React, { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import {
  Typography,
  makeStyles,
  Select,
  MenuItem,
  // Checkbox,
  // FormControlLabel,
} from "@material-ui/core";
import { Grid } from "@mui/material";
import { Pagination } from "@mui/material";
import Header from "../../../components/partials/Header/Header";
import styles from "../../../styles/SearchResultPage.module.css";

import {
  ArrowDown,
  GridIcon,
  Menu,
  // Star,
} from "../../../components/icons/icons";
import { storedData } from "../../../data/allData";
import Divider from "../../../components/partials/Divider/Divider";
import RowProduct from "../../../components/RowProduct/RowProduct";
import GridProduct from "../../../components/GridProduct/GridProduct";

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
  productFilterHeading: {
    fontSize: 20,
    lineHeight: "30px",
    fontWeight: 700,
    textDecoration: "underline",
    color: "#292C58",
  },
  checkboxFormControl: {
    width: "100%",
    height: 30,
    marginBottom: 3,
    "&> *": {
      color: "#989BB5",
      fontSize: 15,
      lineHeight: "30px",
      fontFamily: "lato",
      fontWeight: 400,
      "& > *": {
        "& > svg": {
          width: 20,
          height: 20,
        },
      },
    },
  },
});

let isInitial = true;

export default function ProductsList() {
  const classes = useStyles();
  const router = useRouter();
  const [sortBy, setSortBy] = useState("best match");
  const [page, setPage] = useState(1);
  const [viewType, setViewType] = useState("row");

  const query = router.query.searchResult;
  const searchQuery = query && query.toString().replace(/-/g, " ");
  console.log(searchQuery);

  // const stars = [1, 2, 3, 4, 5];
  // const priceCheckboxes = [
  //   "$0.00 - $10.00",
  //   "$10.00 - $30.00",
  //   "$30.00 - $50.00",
  //   "$50.00+",
  // ];

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    document.getElementById("searchControlInfoContainer") &&
      document
        .getElementById("searchControlInfoContainer")
        .scrollIntoView({ behavior: "smooth" });
  }, [page]);

  const filteredData = storedData.filter((data) =>
    data.type.includes(`${searchQuery}`)
  );
  const pageCount = Math.ceil(
    filteredData.length / (viewType === "row" ? 10 : 12)
  );
  useEffect(() => {
    if (pageCount && pageCount < page) {
      console.log("user should be on " + pageCount + "rd page");
      setPage(pageCount);
    }
  }, [pageCount]);

  const sortChangeHandler = (event) => {
    setSortBy(event.target.value);
  };
  const pageChangeHandler = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return filteredData && filteredData.length > 0 ? (
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
            value={viewType === "row" ? "10" : "12"}
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
            <span
              className={styles.displayflex}
              onClick={() => {
                setViewType("grid");
              }}
            >
              <GridIcon />
            </span>
            <span
              className={styles.displayflex}
              onClick={() => {
                setViewType("row");
              }}
            >
              <Menu />
            </span>
          </span>
          <input
            className={styles.input}
            value={viewType}
            readOnly
            style={{ width: 162, height: 30, textTransform: "capitalize" }}
          />
        </span>
      </section>

      {/* search result container */}
      <section className={styles.searchResultsContainer}>
        {/* sidebar */}
        <Grid
          columnGap="53px"
          container
          justifyContent="center"
          className={styles.searchResultsInnerContainer}
        >
          {viewType === "row" &&
            filteredData.slice((page - 1) * 10, page * 10).map((product) => {
              return (
                <RowProduct
                  key={product.id}
                  product={product}
                  href={`${searchQuery}/${product.id}`}
                />
              );
            })}
          {viewType === "grid" &&
            filteredData.slice((page - 1) * 12, page * 12).map((product) => {
              return (
                <GridProduct
                  key={product.id}
                  product={product}
                  href={`${searchQuery}/${product.id}`}
                />
              );
            })}
        </Grid>

        {pageCount > 1 && (
          <div className={styles.paginationContainer}>
            <Pagination
              count={pageCount}
              variant="outlined"
              className={styles.pagination}
              page={page}
              onChange={pageChangeHandler}
            />
          </div>
        )}
      </section>
      <Divider />
    </React.Fragment>
  ) : (
    <Typography style={{ textAlign: "center", margin: "10rem" }} variant="h3">
      No Search Result Found !!
    </Typography>
  );
}

/*

<div className={styles.searchResultSideFilterBar}>
          <div className={styles.priceFilterContainer}>
            <Typography
              variant="body2"
              className={classes.productFilterHeading}
            >
              Price Filter
            </Typography>
            {priceCheckboxes.map((label) => {
              return (
                <FormControlLabel
                  className={classes.checkboxFormControl}
                  label={label}
                  onChange={() => {
                    priceFilterChangeHandler(label);
                  }}
                  control={
                    <Checkbox
                      // checked={checked[0] && checked[1]}
                      // indeterminate={checked[0] !== checked[1]}
                      // onChange={handleChange1}
                      color="secondary"
                    />
                  }
                />
              );
            })}

            
          </div>
          <div className={styles.ratingContainer}>
            <Typography
              variant="body2"
              className={classes.productFilterHeading}
            >
              Rating Item
            </Typography>
            {stars.map((star) => {
              return (
                <FormControlLabel
                  className={classes.checkboxFormControl}
                  label={stars.map((i) => (
                    <Star color={i <= star ? "#FFC107" : "#B2B2B2"} />
                  ))}
                  control={
                    <Checkbox
                    // checked={checked[0] && checked[1]}
                    // indeterminate={checked[0] !== checked[1]}
                    // onChange={handleChange1}
                    />
                  }
                />
              );
            })}
          </div>
        </div>

        **/
