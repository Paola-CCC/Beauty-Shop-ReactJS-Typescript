import React from 'react';
import './App.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './layout';
import { Blog, CartPage, Favorites, Home, Login, MakeUpPage, NewThings, Orders, PersonalPage, ProductItem, Register, SkinCarePage, UsersDetails } from './pages';
import { ChakraProvider } from '@chakra-ui/react';


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
          path: 'nouveaux',
          element: <NewThings />,
        },
        {
          path: 'favoris',
          element: <Favorites />,
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
        {
          path: 'personal-space',
          element: <PersonalPage />,
          children: [
            {
              index: true,
              element: < UsersDetails />,
            },
            {
              path: 'orders',
              element: <Orders />,
            },
          ]
        },
      ],
    },
  ]);

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>

  );
}

export default App;
