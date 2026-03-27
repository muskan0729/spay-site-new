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
    { icon: clogo3, title: "Visitor Count", value: (counts.visitors / 1000).toFixed(1), suffix: "K+" }
  ];

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
      className="bg-[#12319b] py-8 sm:py-10 mt-5"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ✅ Responsive Layout */}
        <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between items-center gap-6 sm:gap-4">

          {counters.map((counter, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex items-center gap-3 w-[45%] sm:w-auto justify-start sm:justify-center"
            >

              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 rounded-full bg-white flex items-center justify-center">
                <img
                  src={counter.icon}
                  alt={counter.title}
                  className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain"
                />
              </div>

              {/* Text */}
              <div className="text-white text-left">
                <h3 className="text-xs sm:text-sm font-medium opacity-90">
                  {counter.title}
                </h3>

                <div className="flex items-center">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    {counter.value}
                  </span>
                  <span className="ml-1 text-2xl sm:text-3xl md:text-4xl font-extrabold">
                    {counter.suffix}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CounterSection;