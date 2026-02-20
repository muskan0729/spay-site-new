import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/Spay TM Logo (Black).webp";

const AuthModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    emailOrMobile: "",
    password: "",
  });

  /* ================= ESC KEY CLOSE ================= */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  /* ================= BODY SCROLL LOCK ================= */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Data:", formData);

    // 🔥 Replace with real login API
    // fetch('/api/login', {...})

    onClose();
  };

  const handleSignUp = () => {
    onClose();
    navigate("/onboarding-merchant");
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>
          ✕
        </span>

        <img src={logo} alt="logo" className="modal-logo" />

        <h2 className="modal-title">Login to Continue</h2>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="input-group">
            <label>Email / Mobile No</label>
            <input
              type="text"
              name="emailOrMobile"
              placeholder="Enter Email or Mobile"
              value={formData.emailOrMobile}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="modal-btn">
            Login
          </button>
        </form>

        <div className="divider">OR</div>

       <p className="signup-text">
  Don’t have an account?{" "}
  <span onClick={handleSignUp}>Sign Up</span>
</p>

      </div>
    </div>
  );
};

export default AuthModal;
