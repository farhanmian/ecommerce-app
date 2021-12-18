import React from "react";
import Header from "../components/partials/Header/Header";
import styles from "../styles/Profile.module.css";
import { useAppContext } from "../store/context/appContext";
import { Typography, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles({
  profileDataFieldKey: {
    marginRight: "50%",
  },
});

export default function account() {
  const classes = useStyles();
  const { userInfo } = useAppContext();
  console.log(userInfo);

  const userData = {
    name: "farhan",
    email: "farhan099@gmail.com",
    location: "India UP",
    address: "kari kuan",
    phone: "7983265440",
    currency: "$dollar",
  };
  /* also 
  logout
  wishlist
  order
  change password
  delete account
  */

  return (
    <React.Fragment>
      <Header heading="My Account" path="My Account" />
      <section className={styles.profile}>
        <div className={styles.profileInnerContainer}>
          {Object.keys(userData).map((key) => {
            return (
              <div className={styles.profileDataField}>
                <Typography className={classes.profileDataFieldKey}>
                  {key}
                </Typography>

                <TextField
                  value={userData[key]}
                  variant="outlined"
                  size="small"
                  disabled
                />
                {/* <Typography>{userData[key]}</Typography> */}
              </div>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
}
