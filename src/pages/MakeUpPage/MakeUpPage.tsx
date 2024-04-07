import { useEffect, useState } from 'react';
import { Card } from '../../components/ui';
import './MakeUpPage.scss';
import { selectAllProducts } from '../../redux/products/productsSlice';
import { useAppSelector } from '../../redux/hooks';
import { Products } from '../../types/products.type';

const MakeUpPage = () => {

  const [productDatas , setProductDatas] = useState<Products[]>();
  const products = useAppSelector(selectAllProducts);


  useEffect(() => {
    
      if(products  ) {        
        const datas = products.filter((e) => e.categories === "make-up");        
        setProductDatas(datas)
      }
      
  },[products])

  return (
    <div className='container-makeup-zone'>

      <section>
        <div className="title-grp">
          <h3>  MAQUILLAGE</h3>
          <p>
            Essentiel beauté incontournable, le maquillage est notre meilleur allié ! Teint frais, lèvres
            gourmandes et smoky eyes, le makeup parfait est à portée de main. On laisse libre cours
            à toutes nos envies maquillage en créant des looks à l'infini ! Best-sellers ou nouveautés
            beauté, le maquillage n'a jamais été aussi fun qu'avec Sephora.
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
  )
}

export default MakeUpPage;
