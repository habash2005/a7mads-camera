import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/SiteHeader.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
