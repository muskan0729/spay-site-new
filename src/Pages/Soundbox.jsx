// Soundbox.jsx
import React, { useState, useEffect } from 'react';

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

  // Feature data with exact SVGs from original
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M17.66 6.34a8 8 0 0 1 0 11.32" />
        </svg>
      ),
      title: "Instant Audio Confirmation"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <path d="M10 16l2 2 4-4" />
        </svg>
      ),
      title: "Enhanced Customer Trust"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <path d="M3 9l1-5h16l1 5" />
          <rect x="2" y="9" width="20" height="12" rx="2" ry="2" />
          <path d="M12 16s3-2 3-5v-1l-3-2-3 2v1c0 3 3 5 3 5z" />
        </svg>
      ),
      title: "Empowered Merchant Confidence"
    },
    {
      icon: (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 106.93" height="70" width="70" className="text-white fill-white">
          <path fill="white" d="M65.5,6.11A42.76,42.76,0,0,0,55.54,9a48,48,0,0,0-7.63,4.13,43.79,43.79,0,0,0-6.54,5.39h0a44.71,44.71,0,0,0-3.55,4H50.73A100,100,0,0,1,65.5,6.11ZM5.13,53.25H71a5.14,5.14,0,0,1,5.13,5.13V101.8A5.16,5.16,0,0,1,71,106.93H5.13A5.14,5.14,0,0,1,0,101.8V58.38a5.16,5.16,0,0,1,5.13-5.13Zm8,42a1.52,1.52,0,1,1,0-3H28.65a1.52,1.52,0,0,1,0,3Zm0-7.2a1.52,1.52,0,0,1,0-3H36.16a1.52,1.52,0,1,1,0,3Zm37.23-4.81a6.88,6.88,0,0,1,5.53,2.78,6.89,6.89,0,1,1,0,8.22,6.89,6.89,0,1,1-5.53-11ZM3.54,63.85h69V58.38a1.59,1.59,0,0,0-.47-1.12A1.61,1.61,0,0,0,71,56.79H5.13a1.57,1.57,0,0,0-1.59,1.59v5.47Zm69,13.61h-69V101.8A1.6,1.6,0,0,0,4,102.93a1.57,1.57,0,0,0,1.12.47H71a1.6,1.6,0,0,0,1.12-.48,1.52,1.52,0,0,0,.48-1.12V77.46ZM111.49,72h.11a49.14,49.14,0,0,0,2.29-4.66l.06-.13A42,42,0,0,0,116.48,59a43.46,43.46,0,0,0,.79-6.19H104.89A44.35,44.35,0,0,1,99.19,72Zm-3.57,5.53H95.75A82.09,82.09,0,0,1,85.6,89.31V81.39q1.75-1.94,3.29-3.88H85.6V72h7.21a40.34,40.34,0,0,0,6.56-19.2H85.6V50A6.74,6.74,0,0,0,85,47.25H99.25q-1-9.47-7.17-19.21H75.63v15.1H70.1V28H53.65a46.92,46.92,0,0,0-6.5,15.1H41.52A49.81,49.81,0,0,1,47.23,28H34.14a47.86,47.86,0,0,0-2.3,4.65l-.06.13a42.27,42.27,0,0,0-2.53,8.24c-.14.68-.26,1.38-.36,2.08H23.3c.15-1.07.32-2.12.53-3.16a48.73,48.73,0,0,1,2.87-9.32l.07-.15A52.16,52.16,0,0,1,31.39,22a48.9,48.9,0,0,1,6.08-7.38,48.34,48.34,0,0,1,7.38-6.07,52.2,52.2,0,0,1,8.52-4.63A49.11,49.11,0,0,1,72.87,0a50.92,50.92,0,0,1,10,1,47.56,47.56,0,0,1,9.32,2.87l.15.06a52.62,52.62,0,0,1,8.52,4.63A49.29,49.29,0,0,1,114.34,22,53,53,0,0,1,119,30.51,47.78,47.78,0,0,1,121.9,40a51.87,51.87,0,0,1,0,20.07A47.26,47.26,0,0,1,119,69.36l-.06.15A53,53,0,0,1,114.34,78a48.34,48.34,0,0,1-6.07,7.38,48.9,48.9,0,0,1-7.38,6.08,52.16,52.16,0,0,1-8.52,4.62,47.88,47.88,0,0,1-6.77,2.32V92.7A44.09,44.09,0,0,0,90.19,91a47.13,47.13,0,0,0,7.63-4.13,42.69,42.69,0,0,0,6.54-5.39h0a43.36,43.36,0,0,0,3.55-4Zm-3.14-30.26h12.49a43.27,43.27,0,0,0-.79-6.19,42.73,42.73,0,0,0-2.58-8.37A50.26,50.26,0,0,0,111.6,28H98.5a47.34,47.34,0,0,1,6.28,19.21ZM57.58,22.51H70.1V9.38A102.12,102.12,0,0,0,57.58,22.51Zm18,0H88.15A102.12,102.12,0,0,0,75.63,9.38V22.51Zm19.37,0h12.92a44.71,44.71,0,0,0-3.55-4h0a43.29,43.29,0,0,0-6.54-5.39A47.09,47.09,0,0,0,90.19,9l-.14-.06A42,42,0,0,0,81.82,6.4c-.52-.11-1-.2-1.59-.29A100,100,0,0,1,95,22.51Z"/>
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
    <div className="font-sans" style={{ fontFamily: 'Lato, sans-serif' }}>
      {/* Hero Section */}
      <div 
        className="w-full h-[400px] sm:h-[450px] md:h-[520px] bg-cover bg-left flex items-center animate-fadeIn"
        style={{ backgroundImage: "url('https://spay.live/public/images/bg_link2.jpg')" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Column */}
            <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
              <div className="w-full max-w-[90%] mx-auto py-4 sm:py-5">
                <h1 className="mb-4 font-bold text-blue-900 text-3xl sm:text-4xl md:text-5xl text-center md:text-left" 
                    style={{ textShadow: '2px 2px 5px skyblue' }}>
                  Spay Smart Soundbox
                </h1>
                <p className="font-medium leading-relaxed sm:leading-loose text-black text-sm sm:text-base md:text-lg text-center md:text-left">
                  Instant Voice Alerts for Every Payment Clear, Fast, and Secure. Spay's smart soundbox ensures real-time audio confirmations for UPI, QR, and mobile payments so you never miss a transaction.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <img 
                src="https://spay.live/public/images/soundbox.webp" 
                alt="payment link image" 
                className="w-2/3 sm:w-3/4 md:w-4/5 max-w-[400px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
{/* Features Section */}
<section className="section-2 overflow-hidden">
  <div 
    className="relative min-h-[900px] sm:min-h-[800px] md:min-h-[700px] bg-cover bg-center py-12 sm:py-16"
    style={{ backgroundImage: "url('https://spay.live/public/images/bg2.webp')" }}
  >
    {/* Overlay for better text readability */}
    <div className="absolute inset-0 bg-black/40"></div>
    
    <div className="relative text-white px-4">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16">
        Why Choose a Payment Soundbox?
      </h2>

      {/* First Row - Rectangular Cards with Animations */}
      <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-14 mb-12 max-w-7xl mx-auto">
        {features.slice(0, 3).map((feature, index) => (
          <div 
            key={index}
            data-index={`card-${index}`}
            className={`w-full sm:w-[calc(50%-2rem)] md:w-[calc(33.333%-2.8rem)] lg:w-[350px] transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 ${
              isVisible[`card-${index}`] 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-20 scale-95'
            }`}
            style={{ 
              transition: 'transform 0.3s ease, box-shadow 0.3s ease, opacity 0.7s ease, transform 0.7s ease'
            }}
          >
            {/* Card with exact styling from reference */}
            <div className="bg-transparent backdrop-blur-sm border border-white/30 rounded-lg w-full max-w-[350px] h-[180px] p-3 flex items-center justify-start text-left gap-4 hover:shadow-lg transition-all duration-300 mx-auto"
                 style={{ boxShadow: '0 4px 15px rgba(135, 206, 235, 0.6)' }}>
              <div className="text-white flex-shrink-0">
                {feature.icon}
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold leading-tight text-white">
                {feature.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row - Rectangular Cards with Animations */}
      <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-14 max-w-7xl mx-auto">
        {features.slice(3, 6).map((feature, index) => (
          <div 
            key={index}
            data-index={`card-${index + 3}`}
            className={`w-full sm:w-[calc(50%-2rem)] md:w-[calc(33.333%-2.8rem)] lg:w-[350px] transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 ${
              isVisible[`card-${index + 3}`] 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-20 scale-95'
            }`}
            style={{ 
              transition: 'transform 0.3s ease, box-shadow 0.3s ease, opacity 0.7s ease, transform 0.7s ease',
              transitionDelay: `${(index + 3) * 100}ms`
            }}
          >
            {/* Card with exact styling from reference */}
            <div className="bg-transparent backdrop-blur-sm border border-white/30 rounded-lg w-full max-w-[350px] h-[180px] p-3 flex items-center justify-start text-left gap-4 hover:shadow-lg transition-all duration-300 mx-auto"
                 style={{ boxShadow: '0 4px 15px rgba(135, 206, 235, 0.6)' }}>
              <div className="text-white flex-shrink-0">
                {feature.icon}
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold leading-tight text-white">
                {feature.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

     {/* Setup Section */}
{/* Setup Section */}
<section className="py-16 sm:py-20 px-4 bg-white">
  <div className="container mx-auto max-w-7xl">
    
    <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-30">
      {/* Image Section - Moved Left */}
      <div className="w-full lg:w-5/12 flex justify-center lg:justify-start">
        <div className="flex items-center justify-center lg:justify-start">
          <img 
            src="https://spay.live/public/images/SOUNDBOX (2).jpg" 
            alt="Spay Soundbox Setup" 
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Accordion Section with Numbered Style */}
     {/* Accordion Section with Numbered Style */}
<div className="w-full lg:w-7/12">
 
  <div className="space-y-4 sm:space-y-5">
    {accordionItems.map((item, index) => (
      <div 
        key={index}
        className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
      >
        <h4 className="m-0">
          <button
            onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
            className={`w-full flex items-center justify-between p-5 sm:p-6 text-left transition-all duration-300 text-white`}
            style={{ 
              background: openAccordion === index 
                ? `linear-gradient(135deg, ${'#01428c'}, ${'#1e3a8a'})` 
                : `linear-gradient(135deg, ${'#01428c'}, ${'#1e3a8a'})`
            }}
          >
            <div className="flex items-center gap-4">
              {/* Number Circle - Keeping original size */}
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-sm border border-white/40">
                {index + 1}
              </div>
              {/* Increased Title Text Size Only */}
              <h5 className="text-lg sm:text-xl md:text-2xl font-medium">
                {item.title}
              </h5>
            </div>
            <svg 
              className={`w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform duration-300 flex-shrink-0 ${
                openAccordion === index ? 'rotate-180' : ''
              }`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </h4>
        <div 
          className={`transition-all duration-300 overflow-hidden ${
            openAccordion === index ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="bg-white p-5 sm:p-6 text-gray-700" style={{ borderTop: `2px solid ${'#01428c'}` }}>
            {/* Increased Description Text Size Only */}
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
     </div>
  </div>
</section>
      {/* Google Fonts Link */}
      <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />

      {/* Custom Animation Keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
        
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-400 { transition-delay: 400ms; }
        .delay-500 { transition-delay: 500ms; }
      `}</style>
    </div>
  );
};

export default Soundbox;