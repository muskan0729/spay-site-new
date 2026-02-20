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
    <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-800">
            Scale Your Business Across Multiple Sectors
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Showcasing your industry reach with elegance and style.
          </p>
        </div>

        {/* Slider */}
        <div className="relative flex items-center">

          {/* Left Button */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute -left-6 z-10 bg-white shadow-lg p-3 rounded-full disabled:opacity-40"
          >
            <FaArrowLeft className="text-indigo-700" />
          </button>

          {/* Slides Container */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="w-1/3 flex-shrink-0 p-4"
                >
                  <div className="rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition duration-300">
                    <img
                      src={slide}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            disabled={currentIndex >= slides.length - 3}
            className="absolute -right-6 z-10 bg-white shadow-lg p-3 rounded-full disabled:opacity-40"
          >
            <FaArrowRight className="text-indigo-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section2;
