import React from "react";

const AboutSection2 = () => {
  return (
    <section className="bg-gray-900 text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl sm:text-5xl font-extrabold mb-16">
          Our Purpose
        </h2>

        <div className="relative border-l-4 border-blue-500 pl-10 space-y-16 text-left max-w-3xl mx-auto">

          {/* Mission */}
          <div>
            <div className="absolute -left-4 w-8 h-8 bg-blue-500 rounded-full"></div>
            <h3 className="text-2xl font-bold">Mission</h3>
            <p className="mt-3 text-gray-300 text-lg leading-relaxed">
              Deliver secure, innovative, and scalable payment infrastructure
              that empowers businesses to operate effortlessly in the digital economy.
            </p>
          </div>

          {/* Vision */}
          <div>
            <div className="absolute -left-4 w-8 h-8 bg-purple-500 rounded-full"></div>
            <h3 className="text-2xl font-bold">Vision</h3>
            <p className="mt-3 text-gray-300 text-lg leading-relaxed">
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
