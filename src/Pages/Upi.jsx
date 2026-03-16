import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaQrcode, FaSyncAlt, FaCreditCard } from "react-icons/fa";
import upiBgImage from "../assets/images/upi bg.webp";
import qrScannerImage from "../assets/images/qr-codee.webp";
import qrFlyerVideo from "../assets/images/White Red Modern Scan The QR Code Flyer (2).mp4";
import autopayImage from "../assets/images/autopay7 (1).webp";
import herobgImage from "../assets/images/hero-bg.webp";

const Upi = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <main className="font-['Inter','Poppins',system-ui,sans-serif] overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-[45vh] md:min-h-[60vh] flex items-center"
        style={{ backgroundImage: `url(${upiBgImage})` }}
      >
        <div className="absolute inset-0 bg-white/70"></div>

        <div className="relative w-full max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">

            {/* LEFT */}
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-900 mb-4 md:mb-5 leading-tight">
                What is a UPI QR Code?
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed max-w-xl">
                A UPI QR Code allows your customers to make payments quickly and easily.
                Create Static and Dynamic QR codes with Spay and offer your customers
                multiple scanning options.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center md:justify-end">
              <img
                src={qrScannerImage}
                alt="QR Code"
                className="w-36 sm:w-44 md:w-60 lg:w-64 object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= CARDS SECTION ================= */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {/* STATIC QR */}
          <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 md:p-6 border-l-4 border-blue-900">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-3 md:mb-4">
              <FaQrcode className="text-blue-900 text-xl md:text-2xl" />
            </div>

            <h3 className="text-base md:text-lg font-semibold text-blue-900 mb-2">
              Static QR Code
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              Generate your unique QR codes in seconds and print them for display anywhere.
            </p>
          </div>

          {/* DYNAMIC QR */}
          <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 md:p-6 border-l-4 border-blue-900">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-3 md:mb-4">
              <FaSyncAlt className="text-blue-900 text-xl md:text-2xl" />
            </div>

            <h3 className="text-base md:text-lg font-semibold text-blue-900 mb-2">
              Dynamic QR Code
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              Make a Dynamic QR Code that you can update without needing to print again.
            </p>
          </div>

          {/* AUTOPAY */}
          <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 md:p-6 border-l-4 border-blue-900">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-3 md:mb-4">
              <FaCreditCard className="text-blue-900 text-xl md:text-2xl" />
            </div>

            <h3 className="text-base md:text-lg font-semibold text-blue-900 mb-2">
              Autopay
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              UPI Autopay enables secure, instant recurring payments with easy payee management.
            </p>
          </div>

        </div>
      </section>

      {/* ================= DISCOVER SECTION ================= */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14">

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
      </section>

      {/* ================= PRICING SECTION ================= */}
      <section
        className="bg-cover bg-center py-10 md:py-14"
        style={{ backgroundImage: `url(${herobgImage})` }}
      >
        <div className="bg-white/80 py-8 md:py-10">

          <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 md:gap-10 items-center">

            <img
              src={autopayImage}
              alt="Pricing"
              className="w-52 md:w-72 mx-auto rounded-xl shadow-lg"
            />

            <div>

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

            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default Upi;