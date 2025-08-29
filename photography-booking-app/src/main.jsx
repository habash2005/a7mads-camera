// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
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
      { path: "client-portal", element: <ClientPortal /> },

      // Admin (adjust if you use ProtectedRoute)
      { path: "admin/login", element: <AdminLogin /> },
      { path: "admin", element: <AdminDashboard /> },
      { path: "admin/bookings", element: <AdminBookings /> }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
