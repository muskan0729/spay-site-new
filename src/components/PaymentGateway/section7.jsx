import React from "react";
import {
  FaHeadset,
  FaTag,
  FaRocket,
  FaIndustry,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

const reasons = [
  {
    number: "01",
    title: "Dedicated Account Support",
    description:
      "24/7 support via chat, email, and phone with a real person who knows your account not a bot. Merchants across Mumbai, Andheri, and India always have a dedicated team ready to help instantly.",
    icon: FaHeadset,
  },
  {
    number: "02",
    title: "Transparent Pricing",
    description:
      "No hidden fees, no surprises just a simple pay-only-for-what-you-use model with flexible pricing for high-growth businesses. What you see is exactly what you pay, always.",
    icon: FaTag,
  },
  {
    number: "03",
    title: "Fast Onboarding",
    description:
      "Go live in 24 to 48 hours with our integration team in Andheri, Mumbai making the entire process smooth and fast. From KYC to API integration we handle it all so you can focus on your business.",
    icon: FaRocket,
  },
  {
    number: "04",
    title: "Multi-Industry Expertise",
    description:
      "From adtech and healthcare to retail and logistics we understand your industry's unique payment needs across India. Our merchant payment gateway solutions are tailored to your sector, never generic.",
    icon: FaIndustry,
  },
  {
    number: "05",
    title: "Bank-Grade Security",
    description:
      "PCI-DSS Level 1 certified with 256-bit encryption and tokenisation on every transaction the highest global security standard. Merchants in Mumbai, Andheri, and across India process payments with complete peace of mind.",
    icon: FaShieldAlt,
  },
  {
    number: "06",
    title: "Real-Time Reporting",
    description:
      "Live dashboards, settlement tracking, and detailed analytics help merchants across Mumbai and India monitor every transaction instantly. You always know exactly where your money is no digging, no guesswork.",
    icon: FaChartLine,
  },
];

const Section7 = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fbff] via-white to-[#eff6ff] py-14 sm:py-16 md:py-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1d4ed8]/4 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <h2 className="text-3xl font-semibold leading-tight text-[#0d2447] sm:text-4xl [font-family:Georgia,Times_New_Roman,serif]">
            Why Businesses Trust Spay Fintech
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#5a6f90] sm:text-base">
            We are not just another payment gateway provider. We are a full-stack
            fintech payment solutions company with a team that cares deeply about
            your success.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {reasons.map((reason) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={reason.number}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] sm:p-7 md:p-8"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="mb-6">
                  <div className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-50 px-3 py-1.5 ring-1 ring-blue-200/50">
                    <span className="text-2xl font-black text-[#163f89]">
                      {reason.number}
                    </span>
                  </div>
                </div>

                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eff5ff] text-[#163f89] transition duration-300 group-hover:bg-[#163f89] group-hover:text-white">
                  <IconComponent className="text-lg sm:text-xl" />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-[#0d2447] sm:text-xl">
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#3a4c70] sm:text-base">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Section7;
