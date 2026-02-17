import React, { useState } from "react";
import illustration from "../assets/images/login.png";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: true,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    // Simulate API call (replace with real fetch/axios)
    setTimeout(() => {
      console.log("Login Data:", formData);
      alert("Login successful! (Demo)");
      setLoading(false);
      // Redirect or set auth state here
    }, 1200);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        {/* Left - Illustration (hidden on mobile) */}
        <div className="login-illustration">
          <img src={illustration} alt="Login Illustration" />
        </div>

        {/* Right - Form */}
        <div className="login-form-container">
          <div className="form-header">
            <h1>Welcome Back</h1>
            <p>Log in to manage your Spay merchant account</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form" noValidate>
            <div className="form-group">
              <label htmlFor="username">Username / Email</label>
              <input
                id="username"
                type="text"
                name="username"
                placeholder="Enter your username or email"
                value={formData.username}
                onChange={handleChange}
                className={errors.username ? "input-error" : ""}
                required
              />
              {errors.username && <span className="error-text">{errors.username}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? "input-error" : ""}
                required
              />
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                />
                <span>Remember me</span>
              </label>

              <a href="/forgot-password" className="forgot-link">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="login-btn"
              disabled={loading}
            >
              {loading ? (
                <span className="loading">Signing in...</span>
              ) : (
                "Sign In"
              )}
            </button>

            <div className="signup-prompt">
              Don't have an account?{" "}
              <a href="/signup" className="signup-link">
                Create one now
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;