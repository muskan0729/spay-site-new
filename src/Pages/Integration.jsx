import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Add framer-motion for smooth animations
import integrationBg from "../assets/images/integration-bg.jpg";
import AuthModal from "../components/AuthModal";

import { 
  FaCode, 
  FaPlug, 
  FaProjectDiagram, 
  FaAndroid, 
  FaApple, 
  FaDownload 
} from "react-icons/fa";

const Integration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    }),
    hover: { 
      scale: 1.05, 
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <>
      <div className="font-sans text-gray-900 overflow-hidden">
        {/* Hero Section - Enhanced with CTA and subtle parallax effect */}
        <section
          className="relative h-screen bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${integrationBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
          <motion.div 
            className="absolute inset-0"
            initial={{ y: 0 }}
            whileInView={{ y: -20 }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            style={{ backgroundImage: "linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%)" }}
          />

          <motion.div 
            className="relative text-center text-white z-10 px-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-black mb-6 drop-shadow-2xl leading-tight bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent"
              variants={cardVariants}
            >
              Simplified Integration
            </motion.h1>
            <motion.p 
              className="text-xl md:text-3xl mb-12 drop-shadow-xl max-w-4xl mx-auto leading-relaxed"
              variants={cardVariants}
            >
              Well-documented custom code for modern apps and websites. Accelerate your development with seamless APIs, SDKs, and plugins.
            </motion.p>

            <motion.div 
              className="flex justify-center gap-8 flex-wrap mb-8"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: FaCode, label: "SDKs", color: "text-blue-300" },
                { icon: FaPlug, label: "Plugins", color: "text-blue-400" },
                { icon: FaProjectDiagram, label: "API", color: "text-blue-200" }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex flex-col items-center bg-white/15 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-white/20 hover:bg-white/25 transition-all duration-300"
                  variants={cardVariants}
                  custom={i}
                  whileHover="hover"
                >
                  <item.icon className={`text-4xl mb-3 ${item.color}`} />
                  <span className="font-bold text-lg">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Payment Integration Cards - Enhanced with grid layout and more engaging content */}
        <section className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto"
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
            >
              Integrate Payments Seamlessly
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Empower your platform with flexible, secure payment solutions tailored to your needs.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              { 
                icon: FaProjectDiagram, 
                title: "API as per your Platform", 
                desc: "Build dynamic websites and applications with our RESTful APIs. Supports webhooks for real-time updates.", 
                color: "text-blue-600",
                i: 0
              },
              { 
                icon: FaCode, 
                title: "Custom SDKs", 
                desc: "Accelerate integration with pre-built SDKs in multiple languages. Includes comprehensive error handling.", 
                color: "text-blue-500",
                i: 1
              }
            ].map((card, idx) => (
              <motion.div
                key={card.title}
                className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 relative overflow-hidden"
                variants={cardVariants}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
              >
                {/* Subtle gradient overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-full -mr-16 -mt-16"></div>
                <card.icon className={`${card.color} text-5xl mb-6`} />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{card.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{card.desc}</p>
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 w-full justify-center"
                  whileHover={{ scale: 1.02 }}
                >
                  View Documentation <FaDownload />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* App Integration - Enhanced with better icons and mobile-first design */}
        <section className="py-24 px-6 bg-blue-50">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto"
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
            >
              Native App Integration
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Bring payments to life in your mobile apps with optimized SDKs for top platforms.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { 
                icon: FaAndroid, 
                title: "Android", 
                desc: "Seamless transaction tracking with native Kotlin/Java support. Offline mode enabled.", 
                color: "text-blue-500",
                bgColor: "bg-blue-50",
                i: 0
              },
              { 
                icon: FaApple, 
                title: "iOS", 
                desc: "Effortless management using Swift/Objective-C. Deep integration with Apple Pay.", 
                color: "text-blue-600",
                bgColor: "bg-blue-50",
                i: 1
              }
            ].map((card, idx) => (
              <motion.div
                key={card.title}
                className={`p-8 rounded-3xl shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 relative overflow-hidden ${card.bgColor}`}
                variants={cardVariants}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
              >
                {/* Platform-specific accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full -mr-12 -mt-12"></div>
                <card.icon className={`${card.color} text-6xl mb-6`} />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{card.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{card.desc}</p>
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 w-full justify-center"
                  whileHover={{ scale: 1.02 }}
                >
                  View Documentation <FaDownload />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer CTA - New addition for better conversion */}
        <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center">
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Integrate?
          </motion.h3>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Join thousands of developers building the future of payments.
          </motion.p>
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-blue-600 py-4 px-8 rounded-2xl font-bold shadow-2xl hover:shadow-white/50 transition-all duration-300 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Integrating Now
          </motion.button>
        </section>
      </div>

      <AnimatePresence>
        {isModalOpen && <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Integration;