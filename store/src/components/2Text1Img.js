import React from "react";
import "../css/Featured.scss";
import { Link } from "react-router-dom";
import Item from "../img/onne-beauty-lZ7tao79Y1A-unsplash.jpg";

function TwoTextOneImg() {
  return (
    <section className="two-text">
      <div className="two-text__text">
        <div className="two-text__text__content">
      <h3>Increase Your Beauty</h3>
        <p>Capture your ture self. Our products are of the utmost quality. Shop here.</p>
        </div>
      </div>
      <div className="two-text__img">
        <img src={Item} alt="item" />
        </div>
        <div className="two-text__text">
          <div className="two-text__text__content">
        <h3>Increase Your Beauty</h3>
        <p>Capture your ture self. Our products are of the utmost quality. Shop here.</p>
        </div>
        </div>
    </section>
  );
}

export default TwoTextOneImg;
