import React from "react";
import bgImage from "../../assets/images/pgbg8.webp";
import { FaGlobe, FaSyncAlt, FaChartLine } from "react-icons/fa";

const Section3 = () => {
  return (
    <div
      className="relative min-h-[400px] flex flex-col items-center justify-center bg-center bg-cover py-24"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/10"></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 md:px-0 max-w-4xl text-center bg-white/70 rounded-3xl shadow-2xl backdrop-blur-md p-10">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-8 drop-shadow-sm">
          Why Spay?
        </h2>

        {/* Description */}
        <p className="text-gray-900 font-semibold text-lg md:text-xl mb-8 leading-relaxed">
          Tired of searching for the "perfect" payment solution? Discover Spay and put an end to your quest. 
          Our diverse range of services is tailored to meet your specific business needs.
        </p>

        {/* Features List */}
        <ul className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center">
          <li className="flex items-start md:items-center gap-3 text-gray-900 font-semibold hover:text-blue-600 transition-colors duration-300">
            <FaGlobe className="text-blue-600 text-2xl flex-shrink-0" />
            <span>Gain comprehensive insights into payment transactions.</span>
          </li>
          <li className="flex items-start md:items-center gap-3 text-gray-900 font-semibold hover:text-blue-600 transition-colors duration-300">
            <FaSyncAlt className="text-blue-600 text-2xl flex-shrink-0" />
            <span>Enjoy real-time analysis and visibility at your fingertips.</span>
          </li>
          <li className="flex items-start md:items-center gap-3 text-gray-900 font-semibold hover:text-blue-600 transition-colors duration-300">
            <FaChartLine className="text-blue-600 text-2xl flex-shrink-0" />
            <span>Access detailed data breakdowns for effective revenue management.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Section3;
