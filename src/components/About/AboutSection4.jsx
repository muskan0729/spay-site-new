import React from "react";
import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaStore,
  FaGraduationCap,
  FaHeartbeat,
  FaPlane,
  FaRocket,
  FaRedoAlt,
} from "react-icons/fa";

const industries = [
  {
    icon: <FaShoppingCart />,
    title: "E-commerce",
    description:
      "Power your online store with a payment gateway built for high-volume retail transactions and seamless customer checkouts.",
    note: "Retail-ready",
  },
  {
    icon: <FaStore />,
    title: "Retail",
    description:
      "Whether you're running a physical store, a hybrid model, or moving online, SPay makes accepting digital payments effortless.",
    note: "Omnichannel",
  },
  {
    icon: <FaGraduationCap />,
    title: "Education",
    description:
      "Accept fees, course payments, and subscriptions without complexity for schools, edtech platforms, and coaching businesses alike.",
    note: "Recurring billing",
  },
  {
    icon: <FaHeartbeat />,
    title: "Healthcare",
    description:
      "Provide patients and clients with a secure, straightforward way to pay for services, consultations, and products online.",
    note: "Secure checkout",
  },
  {
    icon: <FaPlane />,
    title: "Travel & Hospitality",
    description:
      "Handle bookings, deposits, and cancellations with a payment solution that keeps up with the pace of the travel industry.",
    note: "Fast reservations",
  },
  {
    icon: <FaRocket />,
    title: "Startups & SMEs",
    description:
      "Built with growing businesses in mind. Affordable, scalable, and easy to get started with no enterprise contracts required.",
    note: "Scalable growth",
  },
];

const AboutSection4 = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-14 md:py-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
      <div className="absolute -top-20 right-0 h-56 w-56 rounded-full bg-blue-100/60 blur-3xl"></div>
      <div className="absolute -bottom-24 left-0 h-56 w-56 rounded-full bg-cyan-100/70 blur-3xl"></div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
           
          </span>
          <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Industries We Serve
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            SPay fits naturally into sectors where payment reliability affects revenue, customer trust, and daily operations.
          </p>
        </motion.div>

        <div className="mt-10 mx-auto grid max-w-4xl gap-4 grid-cols-1 md:grid-cols-2">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="h-full"
              >
                <div className="flex h-full min-h-[210px] flex-col rounded-3xl border border-gray-100 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(37,99,235,0.08)] text-[#2563EB] text-xl shrink-0">
                      {industry.icon}
                    </div>
                    <span className="rounded-full border border-gray-100 bg-gray-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-500">
                      {industry.note}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {industry.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray-600 flex-1">
                    {industry.description}
                  </p>

                  <div className="mt-5 h-px w-full bg-gray-100"></div>
                </div>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default AboutSection4;
