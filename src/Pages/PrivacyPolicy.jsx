import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PrivacyPolicyPage = () => {
  const [openSection, setOpenSection] = useState("interpretation");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const accordionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.4, ease: "easeInOut" }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">

        {/* HERO */}
<section className="pt-20 pb-24 bg-gradient-to-br from-blue-700 to-blue-900 text-white">        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-3"
          > */}
            {/* Privacy Policy
          </motion.h1>

          <p className="text-lg md:text-xl opacity-90">
            Effective Date: {currentDate}
          </p> */}
        {/* </div>
      </section> */}    
        </div>
      </section>
<div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-16 relative z-10 pb-20">
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-8 md:p-10">

    <div className="text-center mb-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">
        Privacy Policy
      </h1>

      <p className="text-gray-500 mt-2">
        Effective Date: {currentDate}
      </p>
    </div>

    <div className="space-y-6">

          {/* SECTION 1 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <button
              onClick={() => toggleSection("interpretation")}
              className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-blue-50 transition"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                1. Interpretation and Definitions
              </h2>

              <motion.span
                animate={{ rotate: openSection === "interpretation" ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold text-blue-600"
              >
                +
              </motion.span>
            </button>

            <AnimatePresence>
              {openSection === "interpretation" && (
                <motion.div
                  variants={accordionVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="px-6 pb-6 text-gray-700 leading-relaxed overflow-hidden"
                >
                  <h3 className="text-lg font-semibold mt-4 mb-3">
                    Interpretation
                  </h3>
                  <p className="mb-4">
                    Terms with initial capital letters carry specific meanings
                    as defined below. These definitions apply regardless of
                    whether they appear in singular or plural form.
                  </p>

                  <h3 className="text-lg font-semibold mt-6 mb-3">
                    Definitions
                  </h3>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Account:</strong> A unique account created for
                      you to access our Service.
                    </li>
                    <li>
                      <strong>Affiliate:</strong> An entity that controls or is
                      controlled by another party.
                    </li>
                    <li>
                      <strong>Application:</strong> The Spay software platform.
                    </li>
                    <li>
                      <strong>Company:</strong> Spay Fintech Pvt. Ltd., Mumbai,
                      Maharashtra, India.
                    </li>
                    <li>
                      <strong>Cookies:</strong> Small files placed on your
                      device to store browsing data.
                    </li>
                    <li>
                      <strong>Personal Data:</strong> Information that relates
                      to an identifiable individual.
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* SECTION 2 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <button
              onClick={() => toggleSection("collection")}
              className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-blue-50 transition"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                2. Collection and Use of Personal Data
              </h2>

              <motion.span
                animate={{ rotate: openSection === "collection" ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold text-blue-600"
              >
                +
              </motion.span>
            </button>

            <AnimatePresence>
              {openSection === "collection" && (
                <motion.div
                  variants={accordionVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="px-6 pb-6 text-gray-700 leading-relaxed overflow-hidden"
                >
                  <h3 className="text-lg font-semibold mt-4 mb-3">
                    Types of Data Collected
                  </h3>

                  <h4 className="font-medium mt-4 mb-2">Personal Data</h4>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Email address</li>
                    <li>First and last name</li>
                    <li>Phone number</li>
                  </ul>

                  <h4 className="font-medium mt-4 mb-2">Usage Data</h4>
                  <p>
                    Usage Data is collected automatically and may include
                    details such as IP address, browser type, pages visited,
                    and time spent on pages.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CONTACT */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Contact Us
            </h2>

            <p className="text-gray-700 mb-3">
              If you have any questions regarding this Privacy Policy:
            </p>

            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:inquiry@spay.live"
                className="text-blue-600 hover:underline"
              >
                inquiry@spay.live
              </a>
            </p>

            <p>
              <strong>Website:</strong>{" "}
              <a
                href="https://spay.live"
                className="text-blue-600 hover:underline"
              >
                https://spay.live
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
};
  
export default PrivacyPolicyPage;