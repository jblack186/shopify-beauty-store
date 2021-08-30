import React from "react";
import "../css/Hero.scss";
import { Link } from "react-router-dom";
import Model from "../img/model.jpg";
import Makeup from "../img/makeup.jpg";
import Sale from "../img/sale.svg";

function HeroOne() {
  return (
    <section className="hero">
      <img src={Sale} className="hero__sale" alt="sale" />
      <div className="hero__left">
      <div className="hero__left__emptySpace"></div>

        <div className="hero__left__content">

        <h2 className="hero__left__content__heading">Oil-free Shine</h2>
<p className="hero__left__content__body">We have ingrendients that are of the most premium quality. Created with love and care to provide the finest glow to an oily face.</p>
</div>

<div className="hero__left__featured">
  <ul className="hero__left__featured__buttons">
    <li>New</li>
    <li>Fresh</li>
    <li>Popular</li>

  </ul>
  <div className="hero__left__featured__img" >
  <img  src={Makeup} alt="product" />
  </div>
</div>
      </div>
      <div className="hero__right">
      <img src={Model} alt="woman posing" />
      </div>
    </section>
  );
}

export default HeroOne;
