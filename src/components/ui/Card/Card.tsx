import React, { useEffect, useRef, useState } from 'react';
import './Card.scss';
import { ReactComponent as HeartIcon } from '../../../assets/svg/heart-icon.svg';
import { ReactComponent as HeartIconSelected } from '../../../assets/svg/heart-full-icon.svg';
import { Link, useNavigate } from 'react-router-dom';
import InputSelect from '../InputSelect/InputSelect';
import { usePathname } from '../../../hooks/useNavigate';
import Button from '../Button/Button';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { CartItems, Products } from '../../../types/products.type';
import { addToCart } from '../../../redux/cart/cartSlice';
import { toggleFavoris } from '../../../redux/products/productsSlice';
import { RootState } from '../../../redux/store';
interface CardProps extends Products {
  path: string,
  showBtnLink?: boolean,
  getLocalStorage?: () => void
}

const Card = ({ path, showBtnLink = true,getLocalStorage , ...props}: CardProps) => {

  const favorisList = useAppSelector((state: RootState) => state.products.listFavoris);
  const cartItem = useAppSelector((state: RootState) => state.cart.cartItems);
  const [quantityProduct, setQuantityProduct] = useState<string>('0');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const pathUrl = usePathname();
  const fetchData = useRef<boolean>(false);


  /** Ajout dans la page panier */
  const handleClick = () => {

      if( props.id && props.price ) {
        const datasCatOne : CartItems  = {
            id: props.id ,
            quantity: Number(quantityProduct),
            price: props.price,
            thumbnail: props.thumbnail,
            descriptionShort: props.descriptionShort,
            brandName: props.brandName,
        } 

        dispatch(addToCart(datasCatOne));
      }
  }

  /** Ajoute/Supprime dans la liste des favoris */
  const handleFavoris = () =>  dispatch(toggleFavoris(props));
    
  const handleNavigate  = () => {
    navigate('/' + path);    
  }

  const optionsQuantity = [
    { value: "", label: "sélectionnez la quantité" },
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
  ];

  /** retrouve les produits qui sont dans les favoris */
  const handleFavorisCheck = () => {

    const mappedFavoris = favorisList.map((value: Products) => value.id );

    if (mappedFavoris.includes(props.id)) {
      return true ;
    } else {
      return false
    }   
  }


  useEffect(() => {
    const checkCartItem = () => {

      const quantityCart = cartItem.find((cart: CartItems) => cart.id === props.id );
      if ( quantityCart !== undefined) {
        setQuantityProduct(quantityCart.quantity + '');
      } 
    }

    if( fetchData.current === false){      
      checkCartItem();
      fetchData.current = true;
    }    

  },[cartItem,props]);

  return (
    <div className="card-ui" >
      <figure className="card-image">
        <img src={props.thumbnail} alt="skincare-i" />
        <span tabIndex={0} onClick={handleFavoris}>

          {handleFavorisCheck() ? (
             <HeartIconSelected />
          ) : (
            <HeartIcon />
          )}
        </span>
      </figure>
      <div className='card-main' >
        <div className="card-main-header" tabIndex={0} onClick={ pathUrl === '/favoris' ? handleNavigate : undefined} >
          <h4>
            <span className='title-card'> {props.brandName?.toUpperCase()}
              <span><i className="fa-solid fa-star"></i> {props.notes}</span>
            </span>
          </h4>
          <div className='card-main-body'>
            <span className='description-short'> {props.descriptionShort} </span>
            <span className='pricing'> {props.price} € </span>
          </div>
        </div>
        <div className="card-main-footer">

          { pathUrl !== '/favoris' && (
              <Link to={'/' + path} className='btn-path-action'>
                <Button kind='primary' >
                  En savoir plus
                </Button>
              </Link>
            )
          }

          {  pathUrl === '/favoris' && (
            <div className='mb-3'>
                <InputSelect
                    name="item-quantity"
                    options={optionsQuantity}
                    value={quantityProduct}
                    onChange={(e) => setQuantityProduct(e.target.value)}
                />
                <Button kind='primary' onClick={handleClick} >
                  Acheter
                </Button>
            </div>
          )}
          
        </div>
      </div>
    </div>
  )
}

export default Card;


