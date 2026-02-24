import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import Layout from "./components/Layout";
import PaymentGateway from "./Pages/PaymentGateway";
import OneClick from "./Pages/OneClick";
import About from "./Pages/About";
import Upi from "./Pages/Upi";
import PaymentLinks from "./Pages/PaymentLinks";
import Soundbox from "./Pages/Soundbox";
import Login from "./Pages/Login";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions";
import Integration from "./Pages/Integration";
import ContactUs from "./Pages/ContactUs";
import Career from "./Pages/Career";
import SignUp from "./Pages/SignUp";
import ApplyJob from "./Pages/ApplyJob";

import ScrollTop from "./components/ScrollTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* ---------- ADMIN ---------- */
import AdminLayout from "./admin/layout/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";
import Users from "./admin/pages/Users";
import Positions from "./admin/pages/Positions";
import Candidates from "./admin/pages/Candidates";

/* ---------- ROUTE PROTECTION ---------- */
import AdminRoute from "./routes/AdminRoute";

function App() {
  return (
    <>
      <ScrollTop />
      <ToastContainer position="top-right" autoClose={3000} />

      <Routes>
        {/* ================= MAIN WEBSITE ================= */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="paymentgateway" element={<PaymentGateway />} />
          <Route path="OneClick" element={<OneClick />} />
          <Route path="About-us" element={<About />} />
          <Route path="upi-autopay" element={<Upi />} />
          <Route path="payment-links" element={<PaymentLinks />} />
          <Route path="soundbox" element={<Soundbox />} />
          <Route path="Contact-us" element={<ContactUs />} />
          <Route path="integration" element={<Integration />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-conditions" element={<TermsAndConditions />} />
          <Route path="careers" element={<Career />} />
          <Route path="careers/apply/:id" element={<ApplyJob />} />
        </Route>

        {/* ================= ADMIN PANEL (PROTECTED) ================= */}
        <Route
          path="/admin/*"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="positions" element={<Positions />} />
          <Route path="candidates" element={<Candidates />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;