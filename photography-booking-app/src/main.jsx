// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Booking from "./pages/Booking";
import FAQ from "./pages/FAQ";
import ClientGallery from "./pages/ClientGallery";
import ClientPortal from "./pages/ClientPortal";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminBookings from "./pages/AdminBookings";

import { AuthProvider, ProtectedRoute } from "./lib/auth";// ✅ make sure file is src/lib/auth.jsx
import ErrorBoundary from "./components/ErrorBoundary";       // ✅ add this file if you haven’t yet

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "booking", element: <Booking /> },
      { path: "faq", element: <FAQ /> },
      { path: "client-gallery", element: <ClientGallery /> },
      { path: "client-portal", element: <ClientPortal /> }, // client portal
      { path: "admin/login", element: <AdminLogin /> },     // login first
      {
        path: "admin",
        element: (
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "admin/bookings",
        element: (
          <ProtectedRoute>
            <AdminBookings />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <ErrorBoundary>
          <RouterProvider router={router} />
        </ErrorBoundary>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
