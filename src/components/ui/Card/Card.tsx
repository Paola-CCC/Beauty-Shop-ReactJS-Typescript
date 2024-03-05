import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
interface CardProps {
  brandName?: string,
  notes?: string | number,
  description?: string, 
  imgSrc?: string, 
  price?: string | number
}

const Card = ({brandName , notes, description, imgSrc, price}: CardProps) => {
  return (
    <Link to={"#"} className="card">
      <figure className="card-image">
        <img src="https://d1flfk77wl2xk4.cloudfront.net/Assets/80/931/XXL_p0165993180.jpg" alt="An orange painted blue, cut in half laying on a blue background" />
      </figure>
      <div className="card-header">
        <h4>
          <span className='title-card'> BEAUTY OF JOSEON 
              <span><i className="fa-solid fa-star"></i> 3.5</span>
          </span>
          <span> Relief Sun : Rice + Probiotics SPF50+ PA++++ </span>
        </h4>
      </div>
      <div className="card-footer">
        <h4>
            30 €
        </h4>
        <Button kind='primary'>
         En savoir plus
        </Button>
      </div>

    </Link>
  )
}

export default Card ;


