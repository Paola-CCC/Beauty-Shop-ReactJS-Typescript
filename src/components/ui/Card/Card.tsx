import React, { useState } from 'react';
import './Card.scss';
import { ReactComponent as HeartIcon } from '../../../assets/svg/heart-icon.svg';
import { ReactComponent as HeartIconSelected } from '../../../assets/svg/heart-full-icon.svg';
import { Link, useNavigate } from 'react-router-dom';
import InputSelect from '../InputSelect/InputSelect';
import { usePathname } from '../../../hooks/useNavigate';
import Button from '../Button/Button';
import { useAppDispatch } from '../../../redux/hooks';
import { CartItems } from '../../../types/products.type';
import { addToCart } from '../../../redux/cart/cartSlice';
interface CardProps {
  id?: number | null,
  path?: string,
  brandName: string,
  name: string,
  descriptionLong: string,
  descriptionShort: string,
  thumbnail: string,
  quantity: number | null,
  tags?: string[],
  subCategories?: string[],
  categories: string,
  notes?: any,
  createdAt: string,
  price: number | null,
  showBtnLink?: boolean,
  heartIsCliked?: boolean | undefined,
}

const Card = ({ path, showBtnLink = true, heartIsCliked , ...props}: CardProps) => {

  const [userClickOnHeart,setUserClickOnHeart ] = useState<boolean | undefined >(heartIsCliked);
  const dispatch = useAppDispatch();

  const [quantityProduct, setQuantityProduct] = useState<string>('0');

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

  const navigate = useNavigate();
  const pathUrl = usePathname()

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


  return (
    <div className="card-ui" >
      <figure className="card-image">
        <img src={props.thumbnail} alt="skincare-i" />
        <span tabIndex={0} onClick={() => setUserClickOnHeart(!userClickOnHeart) }>

          {userClickOnHeart ? (
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


