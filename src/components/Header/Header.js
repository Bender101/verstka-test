import "./Header.css";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Address from "../Address/Address";
import { Link } from "react-router-dom";

const Header = () => {
  const [status, setStatus] = useState(false);

  const changeStatus = () => {
    setStatus(!status);
  };

  return (
    <div className="header-container">
      <div className="header-content">
        <div className="v-block">
          <img className="v-char" src="/img/vector/V.png" />
        </div>
        <div className="s-block">
          <img className="s-char" src="/img/vector/S.png" />
        </div>
        <div className="e-block">
          <img className="e-char" src="/img/vector/E.png" />
        </div>
        <div className="m-block">
          <img className="m-char" src="/img/vector/M.png" />
        </div>
        <div className="food-logo">
          <div className="E-char">
            <img src="/img/vector/E-big.png" />
          </div>
          <div className="D-char">
            <img src="/img/vector/D-big.png" />
          </div>
          <div className="A-char">
            <img src="/img/vector/A-big.png" />
          </div>
        </div>
        {status ? (
          <Address changeStatus={changeStatus} />
        ) : (
          <div className="address-block">
            <div className="marker">
              <img src="/img/vector/marker.png" />
            </div>
            <div className="marker-circle">
              <img src="/img/vector/marker-circle.png" />
            </div>

            <div onClick={changeStatus} className="address">
              Ул. Тестовая д1 стр.4
            </div>
          </div>
        )}
        <div className="search-block">
          <div className="search-loupe">
            <img src="/img/vector/search.png" />
          </div>
          <div className="search-text">Поиск</div>
        </div>
        <div className="signin">
          <Link to="#">
            <div className="arrow">
              <img src="/img/vector/->.png" />
            </div>
            <div className="staple">
              <img src="/img/vector/].png" />
            </div>
            <div className="signin-title">Войти</div>
          </Link>
        </div>
        <div className="cart">
          <img src="/img/vector/cart.png" />
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
