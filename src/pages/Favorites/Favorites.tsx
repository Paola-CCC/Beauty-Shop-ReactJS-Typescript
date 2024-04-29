import React, { useEffect, useState } from 'react';
import './Favorites.scss';
import { Products } from '../../types/products.type';
import { useAppSelector } from '../../redux/hooks';
import { Card } from '../../components/ui';
import { RootState } from '../../redux/store';


const Favorites = () => {


  const [productDatas , setProductDatas] = useState<Products[]>();
  const products = useAppSelector((state: RootState) => state.products.listFavoris);


  useEffect(() => {
    
      if( products ) {       
        setProductDatas(products)
      }
      
  },[products])

  
  return (
    <div className="container-favorites-zone">
  
        <section>
          <div className="title-grp">
            <h3> FAVORIS </h3>
            <p>
              Retrouvez la liste de vos favoris
            </p>
          </div>
        </section>

        <section>
        <ul className='items-list makeup'>
          
           { productDatas?.map((e : Products) => (
            <li key={e.id}>
                  <Card 
                    path={'make-up/'+ e.id}
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
