import React from "react";
import styles from "../../../styles/Nav.module.css";
import {
  Link,
  Typography,
  makeStyles,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import { FormControl } from "@mui/material";
import { User, Heart, AddToCart, SearchGlass } from "../../icons/icons";

const useStyles = makeStyles({
  navLink: {
    cursor: "pointer",
  },
  topNavLinkText: {
    lineHeight: "16px",
    fontWeight: 600,
  },
  select: {
    fontSize: 16,
    "& > div": {
      fontSize: 16,
      fontFamily: "Lato",
      fontWeight: 400,
      color: "#f1f1f1",
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
  },
  pageSelect: {
    fontSize: 16,
    "& div:focus": {
      backgroundColor: "transparent",
    },
  },
});

export default function Nav() {
  const classes = useStyles();

  const [currency, setCurrency] = React.useState("usd");
  const [page, setPage] = React.useState("home");

  const currencyChangeHandler = (event) => {
    setCurrency(event.target.value);
  };
  const pageChangeHandler = (event) => {
    setPage(event.target.value);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navTopContainer}>
        <div className={styles.navTopLinksContainer}>
          <FormControl style={{ marginRight: 17.67 }} variant="standard">
            <Select
              className={classes.select}
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={currency}
              onChange={currencyChangeHandler}
              disableUnderline
            >
              {currency === "usd" ? (
                <MenuItem className={classes.menuItem} value={currency}>
                  USD
                </MenuItem>
              ) : (
                <MenuItem className={classes.menuItem} value="usd">
                  USD
                </MenuItem>
              )}
              <MenuItem className={classes.menuItem} value="inr">
                INR
              </MenuItem>
            </Select>
          </FormControl>

          <Link
            color="textSecondary"
            className={`${classes.navLink} ${styles.topNavLink}`}
            style={{ marginRight: 19 }}
          >
            <Typography className={classes.topNavLinkText} variant="subtitle2">
              Login
            </Typography>
            <User />
          </Link>
          <Link
            color="textSecondary"
            className={`${classes.navLink} ${styles.topNavLink}`}
            style={{ marginRight: 29.83 }}
          >
            <Typography className={classes.topNavLinkText} variant="subtitle2">
              Wishlist
            </Typography>
            <Heart />
          </Link>

          <Link
            color="textSecondary"
            className={`${classes.navLink} ${styles.topNavLink}`}
          >
            <AddToCart />
          </Link>
        </div>
      </div>

      <div className={styles.navBottomContainer}>
        <div className={styles.navBottomInnerContainer}>
          <Typography style={{ marginRight: 88 }} variant="h5">
            Hekto
          </Typography>
          <div className={styles.navBottomLinksContainer}>
            <Link
              className={classes.navLink}
              style={{ marginRight: 23 }}
              variant="subtitle2"
            >
              <FormControl variant="standard">
                <Select
                  className={classes.pageSelect}
                  labelId="customized-select-label"
                  id="customized-select"
                  value={page}
                  onChange={pageChangeHandler}
                  disableUnderline
                >
                  {page === "home" ? (
                    <MenuItem className={classes.menuItem} value={page}>
                      <Typography color="secondary" variant="subtitle2">
                        Home
                      </Typography>
                    </MenuItem>
                  ) : (
                    <MenuItem className={classes.menuItem} value="home">
                      <Typography color="secondary" variant="subtitle2">
                        Home
                      </Typography>
                    </MenuItem>
                  )}
                  <MenuItem className={classes.menuItem} value="another-page">
                    <Typography color="secondary" variant="subtitle2">
                      AnotherPage
                    </Typography>
                  </MenuItem>
                </Select>
              </FormControl>
            </Link>

            <Link className={classes.navLink}>
              <Typography variant="subtitle2">Pages</Typography>
            </Link>
            <Link className={classes.navLink}>
              <Typography variant="subtitle2">Product</Typography>
            </Link>
            <Link className={classes.navLink}>
              <Typography variant="subtitle2">Shop</Typography>
            </Link>
            <Link className={classes.navLink}>
              <Typography variant="subtitle2">Contact</Typography>
            </Link>
          </div>

          <form className={styles.navBottomForm}>
            <input type="text" className={styles.navBottomInput} required />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              disableElevation
              style={{
                padding: 0,
                maxWidth: 51,
                minWidth: 51,
                height: 40,
                borderRadius: 0,
              }}
            >
              <SearchGlass />
            </Button>
          </form>
        </div>
      </div>
    </nav>
  );
}
