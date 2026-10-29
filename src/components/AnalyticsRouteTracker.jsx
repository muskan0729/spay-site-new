import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { trackPageView } from "../services/analytics";

const AnalyticsRouteTracker = () => {
  const location = useLocation();
  const { user } = useAuth();
  const lastKeyRef = useRef(null);

  useEffect(() => {
    // 1. Admin routes skip karo
    if (location.pathname.startsWith("/admin")) return;
    
    // 2. Admin user skip karo
    if (user?.role === "admin") return;

    const key = `${location.pathname}${location.search}`;
    const now = Date.now();

    // 3. Deduplication (React 18 StrictMode dev mode ke liye)
    if (lastKeyRef.current && lastKeyRef.current.key === key && now - lastKeyRef.current.time < 750) {
      return;
    }

    lastKeyRef.current = { key, time: now };

    // 4. Track
    trackPageView({
      path: key,
      referrer: document.referrer || null,
      title: document.title,
    });
  }, [location.pathname, location.search, user?.role]);

  return null;
};

export default AnalyticsRouteTracker;