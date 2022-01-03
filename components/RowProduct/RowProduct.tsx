import React, { useEffect, useState } from "react";
import styles from "../../styles/RowProduct.module.css";
import { Card, Typography, makeStyles, Grid, Button } from "@material-ui/core";
import Image from "next/image";
import { StoredDataType } from "../../store/types/types";
import { AddToCart, Heart, ZoomGlass, Star } from "../icons/icons";
import { ShoppingCart, Favorite } from "@mui/icons-material";
import { useRouter } from "next/dist/client/router";
import { doc, getDoc, updateDoc, getFirestore } from "firebase/firestore";
import { useAppContext } from "../../store/context/appContext";
const db = getFirestore();

const useStyles = makeStyles({
  searchResultCard: {
    boxShadow: "0px 2px 2px rgba(0,0,0,.2)",
    transition: "all .3s",
  },
  productTitle: {
    color: "#111C85",
    marginBottom: 13,
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: "20px",
    cursor: "pointer",
    textTransform: "capitalize",
  },
  btn: {
    maxWidth: 31,
    minWidth: 31,
    minHeight: 32,
    maxHeight: 32,
    borderRadius: 500,
    padding: 6,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backfaceVisibility: "hidden",
  },
});

const RowProduct: React.FC<{ product: StoredDataType; href: string }> = ({
  product,
  href,
}) => {
  const { userInfo, setCartItemCtx } = useAppContext();
  const router = useRouter();
  const classes = useStyles();

  //////// states
  const [hover, setHover] = useState(false);
  const [userCart, setUserCart] = useState([]);
  const [userWishlist, setUserWishlist] = useState([]);
  const [isInitial, setIsInitial] = useState(true);

  /////////// useEffect
  ///// fetching user cart info
  useEffect(() => {
    if (!userInfo) {
      return;
    }
    const getUserData = async () => {
      const docRef = doc(db, "users", userInfo && userInfo.docId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setUserCart(data.cart ? data.cart : []);
        setUserWishlist(data.wishlist ? data.wishlist : []);
      } else {
        setUserCart([]);
        setUserWishlist([]);
      }
    };
    getUserData();
  }, [userInfo && userInfo.userData]);

  ///// sending data whenever userWishlistItem or userCartItem state changes
  useEffect(() => {
    if (isInitial) {
      setIsInitial(false);
      return;
    }
    if (!userInfo) {
      console.log("login to add to wishlist");
      return;
    }

    const sendData = async () => {
      const userRef = doc(db, "users", userInfo.docId);
      await updateDoc(userRef, {
        cart: userCart,
        wishlist: userWishlist,
      });
    };
    sendData();
    setCartItemCtx(userCart);
  }, [userCart, userWishlist]);

  const stars = [1, 2, 3, 4, 5];

  /////// function handlers
  const toggleCartHandler = (id: number) => {
    if (!userInfo) {
      console.log("login to buy");
      return;
    }
    if (userCart.includes(id)) {
      const updatedCart = userCart.filter((ids) => ids !== id);
      setUserCart(updatedCart);
    } else {
      setUserCart((prevId) => (prevId ? [...prevId, id] : [id]));
    }
  };

  const toggleWishlistHandler = (id: number) => {
    if (!userInfo) {
      console.log("login to add to wishlist");
      return;
    }
    if (userWishlist.includes(id)) {
      const updatedWishlist = userWishlist.filter((ids) => ids !== id);
      setUserWishlist(updatedWishlist);
    } else {
      setUserWishlist((prevId) => (prevId ? [...prevId, id] : [id]));
    }
  };

  const onMouseEnterHandler = () => {
    setHover(true);
  };
  const onMouseExitHandler = () => {
    setHover(false);
  };
  const openSpecificProductHandler = (href: string) => {
    if (hover) {
      return;
    }
    router.push(href);
  };

  return (
    <Grid>
      <Card
        key={product.id}
        className={`${styles.searchResult} ${classes.searchResultCard}`}
        onClick={() => {
          !hover && openSpecificProductHandler(href);
        }}
      >
        <div className={styles.searchResultImage}>
          <Image src={product.img} alt="product img" />
        </div>
        <div className={styles.searchResultText}>
          <Typography variant="subtitle1" className={classes.productTitle}>
            {product.title.trim().length > 19
              ? `${product.title.slice(0, 19)}...`
              : product.title}
          </Typography>
          <div className={styles.colorFulDotsContainer}>
            <span className={styles.colorFulDot} />
            <span className={styles.colorFulDot} />
            <span className={styles.colorFulDot} />
          </div>
          <span className={styles.searchResultPriceRating}>
            <Typography
              variant="caption"
              style={{
                lineHeight: "16.41px",
                color: "#111C85",
                marginRight: 9,
              }}
            >
              ${product.price}
            </Typography>
            <Typography
              variant="caption"
              style={{
                lineHeight: "16.41px",
                color: "#FF2AAA",
                textDecoration: "line-through",
                marginRight: 16,
              }}
            >
              ${product.orignalPrice}
            </Typography>
            <span>
              {stars.map((star) => {
                return (
                  <Star
                    key={star}
                    color={star <= product.rating ? "#FFC416" : "#B2B2B2"}
                  />
                );
              })}
            </span>
          </span>

          <Typography variant="body2" style={{ color: "#9295AA" }}>
            {product.text}
          </Typography>

          <span
            className={styles.searchResultIconContainer}
            onMouseOver={onMouseEnterHandler}
            onMouseLeave={onMouseExitHandler}
          >
            <Button
              className={classes.btn}
              onClick={() => {
                toggleCartHandler(product.id);
              }}
            >
              {userCart.includes(product.id) ? <ShoppingCart /> : <AddToCart />}
            </Button>
            <Button
              className={classes.btn}
              onClick={() => {
                toggleWishlistHandler(product.id);
              }}
            >
              {userWishlist.includes(product.id) ? <Favorite /> : <Heart />}
            </Button>
            <Button className={classes.btn}>
              <ZoomGlass />
            </Button>
          </span>
        </div>
      </Card>
    </Grid>
  );
};

export default RowProduct;
