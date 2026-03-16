import React, { useState, useEffect } from "react";
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
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < slides.length - itemsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section className="py-14 md:py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-800">
            Scale Your Business Across Multiple Sectors
          </h2>
          <p className="mt-3 text-gray-600 text-sm sm:text-base">
            Showcasing your industry reach with elegance and style.
          </p>
        </div>

        <div className="relative flex items-center">

          {/* Left */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute -left-3 z-10 bg-white shadow-md p-2 rounded-full disabled:opacity-40"
          >
            <FaArrowLeft className="text-indigo-700 text-sm" />
          </button>

          {/* Slider */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                    <img
                      src={slide}
                      alt={`Slide ${index}`}
                      className="w-full h-[240px] object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <button
            onClick={nextSlide}
            disabled={currentIndex >= slides.length - itemsPerView}
            className="absolute -right-3 z-10 bg-white shadow-md p-2 rounded-full disabled:opacity-40"
          >
            <FaArrowRight className="text-indigo-700 text-sm" />
          </button>

        </div>
      </div>
    </section>
  );
};

export default Section2;