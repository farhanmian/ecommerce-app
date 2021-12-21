import React, { useEffect, useReducer, useState } from "react";
import Header from "../components/partials/Header/Header";
import styles from "../styles/Profile.module.css";
import { useAppContext } from "../store/context/appContext";
import { Edit } from "@mui/icons-material";

import {
  Typography,
  makeStyles,
  TextField,
  Card,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  profileDataFieldKey: {
    width: 100,
    marginRight: 30,
    fontWeight: 500,
  },
  textField: {
    "& > *": {
      "&> *": {
        fontWeight: 300,
      },
    },
  },
  color151875: {
    color: "#151875",
  },
  color646262: {
    color: "#646262",
  },
  heading: {
    fontSize: 28,
    lineHeight: "32px",
    marginBottom: 10,
  },
  innerContainer: {
    borderRadius: 10,
    width: "60%",
    margin: "auto",
    padding: 40,
    display: "flex",
    justifyContent: "space-between",
  },

  changePasstextField: {
    width: "90%",
    "& > *": {
      "&> *": {
        fontWeight: 300,
        fontSize: 17,
      },
    },
  },
  btn: {
    textTransform: "capitalize",
    "&:hover": {
      boxShadow: "1px 3px 6px rgba(0,0,0,.13)",
    },
    "&:active": {
      boxShadow: "none",
    },
  },
  editIcon: {
    fill: "#fff",
  },
  avtiveIcon: {
    boxShadow: "none",
    backgroundImage:
      "linear-gradient(to right bottom, #ebe2e6, #f8f1f4, #e2e2e2)",
    transition: "all .3s",
    "& > svg": {
      fill: "#000",
    },
    "&:hover": {
      boxShadow: "none",
    },
    "&:avtive": {
      boxShadow: "none",
    },
  },
  noPointerEvent: {
    pointerEvents: "none",
  },
});

const userInfoReducerFn = (state, action) => {
  if (action.type === "replaceData") {
    return {
      name: action.data.name,
      email: action.data.email,
      location: action.data.location,
      address: action.data.address,
      phone: action.data.phone,
      currency: action.data.currency,
    };
  }
  if (action.type === "name") {
    return { name: action.value };
  }
  if (action.type === "email") {
    return { email: action.value };
  }
  if (action.type === "location") {
    return { location: action.value };
  }
  if (action.type === "address") {
    return { address: action.value };
  }
  if (action.type === "phone") {
    return { phone: action.value };
  }
  if (action.type === "currency") {
    return { currency: action.value };
  }
};

const userInitialState = {
  name: "",
  email: "",
  location: "",
  address: "",
  phone: "",
  currency: "$Doller",
};

const arrayOfFields = [
  "name",
  "email",
  "location",
  "address",
  "phone",
  "currency",
];

export default function account() {
  const classes = useStyles();
  const { userInfo } = useAppContext();

  const [changeProfileInfo, setChangeProfileInfo] = useState(false);
  const [doesDataChanged, setdoesDataChanged] = useState(false);

  const [userInfoState, dispatchUserInfoStateFn] = useReducer(
    userInfoReducerFn,
    userInitialState
  );
  const [prevUserState, setPrevUserState] = useState(userInfoState);

  // const [userData, setUserData] = useState({
  //   name: "farhan",
  //   email: "farhanmian099@gmail.com",
  //   location: "",
  //   address: "kari kuan",
  //   phone: "7983265440",
  //   currency: "$Dollar",
  // });
  /* also 
  logout
  wishlist
  order
  change password
  log out account
  */

  const userProfileInfoChangeHandler = (e) => {
    if (!changeProfileInfo) {
      return;
    }

    const key: string = e.target.id;
    const value: string = e.target.value;
    console.log(key);
    setdoesDataChanged(true);

    dispatchUserInfoStateFn({ type: key, value: value });
  };

  const userProfileInfoSaveHandler = () => {
    setChangeProfileInfo(false);
    
  };

  const cancelChangeHandler = () => {
    setChangeProfileInfo(false);
    dispatchUserInfoStateFn({ type: "replaceData", data: prevUserState });
  };

  useEffect(() => {
    const data = {
      name: userInfo && userInfo.userData.name,
      email: userInfo && userInfo.userData.email,
      location: (userInfo && userInfo.userData.location) || null,
      phone: (userInfo && userInfo.userData.location) || null,
      currency: (userInfo && userInfo.userData.currency) || null,
    };
    dispatchUserInfoStateFn({ type: "replaceData", data });
  }, [userInfo]);

  return (
    <React.Fragment>
      <Header heading="My Account" path="My Account" />
      <section className={styles.profile}>
        <Card className={classes.innerContainer}>
          {userInfo && (
            <React.Fragment>
              <div className={styles.userProfileInfo}>
                <Typography
                  variant="h6"
                  className={`${classes.heading} ${classes.color151875}`}
                >
                  Profile
                </Typography>
                <div className={`${styles.box} ${styles.userInfoContainer}`}>
                  {!changeProfileInfo && (
                    <span
                      className={`${styles.editIcon} ${
                        changeProfileInfo ? classes.avtiveIcon : ""
                      }`}
                      onClick={() => {
                        setChangeProfileInfo(true);
                        setPrevUserState(userInfoState);
                      }}
                    >
                      <Edit className={classes.editIcon} />
                    </span>
                  )}

                  {/* text fields */}
                  {arrayOfFields.map((field) => {
                    return (
                      <div key={field} className={styles.profileDataField}>
                        <Typography
                          className={classes.profileDataFieldKey}
                          variant="body1"
                        >
                          {field} :
                        </Typography>
                        <TextField
                          id={field}
                          type="text"
                          className={`${classes.textField} ${
                            !changeProfileInfo ? classes.noPointerEvent : ""
                          }`}
                          value={userInfoState[field]}
                          variant="outlined"
                          size="small"
                          onChange={userProfileInfoChangeHandler}
                          disabled={
                            field === "email" ? true : !changeProfileInfo
                          }
                        />
                      </div>
                    );
                  })}

                  {changeProfileInfo && (
                    <div className={styles.userProfileInfoBtn}>
                      <Button
                        variant="contained"
                        disableElevation
                        className={classes.btn}
                        color="secondary"
                        disabled={!doesDataChanged}
                        onClick={userProfileInfoSaveHandler}
                      >
                        Save Changes
                      </Button>
                      <Button
                        variant="contained"
                        disableElevation
                        className={classes.btn}
                        color="secondary"
                        onClick={cancelChangeHandler}
                      >
                        Cancel
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.userChangePasswordContainer}>
                <Typography
                  variant="h6"
                  className={`${classes.heading} ${classes.color151875}`}
                >
                  Change Password
                </Typography>
                <div className={styles.box}>
                  <form className={styles.changePasswordForm}>
                    <TextField
                      type="password"
                      variant="outlined"
                      className={classes.changePasstextField}
                      label="New Password"
                      required
                      size="small"
                    />
                    <TextField
                      type="password"
                      variant="outlined"
                      className={classes.changePasstextField}
                      label="Confirm Password"
                      required
                      size="small"
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      className={classes.btn}
                      disableElevation
                    >
                      Change Password
                    </Button>
                  </form>
                </div>
              </div>
            </React.Fragment>
          )}
        </Card>
      </section>
    </React.Fragment>
  );
}
