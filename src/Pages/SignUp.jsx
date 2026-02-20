import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePost } from "../hooks/usePost";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    businessName: "",
    businessType: "",
    password: "",
    confirmPassword: "",
    // Add missing fields
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [focusedField, setFocusedField] = useState(null);

  const { 
    loading: isLoading, 
    error: apiError, 
    post: registerUser,
    reset: resetApiState 
  } = usePost('/register');

  const businessTypes = [
    "Retail",
    "E-commerce",
    "Restaurant & Food",
    "Healthcare & Wellness",
    "Education & Training",
    "Professional Services",
    "Technology & IT",
    "Manufacturing",
    "Real Estate",
    "Travel & Hospitality",
    "Entertainment",
    "Non-Profit",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "password") {
      calculatePasswordStrength(value);
    }

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
    
    if (apiError) {
      resetApiState();
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));
    setFocusedField(null);
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[a-z]/.test(password)) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    setPasswordStrength(strength);
  };

  const getStrengthColor = () => {
    if (passwordStrength < 25) return "bg-red-400";
    if (passwordStrength < 50) return "bg-orange-400";
    if (passwordStrength < 75) return "bg-yellow-400";
    return "bg-emerald-400";
  };

  const getStrengthText = () => {
    if (passwordStrength < 25) return "Weak";
    if (passwordStrength < 50) return "Fair";
    if (passwordStrength < 75) return "Good";
    return "Strong";
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const mobileRegex = /^[6-9]\d{9}$/;
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit Indian mobile number";
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = "Business name is required";
    }

    if (!formData.businessType) {
      newErrors.businessType = "Please select your business type";
    }

    // New validations for address fields
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Please enter a valid 6-digit pincode";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])/.test(formData.password)) {
      newErrors.password = "Password must contain at least one lowercase letter";
    } else if (!/(?=.*[A-Z])/.test(formData.password)) {
      newErrors.password = "Password must contain at least one uppercase letter";
    } else if (!/(?=.*\d)/.test(formData.password)) {
      newErrors.password = "Password must contain at least one number";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const allFields = Object.keys(formData).reduce((acc, field) => {
      acc[field] = true;
      return acc;
    }, {});
    setTouched(allFields);

    if (validateForm()) {
      // Transform the data to match backend expectations
      const apiData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.confirmPassword, // Add this for Laravel
        phone: formData.mobile, // Map mobile to phone
        company_name: formData.businessName, // Map businessName to company_name
        business_type: formData.businessType, // Map businessType to business_type
        address: formData.address,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode,
      };
      
      const response = await registerUser(apiData);
      
      if (response.success) {
        if (response.data?.token) {
          localStorage.setItem('authToken', response.data.token);
        }
        if (response.data?.user) {
          localStorage.setItem('userData', JSON.stringify(response.data.user));
        }
        navigate("/integration");
      }
    }
  };

  // Add this function to display API validation errors
  const getFieldError = (field) => {
    if (apiError && typeof apiError === 'object' && apiError.errors) {
      return apiError.errors[field]?.[0];
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 px-4 sm:py-12 lg:py-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #e0e7ff 1px, transparent 1px),
                            linear-gradient(to bottom, #e0e7ff 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          opacity: 0.2
        }}></div>
        
        <div className="absolute top-20 -left-20 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Create your account
          </h1>
        
          <div className="flex justify-center gap-2 mt-6">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  step === 1 
                    ? 'w-12 bg-blue-600' 
                    : 'w-1.5 bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Full Name <span className="text-blue-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => handleBlur('name')}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-all duration-200 ${
                    (touched.name && errors.name) || getFieldError('name')
                      ? "border-red-300 bg-red-50 focus:border-red-400"
                      : focusedField === 'name'
                      ? "border-blue-400 shadow-sm"
                      : "border-gray-200 hover:border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-100`}
                  placeholder="John Doe"
                />
              </div>
              {(touched.name && errors.name) && (
                <p className="mt-1.5 text-sm text-red-500">{errors.name}</p>
              )}
              {getFieldError('name') && (
                <p className="mt-1.5 text-sm text-red-500">{getFieldError('name')}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email Address <span className="text-blue-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => handleBlur('email')}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-all duration-200 ${
                    (touched.email && errors.email) || getFieldError('email')
                      ? "border-red-300 bg-red-50 focus:border-red-400"
                      : focusedField === 'email'
                      ? "border-blue-400 shadow-sm"
                      : "border-gray-200 hover:border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-100`}
                  placeholder="john@company.com"
                />
              </div>
              {(touched.email && errors.email) && (
                <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>
              )}
              {getFieldError('email') && (
                <p className="mt-1.5 text-sm text-red-500">{getFieldError('email')}</p>
              )}
            </div>

            {/* Mobile/Phone Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Mobile Number <span className="text-blue-500">*</span>
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-gray-200 bg-gray-50 text-gray-600 text-sm">
                  +91
                </span>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('mobile')}
                  onBlur={() => handleBlur('mobile')}
                  maxLength="10"
                  className={`flex-1 w-full px-4 py-3 rounded-r-lg border transition-all duration-200 ${
                    (touched.mobile && errors.mobile) || getFieldError('phone')
                      ? "border-red-300 bg-red-50 focus:border-red-400"
                      : focusedField === 'mobile'
                      ? "border-blue-400 shadow-sm"
                      : "border-gray-200 hover:border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-100`}
                  placeholder="98765 43210"
                />
              </div>
              {(touched.mobile && errors.mobile) && (
                <p className="mt-1.5 text-sm text-red-500">{errors.mobile}</p>
              )}
              {getFieldError('phone') && (
                <p className="mt-1.5 text-sm text-red-500">{getFieldError('phone')}</p>
              )}
            </div>

            {/* Business Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Business Name <span className="text-blue-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('businessName')}
                  onBlur={() => handleBlur('businessName')}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-all duration-200 ${
                    (touched.businessName && errors.businessName) || getFieldError('company_name')
                      ? "border-red-300 bg-red-50 focus:border-red-400"
                      : focusedField === 'businessName'
                      ? "border-blue-400 shadow-sm"
                      : "border-gray-200 hover:border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-100`}
                  placeholder="Your Business Name"
                />
              </div>
              {(touched.businessName && errors.businessName) && (
                <p className="mt-1.5 text-sm text-red-500">{errors.businessName}</p>
              )}
              {getFieldError('company_name') && (
                <p className="mt-1.5 text-sm text-red-500">{getFieldError('company_name')}</p>
              )}
            </div>

            {/* Business Type Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Business Type <span className="text-blue-500">*</span>
              </label>
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                onFocus={() => setFocusedField('businessType')}
                onBlur={() => handleBlur('businessType')}
                className={`w-full px-4 py-3 rounded-lg border appearance-none cursor-pointer transition-all duration-200 bg-white ${
                  (touched.businessType && errors.businessType) || getFieldError('business_type')
                    ? "border-red-300 bg-red-50 focus:border-red-400"
                    : focusedField === 'businessType'
                    ? "border-blue-400 shadow-sm"
                    : "border-gray-200 hover:border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-100`}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20' stroke='%23666'%3E%3Cpath strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                  backgroundPosition: 'right 1rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1.5em 1.5em',
                }}
              >
                <option value="">Select your business type</option>
                {businessTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              {(touched.businessType && errors.businessType) && (
                <p className="mt-1.5 text-sm text-red-500">{errors.businessType}</p>
              )}
              {getFieldError('business_type') && (
                <p className="mt-1.5 text-sm text-red-500">{getFieldError('business_type')}</p>
              )}
            </div>

            {/* Address Field - NEW */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Address <span className="text-blue-500">*</span>
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                onFocus={() => setFocusedField('address')}
                onBlur={() => handleBlur('address')}
                rows="3"
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                  (touched.address && errors.address) || getFieldError('address')
                    ? "border-red-300 bg-red-50 focus:border-red-400"
                    : focusedField === 'address'
                    ? "border-blue-400 shadow-sm"
                    : "border-gray-200 hover:border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-100`}
                placeholder="Enter your full address"
              />
              {(touched.address && errors.address) && (
                <p className="mt-1.5 text-sm text-red-500">{errors.address}</p>
              )}
              {getFieldError('address') && (
                <p className="mt-1.5 text-sm text-red-500">{getFieldError('address')}</p>
              )}
            </div>

            {/* City, State, Pincode Row - NEW */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* City */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  City <span className="text-blue-500">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('city')}
                  onBlur={() => handleBlur('city')}
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                    (touched.city && errors.city) || getFieldError('city')
                      ? "border-red-300 bg-red-50 focus:border-red-400"
                      : focusedField === 'city'
                      ? "border-blue-400 shadow-sm"
                      : "border-gray-200 hover:border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-100`}
                  placeholder="City"
                />
                {(touched.city && errors.city) && (
                  <p className="mt-1.5 text-sm text-red-500">{errors.city}</p>
                )}
                {getFieldError('city') && (
                  <p className="mt-1.5 text-sm text-red-500">{getFieldError('city')}</p>
                )}
              </div>

              {/* State */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  State <span className="text-blue-500">*</span>
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('state')}
                  onBlur={() => handleBlur('state')}
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                    (touched.state && errors.state) || getFieldError('state')
                      ? "border-red-300 bg-red-50 focus:border-red-400"
                      : focusedField === 'state'
                      ? "border-blue-400 shadow-sm"
                      : "border-gray-200 hover:border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-100`}
                  placeholder="State"
                />
                {(touched.state && errors.state) && (
                  <p className="mt-1.5 text-sm text-red-500">{errors.state}</p>
                )}
                {getFieldError('state') && (
                  <p className="mt-1.5 text-sm text-red-500">{getFieldError('state')}</p>
                )}
              </div>

              {/* Pincode */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Pincode <span className="text-blue-500">*</span>
                </label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('pincode')}
                  onBlur={() => handleBlur('pincode')}
                  maxLength="6"
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                    (touched.pincode && errors.pincode) || getFieldError('pincode')
                      ? "border-red-300 bg-red-50 focus:border-red-400"
                      : focusedField === 'pincode'
                      ? "border-blue-400 shadow-sm"
                      : "border-gray-200 hover:border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-100`}
                  placeholder="6-digit pincode"
                />
                {(touched.pincode && errors.pincode) && (
                  <p className="mt-1.5 text-sm text-red-500">{errors.pincode}</p>
                )}
                {getFieldError('pincode') && (
                  <p className="mt-1.5 text-sm text-red-500">{getFieldError('pincode')}</p>
                )}
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Password <span className="text-blue-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => handleBlur('password')}
                  className={`w-full pl-10 pr-10 py-3 rounded-lg border transition-all duration-200 ${
                    (touched.password && errors.password) || getFieldError('password')
                      ? "border-red-300 bg-red-50 focus:border-red-400"
                      : focusedField === 'password'
                      ? "border-blue-400 shadow-sm"
                      : "border-gray-200 hover:border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-100`}
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="mt-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${getStrengthColor()} transition-all duration-500 rounded-full`}
                        style={{ width: `${passwordStrength}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-medium text-gray-600">
                      {getStrengthText()}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <div className={`w-1 h-1 rounded-full ${formData.password.length >= 8 ? 'bg-emerald-400' : 'bg-gray-300'}`}></div>
                      <span>8+ characters</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className={`w-1 h-1 rounded-full ${/[a-z]/.test(formData.password) ? 'bg-emerald-400' : 'bg-gray-300'}`}></div>
                      <span>Lowercase</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className={`w-1 h-1 rounded-full ${/[A-Z]/.test(formData.password) ? 'bg-emerald-400' : 'bg-gray-300'}`}></div>
                      <span>Uppercase</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className={`w-1 h-1 rounded-full ${/[0-9]/.test(formData.password) ? 'bg-emerald-400' : 'bg-gray-300'}`}></div>
                      <span>Number</span>
                    </div>
                  </div>
                </div>
              )}
              
              {(touched.password && errors.password) && (
                <p className="mt-1.5 text-sm text-red-500">{errors.password}</p>
              )}
              {getFieldError('password') && (
                <p className="mt-1.5 text-sm text-red-500">{getFieldError('password')}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Confirm Password <span className="text-blue-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('confirmPassword')}
                  onBlur={() => handleBlur('confirmPassword')}
                  className={`w-full pl-10 pr-10 py-3 rounded-lg border transition-all duration-200 ${
                    (touched.confirmPassword && errors.confirmPassword)
                      ? "border-red-300 bg-red-50 focus:border-red-400"
                      : focusedField === 'confirmPassword'
                      ? "border-blue-400 shadow-sm"
                      : "border-gray-200 hover:border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-100`}
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  )}
                </button>
              </div>
              {(touched.confirmPassword && errors.confirmPassword) && (
                <p className="mt-1.5 text-sm text-red-500">{errors.confirmPassword}</p>
              )}

              {/* Password Match Indicator */}
              {formData.password && formData.confirmPassword && (
                <p className={`mt-1.5 text-xs ${
                  formData.password === formData.confirmPassword ? 'text-emerald-600' : 'text-red-500'
                }`}>
                  {formData.password === formData.confirmPassword
                    ? '✓ Passwords match'
                    : '✗ Passwords do not match'}
                </p>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start pt-2">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 w-4 h-4 border-2 border-gray-300 rounded text-blue-600 focus:ring-blue-200"
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I agree to the{" "}
                <a href="/terms" className="text-blue-600 font-medium hover:text-blue-700">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-blue-600 font-medium hover:text-blue-700">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* API Error Message - Display validation errors in a better format */}
            {apiError && typeof apiError === 'object' && apiError.message && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm font-medium text-red-600 mb-1">{apiError.message}</p>
                {apiError.errors && Object.keys(apiError.errors).length > 0 && (
                  <ul className="text-xs text-red-500 list-disc list-inside">
                    {Object.entries(apiError.errors).map(([field, messages]) => (
                      <li key={field}>{field}: {messages[0]}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
            {apiError && typeof apiError === 'string' && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">{apiError}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-4"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Creating account...</span>
                </div>
              ) : (
                "Create Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;