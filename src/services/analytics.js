import axios from "axios";

const STORAGE_VISITOR = "spay_vid";
const STORAGE_SESSION = "spay_sid";
const SESSION_TTL_MS = 30 * 60 * 1000; // 30 mins inactivity = new session

// API Base URL setup
const getBaseUrl = () => {
  let url = import.meta.env.VITE_API_URL || "http://localhost:8000";
  return url.endsWith("/") ? url.slice(0, -1) : url;
};

const api = axios.create({
  baseURL: getBaseUrl(),
  headers: { "Content-Type": "application/json" },
});

function uuid() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0, v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function getVisitorId() {
  let id = localStorage.getItem(STORAGE_VISITOR);
  if (!id) { id = uuid(); localStorage.setItem(STORAGE_VISITOR, id); }
  return id;
}

function getSessionId() {
  const raw = localStorage.getItem(STORAGE_SESSION);
  const now = Date.now();
  if (raw && raw !== "undefined") {
    try {
      const parsed = JSON.parse(raw);
      if (parsed.expires > now && parsed.id) {
        localStorage.setItem(STORAGE_SESSION, JSON.stringify({ id: parsed.id, expires: now + SESSION_TTL_MS }));
        return parsed.id;
      }
    } catch { /* ignore */ }
  }
  const id = uuid();
  localStorage.setItem(STORAGE_SESSION, JSON.stringify({ id, expires: now + SESSION_TTL_MS }));
  return id;
}

let queue = [];
let flushTimer = null;
let flushing = false;
let backoffUntil = 0;

function scheduleFlush() {
  if (flushTimer) return;
  flushTimer = setTimeout(() => {
    flushTimer = null;
    flush();
  }, 3000);
}

async function flush(isUnloading = false) {
  if (flushing || queue.length === 0) return;
  if (Date.now() < backoffUntil) return;

  // Admin exclusion
  try {
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    if (userData.role === "admin") {
      queue = []; 
      return;
    }
  } catch (e) { /* ignore */ }

  flushing = true;
  const batch = queue.splice(0, 25);

  const payload = {
    visitor_id: getVisitorId(),
    session_id: getSessionId(),
    events: batch,
  };

  try {
    if (isUnloading && navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
      // 🛑 Yahan se /api hata diya
      navigator.sendBeacon(`${getBaseUrl()}/analytics/events`, blob);
    } else {
      // 🛑 Yahan se /api hata diya
      await api.post("/analytics/events", payload);
    }
  } catch (err) {
    backoffUntil = Date.now() + 30000;
    if (import.meta.env.DEV) {
      console.warn("⚠️ [Analytics] Request failed. Backing off for 30s.", err.message);
    }
    queue.unshift(...batch);
  } finally {
    flushing = false;
    if (queue.length > 0) scheduleFlush();
  }
}

export function trackPageView({ path, referrer = null, title = null } = {}) {
  if (!path) return;
  queue.push({
    event_name: "page_view",
    page_path: path,
    referrer,
    occurred_at: new Date().toISOString(),
  });
  scheduleFlush();
}

export function trackEvent(eventName, properties = {}, path = window.location.pathname) {
  if (!eventName) return;
  queue.push({
    event_name: eventName,
    page_path: path,
    occurred_at: new Date().toISOString(),
    properties: properties,
  });
  scheduleFlush();
}

if (typeof window !== "undefined") {
  window.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") flush(true);
  });
}