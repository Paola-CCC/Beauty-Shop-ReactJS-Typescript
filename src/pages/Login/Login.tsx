import React, { useState } from "react";
import "./Login.scss";
import { Button, InputText } from "../../components/ui";
import { loginUser } from "../../redux/auth/authActions";
import { useAppDispatch } from "../../redux/hooks";
import { Link, useNavigate } from "react-router-dom";
import { UserDatas } from "../../types/user.type";

const Login = () => {
  
  const [ userDatas, setUserData ] = useState<UserDatas>({
    email: '',
    password: ''
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [successLogin, setSuccessLogin] = useState<boolean>(true) ;

  const handleUserDatas = (event: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = event.target ;
    setUserData((previousState: any) => ({
      ...previousState,
      [name]: value
    }))
  }


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = dispatch(loginUser(userDatas));
    navigate("/");

  };

  return (
    <div className="form-auth">
      <form className="mx-auto" onSubmit={handleSubmit}  >
        <h1> Connexion </h1>

        <div className="mb-3">
            <InputText 
                label= {"Email"}   
                value={userDatas.email} 
                onChange={handleUserDatas} 
                name="email"
                placeholder={"Adresse email"} 
                isRequired= {true}
                errorText={ false  ?  "L'email est invalide"  : ""}
            />
        </div>
        <div className="mb-3">
          <InputText 
              label= {"Mot de passe"}   
              value={userDatas.password} 
              name="password"
              type="password"
              onChange={handleUserDatas} 
              placeholder={"Mot de passe"} 
              isRequired= {true}
              errorText={ false ? "Le mot de passe de vérification ne correspond pas" : ""}
          />
        </div>

        <div className="mb-3"> 
          <Button type="submit" kind={'primary'} stylesClass="mb-3">
            Se connecter
          </Button>
        </div>

        <p className="link-btn">
          Vous n'avez pas encore de compte ?
          <Link to="/inscription"> S'inscrire </Link>
        </p>
      </form>
        <div className={ `form-arror-msg ${successLogin === false ? "show": "hidden"}`} >
        <p>
          Votre email et/ou mot de passe sont incorrects.
          <br /> Veuillez recommencer.
        </p>
      </div>
    </div>
  );
};

export default Login;