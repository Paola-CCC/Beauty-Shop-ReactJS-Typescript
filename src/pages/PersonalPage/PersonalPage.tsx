import React from 'react'
import './PersonalPage.scss'
import { Link, Outlet } from 'react-router-dom';


const PersonalPage = () => {
  return (

    <>
      <div className='header-perso'>
        <h3> MON COMPTE </h3>
      </div>
      <div className="container-personal-page">
          <ul className='personal-space'>
            <li>
              <Link to={'/personal-space'}>
                  Données personnelles
              </Link>
  
            </li>
            <li>
              <Link to={'orders'}>
                  Les commandes
              </Link>
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