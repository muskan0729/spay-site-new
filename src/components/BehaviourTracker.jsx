import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackEvent } from "../services/analytics";

const BehaviourTracker = () => {
  const location = useLocation();
  const scrollTracked = useRef({ 25: false, 50: false, 75: false, 100: false });

  // 🛑 1. Click Tracking
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('button, a, [role="button"]');
      if (!target) return;

      // Ignore sensitive fields
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

      // Get safe label (aria-label, text content, or id)
      const label = target.getAttribute('aria-label') || target.innerText?.trim().substring(0, 50) || target.id;

      trackEvent('click', {
        element_tag: target.tagName,
        element_id: target.id || null,
        analytics_label: label || 'Unlabeled Element',
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // 🛑 2. Scroll Depth Tracking
  useEffect(() => {
    // Reset on route change
    scrollTracked.current = { 25: false, 50: false, 75: false, 100: false };

    let timeout;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);

        const thresholds = [25, 50, 75, 100];
        thresholds.forEach(percent => {
          if (scrollPercent >= percent && !scrollTracked.current[percent]) {
            scrollTracked.current[percent] = true;
            trackEvent('scroll_depth', { scroll_percent: percent });
          }
        });
      }, 200); // Debounce to prevent spam
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, [location.pathname]);

  return null;
};

export default BehaviourTracker;