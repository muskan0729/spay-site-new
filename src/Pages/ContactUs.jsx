import React from "react";
import { Helmet } from "react-helmet";
import contactVideo from "../assets/videos/contact-hero.mp4";
import {
  FaEnvelope,
  FaPhone,
  FaUserTie,
  FaMapMarkerAlt,
} from "react-icons/fa";

/* ================= COLOR MAP ================= */

const colorStyles = {
  blue: {
    border: "border-blue-500",
    bg: "bg-blue-100",
    text: "text-blue-600",
    icon: "text-blue-500",
    gradient: "from-blue-200 via-blue-100 to-white",
  },
  purple: {
    border: "border-purple-500",
    bg: "bg-purple-100",
    text: "text-purple-600",
    icon: "text-purple-500",
    gradient: "from-purple-200 via-purple-100 to-white",
  },
  green: {
    border: "border-green-500",
    bg: "bg-green-100",
    text: "text-green-600",
    icon: "text-green-500",
    gradient: "from-green-200 via-green-100 to-white",
  },
  red: {
    border: "border-red-500",
    bg: "bg-red-100",
    text: "text-red-600",
    icon: "text-red-500",
    gradient: "from-red-200 via-red-100 to-white",
  },
};

const inquiryData = [
  {
    title: "For Inquiry",
    desc: "Kindly share your complaint details and our team will respond promptly.",
    extra: [
      { type: "phone", value: "+91 2246072193" },
      { type: "email", value: "inquiry@spay.live" },
    ],
    color: "blue",
    icon: <FaEnvelope />,
  },
  {
    title: "Partner Support",
    desc: "Please share your complaint details and our team will contact you shortly.",
    extra: [
      { type: "phone", value: "+91 84500 07614" },
      { type: "email", value: "helpdesk@spay.live" },
    ],
    color: "purple",
    icon: <FaUserTie />,
  },
  {
    title: "Grievance Redressal",
    desc: "Provide complaint details and we’ll address it as soon as possible.",
    extra: [{ type: "email", value: "helpdesk@spay.live" }],
    color: "green",
    icon: <FaEnvelope />,
  },
  {
    title: "Compliance Inquiry",
    desc: "Share your compliance concerns and we will address them promptly.",
    extra: [{ type: "email", value: "compliance@spay.live" }],
    color: "red",
    icon: <FaEnvelope />,
  },
];

const ContactUs = () => {
  return (
    <div className="bg-gray-50 w-full min-h-screen overflow-x-hidden">

       <Helmet>
                    <title>Contact Spay Fintech | Payment Gateway Company in Mumbai</title>
                    <link rel="canonical" href="https://spay.live/about-us" />
                    <meta  name="robots" content="index, follow, max-image-preview:large" />
                    <meta
                      name="description"
                      content="Have questions about payment gateway setup or fintech solutions in India? Contact Spay Fintech's Mumbai support team in Andheri West. Call now."
                    />
                  </Helmet>

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[32vh] sm:h-[35vh] md:h-[40vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={contactVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide text-center">
            Contact Us
          </h1>
        </div>
      </section>

      {/* ================= INQUIRY CARDS ================= */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 max-w-6xl mx-auto">

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

          {inquiryData.map((item, idx) => {
            const styles = colorStyles[item.color];

            return (
              <div
                key={idx}
                className={`relative bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition border-t-4 ${styles.border} flex flex-col`}
              >
                <div className={`w-11 h-11 flex items-center justify-center rounded-full ${styles.bg} ${styles.text} text-lg mb-4`}>
                  {item.icon}
                </div>

                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {item.desc}
                </p>

                <div className="space-y-1">
                  {item.extra.map((line, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-600 text-xs">
                      {line.type === "phone" && (
                        <FaPhone className={`${styles.icon} text-xs`} />
                      )}
                      {line.type === "email" && (
                        <FaEnvelope className={`${styles.icon} text-xs`} />
                      )}

                      {line.type === "email" ? (
                        <a href={`mailto:${line.value}`} className="hover:underline break-all">
                          {line.value}
                        </a>
                      ) : (
                        <span>{line.value}</span>
                      )}
                    </div>
                  ))}
                </div>

                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${styles.gradient} opacity-0 hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                ></div>
              </div>
            );
          })}

        </div>
      </section>

      {/* ================= LOCATION & CONTACT ================= */}
      <section className="py-10 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">

          {/* MAP */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">
              Our Location
            </h2>

            <div className="rounded-xl overflow-hidden shadow border border-gray-200">
              <iframe
                title="Spay Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.3521983211285!2d72.8292998!3d19.1360545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c950e5d80efd%3A0xd73698698f0e4fbd!2sSPAY%20FINTECH%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1781074800277!5m2!1sen!2sin"
                height="280"
                className="w-full"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">
              Contact Us
            </h2>

            <div className="space-y-4">

              <div className="bg-gray-50 p-4 rounded-xl border text-sm">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-blue-600 text-sm mt-1" />
                  <div>
                    <h4 className="font-medium text-sm mb-1">
                      Spay Fintech Pvt Ltd
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-xs">
                      Office-316, Floor 3,
                      316 Laxmi Plaza,
                      Andheri West, Mumbai,
                      Maharashtra 400053.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <FaPhone className="text-blue-600 text-xs" />
                  <span>022-46072193</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaPhone className="text-green-600 text-xs" />
                  <span>+91 84500 07614</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-red-500 text-xs" />
                  <a href="mailto:inquiry@spay.live" className="hover:underline">
                    inquiry@spay.live
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ContactUs;