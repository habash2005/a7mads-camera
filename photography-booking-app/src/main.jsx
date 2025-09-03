import React from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";

import App from "./App.jsx";

/* Pages */
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Booking from "./pages/Booking.jsx";
import FAQ from "./pages/FAQ.jsx";
import ClientGallery from "./pages/ClientGallery.jsx";
import ClientPortal from "./pages/ClientPortal.jsx";

/* Admin */
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import AdminBookings from "./pages/AdminBookings.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import ErrorPage from "./pages/ErrorPage.jsx"; // optional friendly fallback (add if you created it)

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, // if you kept the optional error page
    children: [
      { index: true, element: <Home /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "booking", element: <Booking /> },
      { path: "faq", element: <FAQ /> },
      { path: "client-gallery", element: <ClientGallery /> },
      { path: "client-portal", element: <ClientPortal /> },

      /* Admin routes */
      { path: "admin/login", element: <AdminLogin /> },
      {
        path: "admin",
        element: (
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        )
      },
      {
        path: "admin/bookings",
        element: (
          <ProtectedRoute>
            <AdminBookings />
          </ProtectedRoute>
        )
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
