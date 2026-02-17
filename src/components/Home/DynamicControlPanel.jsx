import React from "react";
import { motion } from "framer-motion";
import heroBg from "../../assets/images/hero-bg.webp";
import dcpImage from "../../assets/images/dcp.webp";

const DynamicControlPanel = () => {
  const features = [
    {
      icon: "fa-credit-card",
      title: "Diverse Payment Options",
      description: "Experience a single solution for all your transaction needs, whether it's credit cards, debit cards, UPI, wallets, or net banking."
    },
    {
      icon: "fa-shield-alt",
      title: "Secure Transaction Experience",
      description: "Enjoy a safe and secure transaction process, enhanced by our thoughtfully designed UI and UX."
    },
    {
      icon: "fa-chart-line",
      title: "High Success Rate",
      description: "Our platform guarantees a smooth and secure transaction experience with our expertly designed checkout process."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #2563eb 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }} />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Section Header - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Dynamic Control Panel for Complete Management
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed px-4">
            Our platform provides you with full control over payments, transfers, refunds, invoices, e-accounts, and much more. This versatility makes us one of the top choices for online payment solutions.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-16">
          {/* Left Column - Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-1/2 w-full space-y-4 sm:space-y-6 lg:space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative flex flex-col sm:flex-row gap-4 sm:gap-5 p-4 sm:p-5 
                         rounded-xl hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 
                         transition-all duration-300 cursor-default 
                         border border-transparent hover:border-cyan-100"
              >
                {/* Icon with gradient background - Consistent hover effects */}
                <div className="relative flex-shrink-0 self-start">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 
                                rounded-xl blur-md opacity-0 group-hover:opacity-50 
                                transition-opacity duration-300" />
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500 to-blue-500 
                                rounded-xl flex items-center justify-center
                                group-hover:scale-110 group-hover:rotate-3 
                                transition-all duration-300 shadow-md group-hover:shadow-xl">
                    <i className={`fas ${feature.icon} text-white text-lg sm:text-xl`} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2 
                               group-hover:text-cyan-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover indicator line - Consistent animation for all cards */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 
                              bg-gradient-to-b from-cyan-500 to-blue-500 rounded-r
                              group-hover:h-12 sm:group-hover:h-16 transition-all duration-300" />
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Image - Container removed */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full max-w-lg lg:max-w-none mx-auto"
          >
            <div className="relative">
              {/* Decorative elements - Responsive sizing */}
              <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-16 sm:w-20 md:w-24 
                            h-16 sm:h-20 md:h-24 bg-cyan-200 rounded-full blur-xl sm:blur-2xl 
                            opacity-60 animate-pulse" />
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-20 sm:w-24 md:w-32 
                            h-20 sm:h-24 md:h-32 bg-blue-200 rounded-full blur-xl sm:blur-2xl 
                            opacity-60 animate-pulse delay-700" />

              {/* Main image - No container, just the image with effects */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 
                              rounded-xl sm:rounded-2xl blur-xl sm:blur-2xl opacity-20 
                              group-hover:opacity-30 transition-opacity duration-500" />
                
                {/* Just the image - no container div */}
                <img
                  src={dcpImage}
                  alt="Dynamic Control Panel"
                  className="w-full h-auto rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl
                           border-2 sm:border-4 border-white/50 transform group-hover:scale-105 
                           transition-all duration-700 relative z-10"
                />

                {/* Floating badges - Responsive positioning and sizing */}
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 
                              bg-white rounded-lg shadow-lg sm:shadow-xl p-2 sm:p-3 
                              animate-bounce z-20">
                  <i className="fas fa-check-circle text-green-500 text-base sm:text-xl" />
                </div>
                <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 
                              bg-white rounded-lg shadow-lg sm:shadow-xl p-2 sm:p-3 
                              animate-bounce delay-300 z-20">
                  <i className="fas fa-chart-pie text-cyan-500 text-base sm:text-xl" />
                </div>

                {/* Subtle hover effect ring */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl 
                              ring-2 ring-transparent group-hover:ring-cyan-400/50 
                              transition-all duration-500 pointer-events-none z-30" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DynamicControlPanel;