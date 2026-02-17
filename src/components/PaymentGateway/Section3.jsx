import React from "react";
import bgImage from "../../assets/images/pgbg8.webp";

const Section3 = () => {
  const reasons = [
    {
      icon: "fas fa-chart-pie",
      title: "Deep Transaction Insights",
      text: "Get complete visibility into every payment — who, when, how much, and success rate.",
    },
    {
      icon: "fas fa-sync-alt",
      title: "Real-time Analytics",
      text: "Monitor performance, detect anomalies, and make decisions instantly.",
    },
    {
      icon: "fas fa-chart-line",
      title: "Smart Revenue Tools",
      text: "Detailed breakdowns, trend analysis, and tools to maximize your earnings.",
    },
  ];

  return (
    <section 
      className="relative py-16 md:py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12 md:mb-16">
          Why Businesses Choose Spay
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((item, i) => (
            <div 
              key={i}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 md:p-8 text-white hover:bg-white/20 transition-all duration-300"
            >
              <i className={`${item.icon} text-4xl text-blue-300 mb-5 block`}></i>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-200 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;