// src/main.jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Booking from './pages/Booking'
import FAQ from './pages/FAQ'
import ClientGallery from './pages/ClientGallery'

// Admin / protected
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'   // ✅ NEW
import ProtectedRoute from './components/ProtectedRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // Public pages
      { index: true, element: <Home /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'booking', element: <Booking /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'client', element: <ClientGallery /> },

      // Public admin login
      { path: 'admin-login', element: <AdminLogin /> },

      // One unified protected admin route
      {
        path: 'admin',
        element: (
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
