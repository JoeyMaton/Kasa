import React from 'react';
import logo from "../../assets/footer/logo_footer.png"
import "../../styles/footer.css"

const Footer = () => {
    return (
      <footer className="footer">
        <img src={logo} alt="" className="footer__logo" />
        <p className="footer__text-copyright">
          © 2020 Kasa. All rights reserved
        </p>
      </footer>
    );
}

export default Footer;