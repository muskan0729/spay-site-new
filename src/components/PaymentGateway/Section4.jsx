import React from "react";
import bgImage from "../../assets/images/key.webp";
import featuresImage from "../../assets/images/pg_features.jpg";

const Section4 = () => {
  return (
    <section className="relative mt-6">
      {/* Background */}
      <div
        className="relative bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Softer Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 md:py-14">
          
          {/* Section Title (Smaller + Balanced) */}
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-10">
            Key Features
          </h2>

          {/* Content Row */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
            
            {/* Left - Image (Smaller & Responsive) */}
            <div className="md:w-5/12 flex justify-center">
              <img
                src={featuresImage}
                alt="Payment Gateway Feature"
                className="rounded-2xl shadow-xl 
                w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 
                object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Right - Features */}
            <div className="md:w-7/12">
              <ul className="space-y-4 text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
                
                <li className="flex items-start gap-3 group">
                  <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                  <span className="group-hover:text-blue-700 transition">
                    Seamless integration of payment services into your website
                  </span>
                </li>

                <li className="flex items-start gap-3 group">
                  <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                  <span className="group-hover:text-blue-700 transition">
                    Mobile integration capabilities and features
                  </span>
                </li>

                <li className="flex items-start gap-3 group">
                  <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                  <span className="group-hover:text-blue-700 transition">
                    Smooth experiences with Hosted and Self-Checkout options
                  </span>
                </li>

                <li className="flex items-start gap-3 group">
                  <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                  <span className="group-hover:text-blue-700 transition">
                    Quick and easy APIs for hassle-free transactions
                  </span>
                </li>

                <li className="flex items-start gap-3 group">
                  <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                  <span className="group-hover:text-blue-700 transition">
                    Comprehensive offerings including offer engines and EMI facilities
                  </span>
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