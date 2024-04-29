import React, { useEffect, useState } from 'react'
import './CartPage.scss';
import ShoppingCartRow from '../../components/ShoppingCartRow/ShoppingCartRow';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { CartItems } from '../../types/products.type';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'
import { resetCart } from '../../redux/cart/cartSlice';
const CartPage = () => {

    const userState = useAppSelector((state : RootState) =>  state.auth);
    const cartState = useAppSelector((state : RootState) =>  state.cart);
    const dispatch = useAppDispatch();
    const [itemsOnly, setItemsOnly] = useState<CartItems[]>([]);
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure()


    const handleClick = () => {

        if( !userState.isLogged ) {
            navigate('/connexion');
        } else {
            onOpen();
        }
    };

    /** met les articles dans le localStorage*/
    const handleConfirmation = () => {
        let date = new Date()
        let dateLocale = date.toLocaleString('fr-FR',{
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'});

        const orders = {
            ...cartState,
            userId: userState.userInfo.id,
            date: dateLocale

        };        

        if( !localStorage.getItem("orders") ){
            localStorage.setItem('orders', JSON.stringify(orders));
        } else {
            localStorage.removeItem('orders');
            localStorage.setItem('orders', JSON.stringify(orders));
        }  
        
        dispatch(resetCart());
        navigate('/personal-space/orders');

    }

    useEffect(() => {
        if( Object.values(cartState).length > 0) {
            setItemsOnly(cartState.cartItems);
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
                    <button className="checkout-button" disabled={Object.values(itemsOnly).length !== 0 ? false : true}  onClick={handleClick}  >
                        Valider le panier
                    </button>
                    <button className="checkout-button" onClick={() => navigate('/')} >
                        Continuer vos achats
                    </button>
                </div>
        </section>
        
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Commande </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                Souhaitez-vous confirmer votre achat ?
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3}  className="primary mb-3" onClick={handleConfirmation}>
                    Oui
                </Button>
                <Button onClick={onClose}>
                    Non
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>

        </div>
    );
};
      


export default CartPage ;