import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/SiteHeader";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
