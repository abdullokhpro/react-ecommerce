import React from "react";
import "./services.scss";
import { SERVICE_DATA } from "../../static";

let servicesData = SERVICE_DATA?.map((el) => (
  <div key={el.id} className="services__card">
    <img width={100} height={66} src={el.img} alt="" />
    <h3 className="services__card__title">{el.h1}</h3>
    <p className="services__card__text">{el.p}</p>
  </div>
));

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="services__cards">{servicesData}</div>
      </div>
    </div>
  );
};

export default Services;
