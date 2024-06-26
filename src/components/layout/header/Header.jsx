import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <div className="header__top__left">
            <form className="header__top__form">
              <select className="header__top__select" name="" id="">
                <option value="">EN</option>
                <option value="">RU</option>
                <option value="">UZ</option>
                <option value="">KZ</option>
              </select>
              <select className="header__top__select" name="" id="">
                <option value="">USD</option>
                <option value="">UZS</option>
                <option value="">RUBL</option>
                <option value="">TANGE</option>
              </select>
            </form>
          </div>
          <div className="header__top__right">
            <NavLink>
              <FaRegUser className="hero__top__icon" />
            </NavLink>
            <NavLink>
              <FaRegHeart className="hero__top__icon" />
            </NavLink>
            <NavLink>
              <BsCart2 className="hero__top__icon" />
            </NavLink>
          </div>
          
        </div>
        <div className="header__bottom"></div>
      </div>
    </header>
  );
};

export default Header;
