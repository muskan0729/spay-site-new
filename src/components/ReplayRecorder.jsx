import { useEffect, useRef } from "react";
import { record } from "@rrweb/record";
import { useLocation } from "react-router-dom";
import axios from "axios";

const ReplayRecorder = () => {
  const location = useLocation();
  const eventsRef = useRef([]);
  const chunkIndexRef = useRef(0);
  const stopFnRef = useRef(null);
  const sessionIdRef = useRef(null);

  useEffect(() => {
    if (location.pathname.startsWith("/admin")) return;

    let userData = {};
    try {
      const rawUser = localStorage.getItem("userData");
      if (rawUser && rawUser !== "undefined" && rawUser !== "null") {
        userData = JSON.parse(rawUser);
      }
    } catch (e) {}
    
    if (userData?.role === "admin") return;

    try {
      const sessionRaw = localStorage.getItem("spay_sid");
      if (sessionRaw && sessionRaw !== "undefined" && sessionRaw !== "null") {
        const parsed = JSON.parse(sessionRaw);
        if (parsed && parsed.id) sessionIdRef.current = parsed.id;
      }
    } catch (e) {}

    if (!sessionIdRef.current) return;

    if (!stopFnRef.current) {
      stopFnRef.current = record({
        emit(event) {
          eventsRef.current.push(event);
        },
        maskAllInputs: true,
        maskTextSelector: ".mask-text, input, textarea, [type='password']",
        blockSelector: ".block-replay",
        sampling: { mousemove: true, scroll: 150, media: 800 },
      });
    }

    // 🛑 Helper function to send chunk
    const sendChunk = async (isBeacon = false) => {
      if (eventsRef.current.length === 0) return;
      const chunkToSend = [...eventsRef.current];
      eventsRef.current = [];
      const currentChunk = chunkIndexRef.current++;

      let apiBase = import.meta.env.VITE_API_URL || "http://localhost:8000";
      apiBase = apiBase.replace(/\/$/, ""); // remove trailing slash

      const payload = {
        session_id: sessionIdRef.current,
        chunk_index: currentChunk,
        events: chunkToSend,
      };

      if (isBeacon && navigator.sendBeacon) {
        // Tab close ke waqt sendBeacon use karein
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(`${apiBase}/analytics/replay`, blob);
      } else {
        // Normal Axios call
        try {
          const token = localStorage.getItem("authToken");
          await axios.post(`${apiBase}/analytics/replay`, payload, {
            headers: token ? { Authorization: `Bearer ${token}` } : {}
          });
        } catch (err) {
          eventsRef.current = [...chunkToSend, ...eventsRef.current]; // requeue on fail
        }
      }
    };

    // 🛑 Time reduced to 5 seconds for faster saving
    const interval = setInterval(() => {
      sendChunk(false);
    }, 5000);

    // 🛑 Handle tab close / switch
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        sendChunk(true); // Send pending data immediately
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [location.pathname]);

  return null;
};

export default ReplayRecorder;