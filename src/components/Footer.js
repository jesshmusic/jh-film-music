import footerStyles from "../styles/components/Footer.module.scss";
import React from "react";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      &copy; {new Date().getFullYear()} Jess Hendricks. All rights reserved.
    </footer>
  );
}

export default Footer;
