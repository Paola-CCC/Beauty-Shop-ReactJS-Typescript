
import React from 'react'
import { Link } from 'react-router-dom';
import "./Brand.scss";

interface BandCardProps {
    brandName: string, 
    imgSrc?: string , 
    alt?: string
}

const Brand = ({brandName,imgSrc,alt = '' }: BandCardProps) => {
  return (
        <div className="card-brand">
            <Link to={"#"}>
                <div className="card-image">
                    <img src={imgSrc} alt={alt} />
                    <h4> {brandName}</h4>
                </div>
            </Link>
        </div>
  )
}

export default Brand;