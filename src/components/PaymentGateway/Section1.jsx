import React from "react";
import bgImage from "../../assets/images/bg4.webp";
import paymentGateway from "../../assets/images/spay-gateway-7.png";
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

      <div className="relative max-w-6xl mx-auto px-6 py-10 sm:py-12 md:py-15 overflow-hidden">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div className="text-center lg:text-left">
            <div className="hero-fade-up inline-flex items-center gap-2 border-l-2 border-[#1099d0] pl-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#163f89] shadow-[0_8px_20px_rgba(15,23,42,0.05)]">

            </div>

            <h1 className="hero-fade-up mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight" style={{ animationDelay: "80ms" }}>
              The Payment Gateway for
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Growing Indian Businesses
              </span>
            </h1>

            <p className="hero-fade-up mx-auto mt-4 max-w-2xl text-sm sm:text-base text-gray-600 leading-relaxed lg:mx-0" style={{ animationDelay: "140ms" }}>
              Spay helps startups, SMEs, and e-commerce brands across India collect payments faster, settle sooner, and spend less time worrying about checkout. One integration. Every payment method. Zero compromise on reliability.
            </p>

            <div className="hero-fade-up mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3" style={{ animationDelay: "220ms" }}>
              <a
                href="https://spay.live/sign-up"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 shadow-md hover:shadow-lg transition duration-300"
              >
                Start Accepting Payments
                <FaArrowRight />
              </a>
              <a
                href="https://spay.live/contact-us"
                className="inline-flex items-center justify-center rounded-2xl border border-blue-200 bg-white px-6 py-4 text-sm sm:text-base font-semibold text-[#163f89] shadow-[0_10px_22px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50"
              >
                Talk to Our Team
              </a>
            </div>
          </div>

          <div className="hero-fade-up mx-auto w-full max-w-xl lg:max-w-none hero-float" style={{ animationDelay: "60ms" }}>
            <div className="relative overflow-hidden">
              
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