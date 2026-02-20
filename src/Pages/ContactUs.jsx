import React from "react";
import contactVideo from "../assets/videos/contact-hero.mp4";
import { FaEnvelope, FaPhone, FaUserTie } from "react-icons/fa";

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
    desc: "We are here to assist you with your concerns. Kindly share the details of your complaint, and our team will respond promptly.",
    extra: [
      { type: "phone", value: "+91 2246072193" },
      { type: "email", value: "inquiry@spay.live" },
    ],
    color: "blue",
    icon: <FaEnvelope />,
  },
  {
    title: "Partner Support",
    desc: "We appreciate you reaching out. Please share your complaint details, and our team will get in touch with you shortly.",
    extra: [
      { type: "phone", value: "+91 84500 07614" },
      { type: "email", value: "inquiry@spay.live" },
    ],
    color: "purple",
    icon: <FaUserTie />,
  },
  {
    title: "Grievance Redressal",
    desc: "We value your feedback. Please provide the details of your complaint, and we’ll address it as soon as possible.",
    extra: [{ type: "email", value: "inquiry@spay.live" }],
    color: "green",
    icon: <FaEnvelope />,
  },
  {
    title: "Compliance Inquiry",
    desc: "We take compliance seriously. If you have any concerns regarding our practices, please share the details and we will address them promptly.",
    extra: [{ type: "email", value: "inquiry@spay.live" }],
    color: "red",
    icon: <FaEnvelope />,
  },
];

const ContactUs = () => {
  return (
    <div className="bg-gray-50 w-full min-h-screen overflow-x-hidden">
      
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] overflow-hidden">
        
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
          <h1 className="text-[clamp(2rem,6vw,4.5rem)] font-extrabold text-white tracking-widest text-center">
            Contact Us
          </h1>
        </div>
      </section>

      {/* ================= CARDS ================= */}
      <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto">
        
        <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          
          {inquiryData.map((item, idx) => {
            const styles = colorStyles[item.color];

            return (
              <div
                key={idx}
                className={`relative bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-md hover:shadow-xl transition-all duration-300 border-t-8 ${styles.border} flex flex-col h-full`}
              >
                
                {/* ICON */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full ${styles.bg} ${styles.text} text-2xl sm:text-3xl mb-5`}>
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 flex-grow">
                  {item.desc}
                </p>

                {/* CONTACT INFO */}
                <div className="space-y-2">
                  {item.extra.map((line, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-600 text-sm sm:text-base">
                      
                      {line.type === "phone" && (
                        <FaPhone className={styles.icon} />
                      )}
                      {line.type === "email" && (
                        <FaEnvelope className={styles.icon} />
                      )}

                      {line.type === "email" ? (
                        <a href={`mailto:${line.value}`} className="hover:underline font-medium break-all">
                          {line.value}
                        </a>
                      ) : (
                        <span>{line.value}</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* HOVER GRADIENT */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${styles.gradient} opacity-0 hover:opacity-20 transition-opacity duration-300 pointer-events-none`}
                ></div>

              </div>
            );
          })}

        </div>
      </section>
    </div>
  );
};

export default ContactUs;
