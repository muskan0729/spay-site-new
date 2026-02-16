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

  const diagramItems = [
    { icon: "fa-exchange-alt", title: "Transfers" },
    { icon: "fa-chart-line", title: "Track Statement" },
    { icon: "fa-file-invoice", title: "E-Accounts" }
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
    <div className="relative py-20 md:py-24 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #2563eb 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }} />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header - Exact content from image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dynamic Control Panel for Complete Management
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            Our platform provides you with full control over payments, transfers, refunds, invoices, e-accounts, and much more. This versatility makes us one of the top choices for online payment solutions.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column - Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group flex gap-5 p-5 rounded-xl hover:bg-gradient-to-r 
                         hover:from-cyan-50 hover:to-blue-50 transition-all duration-300 
                         cursor-default border border-transparent hover:border-cyan-100"
              >
                {/* Icon with gradient background */}
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 
                                rounded-xl blur-md opacity-0 group-hover:opacity-50 
                                transition-opacity duration-300" />
                  <div className="relative w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 
                                rounded-xl flex items-center justify-center
                                group-hover:scale-110 transition-transform duration-300">
                    <i className={`fas ${feature.icon} text-white text-xl`} />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 
                               group-hover:text-cyan-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover indicator line */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 
                              bg-gradient-to-b from-cyan-500 to-blue-500 rounded-r
                              group-hover:h-16 transition-all duration-300" />
              </motion.div>
            ))}



          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-cyan-200 rounded-full 
                            blur-2xl opacity-60 animate-pulse" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-full 
                            blur-2xl opacity-60 animate-pulse delay-700" />

              {/* Main image with effects */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 
                              rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 
                              transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl
                              border-4 border-white/50">
                  <img
                    src={dcpImage}
                    alt="Dynamic Control Panel"
                    className="w-full transform group-hover:scale-105 transition-transform 
                             duration-700"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 
                                to-transparent opacity-0 group-hover:opacity-100 
                                transition-opacity duration-500" />
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-xl 
                              p-3 animate-bounce">
                  <i className="fas fa-check-circle text-green-500 text-xl" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-xl 
                              p-3 animate-bounce delay-300">
                  <i className="fas fa-chart-pie text-cyan-500 text-xl" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DynamicControlPanel;