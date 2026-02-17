import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.webp";

const AuthModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

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

  const handleSignUp = () => {
    onClose();
    navigate("/onboarding-merchant");
  };

  const handleLogin = () => {
    onClose();
    navigate("/login");   // Make sure this route exists in App.jsx
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
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

        <button className="modal-btn" onClick={handleSignUp}>
          Sign Up
        </button>

        <p className="login-text">
          If already Exist?{" "}
          <span
            onClick={handleLogin}
            style={{ cursor: "pointer", color: "#2563eb", fontWeight: "600" }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
