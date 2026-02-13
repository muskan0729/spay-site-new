import React, { useEffect, useRef } from "react";
import integrationBg from "../assets/images/integration-bg.jpg";

import {
  FaCode,
  FaPlug,
  FaProjectDiagram,
  FaAndroid,
  FaApple,
} from "react-icons/fa";

const Integration = () => {
  const appRef = useRef(null);

  // Scroll Animation
useEffect(() => {
  const elements = document.querySelectorAll(".scroll-animate");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);


  return (
    <div className="integration-page">
      {/* ================= HERO SECTION ================= */}
<section
  className="integration-hero"
  style={{ backgroundImage: `url(${integrationBg})` }}
>
  <div className="hero-overlay"></div>

  <div className="hero-content scroll-animate">
    <h1>Simplified Integration</h1>
    <p>Well-documented custom code, including</p>

    <div className="integration-icons">
      <div className="icon-box floating">
        <FaCode />
        <span>SDKs</span>
      </div>

      <div className="icon-box floating delay-1">
        <FaPlug />
        <span>Plugins</span>
      </div>

      <div className="icon-box floating delay-2">
        <FaProjectDiagram />
        <span>API</span>
      </div>
    </div>
  </div>
</section>



      {/* ================= API SECTION ================= */}
      <section className="integration-section center-section">
        <h2>Integrate Payments into Your Website</h2>

        <div className="center-card-wrapper">
          <div className="card premium-card scroll-animate">
            <div className="card-icon">
              <FaProjectDiagram />
            </div>
            <h3>API as per your Platform</h3>
            <p>Create dynamic websites and applications.</p>
            <button className="primary-btn">
              View Documentation
            </button>
          </div>
        </div>
      </section>

      {/* ================= APP SECTION ================= */}
      <section className="app-section" ref={appRef}>
        <h2 className="section-title">App Integration</h2>

        <div className="app-card-wrapper">
          {/* Android */}
          <div className="app-card scroll-animate">
            <div className="app-icon android">
              <FaAndroid />
            </div>
            <h3>Android</h3>
            <p>Track customer transactions seamlessly.</p>
            <button className="gradient-btn">
              View Documentation
            </button>
          </div>

          {/* iOS */}
          <div className="app-card scroll-animate">
            <div className="app-icon ios">
              <FaApple />
            </div>
            <h3>iOS</h3>
            <p>Manage customer transactions effortlessly.</p>
            <button className="gradient-btn">
              View Documentation
            </button>
          </div>
        </div>
      </section>

      {/* ================= PLUGIN SECTION ================= */}
      <section className="integration-section center-section">
        <h2>Plugin</h2>

        <div className="center-card-wrapper">
          <div className="card premium-card scroll-animate">
            <div className="card-icon">
              <FaPlug />
            </div>
            <h3>WooCommerce</h3>
            <p>Use this plugin for e-commerce on WordPress.</p>
            <button className="primary-btn">
              Download Kit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Integration;
