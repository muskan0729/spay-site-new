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
import RefundandCancellation from "./Pages/RefundandCancellation";
import TermsAndConditions from "./Pages/TermsAndConditions";
import Integration from "./Pages/Integration";
import ContactUs from "./Pages/ContactUs";
import AllBlogs from "./Pages/AllBlogs";
import BlogDetails from "./Pages/BlogDetails";
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
import Blogs from "./admin/pages/Blogs";

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
          <Route path="payment-gateway" element={<PaymentGateway />} />
          <Route path="one-click-checkout" element={<OneClick />} />
          <Route path="about-us" element={<About />} />
          <Route
            path="Refund&Cancellation"
            element={<RefundandCancellation />}
          />
          <Route path="upi-autopay" element={<Upi />} />
          <Route path="payment-links" element={<PaymentLinks />} />
          <Route path="sound-box" element={<Soundbox />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="blogs" element={<AllBlogs />} />
          <Route path="/blogs/:slug" element={<BlogDetails />} />
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
          <Route path="blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
