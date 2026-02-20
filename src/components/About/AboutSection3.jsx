import React from "react";
import { FaLightbulb, FaShieldAlt, FaClock, FaUsers, FaHandshake } from "react-icons/fa";

const AboutSection3 = () => {
  const coreValues = [
    {
      icon: <FaLightbulb size={24} className="sm:size-30 text-white" />,
      title: "Innovation",
      description:
        "Continuously seeking and implementing cutting-edge technologies to enhance our offerings.",
      gradient: "bg-gradient-to-br from-indigo-600 to-purple-600",
    },
    {
      icon: <FaShieldAlt size={24} className="sm:size-30 text-white" />,
      title: "Security",
      description:
        "Protecting sensitive data and ensuring the highest level of security for all transactions.",
      gradient: "bg-gradient-to-br from-yellow-500 to-orange-500",
    },
    {
      icon: <FaClock size={24} className="sm:size-30 text-white" />,
      title: "Reliability",
      description:
        "Delivering consistent, dependable, and uninterrupted services.",
      gradient: "bg-gradient-to-br from-teal-500 to-cyan-500",
    },
    {
      icon: <FaUsers size={24} className="sm:size-30 text-white" />,
      title: "Customer Centricity",
      description: "Prioritizing the needs and satisfaction of our customers.",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-700",
    },
    {
      icon: <FaHandshake size={24} className="sm:size-30 text-white" />,
      title: "Integrity",
      description:
        "Adhering to ethical standards and maintaining transparency in our operations.",
      gradient: "bg-gradient-to-br from-pink-500 to-rose-600",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-5 bg-gray-100">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
        Core Values
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-8 max-w-6xl mx-auto">
        {coreValues.map((value, index) => {
          // Tailwind classes for exact grid placement on md and up
          let gridClass = "md:col-span-2";
          if (index === 0) gridClass += ""; // Default col-span-2 (cols 1-2)
          if (index === 1) gridClass += " md:col-start-3"; // cols 3-4
          if (index === 2) gridClass += " md:col-start-5"; // cols 5-6
          if (index === 3) gridClass += " md:col-start-2"; // cols 2-3
          if (index === 4) gridClass += " md:col-start-4"; // cols 4-5

          return (
            <div
              key={index}
              className={`rounded-xl p-4 sm:p-6 md:p-8 flex flex-col items-start shadow-lg transform transition-transform duration-300 hover:-translate-y-1 md:hover:-translate-y-2 hover:shadow-xl md:hover:shadow-2xl ${value.gradient} ${gridClass}`}
            >
              {value.icon}
              <h3 className="text-xl sm:text-2xl font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">{value.title}</h3>
              <p className="text-white text-sm leading-relaxed">{value.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutSection3;