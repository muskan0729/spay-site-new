import React from "react";
import bgImage from "../../assets/images/bg4.webp";
import paymentGateway from "../../assets/images/paymentgateway.webp";
import { FaGlobe } from "react-icons/fa";

const Section1 = () => {
  return (
    <section className="relative overflow-hidden bg-[#f4f8fc]">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 py-14 md:py-20 flex flex-col md:flex-row items-center gap-10">
        
        {/* LEFT CONTENT */}
        <div className="w-full md:w-7/12 text-center md:text-left">
          
          {/* Smaller Heading */}
          <h1 className="text-xl sm:text-3xl md:text-3xl lg:text-3xl font-extrabold text-[#0f2c8a] leading-tight mb-4">
            A Cutting-Edge Payment Solution to Elevate Your Business Transactions
          </h1>

          {/* Smaller Paragraph */}
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-xl mx-auto md:mx-0 mb-8">
            Increase revenue while providing your customers with a seamless,
            secure, and elegant payment experience.
          </p>

          {/* Compact Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Diverse Payment Options",
              "Multiple payment methods available",
              "Various e-commerce plugin integrations",
              "Secure & Reliable Transactions",
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-center bg-white/90 rounded-xl shadow-md 
                hover:shadow-lg p-3 sm:p-4 transition-all duration-300"
              >
                <div className="w-8 h-8 flex items-center justify-center 
                rounded-lg bg-blue-100 mr-3">
                  <FaGlobe className="text-blue-700 text-sm" />
                </div>

                <span className="text-gray-800 font-medium text-sm">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE (Smaller) */}
        <div className="w-full md:w-5/12 flex justify-center md:justify-end">
          <img
            src={paymentGateway}
            alt="Payment Gateway Feature"
            className="rounded-2xl shadow-xl w-4/5 md:w-[90%] lg:w-[85%] transition duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;