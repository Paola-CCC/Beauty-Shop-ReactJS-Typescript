import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
interface CardProps {
  path?: string,
  brandName?: string,
  notes?: any,
  descriptionShort?: string, 
  thumbnail?: string, 
  price: number | null,
  showButton?: boolean
}

const Card = ({path , brandName , notes, descriptionShort, thumbnail, price , showButton = true }: CardProps) => {
  return (
    <Link to={'/' + path} className="card">
      <figure className="card-image">
        <img src={thumbnail} alt="skincare-i" />
        <span tabIndex={0}>
        <i className="fa-regular fa-heart fa-xl" ></i>        
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
          { showButton  &&
            <Button kind='primary'>
              En savoir plus
            </Button>
          }

        </div>

      </div>

    </Link>
  )
}

export default Card ;


