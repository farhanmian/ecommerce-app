import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useAppContext } from "./context/appContext";
const { userInfo, setCurrencyType, setCartLength } = useAppContext();
const db = getFirestore();

export const getUserData = async () => {
  const docRef = doc(db, "users", userInfo && userInfo.docId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    setCartLength(data.cart && data.cart.length);
    setCurrencyType(data.currency);
  } else {
    console.log("user not login");
  }
  return docSnap;
};
