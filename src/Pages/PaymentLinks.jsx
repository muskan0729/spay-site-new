import React from 'react';
import lastbg from '../assets/images/upicta (2).webp';

console.log('lastbg path:', lastbg); 

const PaymentLinks = () => {
  const paymentMethods = [
    { id: 1, src: "https://spay.live/public/images/upi.png", alt: "brand-number-one-1", width: "100px", height: "50px" },
    { id: 2, src: "https://spay.live/public/images/Rupay.png", alt: "brand-number-one-1", width: "100px", height: "50px" },
    { id: 3, src: "https://spay.live/public/images/pngegg.png", alt: "brand-number-one-1", width: "100px", height: "50px" },
    { id: 4, src: "https://spay.live/public/images/Visa_2021.svg.png", alt: "brand-number-one-1", width: "100px", height: "50px" },
    { id: 5, src: "https://spay.live/public/images/mastercard.png", alt: "brand-number-one-1", width: "100px", height: "50px" },
  ];

  return (
    <div className="font-sans overflow-x-hidden">
      {/* ----- SECTION 1: HERO ----- */}
      <div 
        className="relative bg-cover bg-top min-h-[350px] sm:min-h-[400px] md:min-h-[450px]"
        style={{ backgroundImage: "url('https://spay.live/public/images/bg_link2.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/1"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 h-full">
          <div className="flex flex-col md:flex-row min-h-[350px] sm:min-h-[400px] md:min-h-[450px] items-center">
            
            {/* Left column: text content */}
            <div className="w-full md:w-1/2 flex items-center justify-center py-6 sm:py-8 md:py-0">
              <div className="w-full max-w-[95%] sm:max-w-[90%] mx-auto text-center md:text-left">
                <h1 
                  className="mb-3 sm:mb-4" 
                  style={{ 
                    fontWeight: 'bold', 
                    color: 'darkblue', 
                    textShadow: '2px 2px 5px skyblue',
                    fontSize: 'clamp(2rem, 6vw, 3rem)',
                    lineHeight: '1.2',
                    fontFamily: "'Inter', 'Poppins', sans-serif",
                    letterSpacing: '-0.02em'
                  }}
                >
                  Secure Payment Links
                </h1>
                
                <p 
                  style={{ 
                    color: '#1e293b', 
                    fontSize: 'clamp(0.875rem, 3vw, 1.125rem)', 
                    fontWeight: 400, 
                    lineHeight: '1.6 sm:line-height-1.7',
                    marginBottom: '1.5rem',
                    fontFamily: "'Inter', 'Segoe UI', sans-serif",
                    maxWidth: '100% md:max-w-[90%]',
                    padding: '0 0.5rem sm:0'
                  }}
                >
                  Delays in payment can disrupt your cash flow, a common challenge for many businesses. With Spay, you can easily send payment links to your customers via SMS, messenger, email, chatbot, and more, facilitating instant payments.
                </p>
              </div>
            </div>
            
            {/* Right column: image */}
            <div className="w-full md:w-1/2 flex items-center justify-center py-6 sm:py-8 md:py-0">
              <div className="w-full max-w-[95%] sm:max-w-[90%] mx-auto text-center">
                <img 
                  src="https://spay.live/public/images/pg_link1.png" 
                  alt="payment link illustration"
                  className="w-4/5 sm:w-3/4 md:w-4/5 max-w-[500px] h-auto mx-auto"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/500x320?text=Payment+Link+Illustration";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----- LOGO SLIDER SECTION - FASTER SCROLLING (4s) ----- */}
      <div className="container mx-auto mt-8 sm:mt-12 md:mt-16 px-4 sm:px-6">
        <div className="slider-container relative overflow-hidden py-6 sm:py-8">
          <div className="slider-track flex">
            {/* First set */}
            {paymentMethods.map((method) => (
              <div key={method.id} className="slide flex-shrink-0 px-4 sm:px-6 md:px-8">
                <img 
                  src={method.src} 
                  alt={method.alt}
                  className="img-fluid financial-logo"
                  style={{ 
                    height: 'clamp(40px, 5vw, 60px)', 
                    width: 'clamp(80px, 10vw, 120px)',
                    objectFit: 'contain'
                  }}
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/120x60?text=" + method.alt;
                  }}
                />
              </div>
            ))}
            
            {/* Duplicate set */}
            {paymentMethods.map((method) => (
              <div key={`dup-${method.id}`} className="slide flex-shrink-0 px-4 sm:px-6 md:px-8">
                <img 
                  src={method.src} 
                  alt={method.alt}
                  className="img-fluid financial-logo"
                  style={{ 
                    height: 'clamp(40px, 5vw, 60px)', 
                    width: 'clamp(80px, 10vw, 120px)',
                    objectFit: 'contain'
                  }}
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/120x60?text=" + method.alt;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ----- FEATURES SECTION WITH COMPLETE CONTENT ----- */}
      <div 
        className="relative bg-cover bg-center py-12 sm:py-16 md:py-20 mt-8 sm:mt-10 md:mt-12"
        style={{ 
          backgroundImage: "url('https://spay.live/public/images/bg_link_2.webp')",
        }}
      >
        {/* Lighter overlay for better contrast */}
        <div className="absolute inset-0 bg-white/70"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4"
              style={{ 
                color: '#0a2540',
                fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                letterSpacing: '1px',
                lineHeight: '1.3',
                fontWeight: '800',
                paddingBottom: 'clamp(20px, 5vw, 48px)',
                paddingTop: 'clamp(15px, 4vw, 25px)',
                textTransform: 'none',
                textShadow: 'none',
                background: 'linear-gradient(135deg, #0a2540 0%, #1e3a8a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Maximize Your Experience with Spay Services
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-900 to-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            {/* FIRST CARD - Versatile Options, Privacy Protection, Multiple Payment Methods */}
            <div className="w-full lg:w-5/12 px-2 sm:px-4 mb-6 sm:mb-8">
              <div className="feature-card bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-blue-100 h-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900"></div>
                
                {/* Versatile Options - FULL CONTENT */}
                <div className="mb-6 sm:mb-8 md:mb-10">
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-2 sm:mb-3">
                    <div className="icon-container flex-shrink-0 mx-auto sm:mx-0">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <div className="text-center sm:text-left">
                      <h5 className="text-lg sm:text-xl font-bold text-blue-900 mb-1 sm:mb-2" style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}>
                        Versatile Options
                      </h5>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", lineHeight: '1.6 sm:1.7' }}>
                        Enjoy seamless transactions with just one click, allowing your customers to choose from a wide range of checkout options for their convenience.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Privacy Protection - FULL CONTENT */}
                <div className="mb-6 sm:mb-8 md:mb-10">
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-2 sm:mb-3">
                    <div className="icon-container flex-shrink-0 mx-auto sm:mx-0">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div className="text-center sm:text-left">
                      <h5 className="text-lg sm:text-xl font-bold text-blue-900 mb-1 sm:mb-2" style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}>
                        Privacy Protection
                      </h5>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", lineHeight: '1.6 sm:1.7' }}>
                        We prioritize the security of all transactions and customer data. Secure your transactions with a One-Time Password setup and share payment links that remain confidential between you and your customer.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Multiple Payment Methods - FULL CONTENT */}
                <div>
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-2 sm:mb-3">
                    <div className="icon-container flex-shrink-0 mx-auto sm:mx-0">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <div className="text-center sm:text-left">
                      <h5 className="text-lg sm:text-xl font-bold text-blue-900 mb-1 sm:mb-2" style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}>
                        Multiple Payment Methods
                      </h5>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", lineHeight: '1.6 sm:1.7' }}>
                        Complete transactions using any method you prefer, including UPI, net banking, credit/debit cards, and digital wallets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SECOND CARD - Quick Setup, Contactless Payments, Power Dashboard */}
            <div className="w-full lg:w-5/12 px-2 sm:px-4 mb-6 sm:mb-8">
              <div className="feature-card bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-blue-100 h-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900"></div>
                
                {/* Quick Setup - FULL CONTENT */}
                <div className="mb-6 sm:mb-8 md:mb-10">
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-2 sm:mb-3">
                    <div className="icon-container flex-shrink-0 mx-auto sm:mx-0">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="text-center sm:text-left">
                      <h5 className="text-lg sm:text-xl font-bold text-blue-900 mb-1 sm:mb-2" style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}>
                        Quick Setup
                      </h5>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", lineHeight: '1.6 sm:1.7' }}>
                        Our hosted services streamline the integration process, allowing you to customize your checkout page and payment links, thereby enhancing your brand's presence.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Contactless Payments - FULL CONTENT */}
                <div className="mb-6 sm:mb-8 md:mb-10">
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-2 sm:mb-3">
                    <div className="icon-container flex-shrink-0 mx-auto sm:mx-0">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="text-center sm:text-left">
                      <h5 className="text-lg sm:text-xl font-bold text-blue-900 mb-1 sm:mb-2" style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}>
                        Contactless Payments
                      </h5>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", lineHeight: '1.6 sm:1.7' }}>
                        Customers can make payments without needing to meet delivery agents, providing added safety and convenience.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Power Dashboard - FULL CONTENT */}
                <div>
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-2 sm:mb-3">
                    <div className="icon-container flex-shrink-0 mx-auto sm:mx-0">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className="text-center sm:text-left">
                      <h5 className="text-lg sm:text-xl font-bold text-blue-900 mb-1 sm:mb-2" style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}>
                        Power Dashboard
                      </h5>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", lineHeight: '1.6 sm:1.7' }}>
                        With our Competence Dashboard, you can effortlessly send notifications, create links, and perform various tasks without spending your precious time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----- CTA SECTION ----- */}
      <div className="relative py-2" style={{ minHeight: '80px sm:min-height-100px' }}>
        <img 
          src={lastbg} 
          alt="Security background"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_20%_10%,#1e3a8a_0%,transparent_45%),radial-gradient(800px_circle_at_80%_20%,#0f172a_0%,transparent_55%),linear-gradient(to_bottom,#020617,#00040f)] md:bg-[radial-gradient(1200px_circle_at_20%_10%,#1e3a8a_0%,transparent_45%),radial-gradient(1000px_circle_at_80%_20%,#0f172a_0%,transparent_55%),linear-gradient(to_bottom,#020617,#00040f)]"></div>
        
        <div className="relative container mx-auto px-4 text-center z-10 flex items-center justify-center" style={{ minHeight: '120px sm:min-height-150px' }}>
          <h2 
            className="fw-bold text-white px-4" 
            style={{ 
              lineHeight: '1.4',
              fontSize: 'clamp(1.5rem, 6vw, 2.5rem)',
              textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
              fontWeight: 700,
              fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
              letterSpacing: '-0.02em'
            }}
          >
            Your Security is Our Priority
          </h2>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        .slider-container {
          width: 100%;
          background: linear-gradient(90deg, transparent, rgba(10, 25, 41, 0.02), transparent);
        }
        
        .slider-track {
          display: flex;
          width: fit-content;
          animation: professional-scroll 4s linear infinite; 
        }
        
        .slide {
          flex-shrink: 0;
          transition: all 0.4s ease;
        }
        
        .financial-logo {
          transition: all 0.4s ease;
          opacity: 0.8;
        }
        
        .slide:hover .financial-logo {
          transform: translateY(-5px);
          opacity: 1;
        }
        
        @keyframes professional-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 2)); }
        }
        
        .slider-container:hover .slider-track {
          animation-play-state: paused;
        }

        /* Enhanced Card Styles */
        .feature-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
        }

        .feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 25px 35px -12px rgba(10, 25, 41, 0.2) !important;
        }

        /* Icon Styles */
        .icon-container {
          background: linear-gradient(135deg, #e6f0ff 0%, #d4e4ff 100%);
          padding: clamp(8px, 2vw, 12px);
          border-radius: 14px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 8px rgba(0, 40, 100, 0.08);
          min-width: clamp(40px, 8vw, 56px);
          height: clamp(40px, 8vw, 56px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-card:hover .icon-container {
          background: linear-gradient(135deg, #d4e4ff 0%, #c0d6ff 100%);
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(0, 40, 100, 0.12);
        }

        .icon-container svg {
          transition: transform 0.3s ease;
          width: clamp(20px, 4vw, 28px);
          height: clamp(20px, 4vw, 28px);
        }

        .feature-card:hover .icon-container svg {
          transform: scale(1.1);
          color: #0a1929;
        }

        /* Typography Improvements */
        .feature-card p {
          font-size: clamp(0.875rem, 2vw, 0.95rem);
          color: #334155;
          line-height: 1.6;
          letter-spacing: 0.01em;
          margin-bottom: 0;
        }

        .feature-card h5 {
          font-weight: 700;
          letter-spacing: -0.01em;
          margin-bottom: 0.5rem;
          font-size: clamp(1.1rem, 3vw, 1.25rem);
        }

        /* Consistent spacing between sections */
        .feature-card .mb-10:last-child {
          margin-bottom: 0;
        }

        /* Gradient overlays for slider */
        .slider-container::before,
        .slider-container::after {
          content: '';
          position: absolute;
          top: 0;
          width: clamp(50px, 10vw, 150px);
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .slider-container::before {
          left: 0;
          background: linear-gradient(90deg, white, transparent);
        }

        .slider-container::after {
          right: 0;
          background: linear-gradient(90deg, transparent, white);
        }

        /* Mobile-specific adjustments */
        @media (max-width: 640px) {
          .slider-track {
            animation: professional-scroll 3s linear infinite; /* Faster on mobile */
          }
          
          .feature-card {
            padding: 1.25rem;
          }
          
          .feature-card:hover {
            transform: translateY(-3px); /* Smaller hover effect on mobile */
          }
          
          .icon-container {
            margin-bottom: 0.5rem;
          }
        }

        /* Tablet-specific adjustments */
        @media (min-width: 641px) and (max-width: 1024px) {
          .feature-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PaymentLinks;