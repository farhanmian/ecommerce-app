import "../styles/globals.css";
import Layout from "../components/partials/Layout/Layout";
import { ThemeProvider } from "@material-ui/core";

import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
