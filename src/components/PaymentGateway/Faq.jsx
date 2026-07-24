import React, { useState } from "react";
import { FaPlus, FaMinus, FaArrowRight } from "react-icons/fa";


const faqs = [
  {
    question: "Which is the best payment gateway in Mumbai for startups and e-commerce businesses?",
    answer:
      "For startups, SMEs, and ecommerce businesses, the best payment gateway in Mumbai should offer secure payment processing, easy integration, multiple payment options, and reliable settlements. Spay provides a secure payment gateway in Mumbai and across India that supports UPI payments, cards, net banking, and digital wallets, helping businesses accept payments seamlessly while improving customer experience and transaction success rates.",
  },
  {
    question: "How can I integrate a payment gateway for my website in India?",
    answer:
      "Integrating a payment gateway for a website is simple with Spay. Businesses can use our API payment gateway, developer-friendly documentation, and ready-to-use integration tools to start accepting online payments quickly. Whether you run an ecommerce store, service platform, or custom website, Spay's payment gateway integration enables secure online payment collection with minimal development effort.",
  },
  {
    question: "Is Spay a secure payment gateway provider in India?",
    answer:
      "Yes. Spay is a secure payment gateway provider designed to help businesses process transactions safely and efficiently. Our payment infrastructure uses advanced encryption, fraud monitoring systems, and secure payment processing protocols to protect merchant and customer data. Businesses across Mumbai, Andheri, and India trust Spay for reliable and secure online payments.",
  },
  {
    question: "What is an instant settlement payment gateway and how does it help businesses?",
    answer:
      "An instant settlement payment gateway allows businesses to access their funds faster after successful transactions. This improves cash flow, simplifies financial planning, and helps businesses manage day-to-day operations more effectively. Spay's instant settlement payment gateway is built for modern businesses that need quick access to revenue without long settlement delays.",
  },
  {
    question: "Can developers use Spay's API payment gateway for websites and mobile apps?",
    answer:
      "Absolutely. Spay offers a powerful API payment gateway that enables developers to integrate secure payment acceptance into websites, mobile applications, SaaS platforms, and ecommerce stores. With flexible APIs, real-time transaction tracking, and seamless payment gateway integration, businesses can deliver a smooth checkout experience across multiple digital channels.",
  },
  {
    question: "Why do businesses choose Spay as their payment gateway provider in Mumbai and India?",
    answer:
      "Businesses choose Spay because it combines security, performance, and scalability in one complete online payment gateway solution. From startups in Andheri to growing enterprises across Mumbai and India, merchants benefit from multiple payment options, higher transaction success rates, fast settlements, dedicated support, and reliable fintech payment solutions designed for long-term business growth.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 md:py-20">
      <style>{`
        @keyframes faqContentReveal {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .faq-reveal {
          animation: faqContentReveal 280ms ease-out both;
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.09),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(29,78,216,0.08),transparent_36%)]" />
        <div className="absolute -top-28 right-0 h-72 w-72 rounded-full bg-blue-100/20 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-indigo-100/15 blur-3xl" />
        <div className="absolute left-1/2 top-10 h-52 w-52 -translate-x-1/2 rounded-full bg-cyan-100/15 blur-3xl" />
      </div>

      <div className="relative container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <p className="inline-flex items-center rounded-full border border-[#163f89]/15 bg-[#f6faff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#163f89] shadow-[0_8px_20px_rgba(15,23,42,0.05)] backdrop-blur">
            FAQ
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
            About Payment Gateway Services 
          </p>
          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-[#163f89] to-[#1099d0]" />
        </div>

        <div className="mx-auto max-w-5xl space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border bg-white/95 shadow-[0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur-sm transition duration-300 ${
                openIndex === index
                  ? "border-blue-200 shadow-[0_20px_42px_-24px_rgba(29,78,216,0.42)]"
                  : "border-slate-200 hover:border-slate-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
              }`}
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#1d4ed8] to-[#60a5fa] opacity-0 transition duration-300 group-hover:opacity-100" />

              <button
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
                className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition duration-300 hover:bg-blue-50/20 sm:px-7 md:px-8"
              >
                <div className="flex min-w-0 flex-1 items-start gap-4 pr-2">
                  <span
                    className={`mt-0.5 inline-flex h-8 min-w-8 items-center justify-center rounded-lg border text-xs font-bold tracking-wide sm:h-9 sm:min-w-9 sm:text-sm ${
                      openIndex === index
                        ? "border-blue-200 bg-gradient-to-br from-[#dbeafe] to-[#eff6ff] text-[#1d4ed8]"
                        : "border-blue-100 bg-blue-50 text-[#1d4ed8]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-xl font-semibold text-gray-900 leading-snug sm:text-lg">
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition duration-300 sm:h-11 sm:w-11 ${
                    openIndex === index
                      ? "bg-[#1d4ed8] text-white"
                      : "bg-gradient-to-br from-blue-100 to-blue-50 text-[#1d4ed8] group-hover:bg-[#1d4ed8] group-hover:text-white"
                  }`}
                >
                  {openIndex === index ? (
                    <FaMinus className="text-sm sm:text-base" />
                  ) : (
                    <FaPlus className="text-sm sm:text-base" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="faq-reveal border-t border-blue-100 bg-gradient-to-b from-blue-50/35 via-blue-50/10 to-white px-5 py-5 sm:px-7 md:px-8">
                  <p className="text-gray-600 text-sm leading-relaxed sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-5xl rounded-3xl border border-blue-200 bg-gradient-to-br from-[#eaf3ff] via-white to-[#eef2ff] p-6 text-center shadow-[0_26px_45px_-30px_rgba(29,78,216,0.45)] sm:mt-14 sm:p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
            Still have questions?
          </h3>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-4">
            Our support team is available 24/7 to assist you with any questions about our payment gateway solutions.
          </p>
         <a
  href="https://spay.live/contact-us"
  rel="noopener"
>
  <button className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 shadow-md transition">
    Contact Support
    <FaArrowRight className="text-xs" />
  </button>
</a>
        </div>
      </div>
    </section>
  );
};

export default Faq;
