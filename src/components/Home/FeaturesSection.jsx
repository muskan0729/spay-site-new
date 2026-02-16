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
      description: "Support for domestic and international credit/debit cards"
    },
    {
      icon: "fa-chalkboard-teacher",
      title: "Dynamic Control Panel",
      description: "Full control over payments, refunds, and settlements"
    },
    {
      icon: "fa-file-alt",
      title: "Instant Onboarding",
      description: "Go live in minutes with our streamlined onboarding"
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/95 to-cyan-700/95" />
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Enterprise-Grade Features for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
              Your Growth
            </span>
          </h2>

        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card with glassmorphism effect */}
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 
                            border border-white/20 hover:border-cyan-400/50
                            transition-all duration-500 hover:scale-105
                            overflow-hidden">

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-cyan-500 rounded-xl blur-xl 
                                opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 
                                rounded-xl flex items-center justify-center
                                group-hover:scale-110 group-hover:rotate-3 
                                transition-all duration-500 shadow-lg">
                    <i className={`fas ${feature.icon} text-white text-2xl`} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 
                             group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed 
                            group-hover:text-white/90 transition-colors">
                  {feature.description}
                </p>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r 
                              from-transparent via-cyan-400 to-transparent 
                              scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/30 rounded-full 
                      blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-500/30 rounded-full 
                      blur-3xl animate-pulse delay-1000" />
      </div>
    </section>
  );
};

export default FeaturesSection;