import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { toggleHeart } from "../../context/slices/wishlistSlice";
import "./wishlist.scss";

const Wishlist = () => {
  const wishlistData = useSelector((state) => state.wishlist.value);
  const dispatch = useDispatch();

  const wishlistItem = wishlistData?.map((el) => (
    <div key={el.id} className="products__card">
      <div className="products__card__top">
        <img src={el.image} alt={el.title} />
        <div className="products__card__icons">
          <button onClick={() => dispatch(toggleHeart(el))}>
            {wishlistData.some((state) => state.id === el.id) ? (
              <FaRegHeart color="crimson" />
            ) : (
              <FaRegHeart />
            )}
          </button>
          <button>
            <IoCartOutline />
          </button>
        </div>
      </div>
      <div className="products__card__bottom">
        <NavLink to={`products/${el.id}`}>
          <h3 className="products__card__title">{el.title}</h3>
        </NavLink>
        <img src="" alt="" />
        <div className="products__card__price">
          <span className="products__card__price-text">${el.price}</span>
          <span className="products__card__old-price">{el.category}</span>s
        </div>
      </div>
    </div>
  ));

  return (
    <>
      {wishlistData.length ? (
        <div className="wishlist">{wishlistItem}</div>
      ) : (
        <div style={{ padding: "100px" }} className="container">
          <h1 style={{ textAlign: "center" }}>Nothing is here</h1>
        </div>
      )}
    </>
  );
};

export default Wishlist;
