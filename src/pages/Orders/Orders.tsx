import React, { useEffect, useRef, useState } from 'react'
import './Orders.scss';
import { RootState } from '../../redux/store';
import { useAppSelector } from '../../redux/hooks';
import OrdersList from '../../components/OrdersList/OrdersList';
import { Button } from '@chakra-ui/react';

const Orders = () => {

  const userState = useAppSelector((state : RootState) => state.auth);

  const initialState = {
    cartItems: [],
    cartLength: 0,
    total: 0,
    devise: "EUR",
    userId: null,
    date: ''
  }
  const [ ordersList, setOrdersList] = useState(initialState);
  const fetch = useRef<boolean>(false);

  const removeOrdersStorage = () => {
    if( localStorage.getItem("orders") ){
      localStorage.removeItem('orders');
    }  
    setOrdersList(initialState);
  };
  

  useEffect(() => {
    const localStorageOrders = localStorage.getItem("orders");

    if( localStorageOrders ){
      const ordersDatas = JSON.parse(localStorageOrders);      
      if( fetch.current === false){
        setOrdersList(ordersDatas);
        fetch.current = true ;
      }      
    }    
    
  },[userState ,ordersList])
  return (
    <>
        <h3 className="details"> Vos commandes </h3>
        <div className='details'>
          <ul className='block'>


            { ordersList?.cartItems.length === 0 && (
            <li>
                <p> Impossible d'afficher vos commandes</p>
            </li>
            )}
            { ordersList?.cartItems.length > 0 && (
            <div className='header-orders-list'>
                <p> Le {ordersList.date}   | 
                  <span> {ordersList?.cartLength} {ordersList?.cartLength > 1 ?  'articles': 'article'}</span>
                </p>
                <Button className="primary" onClick={removeOrdersStorage}>
                  Supprimer
                </Button>
            </div>
            )}

            { ordersList.cartItems.length > 0 && ordersList.cartItems.map((e:any, index: number)=> (
              <li key={index} className="cart-item">
                  <OrdersList
                      id={e.id}
                      productName={e.brandName}
                      descriptionShort={e.descriptionShort}
                      price={e.price}
                      quantity={e.quantity}
                      thumbnail={e.thumbnail} 
                  />
              </li>
          ))}
          </ul>
        </div>
    </>
  )
}

export default Orders;