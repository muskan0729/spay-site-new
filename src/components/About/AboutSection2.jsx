import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";

const AboutSection2 = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white py-12 sm:py-14 md:py-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Section Title */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Our Purpose
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">

          {/* Mission */}
          <motion.div
            className="relative bg-white p-7 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            whileHover={{ y: -6 }}
          >
            {/* Top Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-t-2xl"></div>

            <FaBullseye className="text-blue-600 text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Mission
            </h3>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Deliver secure, innovative, and scalable payment infrastructure
              that empowers businesses to operate effortlessly in the digital economy.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="relative bg-white p-7 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            whileHover={{ y: -6 }}
          >
            {/* Blue Gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-t-2xl"></div>

            <FaEye className="text-blue-600 text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Vision
            </h3>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Become the most trusted digital transaction partner by building
              technology that simplifies and strengthens global commerce.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection2;