import { createTheme } from "@material-ui/core";

const theme = createTheme({
  typography: {
    /// heading 1 - only used once on home page
    h1: {
      fontSize: 53,
      lineHeight: "82px",
      letterSpacing: ".015em",
    },
    // heading 2 - used for product category heading eg: Featured Product, Latest Product, What Shopex Offer
    h2: {
      fontSize: 42,
      lineHeight: "49.22px",
    },
    //heading 3 - used in header except in home-page to show what page is about eg : Shop Grid, Shop List, Product Detail
    h3: {
      fontSize: 36,
      lineHeight: "42.19px",
    },
    h4: {
      fontSize: 35,
      lineHeight: "46.2px",
      letterSpacing: ".015em",
    },
    // heading 5 - used in nav for website name
    h5: {
      fontSize: 34,
      lineHeight: "34px",
      fontWeight: "bold",
    },
    h6: {
      fontSize: 22,
      lineHeight: "25.78px",
    },
    body1: {
      fontSize: 18,
      lineHeight: "21.6px",
      fontWeight: 700,
    },
    // used in many places for eg: product short descriptiondescription
    body2: {
      fontSize: 16,
      lineHeight: "28px",
    },
    subtitle1: {
      fontSize: 18,
      lineHeight: "18px",
    },
    subtitle2: {
      fontSize: 16,
      lineHeight: "20px",
    },
    caption: {
      fontSize: 14,
      lineHeight: "14px",
    },
    overline: {
      fontSize: 12,
      lineHeight: "14.4px",
    },
  },
  palette: {
    text: {
      primary: "#000",
    },
  },
});
