import "./payment.scss";
import { IoClose } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { BsCreditCard2Back } from "react-icons/bs";
import { CiBank } from "react-icons/ci";
import { FaPaypal } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";

const BOT_TOKEN = "7498658431:AAHsJN8ghKApjHZb412rQwxqyPdlPURbNGk";
const CHAT_ID = "-1002148512889";
// const USER_ID = "1431700586";

const Payment = ({ setModal, data, total }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    let text = "Buyurtma:%0A";
    text += `FirstName: <b>${fname}</b>%0A`;
    text += `LastName: <b>${lname}</b>%0A%0A`;
    text += `Email Address: <b>${email}</b>%0A`;
    text += `Address Deliver: <b>${address}</b>%0A`;
    text += `Telephone Number: <b>${phone}</b>%0A%0A`;

    data.forEach((product) => {
      text += `${product.title} %0A`;
      text += `${product.amount}ta %0A`;
      text += `${product.price}USD %0A%0A`;
    });

    text += `TOTAL: <b>${total}</b>USD %0A`;

    let url = ` https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;
    console.log("ok");
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    setFname("");
    setLname("");
    setEmail("");
    setAddress("");
    setPhone("");
  };

  useEffect(() => {
    scroll(0, 0);
  }, []);
  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">Make Payment</h2>
        <IoClose className="close-button" onClick={() => setModal(false)} />

        <div className="modal__form__wrapper">
          <form action="" onSubmit={handleSendMessage}>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;

// import React, { useEffect, useState } from "react";
// import { BsCreditCard2Back } from "react-icons/bs";
// import { CiBank } from "react-icons/ci";
// import { FaPaypal } from "react-icons/fa";
// import { IoIosCloseCircleOutline } from "react-icons/io";
// import { IoMdArrowRoundBack } from "react-icons/io";
// import "./payment.scss";

// const BOT_TOKEN = "7177611291:AAEVLXDpqfpajh7Obmq0VWV_D0TDGoMwm5Y";
// const CHAT_ID = "-1002148512889";
// const USER_ID = "1431700586";

// const Payment = ({ setModal, data, total }) => {
//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");
//   const [phone, setPhone] = useState("");
//   useEffect(() => {
//     scroll(0, 0);
//   }, []);

//   const handleSendMessage = (e) => {
//     e.preventDefault();
//     let text = "Buyurtma:%0A";
//     text += `FirstName: <b>${fname}</b>%0A`;
//     text += `LastName: <b>${lname}</b>%0A%0A`;
//     text += `Email Address: <b>${email}</b>%0A`;
//     text += `Address Deliver: <b>${address}</b>%0A`;
//     text += `Telephone Number: <b>${phone}</b>%0A%0A`;

//     data.forEach((product) => {
//       text += `${product.title} %0A`;
//       text += `${product.amount}ta %0A`;
//       text += `${product.price}USD %0A%0A`;
//     });

//     text += `TOTAL: <b>${total}</b>USD %0A`;

//     let url = ` https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;
//     console.log("ok");
//     let api = new XMLHttpRequest();
//     api.open("GET", url, true);
//     api.send();
//     setFname("");
//     setLname("");
//     setEmail("");
//     setAddress("");
//     setPhone("");
//   };
//   return (
//     <>
//       <div onClick={() => setModal(false)} className="payment__overlay"></div>
//       <div className="payment">
//         <div onClick={() => setModal(false)} className="payment__close1">
//           <IoMdArrowRoundBack />
//         </div>
//         <h3 className="payment__title">Payment</h3>
//         <div onClick={() => setModal(false)} className="payment__close2">
//           <IoIosCloseCircleOutline />
//         </div>
//         <form action="" onSubmit={handleSendMessage} className="payment__form">
//           <div className="payment__input">
//             <input
//               required
//               type="text"
//               placeholder="First Name"
//               value={fname}
//               onChange={(e) => setFname(e.target.value)}
//             />
//           </div>
//           <div className="payment__input">
//             <input
//               required
//               type="text"
//               placeholder="Last Name"
//               value={lname}
//               onChange={(e) => setLname(e.target.value)}
//             />
//           </div>
//           <div className="payment__input">
//             <input
//               required
//               type="text"
//               placeholder="Email Address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="payment__input">
//             <textarea
//               name=""
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               id=""
//               placeholder="Address for Delivery"
//             ></textarea>
//           </div>
//           <div className="payment__select">
//             <h4 className="payment__name">Select Method of Payment</h4>
//             <label htmlFor="card" className="payment__select__item">
//               <div className="payment__select__item__left">
//                 <BsCreditCard2Back />
//                 <span>Credit Card Or Debit</span>
//               </div>
//               <input required type="radio" name="payment" id="card" />
//             </label>
//             <label htmlFor="Paypal" className="payment__select__item">
//               <div className="payment__select__item__left">
//                 <FaPaypal />
//                 <span>Paypal</span>
//               </div>
//               <input required type="radio" name="payment" id="Paypal" />
//             </label>
//             <label htmlFor="bank" className="payment__select__item"></label>              <div className="payment__select__item__left">
//                 <CiBank />
//                 <span>Bank Transfer</span>
//               </div>
//               <input required type="radio" name="payment" id="bank" />
//             </label>
//           </div>
//           <div className="payment__input">
//             <input
//               required
//               type="text"
//               placeholder="Mobile Phone"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//           </div>
//           <div className="payment__btns">
//             <button type="submit" className="payment__btn">
//               Go to Payment
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Payment;
