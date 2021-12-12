import { Typography } from "@material-ui/core";
import React from "react";
import styles from "../../../styles/Header.module.css";

const Header: React.FC<{ heading: string; path: string }> = ({
  heading,
  path,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.innerContainer}>
        <Typography
          variant="h3"
          style={{ color: "#101750", marginBottom: 9, fontWeight: "bold" }}
        >
          {heading}
        </Typography>
        <Typography variant="subtitle2" style={{ fontWeight: 500 }}>
          Home . Pages . <span className={styles.path}>{path}</span>
        </Typography>
      </div>
    </header>
  );
};

export default Header;
