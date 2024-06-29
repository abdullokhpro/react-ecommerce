import React from "react";
import "./singleSwipe.scss";
import singleSwiper from "../../../assets/single/singleSwipe.png";

const SingleSwipe = () => {
  return (
    <div className="single-swiper">
      <h4>BEST SELLER</h4>
      <img src={singleSwiper} alt="" />
    </div>
  );
};

export default SingleSwipe;
