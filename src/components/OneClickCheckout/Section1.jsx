import React from "react";
import heroBg from "../../assets/images/bg_occ7.jpg";
import benefitImage from "../../assets/images/benefit_occ.webp";

const Section1 = () => {
  return (
    <div className="w-full bg-white">
      {/* ===================== Hero Section ===================== */}
      <section className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/70 via-indigo-950/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left side - empty / spacing (you can add logo or illustration later) */}
            <div className="hidden lg:block" />

            {/* Right side - Main content */}
            <div className="text-white text-center lg:text-left space-y-6 lg:space-y-8 max-w-3xl lg:max-w-none mx-auto lg:mx-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                One-Click Checkout
                <span className="block text-blue-300 mt-2 sm:mt-4">Frictionless. Fast. Final.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed">
                Long checkout forms frustrate customers and kill conversions.{" "}
                <span className="font-semibold text-white">
                  One-Click Checkout
                </span>{" "}
                eliminates the hassle — letting returning customers buy in seconds with saved details.
              </p>

              <div className="pt-4">
                <button className="px-8 py-4 bg-white text-indigo-900 font-semibold rounded-xl shadow-xl hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  Enable One-Click Today →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== Benefits Section ===================== */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title & Intro */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 md:mb-6">
              Benefits of One-Click Checkout
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Let customers complete purchases instantly with saved payment details — no repeated form filling, no frustration, just faster conversions.
            </p>
          </div>

          {/* Content – Image + Card */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left - Image */}
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute inset-4 bg-blue-500 rounded-3xl opacity-10 blur-2xl" />
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                  <img
                    src={benefitImage}
                    alt="One-Click Checkout Benefits"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right - Advantages Card */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12 border border-gray-100">
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 md:mb-8">
                  Key Advantages
                </h3>

                <ul className="space-y-5 md:space-y-6">
                  {[
                    "Lightning-fast, secure checkout experience",
                    "Seamless journey — no form fatigue",
                    "Significantly reduces cart abandonment",
                    "Higher average order value & repeat purchases",
                    "Builds customer trust and loyalty",
                    "Easy to implement with modern SDKs & APIs",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <i className="fas fa-check-circle text-green-500 text-2xl" />
                      </div>
                      <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300">
                    Integrate One-Click Now →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;