import React from "react";
import "./news.scss";
import { NEWS_DATA } from "../../static";

let newsData = NEWS_DATA?.map((el) => (
  <div key={el.id} className="news__card">
    <img src={el.img} alt="" />
    <div className="news__card__info">
      <span className="news__card__time">{el.span}</span>
      <h4 className="news__card__text">{el.h1}</h4>
      <p className="news__card__text">{el.p}</p>
    </div>
  </div>
));

const News = () => {
  return (
    <div className="news">
      <div className="container">
        <h2 className="news__title">LATEST NEWS</h2>
        <div className="news__cards">{newsData}</div>
      </div>
    </div>
  );
};

export default News;
