import React from 'react'
import './OrdersList.scss';

interface OrdersListProps {
    id?: number,
    productName?: string, 
    descriptionShort? : string, 
    price?: number,
    thumbnail?: string,
    quantitySelected?: number,
    quantity?: number
}


const OrdersList = ({ id,productName,descriptionShort,price,thumbnail,quantity }: OrdersListProps) => {
  return (
    <div className='orders-container'>

        <div className='img-zone'>
            <img src={thumbnail} alt="Product" />
        </div>

        <div className='body-orders-rows'>
            <div className="item-details">
                <p className='title-row'>{productName}</p>
                <p>{descriptionShort}</p>
            </div>
            <div className="quantity-input">
                <p> quantité: {quantity}</p>
                <span> Prix: { price} €  </span>
            </div>
        </div>
    </div>
  )
}

export default OrdersList;