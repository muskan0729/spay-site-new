import React, { useEffect } from "react";
import logo from "../assets/images/logo.webp"; // change if needed

const AuthModal = ({ isOpen, onClose }) => {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
      >
        <span className="modal-close" onClick={onClose}>
          ✕
        </span>

        <img src={logo} alt="logo" className="modal-logo" />

        <h2>Get Your Kit</h2>

        <p>
          To access this documentation, sign in or <br />
          sign up to continue.
        </p>

        <button className="modal-btn">Sign Up</button>

        <p className="login-text">
          If already Exist? <span>Login</span>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
