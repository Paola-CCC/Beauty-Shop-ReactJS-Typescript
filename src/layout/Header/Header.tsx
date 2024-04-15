import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { useAppSelector } from "../../redux/hooks";
import { ReactComponent as CartIcon } from '../../assets/svg/cart-icon.svg';
import { ReactComponent as HeartIcon } from '../../assets/svg/heart-icon.svg';
import { ReactComponent as UserIcon } from '../../assets/svg/user-icon.svg';
import { usePathname } from '../../hooks/useNavigate';


const Header = () => {
  const [active, setActive] = useState<boolean>(false);
  const [carItems, setCarTItems] = useState<any>({});
  const cartData = useAppSelector((state) => state.cart);
  const listFavoris = useAppSelector((state) => state.products.listFavoris);

  const isLoggedUser = useAppSelector((state) => state.auth);
  const [userIsLogged, setUserIsLogger] = useState<boolean>(false);

  const handleClick = () => {
    setActive(!active);
  };

  const path = usePathname();
  
  useEffect(() => {

    if (cartData) {
      setCarTItems(cartData);
    }

    if (isLoggedUser) {
      setUserIsLogger(isLoggedUser.isLogged);
    }

  }, [cartData, isLoggedUser])

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
                BEAUTY GALAXY
                <i className="fab fa-react"></i>
              </Link>
            </h4>
          </div>

          <ul className="nav-links-mobile">
            <li className={`${path === '/favoris' ? 'activate' : ''}`}>
              <Link to="favoris" className="nav-links">
              <span className="icon-svg-container">
                <HeartIcon />
                { listFavoris?.length !== 0 && (
                  <small className="heart-text"> {listFavoris?.length} </small>
                )}
              </span>
              </Link>
            </li>
            <li className={`${path === '/panier' ? 'activate' : ''}`}>
              <Link to="panier" className="nav-links">
                <span className="icon-svg-container">
                  <CartIcon />
                  { carItems.cartLength !== 0 && (
                      <small id="cart-show-item" className="heart-text"> {carItems?.cartLength}</small>
                  )}
                </span>              
              </Link>
            </li>
            <li className={`${path === '/personal-space' || path === '/connexion' ? 'activate' : ''}`}>
              {userIsLogged ? (
                <Link to={"personal-space"} className="nav-links">
                  <span className="icon-svg-container">
                    <UserIcon />
                  </span>               
                </Link>
              ) : (
                <Link to={"connexion"} className="nav-links">
                  <span className="icon-svg-container">
                    <UserIcon />
                  </span>                
                </Link>
              )}
            </li>
          </ul>
        </div>

        <ul className={active ? "nav-menu active" : "nav-menu"}>
          <li className={`${path === '/' ? 'activate' : ''}`}>
            <Link to="/" className="nav-links">
              Accueil
            </Link>
          </li>
          <li className={`${path === '/nouveaux' ? 'activate' : ''}`}>
            <Link to="nouveaux" className="nav-links">
              Nouveautés
            </Link>
          </li>
          <li className={`${path === '/make-up' ? 'activate' : ''}`}>
            <Link to="make-up" className="nav-links">
              Maquillage
            </Link>
          </li>
          <li className={`${path === '/skin-care' ? 'activate' : ''}`}>
            <Link to="skin-care" className="nav-links">
              Soin visage
            </Link>
          </li>
          <li className={`desktop-icons-user ${ path === '/favoris' ? 'activate' : ''}`}>
            <Link to="favoris" className="nav-links">
              <span className="icon-svg-container">
                <HeartIcon />
                { listFavoris?.length !== 0 && (
                  <small className="heart-text"> {listFavoris?.length} </small>
                )}              
              </span>
            </Link>
          </li>
          <li className={`desktop-icons-user ${ path === '/panier' ? 'activate' : ''}`}>
            <Link to="panier" className="nav-links">
              <span className="icon-svg-container">
                <CartIcon />
                { carItems.cartLength !== 0 && (
                      <small id="cart-show-item" className="heart-text"> {carItems?.cartLength}</small>
                  )}              
                </span>
            </Link>
          </li>

          <li className="desktop-icons-user">

            {userIsLogged ? (
              <Link to={"personal-space"} className="nav-links">
                <span className="icon-svg-container">
                  <UserIcon />
                </span>
              </Link>
            ) : (
              <Link to={"connexion"} className="nav-links">
                <span className="icon-svg-container">
                  <UserIcon />
                </span>
              </Link>
            )}

          </li>
        </ul>

      </nav>
    </header>
  );
};

export default Header;
