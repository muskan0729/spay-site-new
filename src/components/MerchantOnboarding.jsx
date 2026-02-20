import React, { useState, useEffect } from "react";
import "./MerchantOnboarding.css";

const businessTypes = [
  "Private Limited",
  "Public Limited",
  "Partnership",
  "Proprietorship",
  "LLP",
  "Trust",
  "Society",
  "Non-Profit",
  "Other",
];

const categories = [
  "E-Commerce",
  "Retail",
  "Food & Beverage",
  "Travel & Hospitality",
  "Education",
  "Healthcare",
  "Finance & Insurance",
  "Services",
  "Subscription / SaaS",
  "Others",
];

const initialState = {
  entityLegalName: "",
  merchantBrandName: "",
  businessEntityType: "",
  categorySegment: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
  websiteUrl: "",
  contactPersonName: "",
  email: "",
  contactNo: "",
};

const MerchantOnboarding = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required fields
    Object.keys(initialState).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = "This field is required";
      }
    });

    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation (Indian format - 10 digits)
    if (formData.contactNo && !/^[6-9]\d{9}$/.test(formData.contactNo)) {
      newErrors.contactNo = "Enter a valid 10-digit Indian mobile number";
    }

    // Pincode validation (6 digits)
    if (formData.pincode && !/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Enter a valid 6-digit PIN code";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      // Replace with your real API endpoint
      const response = await fetch("/api/merchant/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Submission failed");

      const data = await response.json();
      console.log("Success:", data);

      setSubmitted(true);
      setFormData(initialState);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Reset submitted state after some time (optional)
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 8000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <div className="merchant-onboarding-page">
      <div className="merchant-card">
        <div className="header-section">
          <h1>Merchant Onboarding</h1>
          <p className="subtitle">
            Register your business with Spay in minutes. Complete the form below
            to get started with India's most reliable payment gateway.
          </p>
        </div>

        {submitted ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>Thank You!</h2>
            <p>Your onboarding request has been submitted successfully.</p>
            <p>Our team will review it and get back to you within 24–48 hours.</p>
            <button
              className="btn-secondary"
              onClick={() => setSubmitted(false)}
            >
              Submit Another Business
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="merchant-form" noValidate>
            <div className="form-grid">
              <div className="form-group">
                <label>Entity Legal Name *</label>
                <input
                  type="text"
                  name="entityLegalName"
                  value={formData.entityLegalName}
                  onChange={handleChange}
                  placeholder="Legal name as per GST/PAN"
                  className={errors.entityLegalName ? "input-error" : ""}
                />
                {errors.entityLegalName && (
                  <span className="error-text">{errors.entityLegalName}</span>
                )}
              </div>

              <div className="form-group">
                <label>Merchant Brand Name / DBA *</label>
                <input
                  type="text"
                  name="merchantBrandName"
                  value={formData.merchantBrandName}
                  onChange={handleChange}
                  placeholder="Name shown to customers"
                  className={errors.merchantBrandName ? "input-error" : ""}
                />
                {errors.merchantBrandName && (
                  <span className="error-text">{errors.merchantBrandName}</span>
                )}
              </div>

              <div className="form-group">
                <label>Business Entity Type *</label>
                <select
                  name="businessEntityType"
                  value={formData.businessEntityType}
                  onChange={handleChange}
                  className={errors.businessEntityType ? "input-error" : ""}
                >
                  <option value="">Select entity type</option>
                  {businessTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.businessEntityType && (
                  <span className="error-text">{errors.businessEntityType}</span>
                )}
              </div>

              <div className="form-group">
                <label>Category / Industry Segment *</label>
                <select
                  name="categorySegment"
                  value={formData.categorySegment}
                  onChange={handleChange}
                  className={errors.categorySegment ? "input-error" : ""}
                >
                  <option value="">Select your business category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                {errors.categorySegment && (
                  <span className="error-text">{errors.categorySegment}</span>
                )}
              </div>

              <div className="form-group full-width">
                <label>Registered Business Address *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Street address, landmark"
                  className={errors.address ? "input-error" : ""}
                />
                {errors.address && (
                  <span className="error-text">{errors.address}</span>
                )}
              </div>

              <div className="form-group">
                <label>City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="e.g. Mumbai"
                  className={errors.city ? "input-error" : ""}
                />
                {errors.city && <span className="error-text">{errors.city}</span>}
              </div>

              <div className="form-group">
                <label>State *</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="e.g. Maharashtra"
                  className={errors.state ? "input-error" : ""}
                />
                {errors.state && <span className="error-text">{errors.state}</span>}
              </div>

              <div className="form-group">
                <label>PIN Code *</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  maxLength={6}
                  placeholder="6-digit PIN"
                  className={errors.pincode ? "input-error" : ""}
                />
                {errors.pincode && (
                  <span className="error-text">{errors.pincode}</span>
                )}
              </div>

              <div className="form-group">
                <label>Website URL (if live) *</label>
                <input
                  type="url"
                  name="websiteUrl"
                  value={formData.websiteUrl}
                  onChange={handleChange}
                  placeholder="https://yourwebsite.com"
                  className={errors.websiteUrl ? "input-error" : ""}
                />
                {errors.websiteUrl && (
                  <span className="error-text">{errors.websiteUrl}</span>
                )}
              </div>

              <div className="form-group">
                <label>Contact Person Name *</label>
                <input
                  type="text"
                  name="contactPersonName"
                  value={formData.contactPersonName}
                  onChange={handleChange}
                  placeholder="Full name"
                  className={errors.contactPersonName ? "input-error" : ""}
                />
                {errors.contactPersonName && (
                  <span className="error-text">{errors.contactPersonName}</span>
                )}
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="official@yourbusiness.com"
                  className={errors.email ? "input-error" : ""}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label>Contact Number *</label>
                <input
                  type="tel"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  maxLength={10}
                  placeholder="10-digit mobile number"
                  className={errors.contactNo ? "input-error" : ""}
                />
                {errors.contactNo && (
                  <span className="error-text">{errors.contactNo}</span>
                )}
              </div>
            </div>

            <div className="submit-section">
              <button
                type="submit"
                className="submit-btn"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading-text">Processing...</span>
                ) : (
                  "Submit for Review"
                )}
              </button>

              <p className="form-note">
                We respect your privacy. Your information is secure and will only
                be used for onboarding and verification purposes.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default MerchantOnboarding;