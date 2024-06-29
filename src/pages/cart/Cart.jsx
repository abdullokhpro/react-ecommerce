import React, { useEffect, useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { CiCircleRemove } from "react-icons/ci";

import {
  addToCart,
  decrementCart,
  removeFromCart,
  deleteAllCart,
  increamentCart,
} from "../../context/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./cart.scss";

const Cart = () => {
  const [modal, setModal] = useState(false);
  const [sum, setSum] = useState(0);
  const [promo, setPromo] = useState("");
  const [voucher, setVoucher] = useState(0);
  const cartData = useSelector((state) => state.cart.value);

  useEffect(() => {
    scroll(0, 0);
    const total = cartData.reduce((acc, el) => acc + el.price * el.amount, 0);
    setSum(Math.ceil(total));
  }, [cartData]);

  const handleAmount = (e) => {
    e.preventDefault();
    if (promo === "Laylo") {
      setVoucher(Math.ceil((sum + sum * 0.02) * 0.2));
    } else {
      alert("Promocode error");
    }
    setPromo("");
  };

  const dispatch = useDispatch();

  let cartItem = cartData?.map((el) => (
    <div className="cart__product__main" key={el.id}>
      <div className="cart__product">
        <button
          onClick={() => dispatch(removeFromCart(el.id))}
          className="cart__remove__btn"
        >
          <CiCircleRemove />
        </button>
        <div className="cart__img">
          <img src={el.image} width={80} height={80} alt="" />
        </div>
        <p title={el.title} className="cart__title">
          {el.title}
        </p>
      </div>
      <div className="cart__product__right">
        <p className="cart__price">${el.price}</p>
        <div className="cart__count">
          <button
            disabled={el.amount <= 1}
            onClick={() => dispatch(decrementCart(el.id))}
          >
            -
          </button>
          <span> {el.amount}</span>
          <button onClick={() => dispatch(increamentCart(el.id))}>+</button>
        </div>
        <p className="unit__price">${Math.ceil(el.price * el.amount)}</p>
      </div>
    </div>
  ));

  console.log(cartData);
  return (
    <div className="cart">
      <div className="container">
        <div className="cart__table">
          <div className="cart__headers">
            <h4>PRODUCT</h4>
            <div>
              <h4>PRICE</h4>
              <h4>QTY</h4>
              <h4>UNIT PRICE</h4>
            </div>
          </div>
          <div className="cart__product__wrapper">{cartItem}</div>
        </div>
        <div className="cart__buy">
          <form action="" onSubmit={handleAmount} className="cart__form">
            <input
              type="text"
              name={promo}
              value={promo}
              placeholder="Voucher code"
              onChange={(e) => setPromo(e.target.value)}
            />
            <button>Redeem</button>
          </form>
          <div className="cart__box">
            <div className="cart__box__item">
              <p>Subtotal</p>
              <p>${sum}</p>
            </div>
            <div className="cart__box__item">
              <p>Shipping fee</p>
              <p>${Math.ceil(sum * 0.02)}</p>
            </div>
            <div className="cart__box__item">
              <p>Coupon</p>
              <p>{voucher}</p>
            </div>
            <div className="cart__box__item">
              <h3>Total</h3>
              <p>${+sum + Math.ceil(sum * 0.02) - +voucher}</p>
            </div>
            <button onClick={() => setModal(true)}>Check out</button>
          </div>
        </div>
      </div>
      {/* {modal ? (
        <Payment setModal={setModal} data={cartData} total={sum} />
      ) : (
        <></>
      )} */}
    </div>
  );
};

export default Cart;
