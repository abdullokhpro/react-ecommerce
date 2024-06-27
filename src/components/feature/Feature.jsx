import React from "react";
import "./feature.scss";
import { FEATURE_DATA } from "../../static";

const featureData = FEATURE_DATA?.map((el) => (
  <div className="feature__card">
    <img src={el.img} alt="" />
    <div>
      <h4>{el.h1}</h4>
      <span>{el.p}</span>
    </div>
  </div>
));

const Feature = () => {
  return (
    <div className="feature">
      <div className="container">
        <h2 className="feature__title">FEATURED PRODUCTS</h2>
        <div className="feature__cards">{featureData}</div>
      </div>
    </div>
  );
};

export default Feature;
