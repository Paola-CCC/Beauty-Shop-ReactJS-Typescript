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
    setProductFilered(response);
  };
  
 return (
  <div className="container-lastest-product-zone">
    
    <section>
      <div className="title-grp">
        <h3> TOUTES NOS NOUVEAUTÉS </h3>
        <p> Retrouvez nos dernières nouveautés pour être au top des nouvelles tendances ! </p>
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
                          path={(e.categories === 'Maquillage' ? 'make-up' : 'skin-care') + '/'+ e.id}
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
                        path={(e.categories === 'Maquillage' ? 'make-up' : 'skin-care') + '/'+ e.id}
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
