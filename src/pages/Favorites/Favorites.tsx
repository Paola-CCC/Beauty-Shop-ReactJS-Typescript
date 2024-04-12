import React, { useEffect, useState } from 'react';
import './Favorites.scss';
import { Products } from '../../types/products.type';
import { useAppSelector } from '../../redux/hooks';
import { selectAllProducts } from '../../redux/products/productsSlice';
import { Card } from '../../components/ui';


const Favorites = () => {


  const [productDatas , setProductDatas] = useState<Products[]>();
  const products = useAppSelector(selectAllProducts);


  useEffect(() => {
    
      if( products ) {        
        const datas = products.filter((e) => e.categories === "make-up");        
        setProductDatas(datas)
      }
      
  },[products])

  
  return (
    <div className="container-favorites-zone">
  
        <section>
          <div className="title-grp">
            <h3> FAVORIS </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus mattis porttitor.
            </p>
          </div>
        </section>

        <section>
        <ul className='items-list makeup'>
          
           { productDatas?.map((e : Products) => (
            <li key={e.id}>
                  <Card 
                    path={'make-up/'+ e.id}
                    heartIsCliked={true}
                    {...e} 
                  />
            </li>
          ))} 
        </ul>
      </section>
  
    </div>
  );
}

export default Favorites;
