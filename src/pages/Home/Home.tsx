import React, { useEffect } from "react";
import "./Home.scss";
import { getproductList } from "../../redux/products/productsActions";
import { useAppDispatch } from "../../redux/hooks";
import { Card } from "../../components/ui";
import { Brand } from "../../components/Brand/Brand";

const Home = () => {

  const dispatch = useAppDispatch();

  const productData = {
    brandName: ('Anastasia Beverly').toUpperCase(),
    notes: 4.5,
    description: 'Anastasia Beverly Hills Cosmos Eye Shadow Palette',
    imgSrc: 'https://www.sephora.fr/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwba3c8965/images/hi-res/SKU/SKU_3335/585584_swatch.jpg',
    price: 29.99,
    showButton: false
  };

  useEffect(() => {
    dispatch(getproductList());
  }, [dispatch]);

  return (
    <>
      <div className="hero-image">
        <div className="hero-text">
          <h1>BEAUTY GALAXY</h1>
          <p>Votre beauté est notre priorité</p>
          {/* <button>Hire me</button> */}
        </div>
      </div>
      <section className="element">
        <div className="heading-grp">
            <div className="heading-text">
              <h3> Nos nouveautés</h3>
              <p> Créer votre skincare routine avec nos meilleurs produits </p>
            </div>
            <div className="heading-btn">
              <button>
                  Tout voir
              </button>
            </div>    
        </div>
        <div className="container-mosaique">
            <div className="grid-item content-one"> 

               <img src="https://media.allure.com/photos/6217d1050c9cc364689cda05/16:9/w_1280,c_limit/fenty%20skin%20fragrance-free%20lede.jpg" alt="drunk elephant" />
            </div>

            <div className="grid-item content-two">
              <img src="https://images.unsplash.com/photo-1556942040-df93bd3bdd19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZSUyMGJlYXV0eXxlbnwwfHwwfHx8MA%3D%3D" alt="face beauty" />
            </div>

            <div className="grid-item content-three">
              {/* <img src="https://media.allure.com/photos/6217d1050c9cc364689cda05/16:9/w_1280,c_limit/fenty%20skin%20fragrance-free%20lede.jpg" alt="drunk elephant" /> */}
              <img src="https://i.pinimg.com/736x/27/a5/a3/27a5a387550bb00c33752e093361d218.jpg" alt="glossier" />

            </div>
          <div className="grid-item content-four"> 
          <h5> Trouver la skincare qu'il vous faut</h5>
          <p>
              Une routine de soins essentielles et simple est capable de changer la peau.
              Nous sommes convaincues que les gestes du quotidien peuvent changer votre peau.
          </p>


              {/* <img src="https://media.allure.com/photos/6217d1050c9cc364689cda05/16:9/w_1280,c_limit/fenty%20skin%20fragrance-free%20lede.jpg" alt="drunk elephant" /> */}

          </div>

        </div>
      </section>

      <section className="element">
        <div className="heading-grp">
            <div className="heading-text">
              <h3> Produits populaires</h3>
              <p> Découvrez les produits les plus populaires du moment  </p>
            </div>
            {/* <div className="heading-btn">
              <button>
                  Tout voir
              </button>
            </div>     */}
        </div>
        <div className="container-card popular-choice">
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


      <section className="element">
        <div className="heading-grp">
            <div className="heading-text">
              <h3> Les nouveautés par marques </h3>
              <p> Craquez pour les dernières nouveautés et best-sellers de vos marques préférées !</p>
            </div>
            {/* <div className="heading-btn">
              <button>
                  Tout voir
              </button>
            </div>     */}
        </div>
        <div className="container-card brand-name">
        <Brand brandName={"CHANEL"}/>
        <Brand brandName={"DIOR"}/>
        <Brand brandName={"FENTY BEAUTY"}/>
        <Brand brandName={"MISSHA"}/>
        {/* <Brand brandName={"BEAUTY OF JOSEON"}/> */}


        </div>
      </section>

    </>
  );
};

export default Home;
