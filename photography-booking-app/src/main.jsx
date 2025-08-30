import React from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "./lib/auth";

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
import AdminRoute from "./routes/AdminRoute";

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

      { path: "admin/login", element: <AdminLogin /> },
      {
        path: "admin",
        element: (
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        ),
      },
      {
        path: "admin/bookings",
        element: (
          <AdminRoute>
            <AdminBookings />
          </AdminRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
