import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Nav />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
