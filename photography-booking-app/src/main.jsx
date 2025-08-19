// src/main.jsx (or wherever this router lives)
import React from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Booking from './pages/Booking'
import FAQ from './pages/FAQ'
import ClientGallery from './pages/ClientGallery'
import ClientPortal from './pages/ClientPortal'

// Admin / protected
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import AdminBookings from './pages/AdminBookings' // ✅ route target
import ProtectedRoute from './components/ProtectedRoute'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // Public
      { index: true, element: <Home /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'booking', element: <Booking /> },
      { path: 'faq', element: <FAQ /> },

      // Clients
      { path: 'portal', element: <ClientPortal /> },   // client portal
      { path: 'client', element: <ClientGallery /> },  // legacy gallery (optional)

      // Auth
      { path: 'admin-login', element: <AdminLogin /> },

      // Admin
      {
        path: 'admin',
        element: (
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: 'admin/bookings',              // ✅ NEW: manage statuses
        element: (
          <ProtectedRoute>
            <AdminBookings />
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
