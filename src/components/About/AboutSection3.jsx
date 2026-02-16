import React from "react";
import { FaLightbulb, FaShieldAlt, FaClock, FaUsers, FaHandshake } from "react-icons/fa";

const AboutSection3 = () => {
  const coreValues = [
    {
      icon: <FaLightbulb size={30} className="text-white" />,
      title: "Innovation",
      description:
        "Continuously seeking and implementing cutting-edge technologies to enhance our offerings.",
      gradient: "bg-gradient-to-br from-indigo-600 to-purple-600",
    },
    {
      icon: <FaShieldAlt size={30} className="text-white" />,
      title: "Security",
      description:
        "Protecting sensitive data and ensuring the highest level of security for all transactions.",
      gradient: "bg-gradient-to-br from-yellow-500 to-orange-500",
    },
    {
      icon: <FaClock size={30} className="text-white" />,
      title: "Reliability",
      description:
        "Delivering consistent, dependable, and uninterrupted services.",
      gradient: "bg-gradient-to-br from-teal-500 to-cyan-500",
    },
    {
      icon: <FaUsers size={30} className="text-white" />,
      title: "Customer Centricity",
      description: "Prioritizing the needs and satisfaction of our customers.",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-700",
    },
    {
      icon: <FaHandshake size={30} className="text-white" />,
      title: "Integrity",
      description:
        "Adhering to ethical standards and maintaining transparency in our operations.",
      gradient: "bg-gradient-to-br from-pink-500 to-rose-600",
    },
  ];

  return (
    <section className="py-20 px-5 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Core Values
      </h2>
      <div className="grid grid-cols-6 gap-8 max-w-6xl mx-auto">
        {coreValues.map((value, index) => {
          // Tailwind classes for exact grid placement
          let gridClass = "";
          if (index === 0) gridClass = "col-span-2"; // 1
          if (index === 1) gridClass = "col-start-3 col-span-2"; // 2
          if (index === 2) gridClass = "col-start-5 col-span-2"; // 3
          if (index === 3) gridClass = "col-start-2 col-span-2"; // 4
          if (index === 4) gridClass = "col-start-4 col-span-2"; // 5

          return (
            <div
              key={index}
              className={`rounded-xl p-8 flex flex-col items-start shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl ${value.gradient} ${gridClass}`}
            >
              {value.icon}
              <h3 className="text-2xl font-semibold mt-4 mb-2">{value.title}</h3>
              <p className="text-white text-sm leading-relaxed">{value.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutSection3;
