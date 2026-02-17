// Soundbox.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Soundbox = () => {
  const [openAccordion, setOpenAccordion] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.dataset.index]: true }));
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('[data-index]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Mouse tracking for card gradient effect
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

  // Feature data with exact SVGs from original
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-900">
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M17.66 6.34a8 8 0 0 1 0 11.32" />
        </svg>
      ),
      title: "Instant Audio Confirmation"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-900">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <path d="M10 16l2 2 4-4" />
        </svg>
      ),
      title: "Enhanced Customer Trust"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-900">
          <path d="M4 4h12l4 4v12a2 2 0 0 1-2 2H4z" />
          <polyline points="16 4 16 8 20 8" />
          <circle cx="9" cy="15" r="2" />
          <line x1="10.5" y1="16.5" x2="12" y2="18" />
        </svg>
      ),
      title: "Boosted Transaction Transparency"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-900">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 0 20" />
          <path d="M12 2a15.3 15.3 0 0 0 0 20" />
          <text x="7" y="8" fontSize="5" fontFamily="Arial" fill="currentColor">A</text>
          <text x="14" y="17" fontSize="5" fontFamily="Arial" fill="currentColor">文</text>
        </svg>
      ),
      title: "Multilingual Support"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-900">
          <path d="M3 9l1-5h16l1 5" />
          <rect x="2" y="9" width="20" height="12" rx="2" ry="2" />
          <path d="M12 16s3-2 3-5v-1l-3-2-3 2v1c0 3 3 5 3 5z" />
        </svg>
      ),
      title: "Empowered Merchant Confidence"
    },
    {
      icon: (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 106.93" height="70" width="70" className="text-navy-900 fill-navy-900">
          <path fill="currentColor" d="M65.5,6.11A42.76,42.76,0,0,0,55.54,9a48,48,0,0,0-7.63,4.13,43.79,43.79,0,0,0-6.54,5.39h0a44.71,44.71,0,0,0-3.55,4H50.73A100,100,0,0,1,65.5,6.11ZM5.13,53.25H71a5.14,5.14,0,0,1,5.13,5.13V101.8A5.16,5.16,0,0,1,71,106.93H5.13A5.14,5.14,0,0,1,0,101.8V58.38a5.16,5.16,0,0,1,5.13-5.13Zm8,42a1.52,1.52,0,1,1,0-3H28.65a1.52,1.52,0,0,1,0,3Zm0-7.2a1.52,1.52,0,0,1,0-3H36.16a1.52,1.52,0,1,1,0,3Zm37.23-4.81a6.88,6.88,0,0,1,5.53,2.78,6.89,6.89,0,1,1,0,8.22,6.89,6.89,0,1,1-5.53-11ZM3.54,63.85h69V58.38a1.59,1.59,0,0,0-.47-1.12A1.61,1.61,0,0,0,71,56.79H5.13a1.57,1.57,0,0,0-1.59,1.59v5.47Zm69,13.61h-69V101.8A1.6,1.6,0,0,0,4,102.93a1.57,1.57,0,0,0,1.12.47H71a1.6,1.6,0,0,0,1.12-.48,1.52,1.52,0,0,0,.48-1.12V77.46ZM111.49,72h.11a49.14,49.14,0,0,0,2.29-4.66l.06-.13A42,42,0,0,0,116.48,59a43.46,43.46,0,0,0,.79-6.19H104.89A44.35,44.35,0,0,1,99.19,72Zm-3.57,5.53H95.75A82.09,82.09,0,0,1,85.6,89.31V81.39q1.75-1.94,3.29-3.88H85.6V72h7.21a40.34,40.34,0,0,0,6.56-19.2H85.6V50A6.74,6.74,0,0,0,85,47.25H99.25q-1-9.47-7.17-19.21H75.63v15.1H70.1V28H53.65a46.92,46.92,0,0,0-6.5,15.1H41.52A49.81,49.81,0,0,1,47.23,28H34.14a47.86,47.86,0,0,0-2.3,4.65l-.06.13a42.27,42.27,0,0,0-2.53,8.24c-.14.68-.26,1.38-.36,2.08H23.3c.15-1.07.32-2.12.53-3.16a48.73,48.73,0,0,1,2.87-9.32l.07-.15A52.16,52.16,0,0,1,31.39,22a48.9,48.9,0,0,1,6.08-7.38,48.34,48.34,0,0,1,7.38-6.07,52.2,52.2,0,0,1,8.52-4.63A49.11,49.11,0,0,1,72.87,0a50.92,50.92,0,0,1,10,1,47.56,47.56,0,0,1,9.32,2.87l.15.06a52.62,52.62,0,0,1,8.52,4.63A49.29,49.29,0,0,1,114.34,22,53,53,0,0,1,119,30.51,47.78,47.78,0,0,1,121.9,40a51.87,51.87,0,0,1,0,20.07A47.26,47.26,0,0,1,119,69.36l-.06.15A53,53,0,0,1,114.34,78a48.34,48.34,0,0,1-6.07,7.38,48.9,48.9,0,0,1-7.38,6.08,52.16,52.16,0,0,1-8.52,4.62,47.88,47.88,0,0,1-6.77,2.32V92.7A44.09,44.09,0,0,0,90.19,91a47.13,47.13,0,0,0,7.63-4.13,42.69,42.69,0,0,0,6.54-5.39h0a43.36,43.36,0,0,0,3.55-4Zm-3.14-30.26h12.49a43.27,43.27,0,0,0-.79-6.19,42.73,42.73,0,0,0-2.58-8.37A50.26,50.26,0,0,0,111.6,28H98.5a47.34,47.34,0,0,1,6.28,19.21ZM57.58,22.51H70.1V9.38A102.12,102.12,0,0,0,57.58,22.51Zm18,0H88.15A102.12,102.12,0,0,0,75.63,9.38V22.51Zm19.37,0h12.92a44.71,44.71,0,0,0-3.55-4h0a43.29,43.29,0,0,0-6.54-5.39A47.09,47.09,0,0,0,90.19,9l-.14-.06A42,42,0,0,0,81.82,6.4c-.52-.11-1-.2-1.59-.29A100,100,0,0,1,95,22.51Z" />
        </svg>
      ),
      title: "Always-On Payment Awareness"
    }
  ];

  const accordionItems = [
    {
      title: "Unbox your Spay Soundbox:",
      description: "Open the box and get started right away - no extra tools or accessories needed. Everything required for setup is already included, making it hassle-free from the start."
    },
    {
      title: "Scan the QR to Register:",
      description: "Simply use your smartphone to scan the built - in QR code. This links your Spay Soundbox to your merchant account in seconds - quick, secure, and easy."
    },
    {
      title: "Connect to Power and Network:",
      description: "Plug the soundbox into a power source to turn it on. Connect using WiFi or the built-in SIM card for reliable, uninterrupted connectivity. No complex setup - just smooth, instant pairing."
    },
    {
      title: "Start Receiving Spoken Payment Alerts Instantly:",
      description: "Once connected, your soundbox is ready to work immediately. Every time a customer makes a payment, you'll hear a clear voice alert confirming the amount. It's fast, reliable, and keeps you instantly informed - no screen-checking needed."
    }
  ];

  return (
    <div className="font-sans overflow-x-hidden w-full" style={{ fontFamily: 'Inter, Lato, sans-serif' }}>

      {/* Hero Section - Clean White Background with Dark Blue Heading and Black Text */}
      <div className="relative w-full min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-white overflow-hidden flex items-center">
        {/* Subtle background image with very low opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://spay.live/public/images/bg_link2.jpg')" }}
        ></div>

        {/* Decorative elements - responsive sizing */}
        <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-navy-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-12">
            {/* Left Column - Dark Blue Heading and Black Text */}
            <div className="w-full lg:w-1/2">
              <motion.div
                className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="mb-3 sm:mb-4 font-bold text-navy-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                  Spay Smart Soundbox
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
                  Instant Voice Alerts for Every Payment Clear, Fast, and Secure. Spay's smart soundbox ensures real-time audio confirmations for UPI, QR, and mobile payments so you never miss a transaction.
                </p>
              </motion.div>
            </div>

            {/* Right Column - Responsive image */}
            <motion.div
              className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                {/* Navy blue glow */}
                <div className="absolute inset-0 bg-navy-200/30 rounded-full blur-3xl animate-pulse-slow"></div>

                {/* 3D floating effect */}
                <div className="relative transform perspective-1000 rotateY-[-5deg] rotateX-5deg">
                  <img
                    src="https://spay.live/public/images/soundbox.webp"
                    alt="Spay Soundbox"
                    className="relative z-10 w-full h-auto drop-shadow-2xl animate-float-slow"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section - With More Visible Background Image */}
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        {/* Original background image with increased opacity for better visibility */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://spay.live/public/images/bg2.webp')" }}
        ></div>

        {/* Abstract shapes - responsive */}
        <div className="absolute top-0 right-0 w-1/2 sm:w-1/3 h-1/2 sm:h-1/3 bg-gradient-to-br from-navy-100/30 to-transparent rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 sm:w-1/3 h-1/2 sm:h-1/3 bg-gradient-to-tr from-blue-100/30 to-transparent rounded-tr-full"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white px-4">
              Why Choose a Payment Soundbox?
            </h2>
          </motion.div>

          {/* Card Grid - Fully Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 max-w-7xl mx-auto px-2 sm:px-0">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="feature-card group relative w-full"
              >
                {/* Card Design - FIXED: Text will NEVER turn white */}
                <div className="relative h-full p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">

                  {/* Very subtle hover effect - doesn't affect text */}
                  <div className="absolute inset-0 bg-navy-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Icon with navy gradient background - responsive sizing */}
                  <div className="relative mb-4 sm:mb-5 md:mb-6">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-navy-100 to-navy-200 
                        p-3 sm:p-3.5 md:p-4 text-navy-900 transform group-hover:scale-110 group-hover:rotate-2 
                        transition-all duration-500 shadow-lg group-hover:shadow-xl">
                      {React.cloneElement(feature.icon, {
                        width: "100%",
                        height: "100%",
                        className: "w-full h-full text-navy-900"
                      })}
                    </div>

                    {/* Navy decorative dot */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-navy-500 rounded-full border-2 border-white"></div>
                  </div>

                  {/* Title - ALWAYS stays navy blue, never changes color */}
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-navy-900 mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">

          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-12 xl:gap-20">
            {/* Image Section */}
            <motion.div
              className="w-full lg:w-5/12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative group">
                {/* Navy decorative elements */}
                <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-navy-300 to-blue-300 rounded-2xl sm:rounded-3xl opacity-30 group-hover:opacity-50 blur-2xl transition-opacity duration-500"></div>

                {/* Image container */}
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://spay.live/public/images/SOUNDBOX (2).jpg"
                    alt="Spay Soundbox Setup"
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>

            {/* Accordion Section */}
            <div className="w-full lg:w-7/12 mt-6 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-6 sm:mb-8"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 text-center lg:text-left">
                  Get Started in 4 Simple Steps
                </h2>
              </motion.div>

              <div className="space-y-3 sm:space-y-4">
                {accordionItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="rounded-lg sm:rounded-xl overflow-hidden border border-gray-200 hover:border-navy-300 transition-colors duration-300"
                  >
                    <button
                      onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                      className={`w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left transition-all duration-300 ${openAccordion === index
                        ? 'bg-navy-50'
                        : 'bg-white hover:bg-gray-50'
                        }`}
                    >
                      <div className="flex items-center gap-3 sm:gap-4 flex-1">
                        {/* Navy number circle - responsive */}
                        <div className={`
                          w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-sm sm:text-base md:text-lg flex-shrink-0
                          ${openAccordion === index
                            ? 'bg-navy-900 text-white shadow-lg'
                            : 'bg-gray-100 text-navy-900'}
                        `}>
                          {index + 1}
                        </div>
                        <h5 className="text-sm sm:text-base md:text-lg font-semibold text-navy-900">
                          {item.title}
                        </h5>
                      </div>
                      <svg
                        className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-navy-900 transition-transform duration-300 flex-shrink-0 ml-2 ${openAccordion === index ? 'rotate-180' : ''
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <div
                      className={`transition-all duration-500 overflow-hidden ${openAccordion === index ? 'max-h-96' : 'max-h-0'
                        }`}
                    >
                      <div className="bg-white p-4 sm:p-5 md:p-6 border-t border-gray-100">
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Fonts Link */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet" />

      {/* Responsive Meta Viewport Tag */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />

      {/* Custom Animation Keyframes */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) rotateY(-5deg) rotateX(5deg);
          }
          50% {
            transform: translateY(-20px) rotateY(-5deg) rotateX(5deg);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.1);
          }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .rotateY-\\[-5deg\\] {
          transform: rotateY(-5deg);
        }
        
        .rotateX-5deg {
          transform: rotateX(5deg);
        }
        
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-400 { transition-delay: 400ms; }
        .delay-500 { transition-delay: 500ms; }
        .delay-1000 { animation-delay: 1s; }
        
        .feature-card {
          cursor: pointer;
        }
        
        /* Responsive container queries */
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
        
        /* Navy blue color definitions */
        .bg-navy-50 { background-color: #f0f5ff; }
        .bg-navy-100 { background-color: #e0eaff; }
        .bg-navy-200 { background-color: #c2d4ff; }
        .bg-navy-300 { background-color: #a3beff; }
        .bg-navy-400 { background-color: #7fa3ff; }
        .bg-navy-500 { background-color: #5c87ff; }
        .bg-navy-600 { background-color: #3a6bff; }
        .bg-navy-700 { background-color: #1a4fff; }
        .bg-navy-800 { background-color: #0033cc; }
        .bg-navy-900 { background-color: #002080; }
        
        .text-navy-50 { color: #f0f5ff; }
        .text-navy-100 { color: #e0eaff; }
        .text-navy-200 { color: #c2d4ff; }
        .text-navy-300 { color: #a3beff; }
        .text-navy-400 { color: #7fa3ff; }
        .text-navy-500 { color: #5c87ff; }
        .text-navy-600 { color: #3a6bff; }
        .text-navy-700 { color: #1a4fff; }
        .text-navy-800 { color: #0033cc; }
        .text-navy-900 { color: #002080; }
        
        .border-navy-50 { border-color: #f0f5ff; }
        .border-navy-100 { border-color: #e0eaff; }
        .border-navy-200 { border-color: #c2d4ff; }
        .border-navy-300 { border-color: #a3beff; }
        .border-navy-400 { border-color: #7fa3ff; }
        .border-navy-500 { border-color: #5c87ff; }
        .border-navy-600 { border-color: #3a6bff; }
        .border-navy-700 { border-color: #1a4fff; }
        .border-navy-800 { border-color: #0033cc; }
        .border-navy-900 { border-color: #002080; }
        
        .from-navy-50 { --tw-gradient-from: #f0f5ff; }
        .from-navy-100 { --tw-gradient-from: #e0eaff; }
        .from-navy-200 { --tw-gradient-from: #c2d4ff; }
        .from-navy-300 { --tw-gradient-from: #a3beff; }
        .from-navy-400 { --tw-gradient-from: #7fa3ff; }
        .from-navy-500 { --tw-gradient-from: #5c87ff; }
        .from-navy-600 { --tw-gradient-from: #3a6bff; }
        .from-navy-700 { --tw-gradient-from: #1a4fff; }
        .from-navy-800 { --tw-gradient-from: #0033cc; }
        .from-navy-900 { --tw-gradient-from: #002080; }
        
        .to-navy-50 { --tw-gradient-to: #f0f5ff; }
        .to-navy-100 { --tw-gradient-to: #e0eaff; }
        .to-navy-200 { --tw-gradient-to: #c2d4ff; }
        .to-navy-300 { --tw-gradient-to: #a3beff; }
        .to-navy-400 { --tw-gradient-to: #7fa3ff; }
        .to-navy-500 { --tw-gradient-to: #5c87ff; }
        .to-navy-600 { --tw-gradient-to: #3a6bff; }
        .to-navy-700 { --tw-gradient-to: #1a4fff; }
        .to-navy-800 { --tw-gradient-to: #0033cc; }
        .to-navy-900 { --tw-gradient-to: #002080; }
        
        /* Responsive utilities */
        .w-18 { width: 4.5rem; }
        .h-18 { height: 4.5rem; }
      `}</style>
    </div>
  );
};

export default Soundbox;