import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-gray-50">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
