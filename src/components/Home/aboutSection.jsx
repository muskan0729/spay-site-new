import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="py-6 sm:py-8 md:py-10 mx-3 sm:mx-6 md:mx-10 
      rounded-xl relative overflow-hidden
      bg-gradient-to-r from-blue-100 via-blue-50 to-white 
      shadow-[0_10px_30px_rgba(0,0,255,0.15)] 
      hover:shadow-[0_10px_35px_rgba(0,0,255,0.20)] 
      transition duration-300"
    >
      {/* Glow Effect */}
      <div className="absolute -top-10 -left-10 w-32 h-32 sm:w-40 sm:h-40 bg-blue-300 opacity-30 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4 sm:px-6 relative z-10">
        
        {/* Text */}
        <div className="max-w-xl text-center md:text-left">
          <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold text-blue-900 mb-2">
            About Spay Fintech
          </h3>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            At Spay Fintech, we combine fintech expertise with practical
            solutions to make digital payments seamless, secure, and easy for
            businesses.
          </p>
        </div>

        {/* Button */}
        <div className="w-full md:w-auto">
          <button
            onClick={() => navigate("/about-us")}
            className="w-full md:w-auto flex items-center justify-center gap-2 
            bg-blue-500 text-white px-6 py-3 rounded-lg 
            hover:bg-blue-700 shadow-md hover:shadow-lg 
            transition duration-300"
          >
            Learn More <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;