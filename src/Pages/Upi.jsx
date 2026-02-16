import React, { useState } from "react";

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

  const handleCardClick = (card) => {
    setFlippedCards(prev => ({
      ...prev,
      [card]: !prev[card]
    }));
  };

  return (
    <main className="font-['Inter',_'Poppins',_system-ui,_-apple-system,_sans-serif]">
      {/* Hero / First Section with Background Image */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url(${upiBgImage})`,
        }}
      >
        {/* White overlay */}
        <div className="absolute inset-0 bg-white/1"></div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight"
                  style={{ color: '#00008b' }}>
                What is a UPI QR Code?
              </h1>
              
                <p className="text-[17px] font-medium leading-[30px] text-black max-w-[720px] mx-auto tracking-wide">
  A UPI QR Code allows your customers to make payments quickly and easily.
  Experience seamless payments for all your needs. In a world dominated by QR
  codes, Spay ensures you stay ahead of the curve. Create your own Static QR
  and Dynamic QR code with Spay and offer your customers multiple scanning
  options.
</p>

            </div>

            {/* Right Column - QR Scanner Image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <img 
                  src={qrScannerImage} 
                  alt="QR Code Scanner" 
                  className="w-64 h-64 md:w-72 md:h-72 object-contain"
                  style={{ display: 'block', margin: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Flipping Cards for Static QR, Dynamic QR, Autopay */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap items-stretch justify-center gap-20">
          
          {/* Static QR Code Flipping Card */}
          <div 
            className="relative w-64 h-80 cursor-pointer"
            onClick={() => handleCardClick('static')}
            onMouseEnter={() => handleCardClick('static')}
            onMouseLeave={() => handleCardClick('static')}
          >
            <div 
              className={`absolute w-full h-full transition-all duration-500 transform preserve-3d ${flippedCards.static ? 'rotate-y-180' : ''}`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front of card */}
              <div 
                className="absolute w-full h-full backface-hidden rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center"
                style={{ 
                  backgroundColor: 'white',
                  backfaceVisibility: 'hidden',
                  border: '1px solid #e5e7eb'
                }}
              >
                <div style={{ color: '#00008b' }}>
                  <svg
                    className="w-24 h-24 mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                  >
                    <path d="M0 80C0 53.5 21.5 32 48 32l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48L0 80zM64 96l0 64 64 0 0-64L64 96zM0 336c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96zm64 16l0 64 64 0 0-64-64 0zM304 32l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm80 64l-64 0 0 64 64 0 0-64zM256 304c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16l0 96c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-160zM368 480a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 0a16 16 0 1 1 0-32 16 16 0 1 1 0 32z"/>
                  </svg>
                </div>
                <span className="text-2xl font-semibold" style={{ color: '#00008b' }}>
                  Static QR Code
                </span>
                
              </div>
              
              {/* Back of card */}
              <div 
                className="absolute w-full h-full backface-hidden rounded-2xl shadow-lg p-6 flex items-center justify-center text-center"
                style={{ 
                  backgroundColor: '#00008b',
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  color: 'white'
                }}
              >
                <p className="text-lg">
                  Generate your unique QR codes in seconds and print them for display anywhere.
                </p>
              </div>
            </div>
          </div>

          {/* Dynamic QR Code Flipping Card */}
          <div 
            className="relative w-64 h-80 cursor-pointer"
            onClick={() => handleCardClick('dynamic')}
            onMouseEnter={() => handleCardClick('dynamic')}
            onMouseLeave={() => handleCardClick('dynamic')}
          >
            <div 
              className={`absolute w-full h-full transition-all duration-500 transform preserve-3d ${flippedCards.dynamic ? 'rotate-y-180' : ''}`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front of card */}
              <div 
                className="absolute w-full h-full backface-hidden rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center"
                style={{ 
                  backgroundColor: 'white',
                  backfaceVisibility: 'hidden',
                  border: '1px solid #e5e7eb'
                }}
              >
                <div style={{ color: '#00008b' }}>
                  <svg
                    className="w-24 h-24 mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M142.9 142.9c-17.5 17.5-30.1 38-37.8 59.8c-5.9 16.7-24.2 25.4-40.8 19.5s-25.4-24.2-19.5-40.8C55.6 150.7 73.2 122 97.6 97.6c87.2-87.2 228.3-87.5 315.8-1L455 55c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2l0 128c0 13.3-10.7 24-24 24l-8.4 0L344 224c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l41.1-41.1c-62.6-61.5-163.1-61.2-225.3 1zM16 312c0-13.3 10.7-24 24-24l168 0c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-41.1 41.1c62.6 61.5 163.1 61.2 225.3-1c17.5-17.5 30.1-38 37.8-59.8c5.9-16.7 24.2-25.4 40.8-19.5s25.4 24.2 19.5 40.8c-10.8 30.6-28.4 59.3-52.9 83.8c-87.2 87.2-228.3 87.5-315.8 1L57 457c-6.9 6.9-17.2 8.9-26.2 5.2S16 449.7 16 440l0-128z"/>
                  </svg>
                </div>
                <span className="text-2xl font-semibold" style={{ color: '#00008b' }}>
                  Dynamic QR Code
                </span>
                
              </div>
              
              {/* Back of card */}
              <div 
                className="absolute w-full h-full backface-hidden rounded-2xl shadow-lg p-6 flex items-center justify-center text-center"
                style={{ 
                  backgroundColor: '#00008b',
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  color: 'white'
                }}
              >
                <p className="text-lg">
                  Make a Dynamic QR Code, you can update without needing to print again.
                </p>
              </div>
            </div>
          </div>

          {/* Autopay Flipping Card */}
          <div 
            className="relative w-64 h-80 cursor-pointer"
            onClick={() => handleCardClick('autopay')}
            onMouseEnter={() => handleCardClick('autopay')}
            onMouseLeave={() => handleCardClick('autopay')}
          >
            <div 
              className={`absolute w-full h-full transition-all duration-500 transform preserve-3d ${flippedCards.autopay ? 'rotate-y-180' : ''}`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front of card */}
              <div 
                className="absolute w-full h-full backface-hidden rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center"
                style={{ 
                  backgroundColor: 'white',
                  backfaceVisibility: 'hidden',
                  border: '1px solid #e5e7eb'
                }}
              >
                <div style={{ color: '#00008b' }}>
                  <svg
                    className="w-24 h-24 mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    fill="currentColor"
                  >
                    <path d="M64 32C28.7 32 0 60.7 0 96l0 32 576 0 0-32c0-35.3-28.7-64-64-64L64 32zM576 224L0 224 0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192zM112 352l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"/>
                  </svg>
                </div>
                <span className="text-2xl font-semibold" style={{ color: '#00008b' }}>
                  Autopay
                </span>
                
              </div>
              
              {/* Back of card */}
              <div 
                className="absolute w-full h-full backface-hidden rounded-2xl shadow-lg p-6 flex items-center justify-center text-center"
                style={{ 
                  backgroundColor: '#00008b',
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  color: 'white'
                }}
              >
                <p className="text-lg">
                  UPI Autopay enables secure, instant recurring payments with easy payee management.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 3: Discover UPI Payments with Video and Info Cards */}
      <section className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
        {/* Discover UPI Payments Heading */}
        <div 
          className="text-center w-full"
          style={{ 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            padding: '25px 70px',
            overflow: 'hidden'
          }}
        >
          <h2 
            className="font-bold"
            style={{ 
              color: 'darkblue',
              fontSize: '2.25rem'
            }}
          >
            Discover UPI Payments
          </h2>
        </div>

        {/* Main Container */}
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            
            {/* Left Column - Video/Flyer */}
            <div className="w-full md:w-1/2 px-3">
              <div 
                className="overflow-hidden"
                style={{ 
                  maxWidth: '90%', 
                  height: 'auto', 
                  borderRadius: '12px', 
                  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                  marginTop: '20px',
                  margin: 'auto'
                }}
              >
                <video 
                  className="w-full h-auto"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ display: 'block', margin: 'auto' }}
                >
                  <source src={qrFlyerVideo} type="video/mp4" />
                  <div style={{ textAlign: 'center', padding: '20px' }}>
                    <a 
                      href="https://spay.live/public/images/White%20Red%20Modern%20Scan%20The%20QR%20Code%20Flyer_(2).mp4" 
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://spay.live/public/images/White%20Red%20Modern%20Scan%20The%20QR%20Code%20Flyer_(2).mp4';
                      }}
                      style={{ color: '#1759d7', textDecoration: 'underline' }}
                    >
                      Your browser does not support the video tag. Click here to view.
                    </a>
                  </div>
                </video>
              </div>
            </div>

            {/* Right Column - Content Section */}
            <div 
              className="w-full md:w-1/2 px-3"
              style={{ textAlign: 'center' }}
            >
              <h4 
                className="font-bold mb-[15px] mt-[2px]"
                style={{ 
                  color: '#333', 
                  fontSize: '1.8rem'
                }}
              >
                How UPI Works for Customers
              </h4>
              
              <h5 
                className="mb-3 font-medium"
                style={{ 
                  color: '#1759d7', 
                  fontSize: '1.5rem',
                  fontWeight: 500
                }}
              >
                Instant Settlements:
              </h5>
              
              <p 
                className="mb-4"
                style={{ 
                  color: '#333', 
                  fontSize: '1.2rem',
                  lineHeight: '1.6'
                }}
              >
                With timely settlements, customers can enjoy seamless person-to-person
                transactions, ensuring that funds are transferred directly to your account
                without delay.
              </p>
              
              <h5 
                className="mb-3 font-medium"
                style={{ 
                  color: '#1759d7', 
                  fontSize: '1.5rem',
                  fontWeight: 500
                }}
              >
                Higher Success Rates:
              </h5>
              
              <p 
                className="mb-4"
                style={{ 
                  color: '#333', 
                  fontSize: '1.2rem',
                  lineHeight: '1.6'
                }}
              >
                UPI payments operate on a server-to-server basis, eliminating the need for
                redirects. This results in significantly higher transaction success rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Pricing Structure */}
      <section 
        className="w-full overflow-hidden"
        style={{ 
          backgroundImage: `url(${herobgImage})`,
          border: '2px solid white',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          padding: '50px 0'
        }}
      >
        <div className="container mx-auto px-4">
          {/* Heading Section */}
          <div className="text-center px-4 sm:px-6 lg:px-8" style={{ padding: '20px' }}>
            <h2 
              className="font-bold"
              style={{ 
                color: 'darkblue',
                fontSize: '2.25rem',
                marginBottom: '0.5rem'
              }}
            >
              Get Started with Our Business Pricing Structure
            </h2>
            <p 
              style={{ 
                fontWeight: 400,
                fontSize: '1.4rem',
                color: '#000000',
                marginTop: '10px',
                maxWidth: '800px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              We cater to all types of businesses, regardless of budget constraints. 
              Rest assured, our service quality remains high, no matter which plan you select.
            </p>
          </div>

          {/* Row with Image and Content */}
          <div className="flex flex-wrap items-center" style={{ marginTop: '30px' }}>
            
            {/* Image Section - Left Column */}
            <div className="w-full md:w-1/2 flex items-center justify-center" style={{ marginBottom: '2rem' }}>
              <img 
                src={autopayImage} 
                alt="56Pay Services" 
                style={{ 
                  maxWidth: '400px', 
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  transition: 'transform 0.8s ease-in-out, box-shadow 0.8s',
                  display: 'block',
                  margin: 'auto'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Content Section - Right Column */}
            <div className="w-full md:w-1/2 px-4">
              <h4 
                className="font-medium mb-3"
                style={{ 
                  color: '#1759d7', 
                  fontSize: '1.4rem',
                  fontWeight: 500
                }}
              >
                Transparent Pricing:
              </h4>
              
              <ul 
                className="space-y-2"
                style={{ 
                  listStyle: 'square', 
                  marginLeft: '1.5rem', 
                  color: '#000', 
                  fontSize: '1.4rem',
                  marginBottom: '1.5rem'
                }}
              >
                <li style={{ color: '#000' }}>No hidden fees.</li>
                <li style={{ color: '#000' }}>No maintenance charges.</li>
              </ul>
              
              <p 
                style={{ 
                  color: '#333', 
                  fontSize: '1.4rem',
                  padding: '0 50px',
                  lineHeight: '1.6'
                }}
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
      `}</style>
    </main>
  );
};

export default Upi;