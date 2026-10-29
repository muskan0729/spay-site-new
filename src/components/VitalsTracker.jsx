import { useEffect } from "react";
// 🛑 FIX: Removed 'onFID' as it is no longer exported by web-vitals
import { onCLS, onLCP, onTTFB, onINP } from "web-vitals"; 
import { useLocation } from "react-router-dom";
import axios from "axios";

const VitalsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Admin routes track mat karo
    if (location.pathname.startsWith("/admin")) return;

    let sessionId = null;
    try {
      const sessionRaw = localStorage.getItem("spay_sid");
      if (sessionRaw && sessionRaw !== "undefined") {
        sessionId = JSON.parse(sessionRaw).id;
      }
    } catch (e) {}
    
    if (!sessionId) return;

    let apiBase = import.meta.env.VITE_API_URL || "http://localhost:8000";
    apiBase = apiBase.replace(/\/$/, "");

    const sendMetric = (metric) => {
      // Sirf page path bhejo, query params hata do
      const pathOnly = location.pathname;

      axios.post(`${apiBase}/analytics/vitals`, {
        session_id: sessionId,
        page_path: pathOnly,
        metric_name: metric.name,
        metric_value: metric.value,
      }).catch(() => {}); // Silent fail
    };

    onCLS(sendMetric);
    onLCP(sendMetric);
    onTTFB(sendMetric);
    onINP(sendMetric);
    
  }, [location.pathname]);

  return null;
};

export default VitalsTracker;