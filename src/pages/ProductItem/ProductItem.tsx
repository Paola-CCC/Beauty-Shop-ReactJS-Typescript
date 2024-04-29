import React, { useEffect, useRef, useState } from 'react';
import "./ProductItem.scss";
import { Button, InputSelect, RatingStars } from '../../components/ui';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../redux/cart/cartSlice';
import { CartItems, Products } from '../../types/products.type';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import ProductsService from '../../services/productsService';
import { getReviewsList } from '../../redux/reviews/reviewsActions';
import { Reviews } from '../../types/reviews.type';
import { ReviewCard } from '../../components';

const ProductItem = () => {

    const [quantity, setQuantity] = useState<number>(0);
    const [reviewsAll, setReviewsAll] = useState<Reviews[]>([]);

    const initialState : Products  = {
        id: null,
        brandName: '',
        name: '',
        descriptionLong: '',
        descriptionShort: '',
        thumbnail:'',
        quantity: null,
        tags: [],
        categories: '',
        notes: undefined,
        createdAt: '',
        price: null,
    }
    const [productDatas, setProductsDatas] = useState<Products>(initialState);
    const { Id } = useParams();
    const dispatch = useAppDispatch();
    const dataFetched = useRef<boolean>(false);

    // ajoute produit au panier 
    const handleAddCat = () => {
      if( productDatas.id && productDatas.price ) {
        const datasCatOne : CartItems  = {
            id: productDatas.id ,
            quantity: quantity,
            price: productDatas.price,
            thumbnail: productDatas.thumbnail,
            descriptionShort: productDatas.descriptionShort,
            brandName: productDatas.brandName,
          } 

        dispatch(addToCart(datasCatOne));
      }

    };

    const optionsQuantity = [
        { value: "", label: "sélectionnez la quantité" },
        { value: 1, label: "1" },
        { value: 2, label: "2" },
        { value: 3, label: "3" },
        { value: 4, label: "4" },
        { value: 5, label: "5" },
    ];

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setQuantity(Number(value));
    };

    const { reviewsList } =  useAppSelector((state)=> state.reviews);

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
            dispatch(getReviewsList());
            dataFetched.current = true ;
        }

        if( Id && reviewsList.length > 0  ) {
            const usersReviews = reviewsList.filter(element => element.product_id ===  Number(Id));
            setReviewsAll(usersReviews);
        }        
       
    },[Id,productDatas ,dispatch ,reviewsList])

  return (
    <>
    {/* <div className='ariane-string'>
        <span>
        File d'ariane 
        </span>
    </div> */}
    <section className='product-description'>
        <div className='container-item'>
            <div className='img-container'> 
                <img src={productDatas?.thumbnail}   alt="skincare-i" />
            </div>

            <div className='main-container'>
                <div className='description-zone'> 
                    <div className='main-datas'>
                        <h3> {productDatas?.brandName} </h3>
                        <h1>{ productDatas?.name} </h1>
                        <div>
                            <RatingStars ratingScore={Number(productDatas?.notes) } /> 
                            <span>  (35 avis)</span>
                        </div>
                        <p> {productDatas?.price} €</p>
                    </div>
                    
                    <div className='section-actions-cat'>
                        <div className='mb-3'>
                            <InputSelect
                                name="item-quantity"
                                label="sélectionnez la quantité:"
                                options={optionsQuantity}
                                value={quantity !== 0 ?  quantity : ""}
                                onChange={handleChange}
                            />
                        </div>

                        <Button kind='primary' onClick={handleAddCat}>
                            Ajouter au panier
                        </Button>
                    </div>          
                </div>

                <div className='product-reviews'>
                        <h3> Espace { reviewsAll.length > 0 ? 'commentaires': 'commentaire'}: </h3> 

                        { reviewsAll.length > 0 ? (
                        <div className='reviews-list'>
                        <ul className='reviews-zone'>
                            {reviewsAll.length > 0 && reviewsAll.map((e: Reviews) => (
                                <li key={e.id}>
                                    <ReviewCard
                                    pseudo={e.pseudo}
                                    rating={e.rating}
                                    commentText={e.comment}
                                    createdAt={e.createdAt}
                                    />
                                </li>
                            ))}
                            </ul>
                        </div>
                        ) :(
                            <p> Aucun commentaire</p>
                        )
                             
                        }


                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ProductItem;