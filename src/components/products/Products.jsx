import React, { useState } from "react";
import "./products.scss";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useGetProductsQuery } from "../../context/api/productApi";
import { useDispatch, useSelector } from "react-redux";
import { toggleHeart } from "../../context/slices/wishlistSlice";
import { addToCart } from "../../context/slices/cartSlice";

export const Products = () => {
  const dispatch = useDispatch();
  const [perPage, setPerPage] = useState(8);
  const [offset, setOffset] = useState(1);
  const { data, isLoading, isError, isFetching } = useGetProductsQuery({
    limit: perPage * offset,
  });

  const wishlistData = useSelector((state) => state.wishlist.value);
  const cartData = useSelector((state) => state.cart.value);

  const productItem = data?.map((el) => (
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
          <button onClick={() => dispatch(addToCart(el))}>
            {cartData.some((state) => state.id === el.id) ? (
              <IoCartOutline color="red" />
            ) : (
              <IoCartOutline />
            )}
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
    <div className="products">
      <div className="container products__container">
        <h2 className="products__title">BEST SELLER</h2>
        <div className="products__cards">{productItem}</div>
        <button
          className="products__btn"
          disabled={isFetching}
          onClick={() => setOffset((p) => p + 1)}
        >
          {isFetching ? "Loading..." : "See More"}
        </button>
      </div>
    </div>
  );
};
