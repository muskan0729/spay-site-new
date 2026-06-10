import React from "react";
import { Helmet } from "react-helmet";
import Section1 from "../components/Payout/Section1";
import Section2 from "../components/Payout/Section2";
import Section3 from "../components/Payout/Section3";

const Payout = () => {
  return (
    <main className="font-['Inter','Poppins',system-ui,sans-serif] overflow-x-hidden">
      <Helmet>
        <title>Spay | Payout Services in Mumbai | Vendor Settlements & Disbursements</title>
        <link rel="canonical" href="https://spay.live/payout" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta
          name="description"
          content="Best payout solutions in Mumbai for businesses. Manage bulk payouts, vendor payments, and instant settlements with ease."
        />
      </Helmet>

      {/* ================= HERO ================= */}
      <Section1 />

      {/* ================= PAYOUT BENEFITS ================= */}
      <Section2 />

      {/* ================= BUSINESS IMPACT ================= */}
      <Section3 />

      {/* ================= FAQ ================= */}
      {/* <Section4 /> */}

      {/* optional additional payout sections can be added here */}

      {/* ================= DISCOVER SECTION ================= */}
      {/* <section className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14">

        <h2 className="text-2xl md:text-4xl font-bold text-blue-900 text-center mb-8 md:mb-12">
          Discover UPI Payments
        </h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center">

          <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
            <video
              className="w-full h-auto"
              autoPlay
              loop
              muted
              playsInline
              controls={isMobile}
            >
              <source src={qrFlyerVideo} type="video/mp4" />
            </video>
          </div>

          <div className="md:w-1/2">

            <h4 className="text-lg md:text-xl font-semibold text-blue-700 mb-2 md:mb-3">
              Instant Settlements:
            </h4>

            <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">
              Funds are transferred directly without delay to your account.
            </p>

            <h4 className="text-lg md:text-xl font-semibold text-blue-700 mb-2 md:mb-3">
              Higher Success Rates:
            </h4>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Server-to-server payments eliminate redirects and increase transaction success rates.
            </p>

          </div>
        </div>
      </section> */}

      {/* ================= PRICING SECTION ================= */}
      {/* <section
        className="bg-cover bg-center py-10 md:py-14"
        style={{ backgroundImage: `url(${herobgImage})` }}
      >
        <div className="bg-white/80 py-8 md:py-10">

          <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 md:gap-10 items-center">

            <img
              src={autopayImage}
              alt="Pricing"
              className="w-52 md:w-72 mx-auto rounded-xl shadow-lg"
            /> */}

            {/* <div>

              <h2 className="text-xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-5">
                Transparent Pricing
              </h2>

              <ul className="space-y-2 text-sm md:text-base text-gray-800 mb-4 md:mb-5">
                <li>• No hidden fees</li>
                <li>• No maintenance charges</li>
              </ul>

              <p className="text-sm md:text-base text-gray-700">
                Our technical team is always available to assist you in selecting the right plan.
              </p>

            </div> */}

          {/* </div>

        </div>
      </section> */}

    </main>
  );
};

export default Payout;