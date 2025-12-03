import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import route from './Route.jsx'
import AuthProvider from './Auth/AuthContext.jsx'
import { ToastContainer } from 'react-toastify'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({ duration: 800 });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={route}></RouterProvider>
      <ToastContainer></ToastContainer>
    </AuthProvider>
  </StrictMode>,
)
