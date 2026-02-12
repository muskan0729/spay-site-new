import React from "react";
import bgImage from "../../assets/images/bg4.webp";
import paymentGateway from "../../assets/images/paymentgateway.webp";

const Section1 = () => {
  return (
    <div className="bg-[#f2f7fa]">
      {/* Background container */}
      <div
        className="bg-bottom bg-cover min-h-[450px]"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container mx-auto py-20 px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* Left Column - Text */}
            <div className="md:w-7/12 text-center md:text-start">
              <h1 className="text-[#13309c] text-3xl md:text-4xl font-bold mb-6">
                A Cutting-Edge Payment Solution to Elevate Your Business Transactions
              </h1>
              <p className="text-black text-base md:text-lg leading-relaxed mb-8 px-4 md:px-0">
                If your goal is to increase revenue while providing your customers
                with an exceptional payment experience, look no further than our platform.
              </p>

              {/* Features list */}
              <div className="space-y-3 px-4 md:px-0">
                <p className="flex items-center text-black">
                  <i className="fas fa-globe mr-3 text-blue-600"></i> Diverse Payment Options
                </p>
                <p className="flex items-center text-black">
                  <i className="fas fa-globe mr-3 text-blue-600"></i> Multiple payment methods available
                </p>
                <p className="flex items-center text-black">
                  <i className="fas fa-globe mr-3 text-blue-600"></i> Various e-commerce plugin integrations
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="md:w-5/12 flex justify-center md:justify-end">
              <img
                src={paymentGateway}
                alt="Payment Gateway Feature"
                className="rounded shadow w-4/5 md:w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
