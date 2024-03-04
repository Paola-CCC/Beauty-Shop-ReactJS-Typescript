import React from 'react'
import { Outlet } from 'react-router';
import './Layout.scss';
import Header from '../Header/Header';


const Layout = () => {
    return (
        <div className='App'>
          <Header/>
          <main>
            <Outlet />
          </main>
          <footer>Footer Content</footer>
        </div>
      );
}

export default Layout;
