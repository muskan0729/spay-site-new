import React, { useState, useEffect } from "react";

// Import images
import upiBgImage from '../assets/images/upi bg.webp'
import qrScannerImage from '../assets/images/qr-codee.webp'
import qrFlyerVideo from '../assets/images/White Red Modern Scan The QR Code Flyer (2).mp4'
import autopayImage from '../assets/images/autopay7 (1).webp'
import herobgImage from '../assets/images/hero-bg.webp'

const Upi = () => {
  const [flippedCards, setFlippedCards] = useState({
    static: false,
    dynamic: false,
    autopay: false
  });
  
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardClick = (card) => {
    setFlippedCards(prev => ({
      ...prev,
      [card]: !prev[card]
    }));
  };

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  return (
    <main className="font-['Inter',_'Poppins',_system-ui,_-apple-system,_sans-serif] overflow-x-hidden">
      {/* Hero / First Section with Background Image */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat overflow-hidden min-h-[60vh] md:min-h-[70vh] flex items-center"
        style={{
          backgroundImage: `url(${upiBgImage})`,
        }}
      >
        {/* White overlay */}
        <div className="absolute inset-0 bg-white/70 md:bg-white/50"></div>
        
        {/* Content */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center md:text-left order-2 md:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight"
                  style={{ color: '#00008b' }}>
                What is a UPI QR Code?
              </h1>
              
              <p className="text-base sm:text-lg md:text-[17px] font-medium leading-relaxed md:leading-[30px] text-black max-w-3xl mx-auto md:mx-0 px-4 md:px-0 tracking-wide">
                A UPI QR Code allows your customers to make payments quickly and easily.
                Experience seamless payments for all your needs. In a world dominated by QR
                codes, Spay ensures you stay ahead of the curve. Create your own Static QR
                and Dynamic QR code with Spay and offer your customers multiple scanning
                options.
              </p>
            </div>

            {/* Right Column - QR Scanner Image */}
            <div className="flex justify-center md:justify-end order-1 md:order-2">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
                <img 
                  src={qrScannerImage} 
                  alt="QR Code Scanner" 
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Flipping Cards for Static QR, Dynamic QR, Autopay */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Static QR Code Card */}
          <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-900"></div>
            <div className="p-6 sm:p-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0">
                <svg className="w-8 h-8 sm:w-12 sm:h-12 text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M0 80C0 53.5 21.5 32 48 32l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48L0 80zM64 96l0 64 64 0 0-64L64 96zM0 336c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96zm64 16l0 64 64 0 0-64-64 0zM304 32l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm80 64l-64 0 0 64 64 0 0-64zM256 304c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16l0 96c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-160zM368 480a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 0a16 16 0 1 1 0-32 16 16 0 1 1 0 32z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2 sm:mb-3 text-center sm:text-left">Static QR Code</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed sm:leading-relaxed text-center sm:text-left">
                Generate your unique QR codes in seconds and print them for display anywhere.
              </p>
              <div className="mt-4 sm:mt-6 flex items-center text-blue-900 font-semibold group-hover:translate-x-2 transition-transform justify-center sm:justify-start">
                Learn More 
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Dynamic QR Code Card */}
          <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-900"></div>
            <div className="p-6 sm:p-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0">
                <svg className="w-8 h-8 sm:w-12 sm:h-12 text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M142.9 142.9c-17.5 17.5-30.1 38-37.8 59.8c-5.9 16.7-24.2 25.4-40.8 19.5s-25.4-24.2-19.5-40.8C55.6 150.7 73.2 122 97.6 97.6c87.2-87.2 228.3-87.5 315.8-1L455 55c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2l0 128c0 13.3-10.7 24-24 24l-8.4 0L344 224c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l41.1-41.1c-62.6-61.5-163.1-61.2-225.3 1zM16 312c0-13.3 10.7-24 24-24l168 0c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-41.1 41.1c62.6 61.5 163.1 61.2 225.3-1c17.5-17.5 30.1-38 37.8-59.8c5.9-16.7 24.2-25.4 40.8-19.5s25.4 24.2 19.5 40.8c-10.8 30.6-28.4 59.3-52.9 83.8c-87.2 87.2-228.3 87.5-315.8 1L57 457c-6.9 6.9-17.2 8.9-26.2 5.2S16 449.7 16 440l0-128z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2 sm:mb-3 text-center sm:text-left">Dynamic QR Code</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed sm:leading-relaxed text-center sm:text-left">
                Make a Dynamic QR Code, you can update without needing to print again.
              </p>
              <div className="mt-4 sm:mt-6 flex items-center text-blue-900 font-semibold group-hover:translate-x-2 transition-transform justify-center sm:justify-start">
                Learn More 
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Autopay Card */}
          <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-900"></div>
            <div className="p-6 sm:p-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0">
                <svg className="w-8 h-8 sm:w-12 sm:h-12 text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
                  <path d="M64 32C28.7 32 0 60.7 0 96l0 32 576 0 0-32c0-35.3-28.7-64-64-64L64 32zM576 224L0 224 0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192zM112 352l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2 sm:mb-3 text-center sm:text-left">Autopay</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed sm:leading-relaxed text-center sm:text-left">
                UPI Autopay enables secure, instant recurring payments with easy payee management.
              </p>
              <div className="mt-4 sm:mt-6 flex items-center text-blue-900 font-semibold group-hover:translate-x-2 transition-transform justify-center sm:justify-start">
                Learn More 
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Discover UPI Payments with Video and Info Cards */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Discover UPI Payments Heading */}
        <div className="text-center w-full mb-8 md:mb-12">
          <h2 
            className="font-bold text-3xl sm:text-4xl md:text-5xl"
            style={{ color: 'darkblue' }}
          >
            Discover UPI Payments
          </h2>
        </div>

        {/* Main Container */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* Left Column - Video/Flyer */}
          <div className="w-full md:w-1/2">
            <div className="overflow-hidden rounded-2xl shadow-2xl max-w-2xl mx-auto">
              <video 
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
                controls={isMobile}
              >
                <source src={qrFlyerVideo} type="video/mp4" />
                <div className="text-center p-4 sm:p-6">
                  <a 
                    href="https://spay.live/public/images/White%20Red%20Modern%20Scan%20The%20QR%20Code%20Flyer_(2).mp4" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline text-sm sm:text-base"
                  >
                    Your browser does not support the video tag. Click here to view.
                  </a>
                </div>
              </video>
            </div>
          </div>

          {/* Right Column - Content Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h4 
              className="font-bold mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl"
              style={{ color: '#333' }}
            >
              How UPI Works for Customers
            </h4>
            
            <h5 
              className="mb-2 sm:mb-3 font-medium text-xl sm:text-2xl md:text-3xl"
              style={{ color: '#1759d7' }}
            >
              Instant Settlements:
            </h5>
            
            <p 
              className="mb-4 sm:mb-6 text-base sm:text-lg md:text-xl leading-relaxed"
              style={{ color: '#333' }}
            >
              With timely settlements, customers can enjoy seamless person-to-person
              transactions, ensuring that funds are transferred directly to your account
              without delay.
            </p>
            
            <h5 
              className="mb-2 sm:mb-3 font-medium text-xl sm:text-2xl md:text-3xl"
              style={{ color: '#1759d7' }}
            >
              Higher Success Rates:
            </h5>
            
            <p 
              className="text-base sm:text-lg md:text-xl leading-relaxed"
              style={{ color: '#333' }}
            >
              UPI payments operate on a server-to-server basis, eliminating the need for
              redirects. This results in significantly higher transaction success rates.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Pricing Structure */}
      <section 
        className="w-full"
        style={{ 
          backgroundImage: `url(${herobgImage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          {/* Heading Section */}
          <div className="text-center mb-8 md:mb-12">
            <h2 
              className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4"
              style={{ color: 'darkblue' }}
            >
              Get Started with Our Business Pricing Structure
            </h2>
            <p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto px-4 leading-relaxed"
              style={{ color: '#000000' }}
            >
              We cater to all types of businesses, regardless of budget constraints. 
              Rest assured, our service quality remains high, no matter which plan you select.
            </p>
          </div>

          {/* Row with Image and Content */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            {/* Image Section - Left Column */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="max-w-md w-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-xl overflow-hidden">
                <img 
                  src={autopayImage} 
                  alt="56Pay Services" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content Section - Right Column */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h4 
                className="font-medium mb-3 text-xl sm:text-2xl md:text-3xl"
                style={{ color: '#1759d7' }}
              >
                Transparent Pricing:
              </h4>
              
              <ul 
                className="space-y-2 mb-4 sm:mb-6 text-base sm:text-lg md:text-xl list-disc list-inside md:list-outside"
                style={{ color: '#000' }}
              >
                <li className="py-1">No hidden fees.</li>
                <li className="py-1">No maintenance charges.</li>
              </ul>
              
              <p 
                className="text-base sm:text-lg md:text-xl leading-relaxed"
                style={{ color: '#333' }}
              >
                If you're uncertain about which plan best fits your business needs, 
                our technical team is always available to assist you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        @media (max-width: 640px) {
          .group:hover {
            transform: none;
          }
        }
      `}</style>
    </main>
  );
};

export default Upi;