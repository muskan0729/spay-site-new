import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Spay TM Logo (Black).webp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className=" mx-auto px-6 ">
        <nav className="flex items-center justify-between py-4 relative">

          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src={logo}
              alt="Spay Logo"
              className="h-19 w-auto object-contain"
            />
          </Link>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-gray-800 text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8 text-gray-800 font-semibold mx-auto">

            <li>
              <Link to="/" className="hover:text-blue-600 transition">
                Home
              </Link>
            </li>

            {/* Features Dropdown */}
            <li className="relative">
              <button
                onClick={() => setFeaturesOpen(!featuresOpen)}
                className="hover:text-blue-600 transition flex items-center gap-1"
              >
                Features 
                                <svg
                  className="w-4 h-4 mt-[2px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {featuresOpen && (
                <ul className="absolute top-10 left-0 bg-white shadow-lg rounded-lg w-52 py-2 z-50">
                  <li>
                    <Link
                      to="/paymentgateway"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setFeaturesOpen(false)}
                    >
                      Payment Gateway
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/OneClick"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setFeaturesOpen(false)}
                    >
                      One-click Checkout
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/about-us" className="hover:text-blue-600 transition">
                About Us
              </Link>
            </li>

            {/* Products Dropdown */}
            <li className="relative">
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="hover:text-blue-600 transition flex items-center gap-1"
              >
                Products
                                <svg
                  className="w-4 h-4 mt-[2px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {productsOpen && (
                <ul className="absolute top-10 left-0 bg-white shadow-lg rounded-lg w-52 py-2 z-50">
                  <li>
                    <Link
                      to="/upi-autopay"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setProductsOpen(false)}
                    >
                      UPI
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/payment-links"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setProductsOpen(false)}
                    >
                      Payment Link
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/soundbox"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setProductsOpen(false)}
                    >
                      SoundBox
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/integration" className="hover:text-blue-600 transition">
                Integration
              </Link>
            </li>

            <li>
              <Link to="/careers" className="hover:text-blue-600 transition">
                Careers
              </Link>
            </li>

            <li>
              <Link to="/contact-us" className="hover:text-blue-600 transition">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Sign Up Button */}
          <Link
            to="/signup"
            className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition font-semibold"
          >
            Sign Up
          </Link>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden mt-2 rounded-lg p-4">
              <ul className="flex flex-col gap-4 text-gray-800 font-semibold">

                <li>
                  <Link to="/" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </Link>
                </li>

                {/* Mobile Features */}
                <li>
                  <button
                    className="w-full text-left flex justify-between"
                    onClick={() => setFeaturesOpen(!featuresOpen)}
                  >
                    Features <span>⌄</span>
                  </button>

                  {featuresOpen && (
                    <ul className="mt-2 ml-4 flex flex-col gap-2 text-gray-700">
                      <li>
                        <Link to="/payment-gateway" onClick={() => setIsMenuOpen(false)}>
                          Payment Gateway
                        </Link>
                      </li>
                      <li>
                        <Link to="/one-click-checkout" onClick={() => setIsMenuOpen(false)}>
                          One-click Checkout
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <Link to="/about-us" onClick={() => setIsMenuOpen(false)}>
                    About Us
                  </Link>
                </li>

                {/* Mobile Products */}
                <li>
                  <button
                    className="w-full text-left flex justify-between"
                    onClick={() => setProductsOpen(!productsOpen)}
                  >
                    Products <span>⌄</span>
                  </button>

                  {productsOpen && (
                    <ul className="mt-2 ml-4 flex flex-col gap-2 text-gray-700">
                      <li>
                        <Link to="/upi-autopay" onClick={() => setIsMenuOpen(false)}>
                          UPI
                        </Link>
                      </li>
                      <li>
                        <Link to="/payment-links" onClick={() => setIsMenuOpen(false)}>
                          Payment Link
                        </Link>
                      </li>
                      <li>
                        <Link to="/soundbox" onClick={() => setIsMenuOpen(false)}>
                          SoundBox
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <Link to="/integration" onClick={() => setIsMenuOpen(false)}>
                    Integration
                  </Link>
                </li>

                <li>
                  <Link to="/careers" onClick={() => setIsMenuOpen(false)}>
                    Careers
                  </Link>
                </li>

                <li>
                  <Link to="/contact-us" onClick={() => setIsMenuOpen(false)}>
                    Contact Us
                  </Link>
                </li>

                {/* Mobile Signup */}
                <li>
                  <Link
                    to="/signup"
                    className="block text-center bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </li>

              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
