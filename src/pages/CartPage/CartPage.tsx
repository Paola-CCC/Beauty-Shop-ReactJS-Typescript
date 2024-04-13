import React, { useEffect, useState } from 'react'
import './CartPage.scss';
import ShoppingCartRow from '../../components/ShoppingCartRow/ShoppingCartRow';
import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
  
const CartPage = () => {

    const cartState = useAppSelector((state : RootState) =>  state.cart);
    const [itemsOnly, setItemsOnly] = useState<any>([]);
    const navigate = useNavigate();

    useEffect(() => {
        if( Object.values(cartState).length > 0) {
            setItemsOnly(cartState.CartItems);
        }
           
    },[cartState ,itemsOnly])



    return (

        <div className='cart-shopping-container'>
        
        <h3> VOTRE PANIER</h3>

        <section className='cart-items-layout'>
                <ul className="shopping-cart-list"> 

                    { itemsOnly && itemsOnly.map((e:any, index: number)=> (
                        <li key={index}  className="cart-item">
                            <ShoppingCartRow 
                                id={e.id}
                                productName={e.brandName}
                                descriptionShort={e.descriptionShort}
                                price={e.price}
                                quantitySelected={e.quantity}
                                thumbnail={e.thumbnail} 
                            />

                        </li>
                    ))}

                    { Object.values(itemsOnly).length === 0 && (
                        <p>
                            Votre panier est vide
                        </p>
                    )}

                </ul>

                <div className="cart-summary">
                    <h4> 
                        <span>Nombre d'articles: </span>
                        <span>
                            { cartState?.cartLength > 1 ? `${cartState?.cartLength} articles `: `${cartState?.cartLength} article` }
                        </span>
                    </h4>
                    <h4> 
                        <span>Total:  </span>
                        <span> {cartState?.total} € </span>
                    </h4>
                    <button className="checkout-button" disabled={Object.values(itemsOnly).length !== 0 ? false : true} >Valider le panier</button>
                    <button className="checkout-button" onClick={() => navigate('/')} >Continuer vos achats</button>
                </div>
        </section>
        </div>
    );
};
      


export default CartPage ;