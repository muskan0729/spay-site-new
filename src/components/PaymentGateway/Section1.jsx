import React from "react";
import bgImage from "../../assets/images/bg4.webp";
import paymentGateway from "../../assets/images/paymentgateway.webp";
import { FaGlobe } from "react-icons/fa";

const Section1 = () => {
  return (
    <div className="bg-[#f2f7fa] relative overflow-hidden">
      {/* Background */}
      <div
        className="relative bg-cover bg-center min-h-[500px] flex items-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30"></div>

        <div className="relative container mx-auto py-24 px-4 flex flex-col md:flex-row items-center gap-12 z-10">
          {/* Left Column */}
          <div className="md:w-7/12 text-center md:text-start">
            <h1 className="text-[#13309c] text-3xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-md">
              A Cutting-Edge Payment Solution to Elevate Your Business Transactions
            </h1>
            <p className="text-gray-900 text-base md:text-lg leading-relaxed mb-10">
              Increase revenue while providing your customers with a seamless, secure, and elegant payment experience.
            </p>

            {/* Features Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Diverse Payment Options",
                "Multiple payment methods available",
                "Various e-commerce plugin integrations",
                "Secure & Reliable Transactions",
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300"
                >
                  <FaGlobe className="text-blue-600 text-xl mr-3 flex-shrink-0" />
                  <span className="text-gray-900 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-5/12 flex justify-center md:justify-end">
            <img
              src={paymentGateway}
              alt="Payment Gateway Feature"
              className="rounded-3xl shadow-2xl w-4/5 md:w-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
