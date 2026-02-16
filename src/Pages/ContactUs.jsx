import React from "react";
import contactVideo from "../assets/videos/contact-hero.mp4";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUserTie } from "react-icons/fa";

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
    extra: [
      { type: "email", value: "inquiry@spay.live" },
    ],
    color: "green",
    icon: <FaEnvelope />,
  },
  {
    title: "Compliance Inquiry",
    desc: "We take compliance seriously. If you have any concerns regarding our practices, please share the details and we will address them promptly.",
    extra: [
      { type: "email", value: "inquiry@spay.live" },
    ],
    color: "red",
    icon: <FaEnvelope />,
  },
];

const ContactUs = () => {
  return (
    <div className="bg-gray-50 w-full min-h-screen">

      {/* HERO SECTION */}
      <section className="relative w-full h-[50vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
          <source src={contactVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-[clamp(3rem,6vw,5rem)] font-extrabold text-white tracking-widest">
            Contact Us
          </h1>
        </div>
      </section>

      {/* INQUIRY CARDS */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[95%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {inquiryData.map((item, idx) => (
            <div
              key={idx}
              className={`
                relative bg-white p-8 md:p-10 rounded-3xl shadow-lg
                hover:shadow-2xl transform transition-all duration-500
                border-t-8 border-${item.color}-500
                flex flex-col justify-start w-full
              `}
            >
              {/* Icon in circle */}
              <div className={`w-16 h-16 flex items-center justify-center rounded-full bg-${item.color}-100 text-${item.color}-600 text-3xl mb-6`}>
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-gray-900 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-[clamp(1rem,1.5vw,1.15rem)] mb-4">
                {item.desc}
              </p>

              {/* Extra info */}
              <div className="mt-auto space-y-2">
                {item.extra.map((line, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-gray-600 text-[clamp(0.95rem,1.2vw,1.1rem)]"
                  >
                    {line.type === "phone" && (
                      <FaPhone className={`text-${item.color}-500`} />
                    )}
                    {line.type === "email" && (
                      <FaEnvelope className={`text-${item.color}-500`} />
                    )}
                    {line.type === "email" ? (
                      <a href={`mailto:${line.value}`} className="hover:underline font-medium">
                        {line.value}
                      </a>
                    ) : (
                      <span>{line.value}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Gradient background overlay on hover */}
              <div className={`
                absolute inset-0 rounded-3xl bg-gradient-to-r 
                from-${item.color}-200 via-${item.color}-100 to-white opacity-0
                hover:opacity-20 transition-opacity duration-500
                pointer-events-none
              `}></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
