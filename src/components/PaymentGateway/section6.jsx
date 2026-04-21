import React from "react";
import { Link } from "react-router-dom";
import { FaCode, FaRegCopy } from "react-icons/fa";

const sdkChips = [
  "PHP SDK",
  "Node.js SDK",
  "Python SDK",
  "Java SDK",
  "Paytm Integration",
  "WooCommerce",
  "Shopify",
  "Magento",
];

const Section6 = () => {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 md:py-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.09),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(29,78,216,0.08),transparent_36%)]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-12">
          <p className="inline-flex items-center rounded-full border border-[#163f89]/15 bg-[#f6faff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#163f89] shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
            API Integration
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#0d2447] sm:text-4xl [font-family:Georgia,Times_New_Roman,serif]">
            API Payment Gateway Integration - Connect in Hours, Not Days
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#5a6f90] sm:text-base">
            Spay Fintech offers a clean, well-documented REST API that your developers will actually enjoy working with. Whether you're building a website, mobile app, or SaaS product, our API payment gateway slots right in.
          </p>
        </div>

        <div className="mx-auto max-w-4xl rounded-[1.5rem] border border-[#c6daf7] bg-gradient-to-br from-[#0c335f] via-[#0a2d55] to-[#0b2c50] p-4 shadow-[0_24px_70px_rgba(8,47,95,0.28)] sm:p-5 md:p-6">
          <div className="mb-4 flex items-center gap-3 text-sky-100/90">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-sky-100 ring-1 ring-white/10">
              <FaCode className="text-sm" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em]">
              Sample API Endpoint
            </span>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#2f5578] bg-[#0f324e] shadow-inner">
            <div className="flex items-center justify-between border-b border-[#2f5578] bg-[#12334c] px-4 py-3 sm:px-5">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-white/12 px-3 py-1 text-sm font-semibold text-white">
                  Curl
                </span>
                <span className="text-xs font-medium text-sky-200/90">change language</span>
              </div>
              {/* <div className="inline-flex items-center gap-1 rounded-md border border-white/15 bg-white/5 px-2 py-1 text-[11px] font-medium text-sky-100/90">
                <FaRegCopy className="text-[11px]" />
                Copy
              </div> */}
            </div>

            <div className="grid grid-cols-[30px_1fr] overflow-x-auto bg-[#123b57] p-4 font-mono text-[12px] leading-7 sm:p-5 sm:text-[13px] md:text-[14px]">
              <div className="select-none pr-3 text-right text-[#77a7cc]">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
              <pre className="text-[#ecf7ff]">
{`curl -X POST https://api.spay.live/v1/payments/initiate
-H 'authorization: Bearer YOUR_API_KEY'
-H 'content-type: application/json'
-d '{
  "amount": 4999,
  "currency": "INR",
  "method": "upi",
  "merchant_id": "SPAY_12345"
}'`}
              </pre>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-[#3a4c70]">
            Full documentation, SDKs, and sandbox environment available for all integrations.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {sdkChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white/85 backdrop-blur-sm transition-colors duration-300 hover:bg-white/15"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-4xl text-center">
          <Link
            to="https://spay.live/integration"
            className="inline-flex items-center justify-center rounded-2xl bg-[#1d4ed8] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(29,78,216,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1942bf]"
          >
            Explore Integration Guide
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section6;
