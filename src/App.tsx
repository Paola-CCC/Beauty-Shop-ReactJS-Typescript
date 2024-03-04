import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './layout';
import { AboutPage, Home, Login, Register } from './pages';




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
          path: 'about',
          element: <AboutPage />,
        },
        {
          path: 'connexion',
          element: <Login />,
        },
        {
          path: 'inscription',
          element: <Register />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
