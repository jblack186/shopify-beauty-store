import React from "react";
import "../css/HomeAbout.scss";
import { Link } from "react-router-dom";
import MakeUp from "../img/laura-chouette-IMWmOmgP7kQ-unsplash.jpg";
import MakeUpTwo from "../img/laura-chouette-_h-wpskIzfw-unsplash.jpg";

function HomeAbout() {
  return (
    <section className="middle">
      <div className="middle__top">
<div className="middle__top__contain">
        <div className="middle__top__contain__content">
          <h3 className="middle__top__contain__content__heading">the beauty trend</h3>
          <p className="middle__top__contain__content__body"><div className="line"></div>Treat your skin with a little love, care and makeup.</p>
          <button className="middle__top__contain__content__button">SHOP COLLECTION</button>
        </div>
        </div>
        <div className="middle__top__contain__image">
        <div className="middle__top__contain__image__banner">
        <h4>OUR PHILOSOPHY</h4>
        <p>We're a wellness and beauty brand empowering eople to live a happy and healthy life.</p></div>

          <img src={MakeUp} alt="collection" />
        </div>
        
      </div>
      <div className="middle__bottom">
      <div className="middle__bottom__contain">
        <div className="middle__bottom__contain__content">
          <h3 className="middle__bottom__contain__content__heading">the beauty trend</h3>
          <p className="middle__bottom__contain__content__body"><div className='line'></div>Treat your skin with a little love, care and makeup.</p>
          <button className="middle__bottom__contain__content__button">SHOP COLLECTION</button>
        </div>
        </div>
        <div className="middle__bottom__contain__image">
        <div className="middle__bottom__contain__image__banner">
        <h4>OUR PHILOSOPHY</h4>
        <p>We're a wellness and beauty brand empowering eople to live a happy and healthy life.</p></div>

          <img src={MakeUpTwo} alt="collection" />
        </div>

      </div>
    </section>
  );
}

export default HomeAbout;
