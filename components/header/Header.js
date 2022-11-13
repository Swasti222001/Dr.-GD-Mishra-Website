import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div>
    <div className={styles.maincontainer}>
      <div className={styles.logo}>
        <h3>LOGO</h3>
      </div>
      <div className={styles.innercontainer}>
        <h3> HOME</h3>
        <h3> ABOUT US</h3>
        <h3> OUR PRODUCTS</h3>
        <h3> CONTACT US</h3>
      </div>
      
    </div>
    </div>
  );
};

export default Header;
