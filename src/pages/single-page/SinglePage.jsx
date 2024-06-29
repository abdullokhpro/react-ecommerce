import React from "react";
import "./single-page.scss";
import single1 from "../../assets/single/single1.png";
import { useEffect } from "react";
import singleCount from "../../assets/single/single-count.svg";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import singleFacebook from "../../assets/single/single-facebook.svg";
import singleTwitter from "../../assets/single/single-twitter.svg";
import {
  useGetProductByIdQuery,
  useGetProductsQuery,
} from "../../context/api/productApi";
import { useParams } from "react-router-dom";
import SingleSwipe from "./singleSwipe/SingleSwipe";
import SingleDown from "./single-down/SingleDown";
import { Products } from "../../components/products/Products";

const SinglePage = () => {
  const { id } = useParams();
  const { data: singleProduct } = useGetProductByIdQuery(id);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="single">
      <div className="container single__container">
        <div className="single__top">
          <div key={singleProduct?.id} className="single__top__left">
            <div className="single__images">
              <img src={singleProduct?.image} alt={singleProduct?.title} />
            </div>
            <div className="single__content">
              <h2 className="single__content__title">{singleProduct?.title}</h2>
              <div className="single__content__reviews">
                {/* <img src="" alt="" /> */}
                <span>0 reviews</span>
                <p>Submit a review</p>
              </div>
              <div className="single__content__price">
                <p className="single__content__price-text">
                  {singleProduct?.price}
                </p>
                <p className="single__content__discount">24% Off</p>
              </div>

              <div className="single__content__info">
                <div>
                  <p className="single__content__info__text">Availability:</p>
                  <p className="single__content__info__text">In stock</p>
                </div>
                <div>
                  <p className="single__content__info__text">Category:</p>
                  <p className="single__content__info__text">Accessories</p>
                </div>
              </div>
              <p className="single__content__info__main">Free shipping</p>
              <div className="single__content__color">
                <p>Select color</p>
                <div className="single__content__blue"></div>
                <div className="single__content__red"></div>
                <div className="single__content__black"></div>
                <div className="single__content__yellow"></div>
              </div>
              <div className="single__content__size">
                <p>Size</p>
                <select name="" id="">
                  <option value="">XL</option>
                  <option value="">M</option>
                  <option value="">S</option>
                  <option value="">L</option>
                </select>
              </div>
              <div className="single__content__btns">
                <img src={singleCount} alt="" />
                <div>
                  <button>
                    <IoCartOutline />
                    Add To Cart
                  </button>
                  <button>
                    <FaRegHeart />
                  </button>
                </div>
              </div>
              <div className="single__content__socials">
                <img src={singleFacebook} alt="" />
                <img src={singleTwitter} alt="" />
              </div>
            </div>
          </div>
          <div className="single__top__right">
            <SingleSwipe />
          </div>
        </div>
        <div className="single__bottom">
          <SingleDown />
        </div>
        <Products />
      </div>
    </div>
  );
};

export default SinglePage;
