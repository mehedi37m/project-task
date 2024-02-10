import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
 
  RouterProvider,
} from "react-router-dom";
import Router from './Router/Router';
import SearchProvider from './Components/Provider/SearchProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className='container mx-auto'>
  <SearchProvider>
  <RouterProvider router={Router} />
  </SearchProvider>
  </div>
  </React.StrictMode>,
)
