import React, { useState, useEffect } from "react";

const Soundbox = () => {
  const [openAccordion, setOpenAccordion] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.dataset.index]: true,
            }));
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    document.querySelectorAll("[data-index]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Feature data with exact SVGs from original
  useEffect(() => {
    const cards = document.querySelectorAll('.feature-card');

    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', x + 'px');
      card.style.setProperty('--mouse-y', y + 'px');
    };

    cards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove);
      });
    };
  }, []);

  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-navy-900"
        >
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M17.66 6.34a8 8 0 0 1 0 11.32" />
        </svg>
      ),
      title: "Instant Audio Confirmation",
    },

    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <path d="M10 16l2 2 4-4" />
        </svg>
      ),
      title: "Enhanced Customer Trust",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="M4 4h12l4 4v12a2 2 0 0 1-2 2H4z" />
          <polyline points="16 4 16 8 20 8" />
          <circle cx="9" cy="15" r="2" />
          <line x1="10.5" y1="16.5" x2="12" y2="18" />
        </svg>
      ),
      title: "Boosted Transaction Transparency",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 0 20" />
          <path d="M12 2a15.3 15.3 0 0 0 0 20" />
        </svg>
      ),
      title: "Multilingual Support",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="M3 9l1-5h16l1 5" />
          <rect x="2" y="9" width="20" height="12" rx="2" ry="2" />
          <path d="M12 16s3-2 3-5v-1l-3-2-3 2v1c0 3 3 5 3 5z" />
        </svg>
      ),
      title: "Empowered Merchant Confidence",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 122.88 106.93"
          className="text-white fill-white"
        >
          <path d="M65.5,6.11A42.76,42.76,0,0,0,55.54,9a48,48,0,0,0-7.63,4.13,43.79,43.79,0,0,0-6.54,5.39h0a44.71,44.71,0,0,0-3.55,4H50.73A100,100,0,0,1,65.5,6.11ZM5.13,53.25H71a5.14,5.14,0,0,1,5.13,5.13V101.8A5.16,5.16,0,0,1,71,106.93H5.13A5.14,5.14,0,0,1,0,101.8V58.38a5.16,5.16,0,0,1,5.13-5.13Zm8,42a1.52,1.52,0,1,1,0-3H28.65a1.52,1.52,0,0,1,0,3Zm0-7.2a1.52,1.52,0,0,1,0-3H36.16a1.52,1.52,0,1,1,0,3Zm37.23-4.81a6.88,6.88,0,0,1,5.53,2.78,6.89,6.89,0,1,1,0,8.22,6.89,6.89,0,1,1-5.53-11ZM3.54,63.85h69V58.38a1.59,1.59,0,0,0-.47-1.12A1.61,1.61,0,0,0,71,56.79H5.13a1.57,1.57,0,0,0-1.59,1.59v5.47Zm69,13.61h-69V101.8A1.6,1.6,0,0,0,4,102.93a1.57,1.57,0,0,0,1.12.47H71a1.6,1.6,0,0,0,1.12-.48,1.52,1.52,0,0,0,.48-1.12V77.46ZM111.49,72h.11a49.14,49.14,0,0,0,2.29-4.66l.06-.13A42,42,0,0,0,116.48,59a43.46,43.46,0,0,0,.79-6.19H104.89A44.35,44.35,0,0,1,99.19,72Zm-3.57,5.53H95.75A82.09,82.09,0,0,1,85.6,89.31V81.39q1.75-1.94,3.29-3.88H85.6V72h7.21a40.34,40.34,0,0,0,6.56-19.2H85.6V50A6.74,6.74,0,0,0,85,47.25H99.25q-1-9.47-7.17-19.21H75.63v15.1H70.1V28H53.65a46.92,46.92,0,0,0-6.5,15.1H41.52A49.81,49.81,0,0,1,47.23,28H34.14a47.86,47.86,0,0,0-2.3,4.65l-.06.13a42.27,42.27,0,0,0-2.53,8.24c-.14.68-.26,1.38-.36,2.08H23.3c.15-1.07.32-2.12.53-3.16a48.73,48.73,0,0,1,2.87-9.32l.07-.15A52.16,52.16,0,0,1,31.39,22a48.9,48.9,0,0,1,6.08-7.38,48.34,48.34,0,0,1,7.38-6.07,52.2,52.2,0,0,1,8.52-4.63A49.11,49.11,0,0,1,72.87,0a50.92,50.92,0,0,1,10,1,47.56,47.56,0,0,1,9.32,2.87l.15.06a52.62,52.62,0,0,1,8.52,4.63A49.29,49.29,0,0,1,114.34,22,53,53,0,0,1,119,30.51,47.78,47.78,0,0,1,121.9,40a51.87,51.87,0,0,1,0,20.07A47.26,47.26,0,0,1,119,69.36l-.06.15A53,53,0,0,1,114.34,78a48.34,48.34,0,0,1-6.07,7.38,48.9,48.9,0,0,1-7.38,6.08,52.16,52.16,0,0,1-8.52,4.62,47.88,47.88,0,0,1-6.77,2.32V92.7A44.09,44.09,0,0,0,90.19,91a47.13,47.13,0,0,0,7.63-4.13,42.69,42.69,0,0,0,6.54-5.39h0a43.36,43.36,0,0,0,3.55-4Zm-3.14-30.26h12.49a43.27,43.27,0,0,0-.79-6.19,42.73,42.73,0,0,0-2.58-8.37A50.26,50.26,0,0,0,111.6,28H98.5a47.34,47.34,0,0,1,6.28,19.21ZM57.58,22.51H70.1V9.38A102.12,102.12,0,0,0,57.58,22.51Zm18,0H88.15A102.12,102.12,0,0,0,75.63,9.38V22.51Zm19.37,0h12.92a44.71,44.71,0,0,0-3.55-4h0a43.29,43.29,0,0,0-6.54-5.39A47.09,47.09,0,0,0,90.19,9l-.14-.06A42,42,0,0,0,81.82,6.4c-.52-.11-1-.2-1.59-.29A100,100,0,0,1,95,22.51Z" />
        </svg>
      ),
      title: "Always-On Payment Awareness",
    },
  ];

  const accordionItems = [
    {
      title: "Unbox your Spay Soundbox",
      description:
        "Open the box and get started right away — no extra tools or accessories needed. Everything required for setup is already included.",
    },
    {
      title: "Scan the QR to Register",
      description:
        "Use your smartphone to scan the built-in QR code. This instantly links your Soundbox to your merchant account — quick, secure, and simple.",
    },
    {
      title: "Connect to Power and Network",
      description:
        "Plug in the power source and connect via WiFi or built-in SIM card. No complicated setup — just instant, reliable pairing.",
    },
    {
      title: "Start Receiving Spoken Alerts Instantly",
      description:
        "Once connected, every successful payment triggers a clear voice alert with the exact amount. Stay informed in real-time without looking at your phone.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ===================== Hero Section ===================== */}
      <section
        className="relative min-h-[480px] sm:min-h-[560px] md:min-h-[640px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://spay.live/public/images/bg_link2.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/70 via-indigo-950/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Text */}
            <div className="text-white text-center lg:text-left space-y-6 lg:space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                Spay Smart Soundbox
                <span className="block text-blue-300 mt-3">Instant Voice Alerts</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                Never miss a transaction again. Get clear, real-time voice confirmations for every UPI, QR, card, or mobile payment — loud, accurate, and secure.
              </p>

              <div className="pt-4">
                <button className="px-8 py-4 bg-white text-indigo-900 font-semibold rounded-xl shadow-xl hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  Get Your Soundbox →
                </button>
              </div>
            </div>

            {/* Right - Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://spay.live/public/images/soundbox.webp"
                alt="Spay Smart Soundbox"
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto rounded-2xl shadow-2xl border-4 border-white/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== Features Section ===================== */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-cover bg-center" style={{ backgroundImage: "url('https://spay.live/public/images/bg2.webp')" }}>
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
            Why Choose Spay Soundbox?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                data-index={`feature-${index}`}
                className={`transform transition-all duration-700 ease-out ${
                  isVisible[`feature-${index}`]
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-12 scale-95"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center hover:bg-white/20 transition-all duration-300 shadow-lg">
                  <div className="mb-5">{feature.icon}</div>
                  <h3 className="text-xl md:text-2xl font-semibold">{feature.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Setup Guide (Accordion) ===================== */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <img
                src="https://spay.live/public/images/SOUNDBOX (2).jpg"
                alt="Spay Soundbox Setup"
                className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl border-4 border-white/20"
              />
            </div>

            {/* Right - Accordion */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-10 md:mb-12 text-center lg:text-left">
                Easy 4-Step Setup
              </h2>

              <div className="space-y-4">
                {accordionItems.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
                  >
                    <button
                      onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                      className={`w-full flex items-center justify-between p-5 sm:p-6 text-left transition-all duration-300 ${
                        openAccordion === index
                          ? "bg-gradient-to-r from-blue-700 to-indigo-800 text-white"
                          : "bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg border border-white/30">
                          {index + 1}
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                          {item.title}
                        </h3>
                      </div>
                      <svg
                        className={`w-6 h-6 transition-transform duration-300 ${
                          openAccordion === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        openAccordion === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="bg-white p-6 text-gray-700 border-t border-gray-200">
                        <p className="text-base sm:text-lg leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Animation */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Soundbox;