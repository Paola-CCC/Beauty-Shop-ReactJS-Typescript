import React, { useEffect, useState } from 'react'
import './CartPage.scss';
import ShoppingCartRow from '../../components/ShoppingCartRow/ShoppingCartRow';
import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
  
const CartPage = () => {

    const products = useAppSelector((state : RootState) =>  state.cart);
    const [itemsCartAll, setItemsCartAll] = useState<any>({});
    const [itemsOnly, setItemsOnly] = useState<any>([]);
    const navigate = useNavigate();

    useEffect(() => {
        if( Object.values(products).length > 0) {
            setItemsOnly(products.CartItems);
            setItemsCartAll(products);
        }
           
    },[products ,itemsOnly])



    return (

        <div className='cart-shopping-container'>
        
        <h3> VOTRE PANIER</h3>

        <section className='cart-items-layout'>
                <ul className="shopping-cart-list"> 

                    { itemsOnly && itemsOnly.map((e:any , index: any)=> (
                        <li key={index} >
                            <ShoppingCartRow 
                                id={e.id}
                                productName={e.brandName}
                                descriptionShort={e.descriptionShort}
                                price={e.price}
                                quantitySelected={e.quantity}
                                imgSrc={e.imgSrc} 
                            
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
                        <span>{itemsCartAll.cartLength} articles</span>
                    </h4>
                    <h4> 
                        <span>Total:  </span>
                        <span> {itemsCartAll.total} € </span>
                    </h4>
                    <button className="checkout-button" disabled={Object.values(itemsOnly).length !== 0 ? false : true} >Valider le panier</button>
                    <button className="checkout-button" onClick={() => navigate('/')} >Continuer vos achats</button>
                </div>
        </section>
        </div>
    );
};
      


export default CartPage ;