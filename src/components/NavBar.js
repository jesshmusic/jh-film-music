import styles from "../styles/components/NavBar.module.scss";
import {Link} from "react-router-dom";
import React from "react";

const NavBar = () => {
  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navbarMain}>
        <Link to="/" className='nav-link'>Home</Link>
        <Link to="/about" className="nav-link">About</Link>
      </nav>
    </div>
  );
}

export default NavBar;
