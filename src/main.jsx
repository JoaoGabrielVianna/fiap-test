import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Tela(s) | Router(s)
import App from './routers/app/App'
import Home from './pages/home/Home'

import './index.scss'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: '', //Diferencial
  children: [
    {
      path: '/',
      element: <Home/>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
