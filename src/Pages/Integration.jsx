import React from "react";
import { motion } from "framer-motion";
import integrationBg from "../assets/images/Integrations1N.jpeg";
import {
  FaCode,
  FaPlug,
  FaProjectDiagram,
  FaAndroid,
  FaApple,
  FaArrowRight,
} from "react-icons/fa";

const Integration = () => {

  const handleRedirect = () => {
    window.location.href = "https://uatdashboard.spay.live/";
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="font-sans text-gray-900 overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative min-h-[65vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${integrationBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-black/75 to-blue-800/85"></div>

        <motion.div
          className="relative z-10 max-w-6xl w-full px-4 sm:px-6"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Simplified{" "}
            <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Integration
            </span>
          </h1>

          <p className="text-sm sm:text-base mb-8 text-gray-300">
            APIs, SDKs & Plugins built for seamless integration.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { icon: FaCode, label: "SDKs", color: "text-cyan-400" },
              { icon: FaPlug, label: "Plugins", color: "text-indigo-400" },
              { icon: FaProjectDiagram, label: "API", color: "text-emerald-400" },
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-lg 
                           p-4 rounded-xl 
                           border border-white/20
                           shadow-xl
                           flex flex-col items-center justify-center
                           text-center
                           min-h-[110px]
                           transition-all duration-300"
              >
                <item.icon className={`text-2xl mb-2 ${item.color}`} />
                <span className="text-xs font-semibold">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= PAYMENT SECTION ================= */}
      <section className="py-12 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-2 sm:px-6">

          <motion.div
            className="text-center mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Integrate Payments Seamlessly
            </h2>
            <p className="text-sm text-gray-600">
              Secure infrastructure tailored for modern platforms.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: FaProjectDiagram,
                title: "API Integration",
                desc: "RESTful APIs with webhook support.",
                color: "text-blue-600",
              },
              {
                icon: FaCode,
                title: "Custom SDKs",
                desc: "Developer-friendly SDKs for fast setup.",
                color: "text-purple-600",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                whileHover={{ y: -6 }}
                className="bg-white p-6 rounded-xl
                           shadow-lg hover:shadow-2xl
                           border border-gray-100
                           flex flex-col items-center justify-between
                           text-center
                           min-h-[220px]
                           transition-all duration-300"
              >
                <div>
                  <card.icon className={`text-4xl mb-3 ${card.color}`} />
                  <h3 className="text-lg font-semibold mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {card.desc}
                  </p>
                </div>

                <button
                  onClick={handleRedirect}
                  className="mt-5 flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                >
                  View Docs <FaArrowRight className="text-xs" />
                </button>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= APP SECTION ================= */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-6xl mx-auto px-2 sm:px-6">

          <motion.div
            className="text-center mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Native App Integration
            </h2>
            <p className="text-sm text-gray-600">
              Optimized SDKs for Android & iOS.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: FaAndroid,
                title: "Android",
                desc: "Kotlin & Java support.",
                color: "text-green-500",
              },
              {
                icon: FaApple,
                title: "iOS",
                desc: "Swift & Objective-C support.",
                color: "text-gray-800",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                whileHover={{ y: -6 }}
                className="bg-white p-6 rounded-xl
                           shadow-lg hover:shadow-2xl
                           border border-gray-100
                           flex flex-col items-center justify-between
                           text-center
                           min-h-[220px]
                           transition-all duration-300"
              >
                <div>
                  <card.icon className={`text-4xl mb-3 ${card.color}`} />
                  <h3 className="text-lg font-semibold mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {card.desc}
                  </p>
                </div>

                <button
                  onClick={handleRedirect}
                  className="mt-5 flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                >
                  View Docs <FaArrowRight className="text-xs" />
                </button>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Integration; 