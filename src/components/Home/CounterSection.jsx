import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import clogo1 from "../../assets/images/clogo1.png";
import clogo2 from "../../assets/images/clogo2.png";
import clogo3 from "../../assets/images/clogo3.png";

const CounterSection = () => {
  const [counts, setCounts] = useState({
    success: 0,
    uptime: 0,
    visitors: 0
  });

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    const targets = {
      success: 89.9,
      uptime: 99.9,
      visitors: 56900
    };

    let current = { success: 0, uptime: 0, visitors: 0 };
    const speed = 20;
    const steps = 60;

    const timer = setInterval(() => {
      let completed = 0;

      if (current.success < targets.success) {
        current.success = Math.min(current.success + (targets.success / steps), targets.success);
      } else {
        completed++;
      }

      if (current.uptime < targets.uptime) {
        current.uptime = Math.min(current.uptime + (targets.uptime / steps), targets.uptime);
      } else {
        completed++;
      }

      if (current.visitors < targets.visitors) {
        current.visitors = Math.min(current.visitors + (targets.visitors / steps), targets.visitors);
      } else {
        completed++;
      }

      setCounts({ ...current });

      if (completed === 3) {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [isInView]);

  const counters = [
    {
      icon: clogo2,
      title: "Success Rate",
      value: counts.success.toFixed(1),
      suffix: "%"
    },
    {
      icon: clogo1,
      title: "Uptime",
      value: counts.uptime.toFixed(1),
      suffix: "%"
    },
    {
      icon: clogo3,
      title: "Visitor Count",
      value: (counts.visitors / 1000).toFixed(1),
      suffix: "K"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={sectionRef} className="relative py-20 md:py-24 overflow-hidden">
      {/* Top gradient to blend with CardSlider */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-50 to-transparent z-10" />
      
      {/* Beautiful gradient background behind cards */}
      <div className="absolute inset-0">
        {/* Base gradient - adjusted to start from blue-50 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-purple-50/30" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-gradient-to-r from-blue-200/40 to-indigo-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-gradient-to-r from-purple-200/40 to-pink-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl" />
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '150px 150px'
          }} />
        </div>
      </div>

      {/* Very subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #2563eb 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Growing Businesses
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        {/* Counter Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {counters.map((counter, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Professional Card Design */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl 
                            transition-all duration-300 group-hover:shadow-2xl
                            border border-white/50 overflow-hidden">

                {/* Subtle top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon Container */}
                <div className="relative mb-6 flex justify-center">
                  <div className="relative w-28 h-28 rounded-full flex items-center justify-center
                                bg-gradient-to-br from-white to-gray-50 border border-gray-200
                                group-hover:border-blue-200 transition-all duration-300 shadow-md">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90" />
                    <img
                      src={counter.icon}
                      alt={counter.title}
                      className="relative h-20 w-20 object-contain z-10
                               transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-center text-lg font-medium text-gray-700 mb-3
                             group-hover:text-gray-900 transition-colors">
                  {counter.title}
                </h3>

                {/* Value */}
                <div className="text-center">
                  <span className="text-4xl md:text-5xl font-bold text-gray-800">
                    {counter.value}
                  </span>
                  <span className="text-2xl font-semibold text-gray-500 ml-1">
                    {counter.suffix}
                  </span>
                </div>

                {/* Minimal hover indicator */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 
                              bg-gradient-to-r from-blue-500 to-indigo-500 
                              group-hover:w-12 transition-all duration-300" />
              </div>

              {/* Subtle shadow on hover */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 
                            rounded-3xl blur-xl opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CounterSection;