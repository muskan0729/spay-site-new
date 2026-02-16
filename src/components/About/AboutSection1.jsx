import React from "react";
import aboutImg from "../../assets/images/aboutus1.webp";

const AboutSection1 = () => {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE CONTENT */}
        <div>
          <span className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
            Who We Are
          </span>

          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Powering the Future of
            <span className="block text-blue-600">Digital Payments</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            We are a next-generation payment gateway aggregator designed
            to empower startups and SMEs with secure, scalable, and seamless
            transaction experiences.
          </p>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            From non-tech merchants to growing enterprises, we ensure
            every transaction is handled with precision, protection,
            and reliability.
          </p>

          <div className="mt-8">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE WITH GLASS EFFECT */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-full h-full bg-blue-600 rounded-3xl opacity-10"></div>

          <div className="relative backdrop-blur-xl bg-white/60 rounded-3xl shadow-2xl p-4">
            <img
              src={aboutImg}
              alt="About"
              className="rounded-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection1;
