import React from "react";
import bgImage from "../../assets/images/key.webp";
import featuresImage from "../../assets/images/pg_features.jpg";

const Section4 = () => {
  const features = [
    "Seamless integration with websites, mobile apps & platforms",
    "Support for Hosted Checkout and Seamless / Self Checkout",
    "Fast & developer-friendly APIs and SDKs",
    "Multiple payment methods — cards, UPI, wallets, netbanking",
    "Built-in EMI, offers engine, payment links & recurring billing",
    "Real-time dashboard, detailed reports & settlement insights",
    "PCI DSS Level 1 compliant & bank-grade encryption",
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 md:mb-16">
          Key Features of Spay Payment Gateway
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-4 bg-blue-500 rounded-3xl opacity-10 blur-2xl"></div>
              <img
                src={featuresImage}
                alt="Spay Payment Gateway Features"
                className="relative rounded-2xl shadow-2xl w-full max-w-lg object-cover"
              />
            </div>
          </div>

          {/* Features */}
          <div className="order-1 lg:order-2">
            <ul className="space-y-5 md:space-y-6">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                    {i + 1}
                  </div>
                  <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300">
                Explore Integration Docs →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;