import React, { useState } from "react";
import "./Login.css";
import illustration from "../assets/images/login.png";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // 🔥 Replace with real API
    // fetch("/api/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });

    alert("Login API Called");
  };

  return (
    <div className="login-container">
      <div className="login-card">

        {/* LEFT SIDE */}
        <div className="login-left">
          <img src={illustration} alt="illustration" />
        </div>

        {/* RIGHT SIDE */}
        <div className="login-right">
          <h2>Log In</h2>

          <form onSubmit={handleSubmit} className="login-form">

            <div className="input-group">
              <label>USERNAME</label>
              <input
                type="text"
                name="username"
                placeholder="Enter Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>PASSWORD</label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="login-btn">
              Sign In
            </button>

            <div className="login-options">
              <label className="remember">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                />
                Remember Me
              </label>

            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;
