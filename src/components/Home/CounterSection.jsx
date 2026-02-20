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
    <section ref={sectionRef} className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Top gradient to blend with CardSlider */}
      <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-blue-50 to-transparent z-10" />

      {/* Beautiful gradient background behind cards */}
      <div className="absolute inset-0">
        {/* Base gradient - adjusted to start from blue-50 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-purple-50/30" />

        {/* Animated gradient orbs - responsive sizing */}
        <div className="absolute top-0 -left-20 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-gradient-to-r from-blue-200/40 to-indigo-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-gradient-to-r from-purple-200/40 to-pink-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl" />

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

      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Section Header - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white-300 mb-3 sm:mb-4 px-4">
            Trusted by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block sm:inline mt-2 sm:mt-0">
              Growing Businesses
            </span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        {/* Counter Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
        >
          {counters.map((counter, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Professional Card Design */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl 
                            transition-all duration-300 group-hover:shadow-2xl
                            border border-white/50 overflow-hidden h-full">

                {/* Subtle top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon Container - Larger size with responsive adjustments */}
                <div className="relative mb-4 sm:mb-6 flex justify-center">
                  <img
                    src={counter.icon}
                    alt={counter.title}
                    className="relative h-24 sm:h-28 md:h-32 w-24 sm:w-28 md:w-32 object-contain z-10
                               transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3 className="text-center text-base sm:text-lg font-medium text-gray-700 mb-2 sm:mb-3
                             group-hover:text-gray-900 transition-colors px-2">
                  {counter.title}
                </h3>

                {/* Value - Responsive font sizes */}
                <div className="text-center">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
                    {counter.value}
                  </span>
                  <span className="text-xl sm:text-2xl font-semibold text-gray-500 ml-1">
                    {counter.suffix}
                  </span>
                </div>

                {/* Minimal hover indicator */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 
                              bg-gradient-to-r from-blue-500 to-indigo-500 
                              group-hover:w-8 sm:group-hover:w-12 transition-all duration-300" />
              </div>

              {/* Subtle shadow on hover */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 
                            rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CounterSection;