import React, { useState } from 'react';
import "./ProductItem.scss";
import { Button, InputSelect } from '../../components/ui';

const ProductItem = () => {

    const [quantity, setQuantity] = useState(0);

    const optionsQuantity =[
        { value: 0, label: "choisir une quantité" },
        { value: 1, label: "1" },
        { value: 2, label: "3" },
        { value: 3, label: "3" },
        { value: 4, label: "4" },
        { value: 5, label: "5" },
    ];

    const handleChange = (event: any) => {
        const { value } = event.target;
        setQuantity( value );
    };
  return (
    <>
    <div className='ariane-string'>
        <span>
        File d'ariane 
        </span>
    </div>
    <section className='product-description'>
        <div className='container-item'>
            <div className='img-container'> 
                <img src="https://static.thcdn.com/images/small/webp//productimg/original/13187358-1734982825762586.jpg"alt="skincare-i" />
            </div>
            <div className='description-zone'> 
               
                <div className='main-datas'>

                    <h3>BYOMA </h3>
                    <h1>Huile au Rétinol - Soin Peaux Sensibles </h1>
                    <span><i className="fa-solid fa-star"></i> 3.6 (35 avis ) </span>
                    <p> 18.95 €</p>
                </div>


                <div className='section-actions-cat'>

                    <div className='mb-3'>
                        <InputSelect
                            name="item-quantity"
                            label="Choisir une quantité:"
                            options={optionsQuantity}
                            value={quantity}
                            onChange={handleChange}
                        />
                    </div>

                    <Button kind='primary'>
                        Ajouter au panier
                    </Button>
                </div>
          
            </div>
        </div>
    </section>

    <section className='product-reviews'>
        <div>
            <h4> Avis Client </h4> 
            <div className='reviews-zone'>

                <div className="reviewItem">
                    <div className="top">
                        <div className="clientImage">
                            <span>Samia H.</span>
                        </div>
                        <ul>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-regular fa-star"></i></li>
                            <li><i className="fa-regular fa-star"></i></li>
                        </ul>
                    </div>
                    <article>
                        <p className="review">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit beatae ipsa
                            voluptatibus perferendis quos eaque nemo error tempora harum quas, laudantium tenetur, neque,
                            facere exercitationem!</p>
                        <small>Le 18/08/2023</small>
                    </article>
                </div>

            
            </div>
        </div>
    </section>
    </>
  )
}

export default ProductItem;