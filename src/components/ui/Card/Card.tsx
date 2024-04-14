import React, { useState } from 'react';
import './Card.scss';
import { ReactComponent as HeartIcon } from '../../../assets/svg/heart-icon.svg';
import { ReactComponent as HeartIconSelected } from '../../../assets/svg/heart-full-icon.svg';
import { Link, useNavigate } from 'react-router-dom';
import InputSelect from '../InputSelect/InputSelect';
import { usePathname } from '../../../hooks/useNavigate';
import Button from '../Button/Button';
interface CardProps {
  path?: string,
  brandName?: string,
  notes?: any,
  descriptionShort?: string,
  thumbnail?: string,
  price: number | null,
  showBtnLink?: boolean,
  heartIsCliked?: boolean | undefined
}

const Card = ({ path, brandName, notes, descriptionShort, thumbnail, price, showBtnLink = true, heartIsCliked }: CardProps) => {

  const [userClickOnHeart,setUserClickOnHeart ] = useState<boolean | undefined >(heartIsCliked);
  const [quantity, setQuantity] = useState<number>(0);
  
  const navigate = useNavigate();
  const pathUrl = usePathname()


  const handleClick = () => {
    console.log( "quantity ", quantity );
    
  }

  const handleNavigate  = () => {
    navigate('/' + path);    
  }

  const optionsQuantity = [
    { value: 0, label: "sélectionnez la quantité" },
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
];


  return (
    <div className="card-ui" >
      <figure className="card-image">
        <img src={thumbnail} alt="skincare-i" />
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
            <span className='title-card'> {brandName?.toUpperCase()}
              <span><i className="fa-solid fa-star"></i> {notes}</span>
            </span>
          </h4>
          <div className='card-main-body'>
            <span className='description-short'> {descriptionShort} </span>
            <span className='pricing'> {price} € </span>
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
                    value={quantity}
                    onChange={(e)=>setQuantity(Number(e.target.value))}
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


