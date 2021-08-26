import React from "react";
import "../css/Header.scss";
import { Link } from "react-router-dom";
import Bag from '../img/bag.svg';
import Search from '../img/search.svg';
import Menu from '../img/menu.svg';


function Header() {
  return (
    <div className="header">
      <ul className="header__list">
      <div className="header__list__mid">
            <h1 className="header__list__mid__logo">honest</h1>
        </div>

        <div className="header__list__left">
          <li className="header__list__left__item">
            SHOP
          </li>
          <li className="header__list__left__item">
            ABOUT
          </li>
          <li className="header__list__left__item">
            CONTACT
          </li>
          </div>
        <div className="header__list__right">
          <li className="header__list__right__item">
            <img style={{width: '20px'}} className="header__list__right__item--search" src={Search} alt="search" />
          </li>
          <li className="header__list__right__item">
            MY ACCOUNT
          </li>
          <li className="header__list__right__item">
          <img style={{width: '20px'}}  className="header__list__right__item--bag" src={Bag} alt="bag" />

          </li>
          </div>

      </ul>
      <div className="mobile">
        <div></div>
        <img className="mobile__bars" src={Menu} alt="Bars" />

      </div>
    </div>
  );
}

export default Header;
