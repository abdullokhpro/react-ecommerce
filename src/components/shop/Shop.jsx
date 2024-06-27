import React from "react";
import "./shop.scss";
import shop1 from "../../assets/home/shop.png";

const Shop = () => {
  return (
    <div className="shop">
      <div className="container shop__container">
        <div className="shop__left">
          <h2 className="shop__title">Adidas Men Running Sneakers</h2>
          <p className="shop__text">
            Performance and design. Taken right to the edge.
          </p>
          <button className="shop__btn">SHOP NOW</button>
        </div>
        <div className="shop__right">
          <img src={shop1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Shop;
