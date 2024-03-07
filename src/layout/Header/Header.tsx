import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { useAppSelector } from "../../redux/hooks";

const Header = () => {
  const [active, setActive] = useState<boolean>(false);
  const [carItems , setCarTItems] = useState<any>({});

  const cartData = useAppSelector((state) => state.cart);
  

  const handleClick = () => {
    setActive(!active);
  };

useEffect(()=> {

    console.log("cartData " , cartData);

    if( cartData ) {
      setCarTItems(cartData);
    }
    
},[cartData])

  return (
    <header>
      <nav className="navbar">

        <div className="data-icons">
          <div className="menu-logo-zone">
            <div className="menu-icon" onClick={handleClick}>
              <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <h4 className="navbar-logo">
              <Link to={'/'}>
                BeautyGalaxy <i className="fab fa-react"></i>
              </Link>
            </h4>
          </div>

          <ul className="nav-links-mobile">
            {/* <li>
              <Link to="#" className="nav-links">
                <i className="fa-solid fa-heart fa-lg"></i>
                <small className="heart-text"> 8 </small>
              </Link>
            </li> */}
            <li>
              <Link to="panier" className="nav-links">
                <i className="fa-solid fa-cart-shopping fa-lg"></i>
                <small id="cart-show-item" className="heart-text"> {carItems.cartLength}</small>
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
            <Link to="make-up" className="nav-links">
              Maquillage
            </Link>
          </li>
          <li>
            <Link to="skin-care" className="nav-links">
              Skincare
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-links">
              About
            </Link>
          </li>
          <li className="desktop-icons-user">
            {/* <Link to="#" className="nav-links">
              <i className="fa-solid fa-heart fa-lg"></i>
              <small className="heart-text"> 10 </small>
            </Link> */}
          </li>
          <li className="desktop-icons-user">
            <Link to="panier" className="nav-links">
              <i className="fa-solid fa-cart-shopping fa-lg"></i>
              <small id="cart-show-item" className="heart-text"> {carItems.cartLength}</small>
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
