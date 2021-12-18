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

import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Loading from "../components/partials/Loading/Loading";

const db = getFirestore();
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
    width: 432,
    minHeight: 47,
    maxHeight: 47,
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
  usernameField: {
    marginBottom: 32,
  },
  emailField: {
    marginBottom: 32,
  },
});

export default function login() {
  const classes = useStyles();
  const [haveAccount, setHaveAccount] = useState(true);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const clearInputs = () => {
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
  };

  useEffect(() => {
    clearInputs();
    setError(null);
  }, [haveAccount]);

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) {
      return;
    }

    const email = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;
    const username = usernameInputRef.current?.value;

    const signIn = () => {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          // Signed in
          // const user = userCredential.user;
          setError(null);
          setIsLoading(false);
          clearInputs();
          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage: string = error.message;
          const message = errorMessage
            .replace("Firebase: Error (auth/", "")
            .replace(")", "")
            .replace(/-/g, " ");
          setError(message);
          setIsLoading(false);

          passwordInputRef.current.value = "";
          if (message === "wrong password.") return;
          emailInputRef.current.value = "";
        });
    };

    const createAccount = () => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          // Signed in
          // const user = userCredential.user; //
          clearInputs();
          usernameInputRef.current.value = "";
          setIsLoading(false);
          // ...
        })
        .catch((error) => {
          const errorMessage: string = error.message;
          const message = errorMessage
            .replace("Firebase: Error (auth/", "")
            .replace(/-/g, " ")
            .replace(")", "");
          setError(message);
          setIsLoading(false);
          clearInputs();
          usernameInputRef.current.value = "";

          // ..
        });

      const sendData = async () => {
        try {
          const docRef = await addDoc(collection(db, "users"), {
            name: username,
            email: email,
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      };
      sendData();
    };

    haveAccount ? signIn() : createAccount();
  };

  return (
    <React.Fragment>
      <Header
        heading={haveAccount ? "Login" : "SignUp"}
        path={haveAccount ? "Login" : "SignUp"}
      />

      <section className={styles.login}>
        <div className={styles.innerContainer}>
          <Typography variant="h5" className={classes.heading}>
            {haveAccount ? "Login" : "SignUp"}
          </Typography>

          {error && (
            <Typography variant="caption" className={classes.error}>
              {error}
            </Typography>
          )}
          <Typography variant="subtitle2" className={classes.logintext}>
            Please {haveAccount ? "login" : "signup"} using account detail
            bellow.
          </Typography>
          <form onSubmit={formSubmitHandler} className={styles.form}>
            {!haveAccount && (
              <TextField
                type="text"
                size="small"
                inputRef={usernameInputRef}
                className={`${classes.textField} ${classes.usernameField}`}
                label="Username"
                variant="outlined"
                required
                autoFocus
                error={error ? true : false}
              />
            )}
            <TextField
              type="email"
              size="small"
              inputRef={emailInputRef}
              className={`${classes.textField} ${classes.emailField}`}
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

            {haveAccount && (
              <Link className={`${classes.logintext} ${classes.forgotPass}`}>
                Forgot your password?
              </Link>
            )}

            <Button
              type="submit"
              variant="contained"
              color="secondary"
              className={classes.signinBtn}
              disableElevation
              disabled={isLoading ? true : false}
            >
              {!isLoading ? (
                <Typography
                  className={classes.logintext}
                  style={{ color: "#fff", fontWeight: 700 }}
                >
                  Sign {haveAccount ? "In" : "Up"}
                </Typography>
              ) : (
                <Loading width={25} color="#111111" />
              )}
            </Button>
          </form>

          <Link
            className={classes.logintext}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setHaveAccount((prev) => !prev);
            }}
          >
            {haveAccount
              ? "Don't have an Account? Create account"
              : "Already a member? Login"}
          </Link>
        </div>
      </section>

      <Divider />
    </React.Fragment>
  );
}
