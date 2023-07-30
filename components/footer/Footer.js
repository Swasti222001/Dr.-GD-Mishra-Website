import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footermaindiv}>
      <div className={styles.footerdiv}>
        <div>
          <span className={styles.footerheading}>Contact Details</span>
        </div>
        <div className={styles.innerdiv1}>
          <p>Address:</p>
          <p>4C/1, Professors Colony, Tagore Hill Road,</p>
          <p>Morabadi Ranchi 834008 Jharkhand (India)</p>
        </div>
        <div className={styles.innerdiv2}>
          <p>Phone Number: 9431104242</p>
          <p>Email: abc@gmail.com</p>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
