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
import MerchantOnboarding from "./components/MerchantOnboarding";
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsAndConditions from './Pages/TermsAndConditions';

import Integration from "./Pages/Integration";
import ContactUs from "./Pages/ContactUs";
import Career from "./Pages/Career";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/paymentgateway" element={<PaymentGateway />} />
          <Route path="/OneClick" element={<OneClick />} />
          <Route path="/About-us" element={<About />} />
           <Route path="/upi-autopay" element={<Upi/>} />
          <Route path="/payment-links" element={<PaymentLinks/>} />
          <Route path="/soundbox" element={<Soundbox/>} />
          {/* {<Route path="/Contact-us" element={<ContactUs />} />} */}
          <Route path="/integration" element={<Integration />} />
          <Route path="/onboarding-merchant" element={<MerchantOnboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
<Route path="/careers" element={<Career/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
