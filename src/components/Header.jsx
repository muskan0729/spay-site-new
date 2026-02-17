import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Spay TM Logo (Black).webp";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const featuresRef = useRef(null);
  const productsRef = useRef(null);
  const menuRef = useRef(null);

  // Detect mobile screen size using matchMedia for better reliability
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleChange = (e) => setIsMobile(e.matches);

    handleChange(mediaQuery);
    mediaQuery.addListener(handleChange);

    return () => mediaQuery.removeListener(handleChange);
  }, []);

  // Close dropdowns and mobile menu when clicking outside
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

  // Conditional padding based on screen size
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
          {/* LOGO */}
          <Link to="/" onClick={closeMobileMenu}>
            <img src={logo} alt="Spay" style={{ height: "48px" }} />
          </Link>

          {/* HAMBURGER MENU - Mobile Only */}
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
              aria-label="Toggle menu"
            >
              <span
                style={{
                  width: "24px",
                  height: "2px",
                  background: "#000000",
                  transition: "0.3s",
                  transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
                }}
              />
              <span
                style={{
                  width: "24px",
                  height: "2px",
                  background: "#000000",
                  transition: "0.3s",
                  opacity: menuOpen ? "0" : "1",
                }}
              />
              <span
                style={{
                  width: "24px",
                  height: "2px",
                  background: "#000000",
                  transition: "0.3s",
                  transform: menuOpen ? "rotate(-45deg) translate(7px, -6px)" : "none",
                }}
              />
            </button>
          )}

          {/* DESKTOP NAV - Desktop Only */}
          {!isMobile && (
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
          )}

          {/* SIGN UP BUTTON - Desktop */}
          {!isMobile && (
            <Link
              to="/onboarding-merchant"
              className="signup-btn hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-600"
              style={{
                background: "#3B82F6",
                color: "#ffffff",
                padding: "8px 16px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 500,
                transition: "background-color 0.2s",
              }}
            >
              Sign up
            </Link>
          )}
        </nav>

        {/* MOBILE MENU OVERLAY */}
        {isMobile && menuOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "#ffffff",
              zIndex: 999,
              overflowY: "auto",
            }}
          >
            <div
              style={{
                padding: "72px 16px 16px",
              }}
            >
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                <MobileNavItem name="Home" link="/" onClick={closeMobileMenu} />
                <MobileNavItem name="About" link="/about-us" onClick={closeMobileMenu} />
                <MobileNavItem name="Integration" link="/integration" onClick={closeMobileMenu} />

                {/* FEATURES - Accordion Style for Mobile */}
                <li>
                  <button
                    onClick={handleFeaturesClick}
                    style={{
                      ...navLinkStyle,
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "12px 0",
                      border: "none",
                      background: "none",
                    }}
                  >
                    Features
                    <Chevron open={featuresOpen} style={{ width: "16px", height: "16px" }} />
                  </button>
                  {featuresOpen && (
                    <ul style={{ margin: "0", padding: "8px 0 0 16px", listStyle: "none" }}>
                      <MobileNavItem name="Payment Gateway" link="/paymentgateway" onClick={closeMobileMenu} />
                      <MobileNavItem name="One-click Checkout" link="/OneClick" onClick={closeMobileMenu} />
                    </ul>
                  )}
                </li>

                {/* PRODUCTS - Accordion Style for Mobile */}
                <li>
                  <button
                    onClick={handleProductsClick}
                    style={{
                      ...navLinkStyle,
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "12px 0",
                      border: "none",
                      background: "none",
                    }}
                  >
                    Products
                    <Chevron open={productsOpen} style={{ width: "16px", height: "16px" }} />
                  </button>
                  {productsOpen && (
                    <ul style={{ margin: "0", padding: "8px 0 0 16px", listStyle: "none" }}>
                      <MobileNavItem name="UPI" link="/upi-autopay" onClick={closeMobileMenu} />
                      <MobileNavItem name="Payment Links" link="/payment-links" onClick={closeMobileMenu} />
                      <MobileNavItem name="SoundBox" link="/soundbox" onClick={closeMobileMenu} />
                    </ul>
                  )}
                </li>

                <MobileNavItem name="Careers" link="/careers" onClick={closeMobileMenu} />
                <MobileNavItem name="Contact" link="/contact-us" onClick={closeMobileMenu} />

                {/* SIGN UP BUTTON - Mobile */}
                <li style={{ padding: "16px 0 0 0" }}>
                  <Link
                    to="/onboarding-merchant"
                    onClick={closeMobileMenu}
                    className="signup-btn hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-600"
                    style={{
                      background: "#3B82F6",
                      color: "#ffffff",
                      padding: "12px 20px",
                      borderRadius: "6px",
                      textDecoration: "none",
                      fontSize: "16px",
                      fontWeight: 500,
                      display: "block",
                      textAlign: "center",
                      transition: "background-color 0.2s",
                    }}
                  >
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
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

// Mobile-specific NavItem for better touch targets
const MobileNavItem = ({ name, link, onClick }) => (
  <li>
    <Link
      to={link}
      onClick={onClick}
      className="nav-link hover:bg-transparent hover:shadow-none focus:bg-transparent focus:shadow-none active:bg-transparent"
      style={{
        ...navLinkStyle,
        display: "block",
        padding: "12px 0",
        fontSize: "16px",
      }}
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

const Chevron = ({ open, style = {} }) => (
  <svg
    style={{
      ...style,
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