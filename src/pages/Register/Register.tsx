import React, { useState } from "react";
import "./Register.scss";
import { Button, InputText } from "../../components/ui";
import { useAppDispatch } from "../../redux/hooks";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../redux/auth/authActions";
import { UserDatas } from "../../types/user.type";

const Register = () => {
  
  const [ userDatas, setUserData ] = useState<UserDatas>({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    birthday: '',
    pseudo:''
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

    // const response = dispatch(registerUser(userDatas));
    dispatch(registerUser(userDatas))
    navigate("/");
  };

  return (
    <div className="form-auth">
      <form className="mx-auto" onSubmit={handleSubmit}  >
        <h1> Inscription </h1>
        <div className="mb-3">
            <InputText 
                label= {"Prénom"}   
                value={userDatas.firstname} 
                onChange={handleUserDatas} 
                name="firstname"
                placeholder={"Nom d'utilisateur"} 
                isRequired= {true}
                errorText={ false  ?  "Le prénom est pas valide"  : ""}
            />
        </div>

        <div className="mb-3">
            <InputText 
                label= {"Nom"}   
                value={userDatas.lastname} 
                onChange={handleUserDatas} 
                name="lastname"
                placeholder={"Nom de Famille"} 
                isRequired= {true}
                errorText={ false  ?  "Le nom de famille est pas valide"  : ""}
            />
        </div>
        <div className="mb-3">
            <InputText 
                label= {"Pseudo"}   
                value={userDatas.pseudo} 
                onChange={handleUserDatas} 
                name="pseudo"
                placeholder={"Pseudo"} 
                isRequired= {true}
                errorText={""}
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
            <label htmlFor="birthday" className="input-text">Date de naissance</label>
            <input type="date" name="birthday" onChange={handleUserDatas} ></input>
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
      {/* <div className={ `form-arror-msg ${successRegister === false ? "show": "hidden"}`} >
        <p>
          Votre email et/ou mot de passe sont incorrects.
          <br /> Veuillez recommencer.
        </p>
      </div> */}
    </div>
  );
};

export default Register;