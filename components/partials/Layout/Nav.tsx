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
import { useRouter } from "next/dist/client/router";
import NextLink from "next/link";

const pagesLink = ["pages", "product", "shop", "contact"];

const useStyles = makeStyles({
  navLink: {
    cursor: "pointer",
  },
  topNavLinkText: {
    lineHeight: "16px",
    fontWeight: 600,
  },
  BottomNavLinkText: {
    color: "#0D0E43",
    cursor: "pointer",
    textTransform: "capitalize",
  },
  activeLink: {
    color: "#FB2E86",
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
    padding: 0,
  },
  pageSelect: {
    fontSize: 16,
    "& div:focus": {
      backgroundColor: "transparent",
    },
  },
});

export default function Nav() {
  const router = useRouter();

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
            <FormControl variant="standard">
              <Select
                className={classes.pageSelect}
                labelId="customized-select-label"
                id="customized-select"
                value={page}
                onChange={pageChangeHandler}
                disableUnderline
                ref={React.createRef()}
              >
                {page === "home" ? (
                  <MenuItem className={classes.menuItem} value={page}>
                    <NextLink href="/">
                      <Typography
                        className={
                          router.pathname === "/" ? classes.activeLink : ""
                        }
                        style={{ width: "100%", padding: 3 }}
                        variant="subtitle2"
                      >
                        Home
                      </Typography>
                    </NextLink>
                  </MenuItem>
                ) : (
                  <MenuItem className={classes.menuItem} value="home">
                    <NextLink href="/">
                      <Typography
                        className={
                          router.pathname === "/" ? classes.activeLink : ""
                        }
                        style={{ width: "100%", padding: 3 }}
                        variant="subtitle2"
                      >
                        Home
                      </Typography>
                    </NextLink>
                  </MenuItem>
                )}
                <MenuItem className={classes.menuItem} value="another-page">
                  <NextLink href="/anotherpage">
                    <Typography
                      className={
                        router.asPath === "/anotherpage"
                          ? classes.activeLink
                          : ""
                      }
                      style={{
                        width: "100%",
                        padding: 3,
                      }}
                      variant="subtitle2"
                    >
                      AnotherPage
                    </Typography>
                  </NextLink>
                </MenuItem>
              </Select>
            </FormControl>

            {pagesLink.map((link) => {
              return (
                <NextLink href={link} key={link}>
                  <Typography
                    variant="subtitle2"
                    className={classes.BottomNavLinkText}
                  >
                    {link}
                  </Typography>
                </NextLink>
              );
            })}
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
