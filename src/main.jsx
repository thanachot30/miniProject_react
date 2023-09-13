import React from 'react'
import ReactDOM from 'react-dom/client'
import Signup from './Signup'
import Owner from './Owner'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App />
  },
  {
    path:'/Owner',
    element:<Owner />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
