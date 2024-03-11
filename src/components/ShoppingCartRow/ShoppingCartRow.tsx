import React, { useState } from 'react';
import { InputSelect } from '../ui';
import { useAppDispatch } from '../../redux/hooks';
import { CartItems } from '../../types/products.type';
import { removeFromCart, updateQuantityProduct } from '../../redux/cart/cartSlice';

interface CartRow {
    id: number,
    productName: string , 
    descriptionShort : string, 
    price:  number,
    imgSrc: string,
    quantitySelected: number
}

const ShoppingCartRow = ({ id,productName , descriptionShort, price , imgSrc ,quantitySelected }: CartRow ) => {


    const dispatch = useAppDispatch()
    const [quantity, setQuantity] = useState<number >( Number(quantitySelected));

    const optionsQuantity = [
        { value: '', label: "choisir une quantité" },
        { value: 1, label: "1" },
        { value: 2, label: "2" },
        { value: 3, label: "3" },
        { value: 4, label: "4" },
        { value: 5, label: "5" },
    ];

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        console.log(' quantity Update ' , value);
        setQuantity(Number(value));
        const datasCatOne : CartItems  = {
            id: id ,
            quantity: Number(value),
            price: price,
            imgSrc: imgSrc,
            descriptionShort: descriptionShort,
        } 

        dispatch(updateQuantityProduct(datasCatOne ))
    };

    // Supprime l'item du panier au moyen de l'ID
    const handleDelete = () => dispatch(removeFromCart({id: id} ));
    

    return (
        <>

            <div className='img-zone'>
                <img src={imgSrc} alt="Product" />
            </div>
            <div className="item-details">
                <h3>{productName}</h3>
                <p>{descriptionShort}</p>
            </div>
            <div className="quantity-input">
                <InputSelect
                    name="item-quantity"
                    label=""
                    options={optionsQuantity}
                    value={quantity}
                    onChange={handleChange}
                />
            </div>
            <div className="price">{ price} €</div>
            <button className="remove-button" onClick={handleDelete}>
                <i className="fa-regular fa-trash-can fa-lg"></i>
            </button>
        </>
    )
}

export default ShoppingCartRow;