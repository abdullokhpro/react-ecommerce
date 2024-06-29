// import React, { useState } from "react";

// const BOT_TOKEN = "7471865043:AAHRlw0FoeHgyNpL3pyUPn-uiaqhF0GOp0s";
// const CHAT_ID = "-4261956303";

// const Contact = () => {
//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");
//   const [text, setText] = useState("");

//   const handleSendMessage = (e) => {
//     e.preventDefault();
//     let text = "Buyurtma:%0A";
//     text += `FirstName: <b>${fname}</b>%0A`;
//     text += `LastName: <b>${lname}</b>%0A%0A`;
//     text += `Email Address: <b>${text}</b>%0A`;
//     let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;

//     console.log("ok");
//     let api = new XMLHttpRequest();
//     api.open("GET", url, true);
//     api.send();
//   };

//   return (
//     <div>
//       <form action="" onSubmit={handleSendMessage}>
//         <input
//           value={fname}
//           type="text"
//           onChange={(e) => setFname(e.target.value)}
//         />
//         <input
//           value={lname}
//           type="text"
//           onChange={(e) => setLname(e.target.value)}
//         />
//         <input
//           value={text}
//           type="text"
//           onChange={(e) => setText(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";

// const BOT_TOKEN = "7471865043:AAHRlw0FoeHgyNpL3pyUPn-uiaqhF0GOp0s";
// const CHAT_ID = "-4261956303";

const BOT_TOKEN = "7498658431:AAHsJN8ghKApjHZb412rQwxqyPdlPURbNGk";
const CHAT_ID = "-1002148512889";

const Contact = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    let messageText = "Buyurtma:%0A";
    messageText += `FirstName: <b>${fname}</b>%0A`;
    messageText += `LastName: <b>${lname}</b>%0A%0A`;
    messageText += `Email Address: <b>${email}</b>%0A`;
    let url = ` https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${messageText}&parse_mode=html`;

    console.log("ok");
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
  };

  return (
    <div>
      <form action="" onSubmit={handleSendMessage}>
        <input
          value={fname}
          type="text"
          onChange={(e) => setFname(e.target.value)}
          placeholder="First Name"
        />
        <input
          value={lname}
          type="text"
          onChange={(e) => setLname(e.target.value)}
          placeholder="Last Name"
        />
        <input
          value={email}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
