import React from "react";
import heroBg from "../../assets/images/hero-bg.webp";
import dcpImage from "../../assets/images/dcp.webp";

const DynamicControlPanel = () => {
  return (
    <div
      className="bg-center bg-cover py-20"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className=" mx-auto px-4">
        <div className="pb-6">
         <h2 className="text-xl md:text-4xl font-bold mb-6 text-center">
              Dynamic Control Panel for Complete Management
            </h2>
            <p className="mb-8 text-gray-700 leading-relaxed text-center">
              Our platform provides you with full control over payments, transfers,
              refunds, invoices, e-accounts, and much more. This versatility makes us
              one of the top choices for online payment solutions.
            </p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Left Column - Text */}
          <div className="md:w-1/2 ps-10">
 

            <div className="mb-6 ">
              <h4 className="text-xl font-semibold mb-2">Diverse Payment Options</h4>
              <p className="text-gray-700 leading-relaxed">
                Experience a single solution for all your transaction needs, whether it’s
                credit cards, debit cards, UPI, wallets, or net banking.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2">Secure Transaction Experience</h4>
              <p className="text-gray-700 leading-relaxed">
                Enjoy a safe and secure transaction process, enhanced by our thoughtfully
                designed UI and UX.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-2">High Success Rate</h4>
              <p className="text-gray-700 leading-relaxed">
                Our platform guarantees a smooth and secure transaction experience with
                our expertly designed checkout process.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="md:w-1/2 flex justify-center md:justify-center">
            <img
              src={dcpImage}
              alt="Dynamic Control Panel"
              className="rounded-lg" style={{width:"400px"}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicControlPanel;
