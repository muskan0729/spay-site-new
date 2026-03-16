import React from "react";
import {
  FaLightbulb,
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaHandshake,
} from "react-icons/fa";

const AboutSection3 = () => {
  const coreValues = [
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description:
        "Continuously implementing cutting-edge technologies to enhance our offerings.",
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-500",
    },
    {
      icon: <FaShieldAlt />,
      title: "Security",
      description:
        "Protecting sensitive data with the highest level of transaction security.",
      color: "text-cyan-600",
      bg: "bg-cyan-50",
      border: "border-cyan-500",
    },
    {
      icon: <FaClock />,
      title: "Reliability",
      description:
        "Delivering consistent, dependable, and uninterrupted services.",
      color: "text-blue-700",
      bg: "bg-blue-100",
      border: "border-blue-600",
    },
    {
      icon: <FaUsers />,
      title: "Customer Centricity",
      description:
        "Prioritizing customer needs and long-term satisfaction.",
      color: "text-sky-600",
      bg: "bg-sky-50",
      border: "border-sky-500",
    },
    {
      icon: <FaHandshake />,
      title: "Integrity",
      description:
        "Maintaining transparency and strong ethical standards in operations.",
      color: "text-blue-500",
      bg: "bg-blue-50",
      border: "border-blue-400",
    },
  ];

  return (
    <section className="py-14 md:py-16 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Core Values
        </h2>

        {/* Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {coreValues.slice(0, 3).map((value, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 border-t-4 ${value.border}
              shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div
                className={`w-11 h-11 flex items-center justify-center rounded-lg 
                ${value.bg} ${value.color} text-lg mb-4`}
              >
                {value.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {coreValues.slice(3).map((value, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 border-t-4 ${value.border}
              shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1
              w-full sm:w-[48%] lg:w-[32%]`}
            >
              <div
                className={`w-11 h-11 flex items-center justify-center rounded-lg 
                ${value.bg} ${value.color} text-lg mb-4`}
              >
                {value.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection3;