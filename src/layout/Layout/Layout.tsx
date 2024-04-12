import React from 'react'
import { Outlet } from 'react-router';
import './Layout.scss';
import Header from '../Header/Header';
import { usePathname } from '../../hooks/useNavigate';


const Layout = () => {
  const path = usePathname();
  

    return (
        <>
          <Header/>
          <main className={`${path === '/' ? 'home-page' : ''}`} >
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
