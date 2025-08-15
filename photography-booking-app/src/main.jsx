import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Booking from './pages/Booking'
import FAQ from './pages/FAQ'
import AdminUpload from './pages/AdminUpload' // ✅ add this import
import AdminGallery from './pages/AdminGallery'
import ClientGallery from './pages/ClientGallery'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'booking', element: <Booking /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'admin', element: <AdminUpload /> },
      { path: 'admin/gallery', element: <AdminGallery /> },
      { path: 'client', element: <ClientGallery /> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
