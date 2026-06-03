import React, { useState } from "react";
import { FaPlus, FaMinus, FaArrowRight } from "react-icons/fa";


const faqs = [
  {
    question: "What is the best payment gateway in India for small and medium businesses?",
    answer:
      "Spay Fintech Private Limited, headquartered in Andheri, Mumbai, is one of India's most reliable payment gateway providers for SMBs. We support UPI, cards, net banking, AEPS, BBPS, and wallets all from a single, easy-to-use dashboard. Businesses across Mumbai and pan-India trust us for high success rates, instant settlement, and 24/7 support.",
  },
  {
    question: "How does Spay Fintech ensure secure online transactions for merchants?",
    answer:
      "Spay Fintech's secure payment gateway uses PCI-DSS Level 1 certification, 256-bit SSL encryption, and 3D Secure authentication on every transaction. Our AI-based fraud detection runs in real time, keeping merchants in Andheri, Mumbai, and across India fully protected. Your customers' payment data is never stored on public servers security is built into every layer.",
  },
  {
    question: "Does Spay Fintech offer UPI, AEPS, and BBPS payment gateway solutions?",
    answer:
      "Yes, Spay Fintech offers a complete multi payment gateway solution covering UPI, AEPS, and BBPS under one single integration. From real-time UPI collections to Bharat Bill Payments, merchants in Mumbai, Andheri, and across India manage all digital payments from one platform. No need to manage multiple vendors or separate dashboards.",
  },
  {
    question: "How quickly can I integrate Spay Fintech's API payment gateway?",
    answer:
      "Spay Fintech's API payment gateway comes with ready-made SDKs, WooCommerce and Shopify plugins, and full Paytm payment integration support so most merchants go live within 24 to 48 hours. Our integration team, based in Andheri, Mumbai, provides hands-on technical support throughout the process. A sandbox environment is available for testing before you go live.",
  },
  {
    question: "Does Spay Fintech offer instant settlement for merchants in India?",
    answer:
      "Yes, Spay Fintech is one of the few instant settlement payment gateway providers in India, offering T+0 same-day fund credit for eligible merchants. Businesses in Mumbai, Andheri, and pan-India benefit from faster cash flow, real-time payment processing, and full settlement transparency via the merchant dashboard. No more waiting two to three days for money that is already yours.",
  },
  {
    question: "Why should Mumbai businesses choose Spay Fintech as their payment gateway provider?",
    answer:
      "Spay Fintech Private Limited is based in Andheri, Mumbai giving local businesses the rare advantage of a payment gateway provider they can actually meet in person. We offer in-person onboarding, Maharashtra compliance support, and 24/7 merchant assistance for businesses across Andheri, Bandra, Navi Mumbai, and Thane. Combined with pan-India reach and enterprise-grade fintech infrastructure, we are Mumbai's most trusted payment gateway partner.",
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
