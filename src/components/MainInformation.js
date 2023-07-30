import React from "react";
import "./MainInformation.css";
import line from "../image/Line.svg";

const MainInformation = () => {
  return (
    <div className="main-container">
      <div className="main-container__left-column">
        <h2>Зарабатывайте больше</h2>
        <h2>
          <span className="gradient">С WELBEX</span>
        </h2>
        <p className="left-column-text">
          Развиваем и контролируем продажи за вас
        </p>
      </div>
      <div className="main-container__right-column">
        <p className="right-column-title text title">
          Вместе с <span className="gradient">бесплатной консультацией</span>{" "}
          мы дарим:
        </p>
        <div className="grid">
          <div>
            <p className="title">
              <img src={line} className="line"></img>Виджеты
            </p>
            <p className="description">30 готовых решений</p>
          </div>
          <div>
            <p className="title">
              <img src={line} className="line"></img>Dashboard
            </p>
            <p className="description">с показателями вашего бизнеса</p>
          </div>
          <div>
            <p className="title">
              <img src={line} className="line"></img>Skype Аудит
            </p>
            <p className="description">отдела продаж и CRM системы</p>
          </div>
          <div>
            <p className="title">
              <img src={line} className="line"></img>35 дней
            </p>
            <p className="description">использования CRM</p>
          </div>
        </div>
        <button>
          <p className="text">Получить консультацию</p>
        </button>
      </div>
    </div>
  );
};

export default MainInformation;
