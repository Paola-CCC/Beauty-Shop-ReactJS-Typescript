import React, { useEffect, useState } from 'react';
import './NewThings.scss';
import { Products } from '../../types/products.type';
import { Card } from '../../components/ui'
import ProductsService from '../../services/productsService';
import SearchGroup from '../../components/SearchGroup/SearchGroup';

const NewThings = () => {
  
  const [latestProduct,setLatestProduct] = useState<Products[]>([]);
  const [productFilered, setProductFilered] = useState<Products[]>([]);

  useEffect(()=> {

    const getData = async() => {
       try {
        const response = await ProductsService.getLatestProducts();        
        setLatestProduct(response.data);
       } catch (error) {
        console.error("Error ", error);
       }
    };

     getData();

  },[])

  const getDataFilered = (response: Products[]) => {
    console.log('EVEN => ', response)
    setProductFilered(response);
  };
  
 return (
  <div className="container-lastest-product-zone">
    
    <section>
      <div className="title-grp">
        <h3> TOUTES NOS NOUVEAUTÉS </h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus mattis porttitor. </p>
      </div>
    </section>

    <section className='search-container-form'>
      <SearchGroup handleSearch={getDataFilered} />
    </section>

    <section className=''>
      <ul className='items-list makeup'>

          { productFilered.length === 0 ? (
            <>
               { latestProduct?.map((e : Products,index: number) => (
                  <li key={index}>
                        <Card 
                          path={e.categories + '/'+ e.id}
                          {...e} 
                        />
                  </li>
                ))} 
            </>
          ) : (
            <>
              { productFilered?.map((e : Products,index: number) => (
                <li key={index}>
                      <Card 
                        path={e.categories + '/'+ e.id}
                        {...e} 
                      />
                </li>
              ))}
            </>
          )}
      </ul>
    </section>

  </div>
)}
;

export default NewThings;
