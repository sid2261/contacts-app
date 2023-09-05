import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from './App.jsx'
import './index.css'
import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { Route } from "react-router-dom";
import { RouterProvider } from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route path="/contact/:contactId" element={<div>contacts</div>}/>
      </Route>
  )
);
   
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
 