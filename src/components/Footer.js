import React from "react";
import "./Footer.css";
import Media from "./Media";

const Footer = () => {
  const dataArray = [
    ["Партнерская программа", "Вакансии"],
    ["Расчёт стоимости", "Услуги", "Виджеты", "Интеграции", "Наши клиенты"],
    [
      "Кейсы",
      "Благодарственные письма",
      "Сертификаты",
      "Блог на Youtube",
      "Вопрос / Ответ",
    ],
  ];

  return (
    <footer className="footer">
      <div className="footer__left-column">
        <div className="footer__grid-container container-1">
          <h3 className="footer__grid-item item-1">О компании</h3>
          <a href="#">
            <p className="footer__grid-item item-2">Партнерская программа</p>
          </a>
          <a href="#">
            <p className="footer__grid-item item-3">Вакансии</p>
          </a>
        </div>
        <div className="footer__menu-container">
          <div className="footer__grid-container container-2">
            <h3 className="footer__grid-item item-4">Меню</h3>
            <a href="#">
              <p className="footer__grid-item item-5">Расчёт стоимости</p>
            </a>
            <a href="#">
              <p className="footer__grid-item item-6">Услуги</p>
            </a>
            <a href="#">
              <p className="footer__grid-item item-7">Виджеты</p>
            </a>
            <a href="#">
              <p className="footer__grid-item item-8">Интеграции</p>
            </a>
            <a href="#">
              <p className="footer__grid-item item-9">Наши клиенты</p>
            </a>
          </div>

          <div className="footer__grid-container container-3">
            <a href="#">
              <p className="footer__grid-item item-11">Кейсы</p>
            </a>
            <a href="#">
              <p className="footer__grid-item item-12">
                Благодарственные письма
              </p>
            </a>
            <a href="#">
              <p className="footer__grid-item item-13">Сертификаты</p>
            </a>
            <a href="#">
              <p className="footer__grid-item item-14">Блог на Youtube</p>
            </a>
            <a href="#">
              <p className="footer__grid-item item-15">Вопрос / Ответ</p>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__right-column">
        <h3>Контакты</h3>
        <p className="header__contact">+7 555 555-55-55</p>
        <Media />
        <p>Москва, Путевой проезд 3с1, л 902</p>
        <div className="footer__meta-information">
          <p>&copy;WELBEX 2022. Все права защищены.</p>
          <p>Политика конфиденциальности</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
