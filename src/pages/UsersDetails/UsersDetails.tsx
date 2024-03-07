import React, { useEffect, useRef, useState } from 'react'
import './UsersDetails.scss';
import authService from '../../services/authService';
import { UserDatas } from '../../types/user.type';


const UsersDetails = () => {

   const userId = 2;

   const [ userData,setUserData] = useState<  UserDatas >({} as UserDatas);
   const datasUserFetched = useRef<boolean>(false)

   const handleUpdateData = () => {

   }

   useEffect(() => {

      const getUser = async () => {
         try {
            const response = await authService.getCurrentUserById(userId);
            console.log('response  ' ,response);
            setUserData(response.data)
         } catch (error) {
            console.error("Error " , error);
         }
      }

      if( datasUserFetched.current === false && Object.keys(userData).length === 0){
         getUser()
         datasUserFetched.current = true ;
      }

   },[userData])
   
  return (
    <>

        <h3 className="details"> Données personnelles </h3>
        <div className='details'>
          <ul className='block'>
            <li>
               <h4>Nom Prénom</h4>
               <span>{userData?.firstname + ' ' + userData?.lastname}   </span>
            </li>

            <li>
               <h4>Pseudo</h4>
               <span>{userData?.username}  </span>
            </li>
            <li>
               <h4>Votre adresse e-mail</h4>
               <span>{userData?.email}  </span>
            </li>
            <li>
               <h4>Genre</h4>
               <span>{userData?.genre}  </span>
            </li>
            <li>
               <h4>Anniversaire</h4>
               <span>{userData?.birthday}  </span>
            </li>
            <li>
               <h4>Votre mot de passe</h4>
               <p> *********</p>
            </li>
          </ul>
        </div>
        {/* <div className='btn-update-zone'>
            <button onClick={handleUpdateData}>
               <i className="fa-solid fa-pen-to-square"></i>
                Modifier
            </button>
        </div> */}

    </>  )
}

export default UsersDetails;