import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Services from './pages/Services/Services';
import { createBrowserRouter,RouterProvider,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


const router = createBrowserRouter ([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"services",
    element:<Services/>
  } 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


