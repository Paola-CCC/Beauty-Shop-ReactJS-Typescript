import { useEffect, useState } from 'react';
import { Card } from '../../components/ui';
import './SkinCarePage.scss';
import { selectAllProducts } from '../../redux/products/productsSlice';
import { useAppSelector } from '../../redux/hooks';
import { Products } from '../../types/products.type';
import { SearchGroup } from '../../components';

const SkinCarePage = () => {

  const [productDatas , setProductDatas] = useState<Products[]>();
  const products = useAppSelector(selectAllProducts);


  useEffect(() => {
    if(products ) {
      const datas = products.filter((e) => e.categories === "skin-care");      
      setProductDatas(datas)
    }
    
},[products])

  return (
    <div className='container-makeup-zone'>

      <section>
        <div className="title-grp">
          <h3> SOIN DE LA PEAU</h3>
          <p>
          Un teint frais et healthy commence avec une peau en bonne santé. Sephora propose des soins
          visage adaptés à tous les types de peaux. Peau sensible, grasse, mixte ou sèche, faites votre
          choix parmi les soins, démaquillants, ou sérums qui redonneront de l'éclat à votre peau.
          </p>
        </div>
      </section>


      <section className='search-container-form'>
        <SearchGroup />
      </section>

      <section>
      <ul className='items-list makeup'>
          
          { productDatas?.map((e : Products) => (
           <li key={e.id}>
                 <Card 
                   path={'skin-care/'+ e.id}
                   {...e} 
                 />
           </li>
         ))} 
       </ul>
      </section>
    </div>
  )
}

export default SkinCarePage;
