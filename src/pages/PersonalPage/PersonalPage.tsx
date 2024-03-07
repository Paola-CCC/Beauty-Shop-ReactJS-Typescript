import React from 'react'
import './PersonalPage.scss'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOutUser } from '../../redux/auth/authSlice';


const PersonalPage = () => {


  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogout = () => {

    dispatch(logOutUser())
    navigate('/');
  }

  return (

    <>
      <div className='header-perso'>
        <h3> MON COMPTE </h3>
      </div>
      <div className="container-personal-page">
          <ul className='personal-space'>
            <li>
              <Link to={'/personal-space'}>
                <i className="fa-solid fa-user"></i>
                  Données personnelles
              </Link>
  
            </li>
            <li>
              <Link to={'orders'}>
                <i className="fa-solid fa-list"></i>
                  Les commandes
              </Link>
            </li>
            <li>
              <button onClick={handleLogout}>
                  <i className="fa-solid fa-right-from-bracket"></i>
                  <span>
                    Se déconnecter
                  </span>
              </button>
            </li>
          </ul>

          <div className='list-orders'>
            <Outlet />
          </div>
      </div>
    </>

  )
}

export default PersonalPage;