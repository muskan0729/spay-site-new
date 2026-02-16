import React from "react";
import { Link } from "react-router-dom";

// Assets
import pci from "../assets/images/pci-dss-1 (1).png";
import iso from "../assets/images/iso-cer.png";
import appStore from "../assets/images/download-on-the-app-store-flat-badge-logo-png_seeklogo-268334 (1).png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-white">
      {/* PREMIUM GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,#1e3a8a_0%,transparent_45%),radial-gradient(1000px_circle_at_80%_20%,#0f172a_0%,transparent_55%),linear-gradient(to_bottom,#020617,#00040f)]" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-14">
          {/* LEFT CONTENT */}
          <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-14 gap-y-10">
            <FooterBlock title="Address">
              316 Laxmi Plaza, Laxmi Industrial Estate,<br />
              Andheri West, Mumbai 400053.
            </FooterBlock>

            <FooterBlock title="Contact">
              <div className="space-y-2">
                <p>022-46072193</p>
                <p>+91 8450007614</p>
                <a href="mailto:inquiry@spay.live" className={linkClass}>
                  inquiry@spay.live
                </a>
              </div>
            </FooterBlock>

            <FooterBlock title="Services">
              <FooterLink to="/paymentgateway">Payment Gateway</FooterLink>
              <FooterLink to="/payment-links">Payment Links</FooterLink>
              <FooterLink to="/upi-autopay">UPI AutoPay</FooterLink>
              <FooterLink to="/OneClick">One-Click Checkout</FooterLink>
            </FooterBlock>

            <FooterBlock title="Company">
              <FooterLink to="/about-us">About Us</FooterLink>
              <FooterLink to="/integration">Integration</FooterLink>
              <FooterLink to="/contact-us">Contact Us</FooterLink>
            </FooterBlock>
          </div>

          {/* RIGHT BRAND / TRUST */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between gap-10">
            {/* APP */}
            <div>
              <p className="mb-4 text-[13px] uppercase tracking-widest text-white/70">
                Get the app
              </p>
              <a
                href="https://apps.apple.com/in/app/spay-fintech/id6444719057"
                target="_blank"
                rel="noreferrer"
                className="inline-block opacity-95 hover:opacity-100 transition"
              >
                <img src={appStore} alt="App Store" className="h-[40px]" />
              </a>
            </div>

            {/* TRUST */}
            <div className="flex items-center gap-6">
              <img src={pci} alt="PCI DSS" className="h-[48px] opacity-90" />
              <img src={iso} alt="ISO Certified" className="h-[48px] opacity-90" />
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-16 border-t border-white/10" />

        {/* BOTTOM */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-white/70">
            © 2024 Spay Fintech. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-[13px]">
            <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink to="/terms-conditions">Terms & Conditions</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ---------- HELPERS ---------- */

const FooterBlock = ({ title, children }) => (
  <div>
    <h5 className="mb-4 text-[13px] font-medium uppercase tracking-widest text-white/80">
      {title}
    </h5>
    <div className="text-[14px] leading-[1.7] text-white space-y-2">
      {children}
    </div>
  </div>
);

const linkClass =
  "relative block w-fit text-white transition-opacity duration-300 opacity-90 " +
  "after:content-[''] after:absolute after:left-1/2 after:-bottom-[3px] " +
  "after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 " +
  "hover:opacity-100 hover:after:left-0 hover:after:w-full";

const FooterLink = ({ to, children }) => (
  <Link to={to} className={linkClass}>
    {children}
  </Link>
);

export default Footer;
