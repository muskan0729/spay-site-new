import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SocialSidebar from "../components/SocialSidebar";

const Layout = () => {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />

      {/* Right Side Social Icons */}
      <SocialSidebar />
    </div>
  );
};

export default Layout;
