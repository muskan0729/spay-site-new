import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Spay TM Logo (Black).webp";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [features, setFeatures] = useState(false);
  const [products, setProducts] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-1">
        <nav className="flex items-center justify-between h-[72px]">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Spay" className="h-12 w-auto" />
          </Link>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center gap-7 mx-auto text-[14.5px] font-medium text-gray-700">

            <NavLink name="Home" link="/" />
            <NavLink name="About" link="/about-us" />
            <NavLink name="Integration" link="/integration" />

            {/* FEATURES */}
            <li className="relative">
              <button
                onClick={() => {
                  setFeatures(!features);
                  setProducts(false);
                }}
                className="relative flex items-center gap-1 text-gray-700 hover:text-gray-900 transition group"
              >
                Features
                <Chevron open={features} />
                <Underline />
              </button>

              {features && (
                <Dropdown>
                  <DropItem to="/paymentgateway">Payment Gateway</DropItem>
                  <DropItem to="/OneClick">One-click Checkout</DropItem>
                </Dropdown>
              )}
            </li>

            {/* PRODUCTS */}
            <li className="relative">
              <button
                onClick={() => {
                  setProducts(!products);
                  setFeatures(false);
                }}
                className="relative flex items-center gap-1 text-gray-700 hover:text-gray-900 transition group"
              >
                Products
                <Chevron open={products} />
                <Underline />
              </button>

              {products && (
                <Dropdown>
                  <DropItem to="/upi-autopay">UPI</DropItem>
                  <DropItem to="/payment-links">Payment Links</DropItem>
                  <DropItem to="/soundbox">SoundBox</DropItem>
                </Dropdown>
              )}
            </li>

            <NavLink name="Careers" link="/careers" />
            <NavLink name="Contact" link="/contact-us" />
          </ul>

          {/* CTA */}
          <Link
            to="/signup"
            className="hidden md:inline-flex text-[14px] font-medium px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition"
          >
            Sign up
          </Link>

          {/* MOBILE TOGGLE */}
          <button onClick={() => setMenu(!menu)} className="md:hidden text-xl">
            ☰
          </button>
        </nav>

        {/* MOBILE MENU */}
        {menu && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <ul className="flex flex-col gap-4 text-[15px] font-medium text-gray-800">
              <MobileLink to="/" close={setMenu}>Home</MobileLink>
              <MobileLink to="/about-us" close={setMenu}>About</MobileLink>
              <MobileLink to="/integration" close={setMenu}>Integration</MobileLink>
              <MobileLink to="/careers" close={setMenu}>Careers</MobileLink>
              <MobileLink to="/contact-us" close={setMenu}>Contact</MobileLink>
              <MobileLink to="/signup" close={setMenu}>
                <span className="inline-block mt-2 px-4 py-2 bg-gray-900 text-white rounded-md">
                  Sign up
                </span>
              </MobileLink>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

/* ---------- SMALL COMPONENTS ---------- */

const NavLink = ({ name, link }) => (
  <li className="relative group">
    <Link
      to={link}
      className="text-gray-700 hover:text-gray-900 transition"
    >
      {name}
    </Link>
    <Underline />
  </li>
);

const Underline = () => (
  <span className="pointer-events-none absolute left-1/2 -bottom-[6px] h-[1px] w-0 bg-gray-900 transition-all duration-300 group-hover:w-full group-hover:left-0" />
);

const Dropdown = ({ children }) => (
  <ul className="absolute top-9 left-0 w-52 bg-white rounded-lg shadow-lg border border-gray-100 py-1 animate-[fadeIn_0.15s_ease-out]">
    {children}
  </ul>
);

const DropItem = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="block px-3 py-2 text-[14px] text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition"
    >
      {children}
    </Link>
  </li>
);

const Chevron = ({ open }) => (
  <svg
    className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const MobileLink = ({ to, children, close }) => (
  <li>
    <Link to={to} onClick={() => close(false)}>
      {children}
    </Link>
  </li>
);

export default Header;
