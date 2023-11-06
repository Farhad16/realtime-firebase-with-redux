import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-grow bg-slate-300 sm:px-16 px-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
