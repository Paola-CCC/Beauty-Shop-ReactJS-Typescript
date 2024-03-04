import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header>
      <nav className="navbar">

        <div className="data-icons">

          <div className="menu-icon" onClick={handleClick}>
            <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <h4 className="navbar-logo">
            React <i className="fab fa-react"></i>
          </h4>
          <ul className="nav-links-mobile">
            <li>
              <Link to="#" className="nav-links">
                <i className="fa-solid fa-heart fa-lg"></i>
                <small className="heart-text"> 8 </small>
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-links">
                <i className="fa-solid fa-cart-shopping fa-lg"></i>
                <small id="cart-show-item" className="heart-text"> 9</small>
              </Link>
            </li>
            <li>
              <Link to="connexion" className="nav-links">
                  <i className="fa-solid fa-user fa-lg"></i>
              </Link>
            </li>
          </ul>

        </div>

        <ul className={active ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/" className="nav-links">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-links">
              Maquillage
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-links">
              Skincare
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-links">
              Blog
            </Link>
          </li>
          <li className="desktop-icons-user">
            <Link to="#" className="nav-links">
              <i className="fa-solid fa-heart fa-lg"></i>
              <small className="heart-text"> 10 </small>
            </Link>
          </li>
          <li className="desktop-icons-user">
            <Link to="#" className="nav-links">
              <i className="fa-solid fa-cart-shopping fa-lg"></i>
              <small id="cart-show-item" className="heart-text"> 9</small>
            </Link>
          </li>

          <li className="desktop-icons-user">
            <Link to="connexion" className="nav-links">
              <i className="fa-solid fa-user fa-lg"></i>
            </Link>
          </li>
        </ul>

      </nav>
    </header>
  );
};

export default Header;
