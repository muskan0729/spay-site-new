import React from "react";
import aboutImg from "../../assets/images/aboutus1.webp";

const AboutSection1 = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-blue-50 py-10 sm:py-12 md:py-14 overflow-hidden">

      {/* Soft Background Glow (smaller) */}
      <div className="absolute top-0 right-0 w-56 h-56 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-indigo-200 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">
            Who We Are
          </span>

          <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Powering the Future of
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Digital Payments
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            We are a next-generation payment gateway aggregator designed
            to empower startups and SMEs with secure, scalable, and seamless
            transaction experiences.
          </p>

          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            From non-tech merchants to growing enterprises, we ensure
            every transaction is handled with precision, protection,
            and reliability.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative group">

          {/* Decorative Card */}
          <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl opacity-10 hidden lg:block"></div>

          <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg p-3 transition duration-500 group-hover:shadow-xl">

            <img
              src={aboutImg}
              alt="About Spay"
              className="rounded-xl w-full object-cover h-56 sm:h-64 md:h-72 transition-transform duration-500 group-hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection1;