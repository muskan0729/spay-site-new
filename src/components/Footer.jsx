import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

// Assets
import pci from "../assets/images/pci-dss-1 (1).png";
import iso from "../assets/images/iso-cer.png";
import appStore from "../assets/images/download-on-the-app-store-flat-badge-logo-png_seeklogo-268334 (1).png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-white">
      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,#1e3a8a_0%,transparent_45%),radial-gradient(1000px_circle_at_80%_20%,#0f172a_0%,transparent_55%),linear-gradient(to_bottom,#020617,#00040f)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-14 md:gap-y-0">
          {/* LEFT GRID */}
          <div className="md:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-10">
            <FooterBlock title="Address">
              316 Laxmi Plaza, Laxmi Industrial Estate,
              <br />
              Andheri West, Mumbai 400053.
            </FooterBlock>

            <FooterBlock title="Contact">
              <p>+91 22-46072193</p>
              <p>+91 8450007614</p>
              <a href="mailto:inquiry@spay.live" className={linkClass}>
                inquiry@spay.live
              </a>
            </FooterBlock>

            <FooterBlock title="Services">
              <FooterLink to="https://dashboardbbps.spay.live/" target="_blank" rel="noopener noreferrer">BBPS</FooterLink>
              <FooterLink to="/payment-gateway">Payment Gateway</FooterLink>
              <FooterLink to="/payment-links">Payment Links</FooterLink>
              <FooterLink to="/upi-autopay">UPI AutoPay</FooterLink>
              <FooterLink to="/one-click-checkout">
                One-Click Checkout
              </FooterLink>
              <FooterLink to="/payout">
                Payout
              </FooterLink>
            </FooterBlock>

            <FooterBlock title="Company">
              <FooterLink to="/about-us">About Us</FooterLink>
              <FooterLink to="/integration">Integration</FooterLink>
              <FooterLink to="/contact-us">Contact Us</FooterLink>
              <FooterLink to="/Refund&Cancellation">
                Refund & Cancellation
              </FooterLink>
            </FooterBlock>
          </div>

          {/* RIGHT */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between gap-10 mt-10 md:mt-0">
            <div>
              <p className="mb-3 text-xs uppercase tracking-widest text-white/70">
                Get the app
              </p>
              <a
                href="https://apps.apple.com/in/app/spay-fintech/id6444719057"
                target="_blank"
                rel="noreferrer"
              >
                <img src={appStore} alt="App Store" className="h-[44px]" />
              </a>
            </div>

            <div className="flex items-center gap-6">
              <img src={pci} alt="PCI DSS" className="h-[48px] opacity-90" />
              <img
                src={iso}
                alt="ISO Certified"
                className="h-[48px] opacity-90"
              />
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-12 border-t border-white/10" />

        {/* BOTTOM SECTION */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* LEFT */}
          <p className="text-[15px] text-white/70 text-center md:text-left">
            © 2026 Spay Fintech Pvt. Ltd. All rights reserved.
          </p>

          {/* RIGHT SECTION */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Policy Links (shifted slightly left) */}
            <div
              className="flex items-center gap-6 mr-4"
              style={{ fontSize: "14px" }}
            >
              <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink to="/terms-conditions">Terms & Conditions</FooterLink>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4 text-lg">
              <SocialIcon
                href="https://www.facebook.com/people/SPAY-Fintech-Private-Limited/100083292313713/"
                icon={<FaFacebookF />}
                hoverColor="hover:text-[#1877F2]"
              />

              <SocialIcon
                href="https://x.com/SpayLive/"
                icon={<FaXTwitter />}
                hoverColor="hover:text-white"
              />

              <SocialIcon
                href="https://www.instagram.com/spay_fintech/"
                icon={<FaInstagram />}
                hoverColor="hover:text-pink-500"
              />

              <SocialIcon
                href="https://www.linkedin.com/company/spay-fintech-private-limited/"
                icon={<FaLinkedinIn />}
                hoverColor="hover:text-[#0A66C2]"
              />

              <SocialIcon
                href="https://www.youtube.com/@SpayFintechPrivateLimited"
                icon={<FaYoutube />}
                hoverColor="hover:text-red-500"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ---------- HELPERS ---------- */

const FooterBlock = ({ title, children }) => (
  <div>
    <h5 className="mb-4 text-xs font-medium uppercase tracking-widest text-white/80">
      {title}
    </h5>
    <div className="text-[14px] leading-[1.7] text-white space-y-2">
      {children}
    </div>
  </div>
);

const linkClass =
  "relative block w-fit text-white opacity-90 transition-all duration-300 " +
  "after:content-[''] after:absolute after:left-1/2 after:-bottom-[3px] " +
  "after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 " +
  "hover:opacity-100 hover:after:left-0 hover:after:w-full";

const FooterLink = ({ to, children }) => (
  <Link to={to} className={linkClass}>
    {children}
  </Link>
);

const SocialIcon = ({ href, icon, hoverColor }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className={`text-white/70 transition-all duration-300 transform hover:scale-110 ${hoverColor}`}
  >
    {icon}
  </a>
);

export default Footer;
