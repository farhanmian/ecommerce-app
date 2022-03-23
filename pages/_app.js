import "../styles/globals.css";
import Layout from "../components/partials/Layout/Layout";
import { ThemeProvider } from "@material-ui/core";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import NProgress from "nprogress";
import Router from "next/router";

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBA1BanzMml8ZMB7i96gC5ZQu6dv_FW5vw",
  authDomain: "ecommerce-app-8b5d3.firebaseapp.com",
  projectId: "ecommerce-app-8b5d3",
  storageBucket: "ecommerce-app-8b5d3.appspot.com",
  messagingSenderId: "222051021700",
  appId: "1:222051021700:web:3697467bca1f5de58863d1",
});
const analytics = getAnalytics(firebaseApp);

import { AppWrapper } from "../store/context/appContext";
import theme from "../theme";

/**
 * setting google analytics
 */
(function (c, l, a, r, i, t, y) {
  c[a] =
    c[a] ||
    function () {
      (c[a].q = c[a].q || []).push(arguments);
    };
  t = l.createElement(r);
  t.async = 1;
  t.src = "https://www.clarity.ms/tag/" + i;
  y = l.getElementsByTagName(r)[0];
  y.parentNode.insertBefore(t, y);
})(window, document, "clarity", "script", "b5l6b5810u");

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AppWrapper>
  );
}

export default MyApp;
