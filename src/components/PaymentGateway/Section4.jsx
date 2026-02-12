import React from "react";
import bgImage from "../../assets/images/key.webp";
import featuresImage from "../../assets/images/pg_features.jpg";

const Section4 = () => {
  return (
    <section className="relative mt-5">
      {/* Background Image */}
      <div
        className="bg-center bg-cover min-h-[250px] relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-900 pt-10">
            Key Features
          </h2>

          {/* Content Row */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mt-12 pb-12">
            {/* Left Column - Image */}
            <div className="md:w-5/12 flex justify-center">
              <img
                src={featuresImage}
                alt="Payment Gateway Feature"
                className="rounded shadow w-80 h-80 md:w-[400px] md:h-[400px] object-cover mb-12 md:mb-0"
              />
            </div>

            {/* Right Column - Features List */}
            <div className="md:w-7/12 flex flex-col justify-center">
              <ul className="list-disc list-inside space-y-4 text-lg md:text-xl leading-relaxed">
                <li className="">
                  Seamless integration of payment services into your website
                </li>
                <li className="">Mobile integration capabilities and features</li>
                <li className="">
                  Smooth experiences with both Hosted and Self-Checkout options
                </li>
                <li className="">Quick and easy APIs for hassle-free, fast transactions</li>
                <li className="">
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
