import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
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
  const codeSample = `curl -X POST https://api.spay.live/v1/payments/initiate\n-H 'authorization: Bearer YOUR_API_KEY'\n-H 'content-type: application/json'\n-d '{\n  "amount": 4999,\n  "currency": "INR",\n  "method": "upi",\n  "merchant_id": "SPAY_12345"\n}'`;
  const BRAND_COLOR = "#2563EB";
  const [copied, setCopied] = useState(false);
  const preRef = useRef(null);
  const codeLines = codeSample.split("\n");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeSample);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      // fallback: select
      if (preRef.current) {
        const range = document.createRange();
        range.selectNodeContents(preRef.current);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        document.execCommand("copy");
        sel.removeAllRanges();
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-gray-50 py-14 sm:py-16 md:py-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.09),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(29,78,216,0.08),transparent_36%)]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-12">
          <p className="inline-flex items-center rounded-full border border-[#163f89]/15 bg-[#f6faff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#163f89] shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
            API Integration
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
            API Payment Gateway Integration - Connect in Hours, Not Days
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
            Spay Fintech offers a clean, well-documented REST API that your developers will actually enjoy working with. Whether you're building a website, mobile app, or SaaS product, our API payment gateway slots right in.
          </p>
        </div>

        
          <div className="mx-auto max-w-4xl rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 transition-shadow hover:shadow-lg relative overflow-hidden">
            <svg className="pointer-events-none absolute -top-8 -right-16 opacity-30" width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.12" />
                </linearGradient>
              </defs>
              <circle cx="110" cy="110" r="90" fill="url(#g1)" />
            </svg>
            <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl" style={{ background: `linear-gradient(90deg, ${BRAND_COLOR}, #06b6d4)` }} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start" style={{ minHeight: 220 }}>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#eff6ff] text-[#2563EB] ring-1 ring-blue-100">
                    <FaCode className="text-base" />
                  </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Sample API Endpoint</h3>
                      <p className="text-gray-600 text-sm leading-relaxed text-center mt-1">A concise example to help your devs integrate quickly.</p>
                    </div>
                </div>

                <p className="text-sm text-gray-600">Our REST API is reliable, well-documented, and ready for production. Use the sample below to initiate a payment in seconds.</p>

                <div className="flex flex-wrap gap-2">
                  {sdkChips.map((chip, idx) => (
                    <motion.span key={chip} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 300 }} className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-sm px-3 py-1.5 text-[13px] font-medium text-gray-700 shadow-sm">
                      <span className="h-2 w-2 rounded-full" style={{ background: BRAND_COLOR }} />
                      {chip}
                    </motion.span>
                  ))}
                </div>

                <div className="pt-2">
                  <Link to="https://spay.live/integration" className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 shadow-md transition">
                    Explore Integration Guide
                  </Link>
                </div>
              </div>

              <div className="relative rounded-lg border border-gray-100 bg-gradient-to-b from-slate-900/95 to-slate-900 text-slate-50 overflow-hidden transition-transform duration-200">
                <div className="flex items-center justify-between px-4 py-3 bg-slate-800/60">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-white/6 px-3 py-1 text-sm font-semibold text-slate-100">Curl</span>
                    <span className="text-xs font-medium text-slate-300">change language</span>
                  </div>
                  <button onClick={handleCopy} aria-label="Copy code" className="inline-flex items-center gap-2 rounded-md bg-white/6 px-3 py-1 text-[13px] font-medium text-slate-100 transition-colors duration-200 hover:bg-white/10">
                    <FaRegCopy className="text-[13px] text-[#2563EB]" />
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>

                <div className="p-4 overflow-auto font-mono text-sm leading-6 bg-gradient-to-b from-slate-900/95 to-slate-900">
                  <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
                    <ol className="select-none text-right text-slate-500 text-[13px] leading-6">{codeLines.map((_, idx) => { return <li key={idx} className="px-1">{idx+1}</li>; })}</ol>
                    <pre ref={preRef} className="whitespace-pre-wrap text-[13px] leading-6 text-slate-100">{codeSample}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Section6;
