import React from "react";
import bgImage from "../../assets/images/key.webp";
import featuresImage from "../../assets/images/pg_features.jpg";

const Section4 = () => {
  return (
    <section className="relative mt-10">
      {/* Background */}
      <div
        className="bg-center bg-cover relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80"></div>

        <div className="container mx-auto px-4 relative z-10 py-16">
          {/* Section Title */}
          <h2 className="text-center text-3xl md:text-4xl font-extrabold text-blue-900 mb-12 drop-shadow-sm">
            Key Features
          </h2>

          {/* Content Row */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* Left Column - Image */}
            <div className="md:w-5/12 flex justify-center relative">
              <img
                src={featuresImage}
                alt="Payment Gateway Feature"
                className="rounded-3xl shadow-2xl w-80 h-80 md:w-[400px] md:h-[400px] object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Right Column - Features List */}
            <div className="md:w-7/12 flex flex-col justify-center space-y-5">
              <ul className="list-disc list-inside text-lg md:text-xl leading-relaxed text-gray-800">
                <li className="hover:text-blue-600 transition-colors duration-300">
                  Seamless integration of payment services into your website
                </li>
                <li className="hover:text-blue-600 transition-colors duration-300">
                  Mobile integration capabilities and features
                </li>
                <li className="hover:text-blue-600 transition-colors duration-300">
                  Smooth experiences with both Hosted and Self-Checkout options
                </li>
                <li className="hover:text-blue-600 transition-colors duration-300">
                  Quick and easy APIs for hassle-free, fast transactions
                </li>
                <li className="hover:text-blue-600 transition-colors duration-300">
                  Comprehensive offerings, including offer engines and EMI facilities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
