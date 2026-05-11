import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RefundandCancellation = () => {
  const [openSection, setOpenSection] = useState("scope");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const accordionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      
      {/* HERO SECTION */}
      <section className="pt-20 pb-24 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Refund & Cancellation Policy
          </h1>

          <p className="text-lg md:text-xl opacity-90">
            {/* Effective Date: {currentDate} */}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-16 relative z-10 pb-20">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-8 md:p-10">

          <div className="space-y-6">

            {/* SECTION 1 */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleSection("scope")}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-blue-50 transition"
              >
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                  1. Scope
                </h2>

                <motion.span
                  animate={{ rotate: openSection === "scope" ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl font-bold text-blue-600"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {openSection === "scope" && (
                  <motion.div
                    variants={accordionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="px-6 pb-6 text-gray-700 leading-relaxed overflow-hidden"
                  >
                    <p>
                      This policy applies to all customers, merchants, and users
                      who make or receive payments through our platform. By
                      using our services, you agree to the terms mentioned
                      below.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* SECTION 2 */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleSection("cancellation")}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-blue-50 transition"
              >
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                  2. Cancellation Policy
                </h2>

                <motion.span
                  animate={{ rotate: openSection === "cancellation" ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl font-bold text-blue-600"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {openSection === "cancellation" && (
                  <motion.div
                    variants={accordionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="px-6 pb-6 text-gray-700 leading-relaxed overflow-hidden"
                  >
                    <h3 className="text-lg font-semibold mt-4 mb-3">
                      For Customers
                    </h3>

                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Customers may request cancellation of an order or
                        transaction directly with the respective
                        merchant/service provider.
                      </li>
                      <li>
                        Cancellation eligibility depends on the merchant’s
                        individual cancellation policy.
                      </li>
                      <li>
                        Once a payment has been successfully processed,
                        cancellation may not always be possible.
                      </li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-6 mb-3">
                      For Merchants
                    </h3>

                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Merchants are responsible for clearly displaying their
                        own cancellation policies to customers.
                      </li>
                      <li>
                        Merchants must process eligible cancellation requests
                        promptly and fairly.
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* SECTION 3 */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleSection("refund")}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-blue-50 transition"
              >
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                  3. Refund Policy
                </h2>

                <motion.span
                  animate={{ rotate: openSection === "refund" ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl font-bold text-blue-600"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {openSection === "refund" && (
                  <motion.div
                    variants={accordionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="px-6 pb-6 text-gray-700 leading-relaxed overflow-hidden"
                  >
                    <h3 className="text-lg font-semibold mt-4 mb-3">
                      Refund Eligibility
                    </h3>

                    <ul className="list-disc pl-6 space-y-2">
                      <li>Duplicate payment made by the customer</li>
                      <li>
                        Failed transaction where the amount was deducted but
                        service/product was not delivered
                      </li>
                      <li>
                        Order cancellation approved by the merchant
                      </li>
                      <li>
                        Fraudulent or unauthorized transaction verified after
                        investigation
                      </li>
                      <li>
                        Any other valid reason approved by the merchant
                      </li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-6 mb-3">
                      Refund Processing Time
                    </h3>

                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Approved refunds are generally processed within 5–10
                        business days.
                      </li>
                      <li>
                        The refunded amount will be credited to the original
                        payment method used during the transaction.
                      </li>
                      <li>
                        Processing time may vary depending on the customer’s
                        bank, card issuer, or payment provider.
                      </li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-6 mb-3">
                      Non-Refundable Situations
                    </h3>

                    <ul className="list-disc pl-6 space-y-2">
                      <li>Services already availed or completed</li>
                      <li>
                        Digital products already delivered/accessed
                      </li>
                      <li>
                        Transactions declined due to customer-side issues
                      </li>
                      <li>
                        Requests made beyond the permitted refund period
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* SECTION 4 */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleSection("failed")}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-blue-50 transition"
              >
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                  4. Failed Transactions
                </h2>

                <motion.span
                  animate={{ rotate: openSection === "failed" ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl font-bold text-blue-600"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {openSection === "failed" && (
                  <motion.div
                    variants={accordionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="px-6 pb-6 text-gray-700 leading-relaxed overflow-hidden"
                  >
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        In case a transaction fails but the amount is debited,
                        the amount is usually auto-reversed by the bank within
                        5–7 business days.
                      </li>
                      <li>
                        If the reversal is not received within the specified
                        period, customers should contact their bank or the
                        merchant support team with transaction details.
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* SECTION 5 */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleSection("chargebacks")}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-blue-50 transition"
              >
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                  5. Chargebacks and Disputes
                </h2>

                <motion.span
                  animate={{ rotate: openSection === "chargebacks" ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl font-bold text-blue-600"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {openSection === "chargebacks" && (
                  <motion.div
                    variants={accordionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="px-6 pb-6 text-gray-700 leading-relaxed overflow-hidden"
                  >
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Customers may raise disputes for unauthorized or
                        incorrect transactions.
                      </li>
                      <li>
                        We reserve the right to request supporting documents and
                        transaction proof during investigation.
                      </li>
                      <li>
                        Fraudulent chargeback claims may result in suspension of
                        services or legal action.
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* SECTION 6 */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleSection("merchant")}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-blue-50 transition"
              >
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                  6. Merchant Responsibility
                </h2>

                <motion.span
                  animate={{ rotate: openSection === "merchant" ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl font-bold text-blue-600"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {openSection === "merchant" && (
                  <motion.div
                    variants={accordionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="px-6 pb-6 text-gray-700 leading-relaxed overflow-hidden"
                  >
                    <p className="mb-4">
                      Merchants using our payment gateway are solely responsible
                      for:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>Product/service delivery</li>
                      <li>Customer support</li>
                      <li>Handling refunds and cancellations</li>
                      <li>
                        Compliance with applicable laws and regulations
                      </li>
                    </ul>

                    <p>
                      The payment gateway only facilitates transaction
                      processing and is not liable for merchant-related
                      disputes.
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
                If you have any questions regarding this Refund & Cancellation
                Policy:
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

              <p className="mt-2">
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

export default RefundandCancellation;