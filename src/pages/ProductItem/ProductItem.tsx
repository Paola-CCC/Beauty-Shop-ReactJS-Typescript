import React, { useEffect, useRef, useState } from 'react';
import "./ProductItem.scss";
import { Button, InputSelect } from '../../components/ui';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../redux/cart/cartSlice';
import { CartItems, Products } from '../../types/products.type';
import { useAppDispatch } from '../../redux/hooks';
import ProductsService from '../../services/productsService';

const ProductItem = () => {

    const [quantity, setQuantity] = useState(0);
    const initialState : Products  = {
        id: null,
        brandName: '',
        name: '',
        descriptionLong: '',
        descriptionShort: '',
        quantity: null,
        tags: [],
        categories: [],
        notes: null,
        createdAt: '',
        images: [],
        price: null,
    }
    const [productDatas, setProductsDatas] = useState<Products>(initialState);
    const { Id } = useParams();
    const dispatch = useAppDispatch();
    const dataFetched = useRef<boolean>(false);

    const handleAddCat = () => {
      const datasCatOne : CartItems = {
        id: 25 ,
        quantity: quantity,
        price: 10
      }

      dispatch(addToCart(datasCatOne));
    };

    const optionsQuantity = [
        { value: 0, label: "choisir une quantité" },
        { value: 1, label: "1" },
        { value: 2, label: "3" },
        { value: 3, label: "3" },
        { value: 4, label: "4" },
        { value: 5, label: "5" },
    ];

    const handleChange = (event: any) => {
        const { value } = event.target;
        setQuantity(Number(value));
    };

    useEffect(() => {

        const showData = async () => {
            try {
                const response = await ProductsService.getById(Id);
                setProductsDatas(response.data);
            
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        if(Id && dataFetched.current === false) {
            showData();
            dataFetched.current = true ;
        }

    },[Id,productDatas])

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
                <img src={productDatas?.images[0]}   alt="skincare-i" />
            </div>
            <div className='description-zone'> 
               
                <div className='main-datas'>

                    <h3> {productDatas?.brandName} </h3>
                    <h1>{ productDatas?.name} </h1>
                    <span><i className="fa-solid fa-star"></i> {productDatas.notes} (35 avis ) </span>
                    <p> {productDatas?.price} €</p>
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

                    <Button kind='primary' onClick={handleAddCat}>
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
                        <p className="review">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit beatae ipsa
                            voluptatibus perferendis quos eaque nemo error tempora harum quas, laudantium tenetur, neque,
                            facere exercitationem!
                        </p>
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