import React from "react";
import styles from './navstyle.module.css';

const Navbar = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.title}>
          <p className={styles.titleText}>Exclusive</p>
        </div>

        <div className={styles.navItems}>
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
       <p>Contact</p>
       </div>


      </div>
    </div>
  );
};

export default Navbar;
