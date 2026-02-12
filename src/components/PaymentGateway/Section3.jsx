import React from "react";
import bgImage from "../../assets/images/pgbg8.webp";

const Section3 = () => {
  return (
    <div
      className="relative pb-10 min-h-[300px] flex flex-col items-center justify-center bg-center bg-cover "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/20"></div> */}

      <div className="relative container text-center ">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
          Why Spay?
        </h2>

        {/* Description and Features */}
        <div className=" mx-auto flex flex-col gap-6 px-20  text-center">
          <p className="text-black font-bold text-lg md:text-xl mb-6">
            Tired of searching for the "perfect" payment solution? Discover Spay and
            put an end to your quest. Our diverse range of services is tailored to meet
            your specific business needs.
          </p>

          <ul className="list-none flex flex-col gap-4 text-black items-center">
            <li className="flex items-center justify-center md:justify-start font-semibold">
              <i className="fas fa-globe me-3 text-blue-600 text-xl"></i>
              Gain comprehensive insights into payment transactions.
            </li>
            <li className="flex items-center justify-center md:justify-start font-semibold">
              <i className="fas fa-sync-alt me-3 text-blue-600 text-xl"></i>
              Enjoy real-time analysis and visibility at your fingertips.
            </li>
            <li className="flex items-center justify-center md:justify-start font-semibold">
              <i className="fas fa-chart-line me-3 text-blue-600 text-xl"></i>
              Access detailed data breakdowns for effective revenue management.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section3;
