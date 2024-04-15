import React from 'react'
import { Outlet } from 'react-router';
import './Layout.scss';
import Header from '../Header/Header';
import { usePathname } from '../../hooks/useNavigate';
import Footer from '../Footer/Footer';


const Layout = () => {
  const path = usePathname();
  
    return (
        <>
          <Header/>
          <main className={`${path === '/' ? 'home-page' : ''}`} >
            <Outlet />
          </main>
          <Footer />
        </>
      );
}

export default Layout;
