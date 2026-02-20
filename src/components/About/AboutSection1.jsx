import React from "react";
import aboutImg from "../../assets/images/aboutus1.webp";

const AboutSection1 = () => {
  return (
    <section className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        
        {/* LEFT SIDE CONTENT */}
        <div className="order-2 lg:order-1">
          <span className="text-xs sm:text-sm uppercase tracking-widest text-blue-600 font-semibold">
            Who We Are
          </span>

          <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Powering the Future of
            <span className="block text-blue-600">Digital Payments</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
            We are a next-generation payment gateway aggregator designed
            to empower startups and SMEs with secure, scalable, and seamless
            transaction experiences.
          </p>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            From non-tech merchants to growing enterprises, we ensure
            every transaction is handled with precision, protection,
            and reliability.
          </p>

          <div className="mt-6 sm:mt-8">
            <button className="px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE WITH GLASS EFFECT */}
        <div className="order-1 lg:order-2 relative">
          <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-full h-full bg-blue-600 rounded-2xl sm:rounded-3xl opacity-10 hidden lg:block"></div>

          <div className="relative backdrop-blur-xl bg-white/60 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-2 sm:p-4">
            <img
              src={aboutImg}
              alt="About"
              className="rounded-xl sm:rounded-2xl w-full object-cover h-64 sm:h-80 md:h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection1;