import React from "react";
import {
  FaShieldAlt,
  FaBalanceScale,
  FaClock,
  FaUserShield,
  FaHeadset,
} from "react-icons/fa";

const trustPoints = [
  {
    icon: FaShieldAlt,
    title: "Secure Payment Processing",
    description:
      "Spay follows industry-standard security practices to help protect transaction data during payment processing. Our systems are designed to support safe and reliable digital payments for businesses and their customers.",
  },
  {
    icon: FaBalanceScale,
    title: "Regulatory-Focused Operations",
    description:
      "Spay works within the evolving framework of India's digital payments ecosystem. We continuously align our processes with applicable industry and regulatory requirements to support responsible payment operations.",
  },
  {
    icon: FaClock,
    title: "Reliable Platform Performance",
    description:
      "A dependable payment experience is critical for business growth. Spay's infrastructure is designed to support consistent transaction processing and smooth payment acceptance across multiple payment methods.",
  },
  {
    icon: FaUserShield,
    title: "Risk Monitoring & Fraud Prevention",
    description:
      "Our platform incorporates transaction monitoring mechanisms to help identify unusual activity and reduce payment-related risks. This helps businesses maintain secure payment operations while providing a better customer experience.",
  },
  {
    icon: FaHeadset,
    title: "Dedicated Merchant Support",
    description:
      "Our support team is available to assist merchants with onboarding, payment-related queries, and operational guidance. We focus on providing timely assistance to help businesses keep their payment processes running smoothly.",
  },
];

const Section5 = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fbff] via-white to-[#f4f8ff] py-16 sm:py-20 lg:py-24">
      <style>
        {`
          @keyframes trustAppear {
            from {
              opacity: 0;
              transform: translateY(16px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes trustOrb {
            0%, 100% {
              transform: translateY(0px);
              opacity: 0.28;
            }
            50% {
              transform: translateY(-10px);
              opacity: 0.72;
            }
          }

          .trust-appear {
            animation: trustAppear 740ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
          }

          .trust-orb {
            animation: trustOrb 6.2s ease-in-out infinite;
          }

          @keyframes bandShimmer {
            0% {
              opacity: 0;
              transform: translateX(-8px);
            }
            40% {
              opacity: 0.7;
            }
            100% {
              opacity: 0;
              transform: translateX(8px);
            }
          }

          .band-shimmer::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.45) 50%, transparent 70%);
            opacity: 0;
          }

          .band-shimmer:hover::after {
            animation: bandShimmer 900ms ease-out;
          }
        `}
      </style>

      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#163f89]/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#1099d0]/8 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#163f89]/6 via-transparent to-[#1099d0]/6 blur-3xl trust-orb" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
        <div className="trust-appear mx-auto max-w-4xl text-center" style={{ animationDelay: "80ms" }}>
          <span className="inline-flex rounded-full border border-[#dce8f7] bg-[#edf3ff] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1f56aa]">
            Trust & Security
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
           A Payment Infrastructure Businesses Can Rely On
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
            Security, reliability, and compliance are essential for every online transaction.
          </p>
        </div>

        {/* <div className="trust-appear mt-8 flex flex-wrap items-center justify-center gap-2" style={{ animationDelay: "120ms" }}>
          <span className="rounded-full border border-[#dce7f6] bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5d759b]">PCI-DSS Level 1</span>
          <span className="rounded-full border border-[#dce7f6] bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5d759b]">RBI Compliant</span>
          <span className="rounded-full border border-[#dce7f6] bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5d759b]">99.9% Uptime</span>
          <span className="rounded-full border border-[#dce7f6] bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5d759b]">Real-time Fraud Shield</span>
          <span className="rounded-full border border-[#dce7f6] bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5d759b]">24/7 Support</span>
        </div> */}

        <div className="relative mt-10 space-y-4 lg:space-y-5">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            const shiftClass = index % 2 === 0 ? "lg:mr-12" : "lg:ml-12";

            return (
              <article
                key={point.title}
                className={`trust-appear band-shimmer relative overflow-hidden rounded-[1.6rem] border border-[#dce7f6] bg-white p-5 shadow-[0_16px_36px_-32px_rgba(20,54,111,0.18)] transition-all duration-300 hover:border-[#c8daf5] hover:shadow-[0_20px_40px_-34px_rgba(16,63,136,0.18)] sm:p-6 ${shiftClass}`}
                style={{ animationDelay: `${170 + index * 85}ms` }}
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-[#155DFC]" />
                <div className="absolute right-4 top-3 text-[2.4rem] font-semibold leading-none text-[#dce7fb] [font-family:Georgia,Times_New_Roman,serif]">
                  {/* 0{index + 1} */}
                </div>

                <div className="relative z-10 flex items-start gap-4">
                  <div className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#155DFC] text-white shadow-[0_14px_24px_-18px_rgba(22,63,137,0.55)] ring-1 ring-white/60">
                    <Icon className="text-lg" />
                  </div>

                  <div className="min-w-0">
                    <div className="mb-2 inline-flex rounded-full bg-[#eff5ff] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#2b5ca9]">
                      Trust layer
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-snug">
                      {point.title}
                    </h3>
                    <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Section5;
