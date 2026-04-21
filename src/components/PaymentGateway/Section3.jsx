import React from "react";
import {
  FaBolt,
  FaCreditCard,
  FaFingerprint,
  FaQrcode,
  FaRandom,
  FaShoppingCart,
} from "react-icons/fa";

const Section3 = () => {
  const solutions = [
    {
      icon: FaCreditCard,
      title: "Online Payment Gateway",
      description:
        "Accept payments seamlessly across UPI, cards, net banking, and wallets with our powerful online payment gateway. Designed for speed, security, and high success rates ensuring every transaction is smooth and reliable.",
    },
    {
      icon: FaQrcode,
      title: "UPI Payment Gateway",
      description:
        "Accept real-time UPI payments via QR codes, VPA, and UPI Autopay. Our UPI payment gateway is built for speed and reliability customers pay in seconds, you get notified instantly.",
    },
    {
      icon: FaFingerprint,
      title: "AEPS Payment Gateway",
      description:
        "Our Aadhaar Enabled Payment System solution is perfect for banking correspondents, micro-ATM operators, and merchants serving rural India. Simple, biometric-based, and completely secure.",
    },
    {
      icon: FaBolt,
      title: "BBPS Payment Gateway",
      description:
        "Collect utility bills, insurance premiums, loan repayments, and subscriptions through our Bharat Bill Payment System integration a standardised, trusted channel your customers already know.",
    },
    {
      icon: FaShoppingCart,
      title: "E-commerce Payment Gateway",
      description:
        "Built specifically for online stores. Our e-commerce payment gateway supports smart retries, EMI options, one-click checkout, and seamless plugin support for WooCommerce, Shopify, and Magento.",
    },
    {
      icon: FaRandom,
      title: "Multi Payment Gateway Solution",
      description:
        "Optimize payment success with our multi payment gateway solution that intelligently routes transactions through multiple providers. Reduce failures, improve success rates, and ensure uninterrupted payment processing for your business.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 md:py-20" data-section="payment-gateway-solutions">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#4aa3ff]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#003e9f]/15 blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-5xl text-left">
          <h2 className="text-2xl font-medium leading-tight text-[#0d2447] sm:text-3xl md:text-4xl [font-family:Georgia,Times_New_Roman,serif]">
            Our Complete Payment Gateway Solutions
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#3a4c70] sm:text-base">
           Why juggle five different vendors when one platform can do it all? Spay Fintech offers a truly complete multi payment gateway solution that covers every payment method your customers use
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {solutions.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_20px_-16px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_38px_-22px_rgba(29,78,216,0.45)] sm:p-6"
            >
              <div className="absolute inset-x-5 top-0 h-0.5 bg-gradient-to-r from-transparent via-blue-300/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:inset-x-6" />

              <div className="flex items-start gap-3">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-[#eff6ff] text-[#1d4ed8] transition-colors duration-300 group-hover:bg-[#dbeafe]">
                  <Icon className="text-sm" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[1rem] font-semibold leading-snug text-[#0d2447] sm:text-[1.03rem]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#3a4c70]">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;