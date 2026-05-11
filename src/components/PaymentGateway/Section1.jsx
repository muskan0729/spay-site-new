import React from "react";
import bgImage from "../../assets/images/bg4.webp";
import paymentGateway from "../../assets/images/spay-gateway-3.png";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const Section1 = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fbff] via-white to-[#eef5ff]">
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .hero-fade-up {
          animation: heroFadeUp 700ms ease-out both;
        }

        .hero-float {
          animation: heroFloat 6s ease-in-out infinite;
        }
      `}</style>

      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.1),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.08),transparent_35%)]" />

      <div className="relative container mx-auto px-4 sm:px-6 py-14 md:py-20 lg:py-5">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div className="text-center lg:pr-2 lg:text-left">
            <div className="hero-fade-up inline-flex items-center gap-2 border-l-2 border-[#1099d0] pl-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#163f89] shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
              <FaCheckCircle className="text-[#2563eb]" />
              Trusted Payment Gateway in India
            </div>

            <h1 className="hero-fade-up mt-6 text-[2.1rem] font-medium leading-[1.15] text-[#0d2447] sm:text-5xl lg:text-[2.75rem] [font-family:Georgia,Times_New_Roman,serif]" style={{ animationDelay: "80ms" }}>
              The Smartest <span className="italic text-[#1d4c9a]">Payment Gateway</span> in India for Growing Businesses
            </h1>

            <p className="hero-fade-up mx-auto mt-4 max-w-2xl text-[1.03rem] leading-relaxed text-[#3a4c70] md:text-lg lg:mx-0" style={{ animationDelay: "140ms" }}>
              Looking for a reliable payment gateway in India to accept payments smoothly?
              We are a trusted payment gateway provider built specifically for the Indian market. From startups in Mumbai to enterprises across India, businesses rely on Spay Fintech to process payments securely, settle funds instantly, and keep customers coming back. 
            </p>

            <a
              href="https://spay.live/sign-up"
              className="hero-fade-up mt-8 inline-flex items-center gap-2 rounded-2xl bg-[#1d4ed8] px-6 py-4 text-base font-semibold text-white shadow-[0_16px_30px_rgba(29,78,216,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1942bf]"
              style={{ animationDelay: "220ms" }}
            >
              100+ Payment Modes Supported
              <FaArrowRight />
            </a>
          </div>

          <div className="hero-fade-up mx-auto w-full max-w-xl lg:max-w-none hero-float" style={{ animationDelay: "60ms" }}>
            <div className="relative overflow-hidden ]">
              
              <img
                src={paymentGateway}
                alt="Spay online payment gateway dashboard"
                className="h-[420px] w-full rounded-[1.4rem] object-cover sm:h-[430px] lg:h-[430px]"
              />

              {/* <div className="absolute inset-x-8 bottom-4 rounded-2xl border border-blue-100 bg-white/95 px-4 py-3 text-center shadow-[0_12px_28px_rgba(15,23,42,0.09)] backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#163f89]">
                  Built for Modern Checkout
                </p>
                <p className="mt-1 text-base font-semibold text-[#0d2447] sm:text-lg">
                  Secure. Fast. Scalable.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;