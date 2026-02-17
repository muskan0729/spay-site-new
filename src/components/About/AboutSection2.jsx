import React from "react";

const AboutSection2 = () => {
  return (
    <section className="bg-gray-900 text-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 sm:mb-16">
          Our Purpose
        </h2>

        <div className="relative border-l-4 border-blue-500 pl-6 sm:pl-10 space-y-12 sm:space-y-16 text-left max-w-3xl mx-auto">

          {/* Mission */}
          <div className="relative">
            <div className="absolute -left-6 sm:-left-10 w-6 sm:w-8 h-6 sm:h-8 bg-blue-500 rounded-full"></div>
            <h3 className="text-xl sm:text-2xl font-bold">Mission</h3>
            <p className="mt-2 sm:mt-3 text-gray-300 text-base sm:text-lg leading-relaxed">
              Deliver secure, innovative, and scalable payment infrastructure
              that empowers businesses to operate effortlessly in the digital economy.
            </p>
          </div>

          {/* Vision */}
          <div className="relative">
            <div className="absolute -left-6 sm:-left-10 w-6 sm:w-8 h-6 sm:h-8 bg-purple-500 rounded-full"></div>
            <h3 className="text-xl sm:text-2xl font-bold">Vision</h3>
            <p className="mt-2 sm:mt-3 text-gray-300 text-base sm:text-lg leading-relaxed">
              Become the most trusted digital transaction partner by building
              technology that simplifies and strengthens global commerce.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection2;