
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

const getOrCreateId = (key) => {
  let id = localStorage.getItem(key);

  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(key, id);
  }

  return id;
};

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (!API_URL) {
      console.error("Analytics tracking skipped: VITE_API_URL is missing.");
      return;
    }

    let visitorId;
    let sessionId;

    try {
      visitorId = getOrCreateId("spay_analytics_visitor");
      sessionId = getOrCreateId("spay_analytics_session");
    } catch (error) {
      console.error("Analytics ID creation failed:", error);
      return;
    }

    const payload = {
      visitor_id: visitorId,
      session_id: sessionId,
      events: [
        {
          event_name: "page_view",
          page_path: location.pathname,
          occurred_at: new Date().toISOString(),
          properties: {},
        },
      ],
    };

    const baseURL = API_URL.replace(/\/+$/, "");

fetch("/api-proxy/api/analytics/events", {
          method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch((error) => {
      console.error("Analytics tracking failed:", error);
    });
  }, [location.pathname]);

  return null;
}
