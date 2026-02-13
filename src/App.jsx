import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Layout from "./components/Layout";
import PaymentGateway from "./Pages/PaymentGateway";
import OneClick from "./Pages/OneClick";
import About from "./Pages/About";
import Integration from "./pages/Integration";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/paymentgateway" element={<PaymentGateway />} />
          <Route path="/OneClick" element={<OneClick />} />
          <Route path="/About-us" element={<About />} />
          
<Route path="/integration" element={<Integration />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
