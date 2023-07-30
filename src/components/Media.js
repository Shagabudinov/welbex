import React from "react";
import telegram from "../image/telegram.svg";
import viber from "../image/viber.svg";
import whatsapp from "../image/whatsapp.svg";

const Media = () => {
  return (
    <div className="header__social-icons">
      <a href="#">
        <img
          src={telegram}
          alt=""
          className="header__social-icon header__tg-icon"
        ></img>
      </a>
      <a href="#">
        <img
          src={viber}
          alt=""
          className="header__social-icon header__vb-icon"
        ></img>
      </a>
      <a href="#">
        <img
          src={whatsapp}
          alt=""
          className="header__social-icon header__ws-icon"
        ></img>
      </a>
    </div>
  );
};

export default Media;
