import React, { useState } from "react";
import slide32 from "../../assets/images/slide32.jpg";
import slide33 from "../../assets/images/slide33.jpg";
import slide34 from "../../assets/images/slide34.jpg";
import slide35 from "../../assets/images/slide35.jpg";
import slide36 from "../../assets/images/slide36.jpg";
import slide37 from "../../assets/images/slide37.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [slide32, slide33, slide34, slide35, slide36, slide37];

const Section2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < slides.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-10 md:mb-16">
          Powering Businesses Across Industries
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-6 md:gap-10">
            {[...slides, ...slides].map((img, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={img}
                  alt={`Industry ${idx + 1}`}
                  className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
          display: flex;
        }
      `}</style>
    </section>
  );
};

export default Section2;