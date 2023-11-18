import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCliente, {action as nuevoClienteAction} from './pages/NuevoCliente'
import Index,{loader as clientesLoader} from './pages/Index'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <Index></Index>,
        loader: clientesLoader
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente></NuevoCliente>,
        action: nuevoClienteAction
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    
  </React.StrictMode>,
)
