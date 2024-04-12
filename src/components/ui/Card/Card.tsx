import React, { useState } from 'react';
import './Card.scss';
import { ReactComponent as HeartIcon } from '../../../assets/svg/heart-icon.svg';
import { ReactComponent as HeartIconSelected } from '../../../assets/svg/heart-full-icon.svg';
import { Link } from 'react-router-dom';
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


  return (
    <div className="card" >
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
      <div className='card-main'>
        <div className="card-main-header">
          <h4>
            <span className='title-card'> {brandName?.toUpperCase()}
              <span><i className="fa-solid fa-star"></i> {notes}</span>
            </span>
            <span className='description-short'> {descriptionShort} </span>
          </h4>
        </div>
        <div className="card-main-footer">
          <h4>
            {price} €
          </h4>
          {showBtnLink && (
            <Link to={'/' + path} className='btn-path-action'>
              <Button kind='primary' >
                En savoir plus
              </Button>
            </Link>
          )
          }
        </div>
      </div>
    </div>
  )
}

export default Card;


