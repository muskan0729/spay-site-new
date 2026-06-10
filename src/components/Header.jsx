import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const featuresRef = useRef(null);
  const productsRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const handleLogout = () => {
    logout();
    closeAllMenus();
    navigate("/");
  };

  const closeAllMenus = () => {
    setMenuOpen(false);
    setFeaturesOpen(false);
    setProductsOpen(false);
    setMobileFeaturesOpen(false);
    setMobileProductsOpen(false);
  };

  // Close dropdowns/mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (featuresRef.current && !featuresRef.current.contains(event.target)) {
        setFeaturesOpen(false);
      }
      if (productsRef.current && !productsRef.current.contains(event.target)) {
        setProductsOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest(".mobile-menu-btn")
      ) {
        closeAllMenus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 769) {
        closeAllMenus();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header-sticky">
      <div className="header-container">
        <nav className="main-nav">
          {/* Left - Logo (fixed left, no margins) */}
          <div className="logo-section">
            <Link to="/" onClick={closeAllMenus}>
              <img src={logo} alt="Spay" className="logo-img" />
            </Link>
          </div>

          {/* Center - Navigation (truly centered, flexible) */}
          <div className="nav-center">
            <ul className="desktop-nav">
              <NavItem name="Home" to="/" onClick={closeAllMenus} />
              <NavItem name="About" to="/about-us" onClick={closeAllMenus} />

              {/* Features Dropdown */}
              <li className="dropdown-wrapper" ref={featuresRef}>
                <button
                  type="button"
                  onClick={() => {
                    setFeaturesOpen(!featuresOpen);
                    setProductsOpen(false);
                  }}
                  className="nav-link dropdown-toggle"
                >
                  Features
                  <Chevron open={featuresOpen} />
                </button>
                {featuresOpen && (
                  <Dropdown>
                    <DropItem to="/payment-gateway" onClick={closeAllMenus}>
                      Payment Gateway
                    </DropItem>
                    <DropItem to="/one-click-checkout" onClick={closeAllMenus}>
                      One-click Checkout
                    </DropItem>
                  </Dropdown>
                )}
              </li>

              {/* Products Dropdown */}
              <li className="dropdown-wrapper" ref={productsRef}>
                <button
                  type="button"
                  onClick={() => {
                    setProductsOpen(!productsOpen);
                    setFeaturesOpen(false);
                  }}
                  className="nav-link dropdown-toggle"
                >
                  Products
                  <Chevron open={productsOpen} />
                </button>
                {productsOpen && (
                  <Dropdown>
                    <DropItem
                      to="https://dashboardbbps.spay.live/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeAllMenus}
                    >
                      BBPS
                    </DropItem>

                    <DropItem to="/upi-autopay" onClick={closeAllMenus}>
                      UPI
                    </DropItem>
                    <DropItem to="/payout" onClick={closeAllMenus}>
                      Payout
                    </DropItem>
                    <DropItem to="/payment-links" onClick={closeAllMenus}>
                      Payment Links
                    </DropItem>
                    <DropItem to="/sound-box" onClick={closeAllMenus}>
                      SoundBox
                    </DropItem>
                  </Dropdown>
                )}
              </li>

              <NavItem
                name="Integration"
                to="/integration"
                onClick={closeAllMenus}
              />

              <NavItem name="Blogs" to="/blogs" onClick={closeAllMenus} />

              <NavItem name="Careers" to="/careers" onClick={closeAllMenus} />
              <NavItem
                name="Contact"
                to="/contact-us"
                onClick={closeAllMenus}
              />
              

              {user?.role === "admin" && (
                <NavItem name="Dashboard" to="/admin" onClick={closeAllMenus} />
              )}
            </ul>
          </div>

          {/* Right - Auth Button (fixed right, no margins) */}
          <div className="auth-section desktop-only">
            {!user ? (
              <Link to="/sign-up" className="auth-btn" onClick={closeAllMenus}>
                Sign up
              </Link>
            ) : (
              <button onClick={handleLogout} className="auth-btn">
                Logout
              </button>
            )}
          </div>

          {/* Mobile Hamburger (replaces auth on mobile) */}
          <button
            className="mobile-menu-btn mobile-only"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`bar ${menuOpen ? "active" : ""}`} />
            <span className={`bar ${menuOpen ? "active" : ""}`} />
            <span className={`bar ${menuOpen ? "active" : ""}`} />
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu" ref={mobileMenuRef}>
            <div className="mobile-menu-content">
              <MobileNavItem name="Home" to="/" onClick={closeAllMenus} />
              <MobileNavItem
                name="About"
                to="/about-us"
                onClick={closeAllMenus}
              />

              {/* Mobile Features */}
              <div className="mobile-dropdown">
                <div
                  className="mobile-dropdown-toggle"
                  onClick={() => {
                    setMobileFeaturesOpen(!mobileFeaturesOpen);
                    setMobileProductsOpen(false);
                  }}
                >
                  Features
                  <Chevron open={mobileFeaturesOpen} />
                </div>
                {mobileFeaturesOpen && (
                  <div className="mobile-dropdown-items">
                    <Link to="/payment-gateway" onClick={closeAllMenus}>
                      Payment Gateway
                    </Link>
                    <Link to="/one-click-checkout" onClick={closeAllMenus}>
                      One-click Checkout
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Products */}
              <div className="mobile-dropdown">
                <div
                  className="mobile-dropdown-toggle"
                  onClick={() => {
                    setMobileProductsOpen(!mobileProductsOpen);
                    setMobileFeaturesOpen(false);
                  }}
                >
                  Products
                  <Chevron open={mobileProductsOpen} />
                </div>
                {mobileProductsOpen && (
                  <div className="mobile-dropdown-items">
                    <Link to="/upi-autopay" onClick={closeAllMenus}>
                      UPI
                    </Link>
                    <Link to="/payout" onClick={closeAllMenus}>
                      Payout
                    </Link>
                    <Link to="/payment-links" onClick={closeAllMenus}>
                      Payment Links
                    </Link>
                    <Link to="/sound-box" onClick={closeAllMenus}>
                      SoundBox
                    </Link>
                  </div>
                )}
              </div>

              <MobileNavItem
                name="Integration"
                to="/integration"
                onClick={closeAllMenus}
              />
               <MobileNavItem
                name=" Blogs"
                to="/blogs"
                onClick={closeAllMenus}
              />
              <MobileNavItem
                name="Careers"
                to="/careers"
                onClick={closeAllMenus}
              />
              <MobileNavItem
                name="Contact"
                to="/contact-us"
                onClick={closeAllMenus}
              />

              {user?.role === "admin" && (
                <MobileNavItem
                  name="Dashboard"
                  to="/admin"
                  onClick={closeAllMenus}
                />
              )}

              <div className="mobile-auth">
                {!user ? (
                  <Link
                    to="/sign-up"
                    className="mobile-auth-btn"
                    onClick={closeAllMenus}
                  >
                    Sign up
                  </Link>
                ) : (
                  <button onClick={handleLogout} className="mobile-auth-btn">
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .header-sticky {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: white;
          border-bottom: 1px solid #f0f0f0;
          width: 100%;
        }

        .header-container {
          max-width: 100%;
          margin: 0 auto;
          padding: 0 24px;
          width: 100%;
          box-sizing: border-box;
        }

        .main-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
          width: 100%;
          margin-bottom: 5px;
          padding: 0;
        }

        /* Logo - Fixed left, no padding/margin */
        .logo-section {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-bottom: 3px;
          padding: 0;
        }

        .logo-img {
          height: 90px;
          width: auto;
          display: block;
        }

        /* Nav Center - Flexible centering with stretch support */
        .nav-center {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: calc(100% - 200px); /* Prevent overflow on small screens */
          margin: 0 20px;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 32px; /* Increased gap for better stretch */
          margin: 0;
          padding: 0;
          list-style: none;
          flex-wrap: nowrap;
        }

        .nav-link {
          color: #000;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
          transition: color 0.2s;
        }

        .nav-link:hover {
          color: #3b82f6;
        }

        .dropdown-toggle {
          background: none;
          border: none;
        }

        /* Auth - Fixed right, no padding/margin */
        .auth-section {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin: 0;
          padding: 0;
        }

        .auth-btn {
          background: #111827;
          color: white;
          padding: 8px 20px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
          white-space: nowrap;
        }

        .auth-btn:hover {
          background: #1f2937;
        }

        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          flex-shrink: 0;
          margin-left: auto;
        }

        .bar {
          width: 24px;
          height: 2px;
          background: #111827;
          transition: all 0.3s ease;
          border-radius: 1px;
        }

        .bar.active:nth-child(1) {
          transform: rotate(-45deg) translate(-5px, 6px);
        }

        .bar.active:nth-child(2) {
          opacity: 0;
        }

        .bar.active:nth-child(3) {
          transform: rotate(45deg) translate(-5px, -6px);
        }

        /* Dropdown Styles */
        .dropdown-wrapper {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          border-radius: 8px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          min-width: 180px;
          margin-top: 8px;
          z-index: 1001;
          overflow: hidden;
        }

        .dropdown-item {
          display: block;
          padding: 10px 16px;
          color: #000;
          font-size: 14px;
          text-decoration: none;
          transition: background 0.15s;
        }

        .dropdown-item:hover {
          background: #f9fafb;
        }

        /* Mobile Menu */
        .mobile-menu {
          background: white;
          border-top: 1px solid #f0f0f0;
          padding: 0;
          display: none;
        }

        .mobile-menu-content {
          display: flex;
          flex-direction: column;
          gap: 0;
          padding: 16px 24px;
        }

        .mobile-dropdown-toggle {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          font-size: 16px;
          font-weight: 500;
          color: #000;
          border-bottom: 1px solid #f0f0f0;
          cursor: pointer;
          background: none;
          border: none;
          width: 100%;
          text-align: left;
        }

        .mobile-dropdown-items {
          display: flex;
          flex-direction: column;
          padding-left: 16px;
          margin-top: 0;
        }

        .mobile-dropdown-items a {
          padding: 10px 0;
          color: #4b5563;
          font-size: 14px;
          border-bottom: 1px solid #f0f0f0;
          text-decoration: none;
        }

        .mobile-dropdown-items a:hover {
          color: #000;
        }

        .mobile-nav-item {
          display: block;
          padding: 12px 0;
          font-size: 16px;
          font-weight: 500;
          color: #000;
          border-bottom: 1px solid #f0f0f0;
          text-decoration: none;
        }

        .mobile-nav-item:hover {
          color: #3b82f6;
        }

        .mobile-auth {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #f0f0f0;
        }

        .mobile-auth-btn {
          display: block;
          width: 100%;
          background: #111827;
          color: white;
          padding: 14px;
          border-radius: 6px;
          font-size: 15px;
          font-weight: 500;
          text-align: center;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
        }

        .mobile-auth-btn:hover {
          background: #1f2937;
        }

        /* Media Queries for Responsiveness */
        @media (max-width: 768px) {
          .header-container {
            padding: 0 16px;
          }

          .desktop-nav,
          .nav-center,
          .auth-section.desktop-only {
            display: none !important;
          }

          .mobile-menu-btn {
            display: flex !important;
          }

          .mobile-menu {
            display: block !important;
          }

          .main-nav {
            justify-content: space-between;
          }

          .logo-section {
            justify-content: flex-start;
          }
        }

        @media (min-width: 769px) {
          .mobile-menu,
          .mobile-menu-btn {
            display: none !important;
          }

          .nav-center {
            display: flex !important;
          }

          .auth-section.desktop-only {
            display: flex !important;
          }

          /* Stretch support for larger screens */
          .desktop-nav {
            gap: 40px;
          }
        }

        /* Extra large screens - increase stretch */
        @media (min-width: 1200px) {
          .desktop-nav {
            gap: 48px;
          }
        }
      `}</style>
    </header>
  );
};

/* Sub-components */

const NavItem = ({ name, to, onClick }) => (
  <li>
    <Link to={to} onClick={onClick} className="nav-link">
      {name}
    </Link>
  </li>
);

const MobileNavItem = ({ name, to, onClick }) => (
  <Link to={to} onClick={onClick} className="mobile-nav-item">
    {name}
  </Link>
);

const Dropdown = ({ children }) => (
  <div className="dropdown-menu">{children}</div>
);

const DropItem = ({ to, onClick, children }) => (
  <Link to={to} onClick={onClick} className="dropdown-item">
    {children}
  </Link>
);

const Chevron = ({ open }) => (
  <svg
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    style={{
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.25s",
    }}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

export default Header;
