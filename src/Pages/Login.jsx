import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import illustration from "../assets/images/login.png";
import "./Login.css";
import { usePost } from "../hooks/usePost";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    emailormobile: "", // Changed from username to emailormobile to match Laravel
    password: "",
    remember: true, // Note: Laravel doesn't use this, but we'll keep it for UI
  });

  
  const [errors, setErrors] = useState({});

  const {
    loading,
    error: apiError,
    post: loginUser,
    reset,
  } = usePost("/login");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    if (apiError) {
      reset();
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Email or Mobile is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const payload = {
      emailormobile: formData.username,
      password: formData.password,
      remember: formData.remember,
    };

    const response = await loginUser(payload);

    if (response.success) {
      const { token, user } = response.data;

      // 🔥 Use AuthContext instead of manual localStorage only
      login(user, token);

      // 🔥 Role Based Redirect
      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/"); // Non-admin users go to homepage
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-illustration">
          <img src={illustration} alt="Login Illustration" />
        </div>

        <div className="login-form-container">
          <div className="form-header">
            <h1>Welcome Back</h1>
            <p>Log in to manage your Spay account</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form" noValidate>
            {/* Username */}
            <div className="form-group">
              <label>Username / Email</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your email or mobile"
                value={formData.username}
                onChange={handleChange}
                className={errors.username ? "input-error" : ""}
              />
              {errors.username && (
                <span className="error-text">{errors.username}</span>
              )}
            </div>

            {/* Password */}
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? "input-error" : ""}
              />
              {errors.password && (
                <span className="error-text">{errors.password}</span>
              )}
            </div>

            {/* Options */}
            <div className="form-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                  disabled={loading}
                />
                <span>Remember me</span>
              </label>

              <Link to="/forgot-password" className="forgot-link">
                Forgot Password?
              </Link>
            </div>

            {/* API Validation Errors */}
            {apiError?.type === "validation" && (
              <div className="api-error">
                {Object.values(apiError.errors).map((messages, i) => (
                  <div key={i}>{messages[0]}</div>
                ))}
              </div>
            )}

            {/* Other Errors */}
            {apiError?.type !== "validation" && apiError?.message && (
              <div className="api-error">{apiError.message}</div>
            )}

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </button>

            <div className="signup-prompt">
              Don't have an account?{" "}
              <Link to="/sign-up" className="signup-link">
                Create one now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;