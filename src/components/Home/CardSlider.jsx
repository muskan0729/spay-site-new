import React, { useState } from "react";
import { motion } from "framer-motion";
import upi from "../../assets/images/upi.png";
import rupay from "../../assets/images/Rupay.png";
import mastercard from "../../assets/images/mastercard.png";
import visa from "../../assets/images/Visa_2021.svg.png";

const CardSlider = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const logos = [
    { src: upi, name: "UPI", description: "Instant Payments" },
    { src: rupay, name: "RuPay", description: "Domestic Cards" },
    { src: mastercard, name: "Mastercard", description: "Global Acceptance" },
    { src: visa, name: "Visa", description: "Worldwide" }
  ];

  const getLogoPadding = (logoName) => {
    switch (logoName) {
      case "UPI":
        return "p-2.5";
      case "RuPay":
        return "p-2";
      case "Mastercard":
        return "p-1.5";
      case "Visa":
        return "p-2";
      default:
        return "p-2";
    }
  };

  return (
    <div className="relative w-full py-8 sm:py-10 md:py-12 overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-10 left-[-60px] w-60 h-60 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-[-60px] w-60 h-60 bg-sky-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600">
              Global Payment Networks
            </span>
          </h3>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="relative group"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="
                  rounded-xl 
                  p-3 sm:p-4
                  bg-white 
                  shadow-sm 
                  border 
                  border-gray-100
                  transition-all
                  cursor-pointer
                "
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  boxShadow: "0 15px 25px -10px rgba(0, 100, 255, 0.15)",
                  borderColor: "#3b82f6"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Logo */}
                <div className="mb-3 flex justify-center">
                  <div
                    className="
                      w-16 h-16
                      sm:w-20 sm:h-20
                      rounded-lg 
                      flex items-center justify-center
                      bg-gray-50
                      border border-gray-200
                    "
                  >
                    <div
                      className={`w-full h-full flex items-center justify-center ${getLogoPadding(
                        logo.name
                      )}`}
                    >
                      <img
                        src={logo.src}
                        alt={logo.name}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* Brand Name */}
                <h4 className="text-center font-semibold text-gray-800 text-sm sm:text-base mb-1 group-hover:text-blue-600 transition-colors">
                  {logo.name}
                </h4>

                {/* Description */}
                <motion.p
                  className="text-center text-xs text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {logo.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSlider;