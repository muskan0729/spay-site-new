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

    const targets = { success: 89.9, uptime: 99.9, visitors: 56900 };
    let current = { success: 0, uptime: 0, visitors: 0 };
    const speed = 20;
    const steps = 60;

    const timer = setInterval(() => {
      current.success = Math.min(current.success + targets.success / steps, targets.success);
      current.uptime = Math.min(current.uptime + targets.uptime / steps, targets.uptime);
      current.visitors = Math.min(current.visitors + targets.visitors / steps, targets.visitors);

      setCounts({ ...current });

      if (
        current.success >= targets.success &&
        current.uptime >= targets.uptime &&
        current.visitors >= targets.visitors
      ) clearInterval(timer);
    }, speed);

    return () => clearInterval(timer);
  }, [isInView]);

  const counters = [
    { icon: clogo2, title: "Success Rate", value: counts.success.toFixed(1), suffix: "%" },
    { icon: clogo1, title: "Uptime", value: counts.uptime.toFixed(1), suffix: "%" },
    { icon: clogo3, title: "Visitor Count", value: (counts.visitors / 1000).toFixed(1), suffix: "K" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-14 sm:py-16 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50/40 to-purple-50/20"
    >
      <div className="container mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Growing Businesses
            </span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 60 } : {}}
            transition={{ duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Counter Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {counters.map((counter, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Icon */}
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={counter.icon}
                  alt={counter.title}
                  className="h-16 w-16 object-contain"
                />
              </motion.div>

              {/* Title */}
              <h3 className="text-center text-sm sm:text-base font-medium text-gray-600 mb-2">
                {counter.title}
              </h3>

              {/* Value with pop animation */}
              <motion.div
                key={counter.value}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <span className="text-3xl sm:text-4xl font-bold text-gray-800">
                  {counter.value}
                </span>
                <span className="text-lg font-semibold text-gray-500 ml-1">
                  {counter.suffix}
                </span>
              </motion.div>

              {/* Bottom Accent */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "40%" }}
                transition={{ duration: 0.3 }}
                className="h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CounterSection;