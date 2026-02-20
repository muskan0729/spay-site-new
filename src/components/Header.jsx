import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/Spay TM Logo (Black).webp";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const featuresRef = useRef(null);
  const productsRef = useRef(null);
  const menuRef = useRef(null);

  const location = useLocation();

  /* ================= RESET HEADER ON ROUTE CHANGE ================= */
  useEffect(() => {
    setMenuOpen(false);
    setFeaturesOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  /* ================= MOBILE DETECTION ================= */
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleChange = (e) => setIsMobile(e.matches);

    handleChange(mediaQuery);
    mediaQuery.addListener(handleChange);

    return () => mediaQuery.removeListener(handleChange);
  }, []);

  /* ================= CLICK OUTSIDE ================= */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (featuresRef.current && !featuresRef.current.contains(event.target)) {
        setFeaturesOpen(false);
      }
      if (productsRef.current && !productsRef.current.contains(event.target)) {
        setProductsOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFeaturesClick = (e) => {
    e.preventDefault();
    setFeaturesOpen(!featuresOpen);
    if (isMobile) setProductsOpen(false);
  };

  const handleProductsClick = (e) => {
    e.preventDefault();
    setProductsOpen(!productsOpen);
    if (isMobile) setFeaturesOpen(false);
  };

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      setFeaturesOpen(false);
      setProductsOpen(false);
    }
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setFeaturesOpen(false);
    setProductsOpen(false);
  };

  const padding = isMobile ? "0 16px" : "0 24px";

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
          padding,
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
          <Link to="/" onClick={closeMobileMenu}>
            <img src={logo} alt="Spay" style={{ height: "48px" }} />
          </Link>

          {isMobile && (
            <button
              ref={menuRef}
              onClick={toggleMobileMenu}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                zIndex: 1002,
              }}
            >
              <span style={burgerLine(menuOpen, 1)} />
              <span style={burgerLine(menuOpen, 2)} />
              <span style={burgerLine(menuOpen, 3)} />
            </button>
          )}

          {/* DESKTOP NAV */}
          {!isMobile && (
            <ul style={desktopNavStyle}>
              <NavItem name="Home" link="/" />
              <NavItem name="About" link="/about-us" />
              <NavItem name="Integration" link="/integration" />

              <li ref={featuresRef} style={{ position: "relative" }}>
                <Link to="#" onClick={handleFeaturesClick} style={navLinkStyle}>
                  Features <Chevron open={featuresOpen} />
                </Link>
                {featuresOpen && (
                  <Dropdown>
                    <DropItem to="/paymentgateway">Payment Gateway</DropItem>
                    <DropItem to="/OneClick">One-click Checkout</DropItem>
                  </Dropdown>
                )}
              </li>

              <li ref={productsRef} style={{ position: "relative" }}>
                <Link to="#" onClick={handleProductsClick} style={navLinkStyle}>
                  Products <Chevron open={productsOpen} />
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
              <NavItem name="Dashboard" link="/admin" />
            </ul>
          )}

          {!isMobile && (
            <Link to="/onboarding-merchant" style={signupStyle}>
              Sign up
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

/* ---------- STYLES ---------- */

const desktopNavStyle = {
  display: "flex",
  gap: "18px",
  alignItems: "center",
  listStyle: "none",
  margin: 0,
  padding: 0,
};

const navLinkStyle = {
  color: "#000000",
  fontSize: "14px",
  fontWeight: 500,
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "4px",
};

const signupStyle = {
  background: "#3B82F6",
  color: "#ffffff",
  padding: "8px 16px",
  borderRadius: "6px",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 500,
};

const burgerLine = (open, line) => ({
  width: "24px",
  height: "2px",
  background: "#000",
  transition: "0.3s",
  transform:
    line === 1 && open
      ? "rotate(45deg) translate(5px,5px)"
      : line === 3 && open
      ? "rotate(-45deg) translate(6px,-6px)"
      : "none",
  opacity: line === 2 && open ? 0 : 1,
});

const NavItem = ({ name, link }) => (
  <li>
    <Link to={link} style={navLinkStyle}>
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
    }}
  >
    {children}
  </ul>
);

const DropItem = ({ to, children }) => (
  <li>
    <Link
      to={to}
      style={{
        display: "block",
        padding: "10px 16px",
        fontSize: "14px",
        color: "#000",
        textDecoration: "none",
         whiteSpace: "nowrap",
      }}
    >
      {children}
    </Link>
  </li>
);

const Chevron = ({ open }) => (
  <svg
    width="14"
    height="14"
    style={{
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
