import React from "react";
import { motion } from "framer-motion";
import bg2 from "../../assets/images/bg_white1.png";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: "fa-business-time",
      title: "Payment Gateway Solutions",
      description:
        "Our online payment gateway India solution helps businesses accept payments through websites and mobile apps securely.",
      path: "/payment-gateway",
    },
    {
      icon: "fa-credit-card",
      title: "UPI Payment Integration",
      description:
        "Enable faster transactions with our UPI payment solution for businesses, allowing customers to pay instantly",
      path: "/upi-autopay",
    },
    {
      icon: "fa-chalkboard-teacher",
      title: "API-Based Payment Integration",
      description:
        "Our Top payment gateway API integration services make it simple to connect payments with your existing platform",
      path: "/integration",
    },
    {
      icon: "fa-file-alt",
      title: "Soundbox Payment Solutions",
      description:
        "Our soundbox payment solution India helps businesses get instant audio confirmation for payments, making transactions faster and more reliable for daily operations",
      path: "/sound-box",
    },
    {
      icon: "fa-computer",
      title: "Payment Links",
      description:
        "Our payment link solution India helps businesses collect payments easily by sharing secure links through WhatsApp, SMS, or email without needing a website.",
      path: "/payment-links",
    },
    {
      icon: "fa-file-invoice",
      title: "One-Click Checkout",
      description:
        "Our one-click checkout India solution helps businesses offer fast and seamless payments, improving customer experience and increasing successful transactions.",
      path: "/one-click-checkout",
    },
  ];

  /* ================= ANIMATION ================= */

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-10 sm:py-14 md:py-16 overflow-hidden mt-6 sm:mt-9">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <div className="absolute inset-0" />
      </div>

      {/* Floating Blobs (slightly smaller on mobile) */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 sm:top-20 left-4 sm:left-10 w-40 sm:w-64 h-40 sm:h-64 bg-cyan-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-40 sm:w-64 h-40 sm:h-64 bg-blue-500/20 rounded-full blur-3xl"
      />

      <div className="relative container mx-auto px-4 sm:px-6 md:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-black mb-3 leading-snug">
            Enterprise-Grade Features for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-blue-700">
              Your Growth
            </span>
          </h3>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-cyan-800 to-blue-700 mx-auto rounded-full"
          />
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative cursor-pointer"
              onClick={() => navigate(feature.path)}
            >
              <div className="relative h-full">

                {/* Shadow Layer */}
                <div className="absolute inset-0 translate-x-[3px] sm:translate-x-[4px] translate-y-[3px] sm:translate-y-[4px] rounded-2xl bg-gray-300"></div>

                {/* Card */}
                <div className="relative bg-white rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-200 transition-all duration-500 shadow-[-6px_6px_15px_rgba(0,0,0,0.1)] hover:shadow-[-8px_8px_20px_rgba(0,0,0,0.15)] overflow-hidden h-full flex flex-col">

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-500 opacity-0 group-hover:opacity-100 transition duration-500" />

                  <div className="relative z-10 flex flex-col h-full">

                    {/* Top Row */}
                    <div className="flex items-center justify-between mb-3 sm:mb-4">

                      {/* Icon */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-500 transition duration-300">
                        <i className={`fas ${feature.icon} text-blue-600 group-hover:text-white text-sm sm:text-lg`} />
                      </div>

                      {/* Arrow */}
                      <motion.div
                        className="text-blue-600 group-hover:text-black"
                        whileHover={{ x: 6 }}
                      >
                        <i className="fas fa-arrow-right text-xs sm:text-sm"></i>
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-800 group-hover:text-black transition duration-300 leading-snug">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-600 group-hover:text-black transition duration-300 leading-relaxed">
                      {feature.description}
                    </p>

                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;