import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-content">
      <Link to="/" scr="">
        {" "}
        <div className="navbar-link">
          <p>Все</p>
        </div>
      </Link>
      <Link to="/">
        {" "}
        <div className="navbar-link">
          <p>Суши</p>
        </div>{" "}
      </Link>
      <Link to="/" scr="">
        <div className="navbar-link">
          <p>Пицца</p>
        </div>
      </Link>
      <Link to="/" scr="">
        <div className="navbar-link">
          <p>Бургеры</p>
        </div>
      </Link>
      <Link to="/" scr="">
        {" "}
        <div className="navbar-link">
          <p>Фастфуд</p>
        </div>
      </Link>
      <Link to="/" scr="">
        <div className="navbar-link">
          <p>Шашлыки</p>
        </div>
      </Link>
      <Link to="/" scr="">
        <div className="navbar-link">
          <p>Азиатская</p>
        </div>
      </Link>
      <Link to="/" scr="">
        <div className="navbar-link">
          <p>Десерты</p>
        </div>
      </Link>
      <Link to="/" scr="">
        <div className="navbar-link">
          <p>Здоровая еда</p>
        </div>
      </Link>
      <Link to="/" scr="">
        <div className="navbar-link">
          <p>Ещё</p>
          <img src="/img/vector/arrow-down.png" />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
