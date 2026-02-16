import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <a
        href="https://www.facebook.com/people/SPAY-Fintech-Private-Limited/100083292313713/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon facebook"
      >
        <FaFacebookF />
      </a>

      <a
        href="https://x.com/SpayLive/"        target="_blank"
        rel="noopener noreferrer"
        className="social-icon twitter"
      >
        <FaXTwitter />
      </a>

      <a
href="https://www.instagram.com/spay_fintech/"        target="_blank"
        rel="noopener noreferrer"
        className="social-icon instagram"
      >
        <FaInstagram />
      </a>

      <a
href="https://www.linkedin.com/company/spay-fintech-private-limited/"        target="_blank"
        rel="noopener noreferrer"
        className="social-icon linkedin"
      >
        <FaLinkedinIn />
      </a>

      <a
href="https://www.youtube.com/@SpayFintechPrivateLimited"        target="_blank"
        rel="noopener noreferrer"
        className="social-icon youtube"
      >
        <FaYoutube />
      </a>
    </div>
  );
};

export default SocialSidebar;
