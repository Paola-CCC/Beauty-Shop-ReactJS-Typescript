
import React from 'react'
import { Link } from 'react-router-dom';
import "./Brand.scss";

interface BandCardProps {
    brandName: string, 
    img?: string , 
    alt?: string
}

export const Brand = ({brandName,img,alt }: BandCardProps) => {
  return (
        <div className="card-brand">
            <Link to={"#"}>
                <div className="card-image">
                    <img src="https://1.bp.blogspot.com/-k-Cbbx0M7w4/YBrDmu_NSII/AAAAAAAFZbs/Pa3MSkFNcr00PnHalMuYWvKQUVm6zC0ZwCLcBGAsYHQ/s800/givenchy-maquillage-printemps-2021.jpg" alt="Orange" />
                    <h4> {brandName}</h4>
                </div>
            </Link>
        </div>
  )
}
