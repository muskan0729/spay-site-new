import React from "react";
import { motion } from "framer-motion";
import heroBg from "../../assets/images/hero-bg.webp";
import dcpImage from "../../assets/images/dcp.webp";

const DynamicControlPanel = () => {
  const features = [
    {
      icon: "fa-credit-card",
      title: "Diverse Payment Options",
      description:
        "Experience a single solution for all your transaction needs, whether it's credit cards, debit cards, UPI, wallets, or net banking."
    },
    {
      icon: "fa-shield-alt",
      title: "Secure Transaction Experience",
      description:
        "Enjoy a safe and secure transaction process, enhanced by our thoughtfully designed UI and UX."
    },
    {
      icon: "fa-chart-line",
      title: "High Success Rate",
      description:
        "Our platform guarantees a smooth and secure transaction experience with our expertly designed checkout process."
    }
  ];

  /* ================= ANIMATION VARIANTS ================= */

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut" }
    }
  };

  return (
    <section className="relative py-12 sm:py-16 bg-white overflow-hidden">

      {/* Background subtle animated pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #2563eb 1px, transparent 0)",
          backgroundSize: "30px 30px"
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Dynamic Control Panel for Complete Management
          </h2>

          <p className="text-gray-600 text-xs sm:text-sm max-w-3xl mx-auto leading-relaxed">
            Our platform provides full control over payments, transfers,
            refunds, invoices, e-accounts, and much more.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 50 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full"
          />
        </motion.div>
        <div className="flex flex-col lg:flex-row items-center gap-8">

          {/* ================= LEFT FEATURES ================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 6 }}
                className="group relative flex gap-4 p-4 rounded-lg 
                           transition-all duration-300
                           hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50
                           border border-transparent hover:border-cyan-100"
              >
                {/* Animated Icon */}
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600
                             rounded-lg flex items-center justify-center shadow-sm"
                >
                  <i className={`fas ${feature.icon} text-white text-lg`} />
                </motion.div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-cyan-600 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                    {feature.description}
                  </p>
                </div>

                {/* Left Accent Line Animation */}
                <motion.div
                  initial={{ height: 0 }}
                  whileHover={{ height: "60%" }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1
                             bg-gradient-to-b from-cyan-500 to-blue-500 rounded-r"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-1/2 max-w-sm mx-auto"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600
                              blur-lg opacity-15 rounded-lg" />

              <motion.img
                src={dcpImage}
                alt="Dynamic Control Panel"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
                className="relative w-full rounded-lg shadow-lg border-2 border-white"
              />


              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-3 -right-3 bg-white p-2 rounded-md shadow-md"
              >
                <i className="fas fa-check-circle text-green-500 text-base" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-3 -left-3 bg-white p-2 rounded-md shadow-md"
              >
                <i className="fas fa-chart-pie text-cyan-500 text-base" />
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DynamicControlPanel;