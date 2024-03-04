import React, { useState } from "react";
import "./Register.scss";
import { Button, InputText } from "../../components/ui";
import { useAppDispatch } from "../../redux/hooks";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../redux/auth/authActions";
import { UserAuth } from "../../types/user.type";

const Register = () => {
  
  const [successRegister , setsuccessRegister] = useState<boolean>(true) ;
  const [ userDatas, setUserData ] = useState<UserAuth>({
    username: '',
    email: '',
    password: ''
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleUserDatas = (event: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = event.target ;
    setUserData((previousState: any) => ({
      ...previousState,
      [name]: value
    }))
  }


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = dispatch(registerUser(userDatas));
    navigate("/");
  };

  return (
    <div className="form-auth">
      <form className="mx-auto" onSubmit={handleSubmit}  >
        <h1> Inscription </h1>
        <div className="mb-3">
            <InputText 
                label= {"Nom d'utilisateur"}   
                value={userDatas.email} 
                onChange={handleUserDatas} 
                name="username"
                placeholder={"Nom d'utilisateur"} 
                isRequired= {true}
                errorText={ false  ?  "Le nom d'utilisateur est pas valide"  : ""}
            />
        </div>
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
            S'inscrire
          </Button>
        </div>

        <p className="link-btn">
          Vous n'avez pas encore de compte ?
          <Link to="/connexion"> Se connecter </Link>
        </p>
      </form>
      <div className={ `form-arror-msg ${successRegister === false ? "show": "hidden"}`} >
        <p>
          Votre email et/ou mot de passe sont incorrects.
          <br /> Veuillez recommencer.
        </p>
      </div>
    </div>
  );
};

export default Register;