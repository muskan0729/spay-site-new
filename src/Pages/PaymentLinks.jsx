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
    <div className="font-sans">
      {/* ----- SECTION 1: HERO ----- */}
      <div 
        className="relative bg-cover bg-top min-h-[450px]"
        style={{ backgroundImage: "url('https://spay.live/public/images/bg_link2.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/1"></div>
        
        <div className="relative container mx-auto px-4 h-full">
          <div className="flex flex-col md:flex-row min-h-[450px] items-center">
            
            {/* Left column: text content */}
            <div className="w-full md:w-1/2 flex items-center justify-center py-8 md:py-0">
              <div className="w-full max-w-[90%] mx-auto text-center md:text-left">
                <h1 
                  className="mb-4" 
                  style={{ 
                    fontWeight: 'bold', 
                    color: 'darkblue', 
                    textShadow: '2px 2px 5px skyblue',
                    fontSize: '3rem',
                    lineHeight: '1.5'
                  }}
                >
                  Secure Payment Links
                </h1>
                
                <p 
                  style={{ 
                    color: 'black', 
                    fontSize: '20px', 
                    fontWeight: 500, 
                    lineHeight: '2.2',
                    marginBottom: '1.5rem'
                  }}
                >
                  Delays in payment can disrupt your cash flow, a common challenge for many businesses. With Spay, you can easily send payment links to your customers via SMS, messenger, email, chatbot, and more, facilitating instant payments.
                </p>
                
                {/* BUTTONS REMOVED - as per your requirement */}
                
              </div>
            </div>
            
            {/* Right column: image */}
            <div className="w-full md:w-1/2 flex items-center justify-center py-8 md:py-0">
              <div className="w-full max-w-[90%] mx-auto text-center">
                <img 
                  src="https://spay.live/public/images/pg_link1.png" 
                  alt="payment link illustration"
                  className="w-4/5 max-w-[500px] h-auto mx-auto"
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

      {/* ----- LOGO SLIDER SECTION ----- */}
      <div className="container mx-auto mt-16 px-4">
        {/* HEADING REMOVED - as per your original code */}
        
        <div className="slider position-relative overflow-hidden">
          <div className="slide-track d-flex">
            {/* Original Content - First Set */}
            {paymentMethods.map((method) => (
              <div key={method.id} className="slide flex-shrink-0 ps-1">
                <img 
                  src={method.src} 
                  alt={method.alt}
                  className="img-fluid"
                  style={{ 
                    height: method.height || '50px', 
                    width: method.width || '100px',
                    objectFit: 'contain'
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/100x50?text=" + method.alt;
                  }}
                />
              </div>
            ))}
            
            {/* Duplicate Content - Second Set */}
            {paymentMethods.map((method) => (
              <div key={`dup-${method.id}`} className="slide flex-shrink-0 ps-1">
                <img 
                  src={method.src} 
                  alt={method.alt}
                  className="img-fluid"
                  style={{ 
                    height: method.height || '50px', 
                    width: method.width || '100px',
                    objectFit: 'contain'
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/100x50?text=" + method.alt;
                  }}
                />
              </div>
            ))}
            
            {/* Third Set */}
            {paymentMethods.map((method) => (
              <div key={`third-${method.id}`} className="slide flex-shrink-0 ps-1">
                <img 
                  src={method.src} 
                  alt={method.alt}
                  className="img-fluid"
                  style={{ 
                    height: method.height || '50px', 
                    width: method.width || '100px',
                    objectFit: 'contain'
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/100x50?text=" + method.alt;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ----- FEATURES SECTION WITH BG_LINK2 BACKGROUND ----- */}
      <div 
        className="relative bg-cover bg-center py-20 mt-12"
        style={{ 
          backgroundImage: "url('https://spay.live/public/images/bg_link_2.webp')",
        }}
      >
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-white/60"></div>
        
        <div className="relative container mx-auto px-4 z-10">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4 "
              style={{ 
                color: '#00008b',
                //textShadow: '2px 2px 5px skyblue'
              }}
            >
              Maximize Your Experience with Spay Services
            </h2>
            
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {/* FIRST CARD - Versatile Options, Privacy Protection, Multiple Payment Methods */}
            <div className="w-full md:w-1/2 lg:w-5/12 px-4 mb-8 card-container">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-10 border border-gray-100 h-full card">
                <h5 className="text-2xl text-center font-bold mb-4 text-[#0d6efd]">Versatile Options</h5>
                <p className="text-gray-800 leading-relaxed mb-8 text-xl">
                  Enjoy seamless transactions with just one click, allowing your customers to choose from a wide range of checkout options for their convenience.
                </p>
                
                <div className="border-t border-gray-200 my-6"></div>
                
                <h5 className="text-2xl text-center font-bold mb-4 text-[#0d6efd]">Privacy Protection</h5>
                <p className="text-gray-800 leading-relaxed mb-8 text-xl">
                  We prioritize the security of all transactions and customer data. Secure your transactions with a One-Time Password setup and share payment links that remain confidential between you and your customer.
                </p>
                
                <div className="border-t border-gray-200 my-6"></div>
                
                <h5 className="text-2xl text-center font-bold mb-4 text-[#0d6efd]">Multiple Payment Methods</h5>
                <p className="text-gray-800 leading-relaxed mb-8 text-xl">
                  Complete transactions using any method you prefer, including UPI, net banking, credit/debit cards, and digital wallets.
                </p>
              </div>
            </div>

            {/* SECOND CARD - Quick Setup, Contactless Payments, Power Dashboard */}
            <div className="w-full md:w-1/2 lg:w-5/12 px-4 mb-8 card-container">
              <div className="bg-white-100/95 backdrop-blur-sm rounded-xl shadow-xl p-10 border border-gray-100 h-full card">
                <h5 className="text-2xl text-center font-bold mb-4 text-[#0d6efd]">Quick Setup</h5>
                <p className="text-gray-800 leading-relaxed mb-8 text-xl">
                  Our hosted services streamline the integration process, allowing you to customize your checkout page and payment links, thereby enhancing your brand's presence.
                </p>
                
                <div className="border-t border-gray-300 my-6"></div>
                
                <h5 className="text-2xl text-center font-bold mb-4 text-[#0d6efd]">Contactless Payments</h5>
                <p className="text-gray-800 leading-relaxed mb-8 text-xl">
                  Customers can make payments without needing to meet delivery agents, providing added safety and convenience.
                </p>
                
                <div className="border-t border-gray-300 my-6"></div>
                
                <h5 className="text-2xl text-center font-bold mb-4 text-[#0d6efd]">Power Dashboard</h5>
                <p className="text-gray-800 leading-relaxed mb-8 text-xl">
                  With our Competence Dashboard, you can effortlessly send notifications, create links, and perform various tasks without spending your precious time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----- CTA SECTION WITH LASTBG - USING IMG TAG ----- */}
      <div className="relative py-2" style={{ minHeight: '100px' }}>
        {/* Background Image as img tag */}
        <img 
          src={lastbg} 
          alt="Security background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative container mx-auto px-4 text-center z-10 flex items-center justify-center" style={{ minHeight: '150px' }}>
          <h2 
            className="fw-bold text-white" 
            style={{ 
              lineHeight: '1.5',
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
              fontWeight: 700
            }}
          >
            Your Security is Our Priority
          </h2>
        </div>
      </div>

      {/* Custom CSS for slider and card animations */}
      <style jsx>{`
        .slider {
          position: relative;
          overflow: hidden;
          width: 100%;
        }
        
        .slide-track {
          display: flex;
          width: fit-content;
          animation: scroll 2s linear infinite;
        }
        
        .slide {
          flex-shrink: 0;
          padding-left: 4px;
        }
        
        .slide img {
          height: 50px;
          width: 100px;
          object-fit: contain;
          box-sizing: border-box;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        
        .slider:hover .slide-track {
          animation-play-state: paused;
        }

        /* Card Up and Down Animation on Hover - Enhanced */
        .card-container {
          perspective: 1000px;
        }

        .card {
          transition: all 0.4s ease-in-out;
          animation: float 5s ease-in-out infinite;
        }

        .card:hover {
          animation: none;
          transform: translateY(-30px);
          box-shadow: 0 25px 35px rgba(0, 0, 0, 0.2) !important;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
};

export default PaymentLinks;