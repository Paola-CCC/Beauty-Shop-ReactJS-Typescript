import React from 'react'
import './Orders.scss';

const Orders = () => {
  return (
    <>
        <h3 className="details"> Vos commandes </h3>
        <div className='details'>
          <ul className='block'>
            <li>
              <p> Impossible d'afficher vos commandes</p>
            </li>
          </ul>
        </div>
    </>
  )
}

export default Orders;