import {
  Link,
  Typography,
  makeStyles,
  InputLabel,
  Select,
  styled,
  InputBase,
  MenuItem,
} from "@material-ui/core";
import { FormControl } from "@mui/material";

import React from "react";
import styles from "../../../styles/Nav.module.css";

const useStyles = makeStyles({
  navLink: {
    cursor: "pointer",
  },
});

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: ["-apple-system"].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  const [currency, setCurrency] = React.useState("usd");
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <React.Fragment>
      <nav className={styles.nav}>
        <div className={styles.navInnerContainer}>
          <div className={styles.navLinksContainer}>
            <FormControl sx={{ m: 1 }} variant="standard">
              <InputLabel id="demo-customized-select-label">
                Currency
              </InputLabel>
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={currency}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                {currency === "usd" ? (
                  <MenuItem value={currency}>USD</MenuItem>
                ) : (
                  <MenuItem value="usd">USD</MenuItem>
                )}
                <MenuItem value="inr">INR</MenuItem>
              </Select>
            </FormControl>

            <Link
              color="textSecondary"
              className={classes.navLink}
              style={{ marginRight: 19 }}
            >
              <Typography variant="subtitle2">Login</Typography>
            </Link>
            <Link
              color="textSecondary"
              className={classes.navLink}
              style={{ marginRight: 29.83 }}
            >
              <Typography variant="subtitle2">Wishlist</Typography>
            </Link>
          </div>
        </div>
      </nav>
      {children}
    </React.Fragment>
  );
};

export default Layout;
