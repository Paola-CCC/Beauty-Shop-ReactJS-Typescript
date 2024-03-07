import React from 'react'
import { Outlet } from 'react-router';
import './Layout.scss';
import Header from '../Header/Header';


const Layout = () => {
    return (
        <>
          <Header/>
          <main>
            <Outlet />
          </main>
          {/* <footer>
            <div>
              <span>
                BeautyGalaxy 2024
              </span>
            </div>

          </footer> */}
        </>
      );
}

export default Layout;
