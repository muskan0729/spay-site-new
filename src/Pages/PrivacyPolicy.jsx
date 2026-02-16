import React, { useState } from 'react';

const PrivacyPolicyPage = () => {
  const [openSection, setOpenSection] = useState('interpretation'); // Default open first section

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero / Header */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl md:text-2xl opacity-90 mb-6">
            Effective Date: February 16, 2026
          </p>
          <p className="max-w-3xl mx-auto text-lg opacity-90">
            Spay is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our payment gateway services, website[](https://spay.live), and mobile application.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Table of Contents */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-blue-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Table of Contents</h2>
          <ul className="space-y-3 text-blue-700">
            <li><a href="#interpretation" className="hover:underline">1. Interpretation and Definitions</a></li>
            <li><a href="#collection" className="hover:underline">2. Collection and Use of Your Personal Data</a></li>
            {/* <li><a href="#tracking" className="hover:underline">3. Tracking Technologies and Cookies</a></li> */}
            {/* Add more as you expand sections */}
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Sections with Accordion */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div id="interpretation" className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <button
              onClick={() => toggleSection('interpretation')}
              className="w-full px-8 py-6 text-left bg-blue-50 hover:bg-blue-100 transition-colors flex justify-between items-center"
            >
              <h2 className="text-2xl font-semibold text-gray-800">1. Interpretation and Definitions</h2>
              <span className="text-3xl font-bold text-blue-600">
                {openSection === 'interpretation' ? '−' : '+'}
              </span>
            </button>

            {openSection === 'interpretation' && (
              <div className="px-8 pb-8 pt-4 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-semibold mb-4">Interpretation</h3>
                <p className="mb-6">
                  Terms with initial capital letters carry specific meanings as defined below. These definitions apply regardless of whether they appear in singular or plural form.
                </p>

                <h3 className="text-xl font-semibold mb-4">Definitions</h3>
                <p className="mb-4">For this Privacy Policy:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Account</strong>: A unique account established for you to access our Service or certain portions of it.</li>
                  <li><strong>Affiliate</strong>: An entity that controls, is controlled by, or is under common control with another party, where "control" implies ownership of 50% or more of voting shares or securities.</li>
                  <li><strong>Application</strong>: The software program provided by the Company, referred to as Spay.</li>
                  <li><strong>Company</strong>: Spay Fintech Pvt. Ltd., located at 316 Laxmi Plaza, Laxmi Industrial State, Andheri West, Mumbai, Maharashtra, 400053.</li>
                  <li><strong>Cookies</strong>: Small files placed on your device containing browsing history details.</li>
                  <li><strong>Country</strong>: Maharashtra, India.</li>
                  <li><strong>Device</strong>: Any device capable of accessing the Service (computers, cell phones, digital tablets).</li>
                  <li><strong>Personal Data</strong>: Any information relating to an identified or identifiable individual.</li>
                  <li><strong>Service</strong>: The Application, the Website, or both.</li>
                  {/* Add remaining definitions from your content */}
                </ul>
              </div>
            )}
          </div>

          {/* Section 2 - Collection and Use */}
          <div id="collection" className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <button
              onClick={() => toggleSection('collection')}
              className="w-full px-8 py-6 text-left bg-blue-50 hover:bg-blue-100 transition-colors flex justify-between items-center"
            >
              <h2 className="text-2xl font-semibold text-gray-800">2. Collection and Use of Your Personal Data</h2>
              <span className="text-3xl font-bold text-blue-600">
                {openSection === 'collection' ? '−' : '+'}
              </span>
            </button>

            {openSection === 'collection' && (
              <div className="px-8 pb-8 pt-4 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-semibold mb-4">Types of Data Collected</h3>
                
                <h4 className="text-lg font-medium mt-6 mb-3">Personal Data</h4>
                <p className="mb-4">
                  While using our Service, we may request certain personally identifiable information...
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  {/* Add all points from your content */}
                </ul>

                <h4 className="text-lg font-medium mt-6 mb-3">Usage Data</h4>
                <p className="mb-6">
                  Usage Data is collected automatically... IP address, browser type, pages visited...
                </p>

                {/* Add remaining subsections: Tracking Technologies, Use of Personal Data, etc. */}
              </div>
            )}
          </div>

          {/* Add more sections similarly: Tracking Technologies, Disclosure of Data, Security, etc. */}

          {/* Contact Section */}
          <div id="contact" className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
            <p className="text-lg text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, contact us at:
            </p>
            <div className="space-y-3">
              <p><strong>Email:</strong> <a href="mailto:inquiry@spay.live" className="text-blue-600 hover:underline">inquiry@spay.live</a></p>
              <p><strong>Website:</strong> <a href="https://spay.live" className="text-blue-600 hover:underline">https://spay.live</a></p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-gray-500 text-sm">
          Last updated: February 16, 2026
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;