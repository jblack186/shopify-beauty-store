import React from "react";
import "../css/Footer.scss";
import { Link } from "react-router-dom";
import Facebook from "../img/facebook.svg";
import Twitter from "../img/twitter.svg";
import Instagram from "../img/instagram.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <h1 className="footer__content__heading">honest</h1>
        <div className="footer__content__nav">
          <ul>
            <li>SHOP</li>
            <li>ABOUT</li>
            <li>CONTENT</li>
          </ul>
        </div>
        <div className="footer__content__icons">
          <img src={Facebook} alt="icons" />
          <img src={Twitter} alt="icons" />
          <img src={Instagram} alt="icons" />

        </div>
      </div>
    </footer>
  );
}

export default Footer;
