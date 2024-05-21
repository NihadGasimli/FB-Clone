import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Posts from './Posts';
import Contactus from './Contactus';

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      index: true,
      element: <Home />
    },
    {
      path: "/posts",
      element: <Posts />
    },
    {
      path: "/contactus",
      element: <Contactus />
    }
  ]
}]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);

