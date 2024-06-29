import React, { useState } from "react";
import contactImg from "../../assets/contact/leftimg.svg";
import "./contact.scss";

const BOT_TOKEN = "7498658431:AAHsJN8ghKApjHZb412rQwxqyPdlPURbNGk";
const CHAT_ID = "-1002148512889";

const Contact = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [text, setText] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    let messageText = "Buyurtma:%0A";
    messageText += `FirstName: <b>${fname}</b>%0A`;
    messageText += `LastName: <b>${lname}</b>%0A%0A`;
    messageText += `Text: <b>${text}</b>%0A`;
    let url = ` https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${messageText}&parse_mode=html`;

    console.log("ok");
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    setFname("");
    setLname("");
    setText("");
  };

  return (
    <div className="contact">
      <div className="container contact__container">
        <div className="contact__left">
          <img src={contactImg} alt="" />
        </div>
        <form action="" onSubmit={handleSendMessage}>
          <input
            value={fname}
            type="text"
            onChange={(e) => setFname(e.target.value)}
            placeholder="First Name"
            required
          />
          <input
            value={lname}
            type="text"
            onChange={(e) => setLname(e.target.value)}
            placeholder="Last Name"
            required
          />
          <textarea
            value={text}
            type="text"
            onChange={(e) => setText(e.target.value)}
            placeholder="Text"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
