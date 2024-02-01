import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Login from './pages/login/index';
import Register from './pages/register/index';
import Home from './pages/home/index';
import Profile from './pages/profile/index';
import Messages from './pages/messages/index';
import Alerts from './pages/alerts/index';
import Security from './pages/security';

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
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/alerts",
        element: <Alerts />,
      },
      {
        path: "/password-end-security",
        element: <Security/>
      }
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

