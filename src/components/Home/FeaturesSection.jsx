import React from "react";
import { motion } from "framer-motion";
import bg2 from "../../assets/images/bg2.webp";

const FeaturesSection = () => {
  const features = [
    {
      icon: "fa-business-time",
      title: "Multi Payment Options",
      description: "Accept payments via cards, UPI, wallets, net banking & more"
    },
    {
      icon: "fa-credit-card",
      title: "Global Cards Accepted",
      description: "Support for domestic and international credit/debit cards with competitive forex rates"
    },
    {
      icon: "fa-chalkboard-teacher",
      title: "Dynamic Control Panel",
      description: "Full control over payments, refunds, and settlements from a single dashboard"
    },
    {
      icon: "fa-file-alt",
      title: "Instant Onboarding",
      description: "Go live in minutes with our streamlined onboarding process"
    },
    {
      icon: "fa-computer",
      title: "Real-Time Dashboard",
      description: "Monitor transactions and analytics in real-time"
    },
    {
      icon: "fa-file-invoice",
      title: "Comprehensive Reports",
      description: "Detailed insights with customizable reports"
    }
  ];

  /* ================= ANIMATION VARIANTS ================= */

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative py-12 sm:py-16 overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/95 to-cyan-700/95" />
      </div>

      {/* Floating Gradient Motion */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
      />

      <div className="relative container mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Enterprise-Grade Features for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
              Your Growth
            </span>
          </h3>

          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-cyan-400 to-blue-300 mx-auto rounded-full"
          />
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl p-4
                              border border-white/20
                              transition-all duration-500
                              hover:border-cyan-400/50
                              hover:shadow-xl
                              overflow-hidden h-full flex flex-col">

                {/* Shimmer Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                                translate-x-[-100%] group-hover:translate-x-[100%] 
                                transition-transform duration-1000" />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 6, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 
                             rounded-lg flex items-center justify-center mb-3 shadow-lg"
                >
                  <i className={`fas ${feature.icon} text-white text-lg`} />
                </motion.div>

                {/* Content */}
                <h3 className="text-base font-semibold text-white mb-2">
                  {feature.title}
                </h3>

                <p className="text-white/70 text-xs leading-relaxed flex-grow">
                  {feature.description}
                </p>

                {/* Bottom Accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  className="origin-left h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 mt-4"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;