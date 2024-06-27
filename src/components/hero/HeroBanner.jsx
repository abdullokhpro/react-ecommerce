import React from "react";
import banner1 from "../../assets/home/hero-banner2.png";
import { BANNER_DATA } from "../../static";

const HeroBanner = () => {
  let bannerData = BANNER_DATA?.map((el) => (
    <div key={el.id} className="hero-banner__card">
      <div className="hero-banner__card__content">
        <h3 className="hero-banner__card__title">{el.title}</h3>
        <p className="hero-banner__price">{el.price}</p>
      </div>
      <img src={el.url} alt="" />
    </div>
  ));

  return (
    <div className="hero-banner">
      <div className="container">
        <div className="hero-banner__cards">{bannerData}</div>
      </div>
    </div>
  );
};

export default HeroBanner;
