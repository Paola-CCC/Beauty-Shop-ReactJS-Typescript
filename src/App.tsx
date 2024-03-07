import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './layout';
import { Blog, CartPage, Home, Login, ProductItem, Register } from './pages';
import MakeUpPage from './pages/MakeUpPage/MakeUpPage';
import SkinCarePage from './pages/SkinCarePage/SkinCarePage';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: < Home />,
        },
        {
          path: 'connexion',
          element: <Login />,
        },
        {
          path: 'inscription',
          element: <Register />,
        },
        {
          path: 'make-up',
          element: <MakeUpPage />,
        },
        {
          path: 'skin-care',
          element: <SkinCarePage />,
        },
        {
          path: 'blog',
          element: <Blog />,
        },
        {
          path: 'skin-care/:Id',
          element: <ProductItem />,
        },
        {
          path: 'make-up/:Id',
          element: <ProductItem />,
        },
        {
          path: 'panier',
          element: <CartPage />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
