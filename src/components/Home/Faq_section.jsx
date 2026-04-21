import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
import faq_img from "../../assets/images/faq1.jpg";
// import faq_bg from "../../assets/images/bg_white1.png";

const Faq_section = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is a payment gateway and how does it work?",
      answer:
        "A payment gateway is a system that allows businesses to accept online payments securely by connecting their platform with banks."
    },
    {
      question: "How can I get a payment gateway for my business in Mumbai?",
      answer:
        "You can get a payment gateway by signing up with a provider, submitting KYC documents, and integrating APIs into your website or app."
    },
    {
      question: "Which payment methods can I accept with your gateway?",
      answer:
        "You can accept UPI, debit cards, credit cards, net banking, and digital wallets."
    },
    {
      question: "Is online payment processing safe for businesses?",
      answer:
        "Yes, we provide secure payment systems that ensure safe and reliable transactions."
    },
    {
      question:
        "Do you offer payment gateway solutions for startups and small businesses?",
      answer:
        "Yes, we offer flexible and affordable solutions designed for startups and SMEs in Mumbai."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-10 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ✅ HEADING */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our payment solutions,
            integrations, and services.
          </p>
        </div>

        {/* ✅ GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 items-center ">

          {/* LEFT IMAGE */}
          <div className="relative flex justify-center md:justify-start  ">
            {/* <div className="absolute w-40 sm:w-52 md:w-60 h-40 sm:h-52 md:h-60 rounded-full blur-3xl"></div> */}

            <img
              src={faq_img}
              alt="FAQ Illustration"
              className="w-full h-auto object-cover "
            />
          </div>

          {/* RIGHT FAQ */}
          <div className="space-y-4 md:pr-16">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden border-t border-r border-gray-200"
                style={{
                  borderRight: "5px solid #b3e9f3",
                  borderBottom: "3px solid #9fc2fa"
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-4 sm:p-5 text-left"
                >
                  <span className="text-sm sm:text-base font-medium text-[#103097] pr-3">
                    {faq.question}
                  </span>

                  <span className="text-lg sm:text-xl text-[#103097]">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm sm:text-base text-gray-600"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Faq_section;