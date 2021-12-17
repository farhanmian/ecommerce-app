import {
  Typography,
  makeStyles,
  TextField,
  Link,
  Button,
} from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import Divider from "../components/partials/Divider/Divider";
import Header from "../components/partials/Header/Header";
import styles from "../styles/Login.module.css";

import {
  getAuth,
  // createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
const auth = getAuth();

const useStyles = makeStyles({
  heading: {
    fontSize: 32,
    lineHeight: "37.5px",
    marginBottom: 7,
  },
  logintext: {
    fontFamily: "lato",
    fontSize: 17,
    lineHeight: "20.4px",
    fontWeight: 400,
    color: "#9096B2",
  },
  textField: {
    width: 432,
    "& > *": {
      maxHeight: 52,
      borderRadius: 2,
      padding: "6px 15px",
      fontWeight: 200,
      fontFamily: "lato",
      color: "#9096B2",
      fontSize: 16,
      "& >:focus": {
        color: "#4E515E",
      },
    },
  },
  signinBtn: {
    padding: "14px 190px",
    textTransform: "capitalize",
    marginTop: 23,
    borderRadius: 3,
    "&:hover": {
      boxShadow: "1px 5px 5px rgba(0,0,0,.09)",
    },
    "&:active": {
      boxShadow: "none",
    },
  },
  forgotPass: {
    display: "inline-block",
    marginTop: 20,
    cursor: "pointer",
  },
  error: {
    display: "inline-block",
    color: "red",
    textTransform: "capitalize",
    transition: "all .3s",
    marginBottom: 10,
  },
});

export default function login() {
  const classes = useStyles();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  // checking if the user was logged in
  useEffect(() => {
    const getLoggedInUser = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          // const uid = user.uid;
          setUserInfo(user);
          // ...
        } else {
          // User is signed out
          console.log("user is signed out");
          // ...
        }
      });
    };
    getLoggedInUser();
  }, []);

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;

    const signIn = () => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setUserInfo(user);
          setError(null);

          emailInputRef.current.value = "";
          passwordInputRef.current.value = "";
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage: string = error.message;
          const message = errorMessage
            .replace("Firebase: Error (auth/", "")
            .replace(")", "")
            .replace(/-/g, " ");
          setError(message);

          passwordInputRef.current.value = "";
          if (message === "wrong password.") return;
          emailInputRef.current.value = "";
        });
    };
    signIn();
  };
  console.log(userInfo);
  console.log(error);

  return (
    <React.Fragment>
      <Header heading="My Account" path="My Account" />

      <section className={styles.login}>
        <div className={styles.innerContainer}>
          <Typography variant="h5" className={classes.heading}>
            Login
          </Typography>

          {error && (
            <Typography variant="caption" className={classes.error}>
              {error}
            </Typography>
          )}
          <Typography variant="subtitle2" className={classes.logintext}>
            Please login using account detail bellow.
          </Typography>
          <form onSubmit={formSubmitHandler} className={styles.form}>
            <TextField
              type="email"
              size="small"
              inputRef={emailInputRef}
              className={classes.textField}
              label="Email Address"
              variant="outlined"
              required
              error={error ? true : false}
            />
            <TextField
              type="password"
              size="small"
              inputRef={passwordInputRef}
              className={classes.textField}
              label="Password"
              variant="outlined"
              required
              error={error ? true : false}
            />

            <Link className={`${classes.logintext} ${classes.forgotPass}`}>
              Forgot your password?
            </Link>

            <Button
              type="submit"
              variant="contained"
              color="secondary"
              className={classes.signinBtn}
              disableElevation
            >
              <Typography
                className={classes.logintext}
                style={{ color: "#fff", fontWeight: 700 }}
              >
                Sign In
              </Typography>
            </Button>
          </form>
          <Link className={classes.logintext} style={{ cursor: "pointer" }}>
            Don't have an Account? Create account
          </Link>
        </div>
      </section>

      <Divider />
    </React.Fragment>
  );
}
