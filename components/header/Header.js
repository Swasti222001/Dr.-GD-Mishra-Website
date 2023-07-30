import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Logo from "../../assets/Logotop.png";

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.maincontainer}>
        <div className={styles.logo}>
          <div>
            <Image 
            className={styles.logoimg} 
            src={Logo} />
          </div>
          <div>
            <h1>Dr. Mishra's Laboratory</h1>
          </div>
        </div>
        <div className={styles.innercontainer}>
          <div className={styles.nav}>
            <h3> Home</h3>
          </div>
          <div className={styles.nav}>
            <h3> About US</h3>
          </div>
          <div className={styles.nav}>
            <h3> Our Products</h3>
          </div>
          <div className={styles.nav}>
            <h3> Contact Us</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
