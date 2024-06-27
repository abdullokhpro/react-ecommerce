import React, { useState } from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import logoImg from "../../../assets/home/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdExitToApp } from "react-icons/md";

const Header = () => {
  const [show, setShow] = useState(false);

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
            <form className="header__top__right__form" action="">
              <input
                className="header__top__input"
                type="text"
                placeholder="Search..."
              />
            </form>
            <NavLink>
              <FaRegUser className="header__top__icon" />
            </NavLink>
            <NavLink>
              <FaRegHeart className="header__top__icon" />
            </NavLink>
            <NavLink>
              <BsCart2 className="header__top__icon header__top__icon-cart" />
            </NavLink>

            <p> Items</p>
            <p>$0.00</p>
            <IoSearch className="header__top__search-icon" />
          </div>
        </div>
        <div className="header__bottom">
          <div className="hedaer__logo">
            <a href="">
              <img src={logoImg} alt="here is the logo of website" />
            </a>
          </div>
          <div className="header__bottom__right">
            <ul className={`header__bottom__list ${show ? "show" : ""}`}>
              <li className="header__bottom__item">
                <a href="">HOME</a>
              </li>
              <li className="header__bottom__item">
                <a href="">BAGS</a>
              </li>
              <li className="header__bottom__item">
                <a href="">SNEAKERS</a>
              </li>
              <li className="header__bottom__item">
                <a href="">BELT</a>
              </li>
              <li className="header__bottom__item">
                <a href="">CONTACT</a>
              </li>
              <button
                onClick={() => setShow(false)}
                className="header__list__exit"
              >
                <MdExitToApp />
              </button>
            </ul>
            <button
              className="header__bottom__menu"
              onClick={() => setShow(true)}
            >
              <RxHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
