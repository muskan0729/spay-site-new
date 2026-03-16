import React from "react";
import bgImage from "../../assets/images/pgbg8.webp";
import { FaGlobe, FaSyncAlt, FaChartLine } from "react-icons/fa";

const Section3 = () => {
  return (
    <section
      className="relative w-full flex items-center justify-center bg-center bg-cover py-12 md:py-16"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Softer Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/5"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl text-center p-6 sm:p-8 md:p-10">

          {/* Title (Smaller + Balanced) */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            Why Spay?
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Tired of searching for the perfect payment solution? Discover Spay and put an end to your quest.
            Our diverse range of services is tailored to meet your specific business needs.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center gap-3 group">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 shadow-sm group-hover:shadow-md transition">
                <FaGlobe className="text-blue-700 text-base" />
              </div>
              <p className="text-gray-800 text-sm font-medium leading-relaxed">
                Gain comprehensive insights into payment transactions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center gap-3 group">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 shadow-sm group-hover:shadow-md transition">
                <FaSyncAlt className="text-blue-700 text-base" />
              </div>
              <p className="text-gray-800 text-sm font-medium leading-relaxed">
                Enjoy real-time analysis and visibility at your fingertips.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center gap-3 group">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 shadow-sm group-hover:shadow-md transition">
                <FaChartLine className="text-blue-700 text-base" />
              </div>
              <p className="text-gray-800 text-sm font-medium leading-relaxed">
                Access detailed data breakdowns for effective revenue management.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;