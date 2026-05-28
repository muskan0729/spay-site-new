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

  return (
    <section
      ref={sectionRef}
      className="relative py-16 mt-1 overflow-hidden "
    >

      {/* 🔵 Soft Background Blobs */}
      {/* <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 opacity-20 rounded-full blur-3xl"></div> */}
      {/* <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200 opacity-20 rounded-full blur-3xl"></div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gray-100 backdrop-blur-md border border-blue-100 rounded-3xl shadow-xl p-6 sm:p-8"
        >

          {/* FLEX ROW */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-8">

            {counters.map((counter, index) => (
              <div
                key={index}
                className="flex items-center gap-4 w-full sm:w-auto justify-center"
              >

                {/* Blue Circle */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center shadow-md">
                  <img
                    src={counter.icon}
                    alt={counter.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-sm font-medium text-gray-600">
                    {counter.title}
                  </h3>

                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-gray-900">
                      {counter.value}
                    </span>
                    <span className="ml-1 text-3xl font-bold text-blue-600">
                      {counter.suffix}
                    </span>
                  </div>
                </div>

              </div>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default CounterSection;