import React, { useState } from "react";
import { motion } from "framer-motion";
import upi from "../../assets/images/upi.png";
import rupay from "../../assets/images/Rupay.png";
import mastercard from "../../assets/images/mastercard.png";
import visa from "../../assets/images/Visa_2021.svg.png";

const CardSlider = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const logos = [
    { src: upi, name: "UPI", description: "Instant Payments", padding: "p-2" },
    { src: rupay, name: "RuPay", description: "Domestic Cards", padding: "p-1.5" },
    { src: mastercard, name: "Mastercard", description: "Global Acceptance", padding: "p-1" },
    { src: visa, name: "Visa", description: "Worldwide", padding: "p-2" }
  ];

  const getLogoPadding = (logoName) => {
    switch (logoName) {
      case "UPI":
        return "p-3";
      case "RuPay":
        return "p-2.5";
      case "Mastercard":
        return "p-1.5";
      case "Visa":
        return "p-2.5";
      default:
        return "p-2";
    }
  };

  return (
    <div className="relative w-full py-12 sm:py-14 md:py-16 overflow-hidden">
      
      {/* Soft Blue Gradient Background */}
      <div className="absolute inset-0 bg-blue" />

      {/* Responsive background orbs */}
      <div className="absolute top-10 sm:top-20 left-[-80px] sm:left-20 w-72 sm:w-96 h-72 sm:h-96 bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-10 sm:bottom-20 right-[-80px] sm:right-20 w-72 sm:w-96 h-72 sm:h-96 bg-sky-100/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 leading-snug">
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600">
              Global Payment Networks
            </span>
          </h3>
        </motion.div>

        {/* Cards Grid */}
        <div className="
          grid 
          grid-cols-2 
          sm:grid-cols-2 
          md:grid-cols-4 
          gap-4 sm:gap-5 md:gap-6
        ">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="relative group"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="
                  rounded-2xl 
                  p-4 sm:p-5 md:p-6
                  cursor-pointer 
                  relative 
                  overflow-hidden
                  bg-white 
                  shadow-md 
                  border 
                  border-gray-100
                  transition-all
                "
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  boxShadow: "0 20px 30px -10px rgba(0, 100, 255, 0.2)",
                  borderColor: "#3b82f6",
                  backgroundColor: "#ffffff"
                }}
                animate={{
                  rotateY: hoveredIndex === index ? 3 : 0,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-sky-50/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Logo Container */}
                <div className="relative mb-3 sm:mb-4 flex justify-center">
                  <div
                    className="
                      relative 
                      w-20 h-20
                      sm:w-24 sm:h-24
                      md:w-24 md:h-24
                      rounded-xl 
                      flex 
                      items-center 
                      justify-center
                      bg-gradient-to-br 
                      from-gray-50 
                      to-gray-100 
                      border 
                      border-gray-200
                    "
                  >
                    {/* Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-blue-100"
                      animate={{
                        scale: hoveredIndex === index ? 1.2 : 0.8,
                        opacity: hoveredIndex === index ? 0.5 : 0
                      }}
                    />

                    <div
                      className={`w-full h-full flex items-center justify-center ${getLogoPadding(
                        logo.name
                      )}`}
                    >
                      <img
                        src={logo.src}
                        alt={logo.name}
                        className="
                          w-full 
                          h-full 
                          object-contain 
                          transition-transform 
                          duration-300
                          group-hover:scale-110
                        "
                        style={{
                          maxHeight:
                            logo.name === "Mastercard"
                              ? "80%"
                              : logo.name === "Visa"
                              ? "85%"
                              : logo.name === "RuPay"
                              ? "90%"
                              : "95%",
                          filter:
                            logo.name === "Visa"
                              ? "brightness(0.8)"
                              : "none"
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Brand Name */}
                <h4
                  className="
                    text-center 
                    font-semibold 
                    text-gray-800 
                    text-sm sm:text-base 
                    mb-1
                    group-hover:text-blue-600 
                    transition-colors 
                    relative 
                    z-10
                  "
                >
                  {logo.name}
                </h4>

                {/* Description */}
                <motion.p
                  className="
                    text-center 
                    text-xs 
                    sm:text-sm
                    text-gray-500 
                    relative 
                    z-10
                  "
                  initial={{ opacity: 0, y: 5 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 5
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {logo.description}
                </motion.p>

                {/* Bottom border animation */}
                <motion.div
                  className="
                    absolute 
                    bottom-0 
                    left-1/2 
                    transform 
                    -translate-x-1/2 
                    h-0.5 
                    bg-gradient-to-r 
                    from-blue-400 
                    to-sky-400
                  "
                  initial={{ width: 0 }}
                  animate={{ width: hoveredIndex === index ? "60%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
