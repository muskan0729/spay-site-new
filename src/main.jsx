import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; 
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
//import ScrollTop from "./components/ScrollToTop";
import { AuthProvider } from "./context/AuthContext";
import AnalyticsTracker from "./analytics/AnalyticsTracker";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);