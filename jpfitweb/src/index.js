import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Login from './pages/login/index';
import Register from './pages/register/index';
import Home from './pages/home/index';
import Profile from './pages/profile/index';

const router = createBrowserRouter([
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },  
      {
        path: "/profile",
        element: <Profile />,
      },
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

