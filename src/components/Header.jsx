import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Spay TM Logo (Black).webp";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const featuresRef = useRef(null);
  const productsRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (featuresRef.current && !featuresRef.current.contains(event.target)) {
        setFeaturesOpen(false);
      }
      if (productsRef.current && !productsRef.current.contains(event.target)) {
        setProductsOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !event.target.closest('.mobile-menu-btn')) {
        setMenuOpen(false);
        setMobileFeaturesOpen(false);
        setMobileProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
        setMobileFeaturesOpen(false);
        setMobileProductsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleFeaturesClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFeaturesOpen(!featuresOpen);
    setProductsOpen(false);
  };

  const handleProductsClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setProductsOpen(!productsOpen);
    setFeaturesOpen(false);
  };

  const handleMobileFeaturesClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileFeaturesOpen(!mobileFeaturesOpen);
    setMobileProductsOpen(false);
  };

  const handleMobileProductsClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileProductsOpen(!mobileProductsOpen);
    setMobileFeaturesOpen(false);
  };

  const closeAllMenus = () => {
    setMenuOpen(false);
    setFeaturesOpen(false);
    setProductsOpen(false);
    setMobileFeaturesOpen(false);
    setMobileProductsOpen(false);
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
          <Link to="/" onClick={closeAllMenus}>
            <img src={logo} alt="Spay" style={{ height: "48px" }} />
          </Link>

          {/* DESKTOP NAV */}
          <ul
            className="desktop-nav"
            style={{
              display: "flex",
              gap: "18px",
              alignItems: "center",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <NavItem name="Home" link="/" onClick={closeAllMenus} />
            <NavItem name="About" link="/about-us" onClick={closeAllMenus} />

            {/* FEATURES - Desktop */}
            <li ref={featuresRef} style={{ position: "relative" }}>
              <Link
                to="#"
                onClick={handleFeaturesClick}
                className="nav-link"
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
                  <DropItem to="/paymentgateway" onClick={closeAllMenus}>Payment Gateway</DropItem>
                  <DropItem to="/OneClick" onClick={closeAllMenus}>One-click Checkout</DropItem>
                </Dropdown>
              )}
            </li>

            {/* PRODUCTS - Desktop */}
            <li ref={productsRef} style={{ position: "relative" }}>
              <Link
                to="#"
                onClick={handleProductsClick}
                className="nav-link"
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
                  <DropItem to="/upi-autopay" onClick={closeAllMenus}>UPI</DropItem>
                  <DropItem to="/payment-links" onClick={closeAllMenus}>Payment Links</DropItem>
                  <DropItem to="/soundbox" onClick={closeAllMenus}>SoundBox</DropItem>
                </Dropdown>
              )}
            </li>
            <NavItem name="Integration" link="/integration" onClick={closeAllMenus} />
            <NavItem name="Careers" link="/careers" onClick={closeAllMenus} />
            <NavItem name="Contact" link="/contact-us" onClick={closeAllMenus} />
            <NavItem name="Dashboard" link="/admin" onClick={closeAllMenus} />

          </ul>

          {/* SIGN UP BUTTON */}
          <Link
            to="/sign-up"
            className="signup-btn desktop-only"
            onClick={closeAllMenus}
            style={{
              background: "#111827",
              color: "#ffffff",
              padding: "8px 16px",
              borderRadius: "6px",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 500,
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "#1f2937"}
            onMouseLeave={(e) => e.currentTarget.style.background = "#111827"}
          >
            Sign up
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(!menuOpen);
            }}
            className="mobile-menu-btn mobile-only"
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "8px",
            }}
          >
            <div style={{
              width: "24px",
              height: "2px",
              background: "#111827",
              margin: "5px 0",
              transition: "0.3s",
              transform: menuOpen ? "rotate(-45deg) translate(-5px, 6px)" : "none",
            }} />
            <div style={{
              width: "24px",
              height: "2px",
              background: "#111827",
              margin: "5px 0",
              transition: "0.3s",
              opacity: menuOpen ? 0 : 1,
            }} />
            <div style={{
              width: "24px",
              height: "2px",
              background: "#111827",
              margin: "5px 0",
              transition: "0.3s",
              transform: menuOpen ? "rotate(45deg) translate(-5px, -6px)" : "none",
            }} />
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            ref={mobileMenuRef}
            className="mobile-menu"
            style={{
              padding: "16px 0",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              <MobileNavItem name="Home" link="/" onClick={closeAllMenus} />
              <MobileNavItem name="About" link="/about-us" onClick={closeAllMenus} />
              <MobileNavItem name="Integration" link="/integration" onClick={closeAllMenus} />

              {/* Mobile Features - Using separate state */}
              <li style={{ marginBottom: "8px" }}>
                <div
                  onClick={handleMobileFeaturesClick}
                  style={{
                    ...mobileNavLinkStyle,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                >
                  Features
                  <Chevron open={mobileFeaturesOpen} />
                </div>
                {mobileFeaturesOpen && (
                  <div style={{ paddingLeft: "16px", marginTop: "8px" }}>
                    <Link
                      to="/paymentgateway"
                      onClick={closeAllMenus}
                      style={{
                        display: "block",
                        padding: "10px 0",
                        fontSize: "14px",
                        color: "#4b5563",
                        textDecoration: "none",
                        borderBottom: "1px solid #f0f0f0",
                      }}
                    >
                      Payment Gateway
                    </Link>
                    <Link
                      to="/OneClick"
                      onClick={closeAllMenus}
                      style={{
                        display: "block",
                        padding: "10px 0",
                        fontSize: "14px",
                        color: "#4b5563",
                        textDecoration: "none",
                        borderBottom: "1px solid #f0f0f0",
                      }}
                    >
                      One-click Checkout
                    </Link>
                  </div>
                )}
              </li>

              {/* Mobile Products - Using separate state */}
              <li style={{ marginBottom: "8px" }}>
                <div
                  onClick={handleMobileProductsClick}
                  style={{
                    ...mobileNavLinkStyle,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                >
                  Products
                  <Chevron open={mobileProductsOpen} />
                </div>
                {mobileProductsOpen && (
                  <div style={{ paddingLeft: "16px", marginTop: "8px" }}>
                    <Link
                      to="/upi-autopay"
                      onClick={closeAllMenus}
                      style={{
                        display: "block",
                        padding: "10px 0",
                        fontSize: "14px",
                        color: "#4b5563",
                        textDecoration: "none",
                        borderBottom: "1px solid #f0f0f0",
                      }}
                    >
                      UPI
                    </Link>
                    <Link
                      to="/payment-links"
                      onClick={closeAllMenus}
                      style={{
                        display: "block",
                        padding: "10px 0",
                        fontSize: "14px",
                        color: "#4b5563",
                        textDecoration: "none",
                        borderBottom: "1px solid #f0f0f0",
                      }}
                    >
                      Payment Links
                    </Link>
                    <Link
                      to="/soundbox"
                      onClick={closeAllMenus}
                      style={{
                        display: "block",
                        padding: "10px 0",
                        fontSize: "14px",
                        color: "#4b5563",
                        textDecoration: "none",
                        borderBottom: "1px solid #f0f0f0",
                      }}
                    >
                      SoundBox
                    </Link>
                  </div>
                )}
              </li>

              <MobileNavItem name="Careers" link="/careers" onClick={closeAllMenus} />
              <MobileNavItem name="Contact" link="/contact-us" onClick={closeAllMenus} />

              {/* Mobile Sign Up */}
              <li style={{ marginTop: "16px" }}>
                <Link
                  to="/sign-up"
                  onClick={closeAllMenus}
                  style={{
                    display: "block",
                    background: "#111827",
                    color: "#ffffff",
                    padding: "12px 16px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 500,
                    textAlign: "center",
                  }}
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* CSS Media Queries */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-only {
            display: none !important;
          }
          .mobile-only {
            display: block !important;
          }
          .mobile-menu {
            display: block !important;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-only {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
          .desktop-nav {
            display: flex !important;
          }
          .desktop-only {
            display: inline-block !important;
          }
        }

        /* Ensure dropdown links are clickable */
        .dropdown-item {
          cursor: pointer;
        }
        
        a, button, div[onClick] {
          cursor: pointer;
        }
      `}</style>
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

const mobileNavLinkStyle = {
  background: "transparent",
  border: "none",
  color: "#000000",
  fontSize: "16px",
  fontWeight: 500,
  cursor: "pointer",
  textDecoration: "none",
  padding: "12px 0",
  margin: "0",
  lineHeight: "1",
  display: "block",
  borderBottom: "1px solid #f0f0f0",
};

const NavItem = ({ name, link, onClick }) => (
  <li>
    <Link
      to={link}
      onClick={onClick}
      className="nav-link"
      style={navLinkStyle}
    >
      {name}
    </Link>
  </li>
);

const MobileNavItem = ({ name, link, onClick }) => (
  <li style={{ borderBottom: "1px solid #f0f0f0", marginBottom: "8px" }}>
    <Link
      to={link}
      onClick={onClick}
      style={mobileNavLinkStyle}
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

const DropItem = ({ to, onClick, children }) => (
  <li>
    <Link
      to={to}
      onClick={onClick}
      className="dropdown-item"
      style={{
        display: "block",
        padding: "10px 16px",
        fontSize: "14px",
        color: "#000000",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => e.currentTarget.style.background = "#f9fafb"}
      onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
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
