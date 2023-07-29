import React from "react";
import "./header.css";
import logo_part1 from "../image/logo_part1.svg";
import logo_part2 from "../image/logo_part2.svg";
import telegram from "../image/telegram.svg";
import viber from "../image/viber.svg";
import whatsapp from "../image/whatsapp.svg";

const Header = () => {
  return (
    <header>
      <div className="header__left-column">
        <div className="logo">
          <img src={logo_part1} alt="" className="logo__img-part-1"></img>
          <img src={logo_part2} alt="" className="logo__img-part-2"></img>
          <div className="logo__desctiption">
            <p>крупный интегратор CRM в России и ещё 8 странах</p>
          </div>
        </div>
        <nav className="nav-container">
          <p className="nav-container__item">Услуги</p>
          <p className="nav-container__item">Виджеты</p>
          <p className="nav-container__item">Интеграции</p>
          <p className="nav-container__item">Кейсы</p>
          <p className="nav-container__item">Сертификаты</p>
        </nav>
      </div>
      <div className="header__right-column">
        <div>
          <p className="header__contact">+7 555 555-55-55</p>
        </div>
        <div className="header__social-icons">
          <img
            src={telegram}
            alt=""
            className="header__social-icon header__tg-icon"
          ></img>
          <img
            src={viber}
            alt=""
            className="header__social-icon header__vb-icon"
          ></img>
          <img
            src={whatsapp}
            alt=""
            className="header__social-icon header__ws-icon"
          ></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
