import { useEffect } from 'react';
import { Card } from '../../components/ui';
import './MakeUpPage.scss';

const MakeUpPage = () => {

  

  const productData = {
    brandName: ('Anastasia Beverly').toUpperCase(),
    path: "make-up/1",
    notes: 4.5,
    description: 'Anastasia Beverly Hills Cosmos Eye Shadow Palette',
    imgSrc: 'https://www.sephora.fr/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwba3c8965/images/hi-res/SKU/SKU_3335/585584_swatch.jpg',
    price: 29.99,
  };

  useEffect(() => {

  },[])

  return (
    <div className='container-makeup-zone'>

      <section>
        <div className="title-grp">
          <h1>  MAQUILLAGE</h1>
          <p>
            Essentiel beauté incontournable, le maquillage est notre meilleur allié ! Teint frais, lèvres
            gourmandes et smoky eyes, le makeup parfait est à portée de main. On laisse libre cours
            à toutes nos envies maquillage en créant des looks à l'infini ! Best-sellers ou nouveautés
            beauté, le maquillage n'a jamais été aussi fun qu'avec Sephora.
          </p>
        </div>
      </section>


      <section>
        <div className='items-list makeup'>
        <Card {...productData} />
        <Card {...productData} />
        <Card {...productData} />
        <Card {...productData} />
        <Card {...productData} />
        <Card {...productData} />
        <Card {...productData} />
        <Card {...productData} /> 
        <Card {...productData} />
        <Card {...productData} />      
        </div>
      </section>
    </div>
  )
}

export default MakeUpPage;
