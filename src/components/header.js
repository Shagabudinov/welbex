import React from "react";
import "./header.css";
import logo_part1 from "../image/logo_part1.svg";
import logo_part2 from "../image/logo_part2.svg";
import Media from "./Media";

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
          <a href="#">
            <p className="nav-container__item">Услуги</p>
          </a>
          <a href="#">
            <p className="nav-container__item">Виджеты</p>
          </a>

          <a href="#">
            <p className="nav-container__item">Интеграции</p>
          </a>

          <a href="#">
            <p className="nav-container__item">Кейсы</p>
          </a>

          <a href="#">
            <p className="nav-container__item">Сертификаты</p>
          </a>
        </nav>
      </div>
      <div className="header__right-column">
        <div>
          <p className="header__contact">+7 555 555-55-55</p>
        </div>
        <Media />
      </div>
    </header>
  );
};

export default Header;
