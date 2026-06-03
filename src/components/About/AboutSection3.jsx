import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaPlug,
  FaServer,
  FaClock,
  FaMoneyBillWave,
  FaBriefcase,
  FaHeadset,
  FaCreditCard,
  FaChartLine,
} from "react-icons/fa";

const AboutSection3 = () => {
  const BRAND_COLOR = "#2563EB"; // sampled/approximate brand blue from provided image

  const features = [
    { icon: <FaShieldAlt />, title: "Secure Transactions", description: "Every payment processed through SPay is protected with industry standard encryption and multi-layer security protocols." },
    { icon: <FaPlug />, title: "Easy Integration", description: "Clean, well-documented APIs integrate smoothly with your website, app, or platform  minimal developer effort required." },
    { icon: <FaServer />, title: "Reliable Payment Processing", description: "Built for high availability so your checkout stays up and running when customers are ready to pay." },
    { icon: <FaMoneyBillWave />, title: "Fast Settlements", description: "Transparent and fast settlement cycles keep your cash flow healthy and predictable." },
    { icon: <FaBriefcase />, title: "Business-Friendly Solutions", description: "Whether subscriptions, marketplaces, or single-product stores SPay adapts to how you do business." },
    { icon: <FaHeadset />, title: "Dedicated Support", description: "A support team that's available throughout your journey not just during onboarding." },
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
          Why Choose SPay For Your Business
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          There's no shortage of payment gateway services out there. What separates
          SPay is the combination of reliability, simplicity, and genuine business focus.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} whileHover={{ y: -8 }} className="group relative">
              <div
                className="bg-white rounded-2xl p-6 border-t-4 shadow-[0_8px_30px_rgba(2,6,23,0.06)] transition-all duration-300 h-full flex flex-col"
                style={{ borderTopColor: BRAND_COLOR, minHeight: 220 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl" style={{ background: `linear-gradient(90deg, ${BRAND_COLOR}, #06b6d4)` }}></div>

                <div
                  className="w-12 h-12 flex items-center justify-center rounded-lg text-3xl mb-4 mx-auto transition-transform duration-300"
                  style={{ background: 'rgba(37,99,235,0.08)', color: BRAND_COLOR }}
                >
                  {f.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{f.title}</h3>

                <p className="text-gray-600 text-sm leading-relaxed text-center mt-1 flex-grow">{f.description}</p>

                <div className="mt-4 text-center">
                  <span className="inline-block w-14 h-[2px] bg-gray-200"></span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection3;