import React from "react";
import bgImage from "../../assets/images/bg4.webp";
import paymentGatewayImg from "../../assets/images/paymentgateway.webp";

const Section1 = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left - Text */}
        <div className="order-2 lg:order-1">
          <span className="inline-block text-sm uppercase tracking-wider text-blue-600 font-semibold mb-3">
            Secure • Fast • Reliable
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Next-Gen Payment Gateway
            <span className="block text-blue-600 mt-2">for Growing Businesses</span>
          </h1>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
            Boost revenue and delight your customers with seamless, secure, and lightning-fast payment experiences — built for startups, SMEs, and enterprises alike.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-7 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300">
              Get Started Free
            </button>
            <button className="px-7 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300">
              Watch Demo
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm sm:text-base">
            <div className="flex items-center gap-3">
              <i className="fas fa-globe text-blue-600 text-xl"></i>
              <span>100+ Payment Methods</span>
            </div>
            <div className="flex items-center gap-3">
              <i className="fas fa-plug text-blue-600 text-xl"></i>
              <span>Easy Plugin Integration</span>
            </div>
            <div className="flex items-center gap-3">
              <i className="fas fa-shield-alt text-blue-600 text-xl"></i>
              <span>PCI DSS Compliant</span>
            </div>
          </div>
        </div>

        {/* Right - Image */}
        <div className="order-1 lg:order-2 relative">
          <div className="absolute -inset-4 sm:-inset-6 bg-blue-500 rounded-3xl opacity-10 blur-xl"></div>
          <div className="relative bg-white/70 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-2xl p-4 border border-white/40">
            <img
              src={paymentGatewayImg}
              alt="Payment Gateway Interface"
              className="rounded-xl w-full object-cover shadow-inner"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;