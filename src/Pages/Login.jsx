import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { usePost } from "../hooks/usePost"; // Adjust the import path as needed
import illustration from "../assets/images/login.png";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    emailormobile: "", // Changed from username to emailormobile to match Laravel
    password: "",
    remember: true, // Note: Laravel doesn't use this, but we'll keep it for UI
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  
  // Update the API endpoint to match your Laravel route
  // Assuming your Laravel API is served from the same domain
  // or you have the baseURL configured in apiClient
  const { loading, error: apiError, post: loginUser, reset: resetApi } = usePost('/login');

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

    if (!formData.emailormobile.trim()) {
      newErrors.emailormobile = "Email or phone number is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    // Reset any previous API errors
    resetApi();

    // Make the API call using the post method from usePost
    // Send only the fields that Laravel expects
    const response = await loginUser({
      emailormobile: formData.emailormobile, // This matches Laravel's expected field
      password: formData.password,
      // Note: Laravel doesn't use 'remember' field, so we don't send it
    });

    if (response.success) {
      console.log("Login successful:", response.data);
      
      // Store auth token if returned from API
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        // You might also want to store user data
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      
      // Handle successful login
      alert("Login successful!");
      
      // Redirect to dashboard or home page
      // You can use React Router's navigate here
      // window.location.href = '/dashboard';
      // or if using useNavigate from react-router-dom:
      navigate('/');
      
    } else {
      console.error("Login failed:", response.error);
    }
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
            {/* Display API error if any */}
            {apiError && (
              <div className="api-error-message">
                {apiError}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="emailormobile">Email or Phone Number</label>
              <input
                id="emailormobile"
                type="text"
                name="emailormobile" // Changed to match Laravel's expected field
                placeholder="Enter your email or phone number"
                value={formData.emailormobile}
                onChange={handleChange}
                className={errors.emailormobile ? "input-error" : ""}
                disabled={loading}
                required
              />
              {errors.emailormobile && <span className="error-text">{errors.emailormobile}</span>}
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
                disabled={loading}
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
                  disabled={loading}
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