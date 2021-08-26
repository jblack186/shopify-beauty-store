import React from "react";
import "../css/Featured.scss";
import { Link } from "react-router-dom";
import Item from "../img/onne-beauty-lZ7tao79Y1A-unsplash.jpg";

function Featured() {
  return (
    <section className="featured">
      <h3 className="featured__heading">Featured</h3>
      <div className="featured__content">
        <div className="featured__content__item">
          <img src={Item} alt="item" />
          <p>Charlotte Tilbury</p>
          <p>$11.99</p>
          <button>ADD TO CART</button>
        </div>
        <div className="featured__content__item">
        <img src={Item} alt="item" />
          <p>Charlotte Tilbury</p>
          <p>$11.99</p>
          <button>ADD TO CART</button>

        </div>
        <div className="featured__content__item">
        <img src={Item} alt="item" />
          <p>Charlotte Tilbury</p>
          <p>$11.99</p>
          <button>ADD TO CART</button>

        </div>
      </div>
    </section>
  );
}

export default Featured;
