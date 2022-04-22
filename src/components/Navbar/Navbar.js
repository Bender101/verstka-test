import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-content">
      <div className="navbar-link">
        <p>Все</p>
      </div>
      <div className="navbar-link">
        <p>Суши</p>
      </div>
      <div className="navbar-link">
        <p>Пицца</p>
      </div>
      <div className="navbar-link">
        <p>Бургеры</p>
      </div>
      <div className="navbar-link">
        <p>Фастфуд</p>
      </div>
      <div className="navbar-link">
        <p>Шашлыки</p>
      </div>
      <div className="navbar-link">
        <p>Азиатская</p>
      </div>
      <div className="navbar-link">
        <p>Десерты</p>
      </div>
      <div className="navbar-link">
        <p>Здоровая еда</p>
      </div>
      <div className="navbar-link">
        <p>Еще</p>
        <img src="/img/vector/arrow-down.png" />
      </div>
    </div>
  );
};

export default Navbar;
