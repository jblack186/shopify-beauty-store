import React from "react";
import "../css/Hero.scss";
import { Link } from "react-router-dom";
import Model from "../img/mode3.jpg";
import Makeup from "../img/makeup3.jpg";
import Sale from "../img/sale.svg";

function HeaderThree() {
  return (
    <section className="hero-three">
      <div className="hero-three__content">
        <h2>BRAND NEW LOOK</h2>
        <a href="">SHOP COLLECTION</a>
      </div>
      <div className="hero-three__left">
      <img className="hero-three__left__img" src={Model} alt="model" />
      </div>
      <div className="hero-three__right">
      <img className="hero-three__right__img" src={Makeup} alt="model" />
      </div>

    </section>
  );
}

export default HeaderThree;
