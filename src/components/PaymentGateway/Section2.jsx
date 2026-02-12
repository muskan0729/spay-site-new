import React from "react";
import slide32 from "../../assets/images/slide32.jpg";
import slide33 from "../../assets/images/slide33.jpg";
import slide34 from "../../assets/images/slide34.jpg";
import slide35 from "../../assets/images/slide35.jpg";
import slide36 from "../../assets/images/slide36.jpg";
import slide37 from "../../assets/images/slide37.jpg";

// Original slides
const slides = [slide32, slide33, slide34, slide35, slide36, slide37];

// Duplicate slides for infinite seamless loop
const repeatedSlides = [...slides, ...slides];

const Section2 = () => {
  return (
    <section className="pt-20 ">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Scale your Business Across multiple Sectors
        </h2>
      </div>

      {/* Slider */}
      <div className="grid place-items-start min-h-[50vh] ">
        <div className="w-[90%] max-w-[1200px] overflow-hidden relative mask-[linear-gradient(90deg,transparent_0%,black_15%,black_85%,transparent)]">
          <ul className="flex gap-4 animate-slide">
            {repeatedSlides.map((slide, index) => (
              <li
                key={index}
                className="flex-0-0-auto aspect-square h-[250px] md:h-[250px] sm:h-[200px] rounded-lg"
              >
                <img
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tailwind Custom Animation */}
      <style>
        {`
          @keyframes slideRightToLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } /* Move half width since slides are duplicated */
          }

          .animate-slide {
            animation: slideRightToLeft 18s linear infinite; /* slower for smooth effect */
          }

          @media (max-width: 768px) {
            li {
              height: 200px;
            }
          }

          @media (max-width: 480px) {
            li {
              height: 150px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Section2;
