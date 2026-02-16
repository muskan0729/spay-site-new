import React, { useState } from "react";
import "./MerchantOnboarding.css";

const businessTypes = [
  "Private",
  "Public",
  "Non-Profit",
  "Proprietor",
  "Other",
];

const categories = [
  "Insurance",
  "Finance",
  "E-Commerce",
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

  // 🔥 Dynamic Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // 🔥 Validation
  const validate = () => {
    let newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (formData.contactNo && formData.contactNo.length < 10) {
      newErrors.contactNo = "Invalid contact number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🔥 API Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      const response = await fetch("/api/merchant/onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);

      alert("Merchant Submitted Successfully!");
      setFormData(initialState);
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // 🔥 Reusable Field Renderer
  const renderInput = (label, name, type = "text") => (
    <div className="form-group">
      <label>{label} *</label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
      />
      {errors[name] && <span className="error">{errors[name]}</span>}
    </div>
  );

  const renderSelect = (label, name, options) => (
    <div className="form-group">
      <label>{label} *</label>
      <select
        name={name}
        value={formData[name]}
        onChange={handleChange}
      >
        <option value="">— Please choose an option —</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {errors[name] && <span className="error">{errors[name]}</span>}
    </div>
  );

  return (
    <div className="merchant-container">
      <div className="merchant-card">
        <h1>Onboarding Merchant Form</h1>
        <p>
          If you have any questions or would like to learn more about our
          insurance payment gateway, please contact us using the form below.
        </p>

        <form onSubmit={handleSubmit} className="merchant-form">
          {renderInput("Entity Legal Name", "entityLegalName")}
          {renderInput("Address", "address")}

          {renderInput("Merchant Brand Name", "merchantBrandName")}
          {renderInput("City", "city")}

          {renderSelect("Business Entity Type", "businessEntityType", businessTypes)}
          {renderInput("State", "state")}

          {renderSelect("Category / Segment", "categorySegment", categories)}
          {renderInput("Pincode", "pincode")}

          {renderInput("Website URL (Live)", "websiteUrl", "url")}
          {renderInput("Contact Person Name", "contactPersonName")}

          {renderInput("Email Address", "email", "email")}
          {renderInput("Contact No", "contactNo", "tel")}

          <div className="submit-wrapper">
            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MerchantOnboarding;