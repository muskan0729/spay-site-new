import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import integrationBg from "../assets/images/Integrations1N.jpeg";

import {
  FaCode,
  FaPlug,
  FaProjectDiagram,
  FaAndroid,
  FaApple,
  FaDownload,
} from "react-icons/fa";

const Integration = () => {
  const navigate = useNavigate();

  // Redirect handler
  const handleRedirect = () => {
    navigate("/login");
  };

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="font-sans text-gray-900 overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${integrationBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>

        <motion.div
          className="relative text-center text-white z-10 px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
            Simplified Integration
          </h1>

          <p className="text-xl md:text-3xl mb-12 max-w-4xl mx-auto">
            Well-documented custom code for modern apps and websites.
            Accelerate your development with seamless APIs, SDKs, and plugins.
          </p>

          <div className="flex justify-center gap-8 flex-wrap">
            {[
              { icon: FaCode, label: "SDKs" },
              { icon: FaPlug, label: "Plugins" },
              { icon: FaProjectDiagram, label: "API" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="flex flex-col items-center bg-white/15 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-white/20"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                custom={i}
                whileHover="hover"
              >
                <item.icon className="text-4xl mb-3 text-blue-300" />
                <span className="font-bold text-lg">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= PAYMENT SECTION ================= */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="text-center max-w-6xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Integrate Payments Seamlessly
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empower your platform with flexible, secure payment solutions tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: FaProjectDiagram,
              title: "API as per your Platform",
              desc: "Build dynamic websites and applications with our RESTful APIs. Supports webhooks for real-time updates.",
            },
            {
              icon: FaCode,
              title: "Custom SDKs",
              desc: "Accelerate integration with pre-built SDKs in multiple languages.",
            },
          ].map((card, idx) => (
            <motion.div
              key={card.title}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:border-blue-200 transition-all"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={idx}
              whileHover="hover"
            >
              <card.icon className="text-blue-600 text-5xl mb-6" />
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-gray-600 mb-8">{card.desc}</p>

              <button
                onClick={handleRedirect}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold w-full justify-center hover:scale-105 transition-all"
              >
                View Documentation <FaDownload />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= APP SECTION ================= */}
      <section className="py-24 px-6 bg-blue-50">
        <div className="text-center max-w-6xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Native App Integration
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bring payments to life in your mobile apps with optimized SDKs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: FaAndroid,
              title: "Android",
              desc: "Seamless transaction tracking with native Kotlin/Java support.",
            },
            {
              icon: FaApple,
              title: "iOS",
              desc: "Effortless management using Swift/Objective-C.",
            },
          ].map((card, idx) => (
            <motion.div
              key={card.title}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:border-blue-200 transition-all"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={idx}
              whileHover="hover"
            >
              <card.icon className="text-blue-600 text-6xl mb-6" />
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-gray-600 mb-8">{card.desc}</p>

              <button
                onClick={handleRedirect}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold w-full justify-center hover:scale-105 transition-all"
              >
                View Documentation <FaDownload />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Integrate?
        </h3>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of developers building the future of payments.
        </p>

        <button
          onClick={handleRedirect}
          className="bg-white text-blue-600 py-4 px-8 rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all"
        >
          Start Integrating Now
        </button>
      </section>
    </div>
  );
};

export default Integration;