import React, { useEffect, useState } from 'react';
import './NewThings.scss';
import { Products } from '../../types/products.type';
import { useAppSelector } from '../../redux/hooks';
import { selectAllProducts } from '../../redux/products/productsSlice';
import { Card } from '../../components/ui'

const NewThings = () => {
  
  const [productDatas,setProductDatas] = useState<Products[]>([]);
  const products = useAppSelector(selectAllProducts);


  useEffect(() => {
    
      if( products ) {        
        const datas = products.filter((e) => e.categories === "make-up");        
        setProductDatas(datas);
      }
      
  },[products])

  
 return (
  <div className="container-lastest-product-zone">
  
  <section>
    <div className="title-grp">
      <h3> TOUTES NOS NOUVEAUTÉS </h3>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus mattis porttitor. </p>
    </div>
  </section>

  <section>
    <ul className='items-list makeup'>
        { productDatas?.map((e : Products,index: number) => (
          <li key={index}>
                <Card 
                  path={'make-up/'+ e.id}
                  {...e} 
                />
          </li>
        ))} 
    </ul>
  </section>

</div>
)}
;

export default NewThings;
