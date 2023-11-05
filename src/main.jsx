import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routers/MainRouter/MainRouter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-6xl mx-auto px-4 md:px-8'>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </div>,
)
