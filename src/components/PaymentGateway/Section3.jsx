import React from "react";
import bgImage from "../../assets/images/pgbg8.webp";
import { FaGlobe, FaSyncAlt, FaChartLine } from "react-icons/fa";

const Section3 = () => {
  return (
    <div
      className="relative w-full flex items-center justify-center bg-center bg-cover py-16 sm:py-20 md:py-24"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl text-center p-8 sm:p-10 md:p-14">

          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-900 mb-6 sm:mb-8">
            Why Spay?
          </h2>

          {/* Description */}
          <p className="text-gray-900 font-medium text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10">
            Tired of searching for the "perfect" payment solution? Discover Spay and put an end to your quest.
            Our diverse range of services is tailored to meet your specific business needs.
          </p>

          {/* Features List */}
          <ul className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-start md:items-center">
            
            <li className="flex gap-3 text-gray-900 font-medium hover:text-blue-600 transition-colors duration-300 text-left md:text-center max-w-xs">
              <FaGlobe className="text-blue-600 text-2xl mt-1 md:mt-0 flex-shrink-0" />
              <span>
                Gain comprehensive insights into payment transactions.
              </span>
            </li>

            <li className="flex gap-3 text-gray-900 font-medium hover:text-blue-600 transition-colors duration-300 text-left md:text-center max-w-xs">
              <FaSyncAlt className="text-blue-600 text-2xl mt-1 md:mt-0 flex-shrink-0" />
              <span>
                Enjoy real-time analysis and visibility at your fingertips.
              </span>
            </li>

            <li className="flex gap-3 text-gray-900 font-medium hover:text-blue-600 transition-colors duration-300 text-left md:text-center max-w-xs">
              <FaChartLine className="text-blue-600 text-2xl mt-1 md:mt-0 flex-shrink-0" />
              <span>
                Access detailed data breakdowns for effective revenue management.
              </span>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section3;
