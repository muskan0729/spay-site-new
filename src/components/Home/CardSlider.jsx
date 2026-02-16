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

  return (
    <div className="relative w-full py-16 overflow-hidden">
      {/* Soft Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-blue-50" />
      
      {/* Subtle background orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Trusted by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600">
              Global Payment Networks
            </span>
          </h3>
        
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
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
              {/* Uniform Card Design */}
              <motion.div
                className="rounded-2xl p-6 cursor-pointer relative overflow-hidden
                         bg-white shadow-md border border-gray-100"
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
                {/* Clean hover overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-sky-50/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Logo Container - Uniform for all */}
                <div className="relative mb-4 flex justify-center">
                  <div className="relative w-20 h-20 rounded-xl flex items-center justify-center
                                bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
                    {/* Subtle glow on hover */}
                    <motion.div 
                      className="absolute inset-0 rounded-xl bg-blue-100"
                      animate={{
                        scale: hoveredIndex === index ? 1.2 : 0.8,
                        opacity: hoveredIndex === index ? 0.5 : 0
                      }}
                    />
                    
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="relative h-12 w-auto object-contain z-10
                               transition-transform duration-300
                               group-hover:scale-110"
                    />
                  </div>
                </div>
                
                {/* Brand Name */}
                <h4 className="text-center font-semibold text-gray-800 text-base mb-1
                             group-hover:text-blue-600 transition-colors relative z-10">
                  {logo.name}
                </h4>
                
                {/* Description */}
                <motion.p 
                  className="text-center text-xs text-gray-500 relative z-10"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 5
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {logo.description}
                </motion.p>

                {/* Clean bottom border on hover */}
                <motion.div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-sky-400"
                  initial={{ width: 0 }}
                  animate={{ width: hoveredIndex === index ? '60%' : 0 }}
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