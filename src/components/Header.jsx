import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Spay TM Logo (Black).webp";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const featuresRef = useRef(null);
  const productsRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (featuresRef.current && !featuresRef.current.contains(event.target)) {
        setFeaturesOpen(false);
      }
      if (productsRef.current && !productsRef.current.contains(event.target)) {
        setProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFeaturesClick = (e) => {
    e.preventDefault();
    setFeaturesOpen(!featuresOpen);
    setProductsOpen(false);
  };

  const handleProductsClick = (e) => {
    e.preventDefault();
    setProductsOpen(!productsOpen);
    setFeaturesOpen(false);
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "#ffffff",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
          }}
        >
          {/* LOGO */}
          <Link to="/">
            <img src={logo} alt="Spay" style={{ height: "48px" }} />
          </Link>

          {/* DESKTOP NAV */}
          <ul
            style={{
              display: "flex",
              gap: "18px",
              alignItems: "center",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <NavItem name="Home" link="/" />
            <NavItem name="About" link="/about-us" />
            <NavItem name="Integration" link="/integration" />

            {/* FEATURES */}
            <li ref={featuresRef} style={{ position: "relative" }}>
              <Link
                to="#"
                onClick={handleFeaturesClick}
                className="nav-link hover:bg-transparent hover:shadow-none focus:bg-transparent focus:shadow-none active:bg-transparent"
                style={{
                  ...navLinkStyle,
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                Features
                <Chevron open={featuresOpen} />
              </Link>

              {featuresOpen && (
                <Dropdown>
                  <DropItem to="/paymentgateway">Payment Gateway</DropItem>
                  <DropItem to="/OneClick">One-click Checkout</DropItem>
                </Dropdown>
              )}
            </li>

            {/* PRODUCTS */}
            <li ref={productsRef} style={{ position: "relative" }}>
              <Link
                to="#"
                onClick={handleProductsClick}
                className="nav-link hover:bg-transparent hover:shadow-none focus:bg-transparent focus:shadow-none active:bg-transparent"
                style={{
                  ...navLinkStyle,
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                Products
                <Chevron open={productsOpen} />
              </Link>

              {productsOpen && (
                <Dropdown>
                  <DropItem to="/upi-autopay">UPI</DropItem>
                  <DropItem to="/payment-links">Payment Links</DropItem>
                  <DropItem to="/soundbox">SoundBox</DropItem>
                </Dropdown>
              )}
            </li>

            <NavItem name="Careers" link="/careers" />
            <NavItem name="Contact" link="/contact-us" />
          </ul>

          {/* SIGN UP BUTTON */}
          <Link
            to="/onboarding-merchant"
            className="signup-btn hover:bg-gray-800 focus:bg-gray-800 active:bg-gray-800" // Subtle hover for button only
            style={{
              background: "#111827",
              color: "#ffffff",
              padding: "8px 16px",
              borderRadius: "6px",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            Sign up
          </Link>
        </nav>
      </div>
    </header>
  );
};

/* ---------- STYLES ---------- */

const navLinkStyle = {
  background: "transparent",
  border: "none",
  color: "#000000",
  fontSize: "14px",
  fontWeight: 500,
  cursor: "pointer",
  textDecoration: "none",
  padding: "0",
  margin: "0",
  lineHeight: "1",
};

const NavItem = ({ name, link }) => (
  <li>
    <Link
      to={link}
      className="nav-link hover:bg-transparent hover:shadow-none focus:bg-transparent focus:shadow-none active:bg-transparent"
      style={navLinkStyle}
    >
      {name}
    </Link>
  </li>
);

const Dropdown = ({ children }) => (
  <ul
    style={{
      position: "absolute",
      top: "40px",
      left: 0,
      width: "170px",
      background: "#ffffff",
      borderRadius: "10px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      listStyle: "none",
      padding: "6px 0",
      margin: 0,
      zIndex: 1001,
    }}
  >
    {children}
  </ul>
);

const DropItem = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="dropdown-item hover:bg-transparent hover:shadow-none focus:bg-transparent focus:shadow-none active:bg-transparent"
      style={{
        display: "block",
        padding: "10px 16px",
        fontSize: "14px",
        color: "#000000",
        textDecoration: "none",
      }}
    >
      {children}
    </Link>
  </li>
);

const Chevron = ({ open }) => (
  <svg
    style={{
      width: "14px",
      height: "14px",
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      transition: "0.3s",
    }}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

export default Header;