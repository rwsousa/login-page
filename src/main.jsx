import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cadastro from './assets/pages/cadastro.jsx'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <App />
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer
      position='top-right'
      autoClose={5000}
      theme='colored'
    />
    <RouterProvider router = {router} />
  </StrictMode>,
)
