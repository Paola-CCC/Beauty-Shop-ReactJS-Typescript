import React, { useEffect } from "react";
import "./Home.scss";
import { getproductList } from "../../redux/products/productsActions";
import { useAppDispatch } from "../../redux/hooks";

const Home = () => {

  const dispatch = useAppDispatch()


  useEffect(() => {
    // Appels de dispatch regroupés dans un seul useEffect
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
              <h3> Acheter par catégories</h3>
              <p> Créer votre skincare routine avec nos meilleurs produits </p>
            </div>
            <div className="heading-btn">
              <button>
                  Tout voir
              </button>
            </div>    
        </div>
        <div className="container-mosaique">
          <div className="content-one"> 
          <img src="https://i.pinimg.com/736x/27/a5/a3/27a5a387550bb00c33752e093361d218.jpg" alt="glossier" />
            
          </div>
          <div className="content-two">

          <img src="https://images.unsplash.com/photo-1556942040-df93bd3bdd19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZSUyMGJlYXV0eXxlbnwwfHwwfHx8MA%3D%3D" alt="face beauty" />
          </div>
          <div className="content-three">
          <img src="https://www.beautydecoded.com/wp-content/uploads/2022/05/DRUNK-ELEPHANT-a-passioni-retinol.jpg" alt="drunk elephant" />
          
          </div>
          <div className="content-four"> 
           
          Une routine de soin essentielle, simple et pourtant capable de changer la peau.
Parce que nous sommes convaincues que les gestes du quotidien peuvent changer la peau,
          
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;
