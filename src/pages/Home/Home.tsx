import React, { useEffect, useState } from "react";
import "./Home.scss";
import { Card } from "../../components/ui";
import { Brand } from "../../components/Brand/Brand";
import ProductsService from "../../services/productsService";
import { Products } from "../../types/products.type";

const Home = () => {

const [datas, setDatas] = useState<Products[]>([]);

  useEffect(()=> {

    const getData = async() => {
       try {
        const response = await ProductsService.getPopularProducts();
        setDatas(response.data);
       } catch (error) {
        console.error("Error ", error);
       }
    };

     getData();
  },[])


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
        <ul className="container-card brand-name">
          { datas?.length > 0 && (
              datas.map((e) => (
                <li key={e.id}  className="container-card popular-choice">
                  <Card path={`${e.categories[0]}/${e.id}`} {...e} />
                </li>
              ))
          )}
        </ul>

      </section>


      <section className="element">
        <div className="heading-grp">
            <div className="heading-text">
              <h3> Les marques </h3>
              <p> Craquez pour les dernières nouveautés et best-sellers de vos marques préférées !</p>
            </div>
            {/* <div className="heading-btn">
              <button>
                  Tout voir
              </button>
            </div>     */}
        </div>
        <div className="container-card brand-name">

          <Brand 
          brandName={"CHANEL"}
          imgSrc={"https://puls-img.chanel.com/1682497097609-onelandingpageeditopush1080x1150pxdesktopmobile4jpg_1150x1080.jpg"}
          />

          <Brand 
            brandName={"DIOR"}
            imgSrc={"https://www.dior.com/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dw3dbe1533/images/beauty/03-SKINCARE/2023/Skincare-map/CaptureTotale_S123_Duo_Serum_Creme_1850x2000.jpg"}
          />

          <Brand 
          brandName={"FENTY BEAUTY"}
          imgSrc="https://media.allure.com/photos/6217d1050c9cc364689cda05/16:9/w_3488,h_1962,c_limit/fenty%20skin%20fragrance-free%20lede.jpg"
          />

          <Brand 
          brandName={"MISSHA"}
          imgSrc="https://missha.com/upload/sharpmissha/202106021449159d0c612b-d53d-4d91-a873-d43ccda959b7.jpg"
          />
        {/* <Brand brandName={"BEAUTY OF JOSEON"}/> */}

        </div>
      </section>

    </>
  );
};

export default Home;
