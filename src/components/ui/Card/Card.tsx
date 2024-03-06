import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
interface CardProps {
  brandName?: string,
  notes?: string | number,
  description?: string, 
  imgSrc?: string, 
  price?: string | number,
  showButton?: boolean
}

const Card = ({brandName , notes, description, imgSrc, price , showButton = true }: CardProps) => {
  return (
    <Link to={"#"} className="card">
      <figure className="card-image">
        <img src={imgSrc} alt="skincare-i" />
        <span tabIndex={0}>
        <i className="fa-regular fa-heart fa-xl" ></i>        
        </span>
      </figure>
      <div className="card-header">
        <h4>
          <span className='title-card'> {brandName}
              <span><i className="fa-solid fa-star"></i> {notes}</span>
          </span>
          <span> {description} </span>
        </h4>
      </div>
      <div className="card-footer">
        <h4>
            {price} €
        </h4>
        { showButton  &&
          <Button kind='primary'>
            En savoir plus
          </Button>
        }

      </div>
    </Link>
  )
}

export default Card ;


