import React, { useEffect, useRef, useState } from "react";
import integrationBg from "../assets/images/integration-bg.jpg";
import AuthModal from "../components/AuthModal";

import {
  FaCode,
  FaPlug,
  FaProjectDiagram,
  FaAndroid,
  FaApple,
} from "react-icons/fa";

const Integration = () => {
  const appRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <>
      <div className="integration-page">
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

        <section className="integration-section center-section">
          <h2>Integrate Payments into Your Website</h2>

          <div className="center-card-wrapper">
            <div className="premium-card scroll-animate">
              <div className="card-icon">
                <FaProjectDiagram />
              </div>

              <h3>API as per your Platform</h3>
              <p>Create dynamic websites and applications.</p>

              <button
                type="button"
                className="primary-btn"
                onClick={() => setIsModalOpen(true)}
              >
                View Documentation
              </button>
            </div>
          </div>
        </section>

        <section className="app-section" ref={appRef}>
          <h2 className="section-title">App Integration</h2>

          <div className="app-card-wrapper">
            <div className="app-card scroll-animate">
              <div className="app-icon android">
                <FaAndroid />
              </div>

              <h3>Android</h3>
              <p>Track customer transactions seamlessly.</p>

              <button
                type="button"
                className="primary-btn"
                onClick={() => setIsModalOpen(true)}
              >
                View Documentation
              </button>
            </div>

            <div className="app-card scroll-animate">
              <div className="app-icon ios">
                <FaApple />
              </div>

              <h3>iOS</h3>
              <p>Manage customer transactions effortlessly.</p>

              <button
                type="button"
                className="primary-btn"
                onClick={() => setIsModalOpen(true)}
              >
                View Documentation
              </button>
            </div>
          </div>
        </section>
      </div>

      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Integration;
