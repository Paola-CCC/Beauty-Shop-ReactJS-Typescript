import { Card } from '../../components/ui';
import './SkinCarePage.scss';

const SkinCarePage = () => {

  const productData = {
    brandName: 'BEAUTY OF JOSEON',
    notes: 3.5,
    description: 'Green Plum Refreshing Cleanser - Nettoyant',
    imgSrc: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/80/931/XXL_p0165993180.jpg',
    price: 50,
  };

  return (
    <div className='container-makeup-zone'>

      <section>
        <div className="title-grp">
          <h1> SOIN DE LA PEAU</h1>
          <p>
          Un teint frais et healthy commence avec une peau en bonne santé. Sephora propose des soins
          visage adaptés à tous les types de peaux. Peau sensible, grasse, mixte ou sèche, faites votre
          choix parmi les soins, démaquillants, ou sérums qui redonneront de l'éclat à votre peau.
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
        {/* <Card {...productData} />
        <Card {...productData} /> */}
        </div>
      </section>
    </div>
  )
}

export default SkinCarePage;
