import React from "react";
import { Link } from "react-router-dom";

// Background Images
import footerBg from "../assets/images/footer1.webp";
import overlayLogo from "../assets/images/Spay TM Logo.webp";

// Certificate Images
import pci from "../assets/images/pci-dss-1 (1).png";
import iso from "../assets/images/iso-cer.png";

// App Store Image
import appStore from "../assets/images/download-on-the-app-store-flat-badge-logo-png_seeklogo-268334 (1).png";

const Footer = () => {
  return (
<footer className="relative text-white py-12 overflow-hidden min-h-[250px]">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${footerBg})` }}
  ></div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-[#001a33]/80"></div>

  {/* Spay Watermark Overlay Image */}
  <div
    className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-40"
    style={{ backgroundImage: `url(${overlayLogo})` }}
  ></div>
<div className="relative z-10">
      {/* Footer Content */}
      <div className="mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">

        {/* Address */}
        <div>
          <h5 className="text-xl font-semibold mb-4">Address</h5>
          <p className="text-sm leading-relaxed">
            316 Laxmi Plaza, Laxmi Industrial State, Andheri West, Mumbai,
            Maharashtra, 400053.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h5 className="text-xl font-semibold mb-4">Contact Us</h5>

          <p className="text-sm mb-2">📞 022-46072193</p>
          <p className="text-sm mb-2">💬 +91 8450007614</p>
          <p className="text-sm">
            ✉{" "}
            <a
              href="mailto:inquiry@spay.live"
              className="hover:underline"
            >
              inquiry@spay.live
            </a>
          </p>
        </div>

        {/* Services */}
        <div>
          <h5 className="text-xl font-semibold mb-4">Our Services</h5>
          <ul className="space-y-3 text-sm font-medium">
            <li>
              <Link to="/payment-gateway" className="hover:underline">
                Payment Gateway
              </Link>
            </li>
            <li>
              <Link to="/payment-links" className="hover:underline">
                Payment Links
              </Link>
            </li>
            <li>
              <Link to="/upi-autopay" className="hover:underline">
                UPI AutoPay
              </Link>
            </li>
            <li>
              <Link to="/one-click-checkout" className="hover:underline">
                One-Click Checkout
              </Link>
            </li>
          </ul>
        </div>

        {/* General */}
        <div>
          <h5 className="text-xl font-semibold mb-4">General</h5>
          <ul className="space-y-3 text-sm font-medium">
            <li>
              <Link to="/about-us" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/integration" className="hover:underline">
                Integration
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h5 className="text-xl font-semibold mb-4">Legal</h5>
          <ul className="space-y-2 text-sm font-medium">
            <li>
              <Link to="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-conditions" className="hover:underline">
                Terms & Conditions
              </Link>
            </li>

            {/* App Store */}
            <li className="mt-3">
              <a
                href="https://apps.apple.com/in/app/spay-fintech/id6444719057"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={appStore}
                  alt="Download on App Store"
                  className="w-[130px] h-[50px]"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Certificates */}
      <div className="max-w-7xl mx-auto px-6 mt-12 flex justify-end items-center gap-4 max-md:justify-center max-md:mt-8">
        <img src={pci} alt="pci" className="w-[90px] h-[70px] object-contain" />
        <img src={iso} alt="iso" className="w-[70px] h-[70px] object-contain" />
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-sm font-medium">
        © 2024 Spay Fintech. All rights reserved.
      </div>
      </div>
    </footer>
  );
};

export default Footer;
