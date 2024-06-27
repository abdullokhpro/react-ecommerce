import React from "react";
import "./hero.scss";
import HeroBanner from "./HeroBanner";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container hero__container">
        <h1 className="hero__title">Super Flash Sale 50% Off</h1>
        <HeroBanner />
      </div>
    </div>
  );
};

export default Hero;
