import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";

const Layout = () => {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />

      <WhatsappButton />

      {/* Right Side Social Icons */}
    </div>
  );
};

export default Layout;
