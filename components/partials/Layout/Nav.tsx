import React, { useEffect, useRef } from "react";
import styles from "../../../styles/Nav.module.css";
import {
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
import { useAppContext } from "../../../store/context/appContext";
import Loading from "../Loading/Loading";

import { doc, setDoc, getFirestore } from "firebase/firestore";
const db = getFirestore();

const pagesLink = ["products", "contact", "about"];

const useStyles = makeStyles({
  navHeading: {
    marginRight: 88,
    cursor: "pointer",
    color: "#101750",
    transition: "all .3s",
    "&:hover": {
      color: "#18296a",
    },
  },
  topNavLinkText: {
    lineHeight: "16px",
    fontWeight: 600,
    color: "#F1F1F1",
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
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const loggedInUser = useAppContext();
  const { setCurrencyType, currencyType, cartLength } = useAppContext();

  const classes = useStyles();

  const [currency, setCurrency] = React.useState("usd");
  const [page, setPage] = React.useState("home");

  useEffect(() => {
    setCurrency(
      loggedInUser.userInfo && loggedInUser.userInfo.userData.currency
        ? loggedInUser.userInfo.userData.currency
        : "usd"
    );
    console.log("currency changed");
  }, [loggedInUser.accountLoading]);

  useEffect(() => {
    setCurrency(currencyType);
  }, [currencyType]);

  const currencyChangeHandler = (event) => {
    setCurrency(event.target.value);
    setCurrencyType(event.target.value);
    console.log(event.target.value);

    if (!loggedInUser.userInfo) {
      return;
    }
    const userInfo = loggedInUser.userInfo;
    const data = {
      name: userInfo.userData.name,
      email: userInfo.userData.email,
      location: userInfo.userData.location ? userInfo.userData.location : "",
      address: userInfo.userData.address ? userInfo.userData.address : "",
      phone: userInfo.userData.phone ? userInfo.userData.phone : "",
      currency: event.target.value,
    };
    const updateUserData = async () => {
      await setDoc(doc(db, "users", loggedInUser.userInfo.docId), data);
    };

    updateUserData();
  };
  const pageChangeHandler = (event) => {
    setPage(event.target.value);
  };

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const searchValue = searchInputRef.current?.value
      .replace(/\s/g, "-")
      .toLocaleLowerCase();
    if (searchValue.trim().length < 1) {
      return;
    }
    router.push(`/products/${searchValue}`);
    searchInputRef.current.value = "";
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navTopContainer}>
        <div className={styles.navTopLinksContainer}>
          <FormControl style={{ marginRight: 17.67 }} variant="standard">
            {!loggedInUser.accountLoading ? (
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
            ) : (
              <Loading width={15} color="#f1f1f1" />
            )}
          </FormControl>
          <NextLink href={!loggedInUser.userInfo ? "/login" : "/profile"}>
            <span
              color="textSecondary"
              className={styles.topNavLink}
              style={{ marginRight: 19 }}
            >
              {!loggedInUser.accountLoading ? (
                <React.Fragment>
                  <Typography
                    className={classes.topNavLinkText}
                    variant="subtitle2"
                  >
                    {!loggedInUser.userInfo ? "Login" : "Account"}
                  </Typography>
                  <User />
                </React.Fragment>
              ) : (
                <Loading width={15} color="#f1f1f1" />
              )}
            </span>
          </NextLink>
          <NextLink href="/wishlist">
            <span
              color="textSecondary"
              className={styles.topNavLink}
              style={{ marginRight: 29.83 }}
            >
              <Typography
                className={classes.topNavLinkText}
                variant="subtitle2"
              >
                Wishlist
              </Typography>
              <Heart />
            </span>
          </NextLink>

          <NextLink href="/cart">
            <span
              color="textSecondary"
              className={`${styles.cartContainer} ${styles.topNavLink}`}
            >
              {cartLength > 0 && (
                <span className={styles.cartItemLength}>
                  <Typography variant="caption">{cartLength}</Typography>
                </span>
              )}
              <AddToCart />
            </span>
          </NextLink>
        </div>
      </div>

      <div className={styles.navBottomContainer}>
        <div className={styles.navBottomInnerContainer}>
          <NextLink href="/">
            <Typography className={classes.navHeading} variant="h5">
              Hekto
            </Typography>
          </NextLink>
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

            {pagesLink.map((link, i) => {
              return (
                <NextLink href={`/${link}`} key={i}>
                  <Typography
                    variant="subtitle2"
                    className={`${classes.BottomNavLinkText} ${
                      router.pathname.replace("/", "") === link
                        ? classes.activeLink
                        : ""
                    }
                      `}
                  >
                    {link}
                  </Typography>
                </NextLink>
              );
            })}
          </div>

          <form onSubmit={formSubmitHandler} className={styles.navBottomForm}>
            <input
              ref={searchInputRef}
              type="text"
              className={styles.navBottomInput}
              required
            />
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
