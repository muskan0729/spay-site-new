import React, { useState, useEffect } from "react";
import React, { useState, useEffect } from "react";
import slide32 from "../../assets/images/slide32.jpg";
import slide33 from "../../assets/images/slide33.jpg";
import slide34 from "../../assets/images/slide34.jpg";
import slide35 from "../../assets/images/slide35.jpg";
import slide36 from "../../assets/images/slide36.jpg";
import slide37 from "../../assets/images/slide37.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [slide32, slide33, slide34, slide35, slide36, slide37];

const slideLabels = [
  "Retail & eCommerce",
  "Service Businesses",
  "Fintech & Payments",
  "Startups & SMBs",
  "Enterprise Operations",
  "Expansion Ready",
];

const Section2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(0, slides.length - itemsPerView);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, itemsPerView]);

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
    <section className="relative overflow-hidden bg-[#eef2f7] py-14 md:py-16 lg:py-18">
      <style>{`
        @keyframes section2FadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .section2-fade-up {
          animation: section2FadeUp 700ms ease-out both;
        }
      `}</style>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="section2-fade-up mt-5 text-3xl font-semibold leading-tight text-[#0d2447] sm:text-4xl [font-family:Georgia,Times_New_Roman,serif]" style={{ animationDelay: "80ms" }}>
            Scale Your Business Across Multiple Sectors
          </h2>

          <p className="section2-fade-up mt-4 text-sm leading-relaxed text-[#5a6f90] sm:text-base" style={{ animationDelay: "140ms" }}>
            Industry-ready payment experiences designed for modern growth.
          </p>
        </div>

        <div className="section2-fade-up relative rounded-[1.8rem] border border-[#d7dfeb] bg-white p-4 shadow-[0_20px_45px_rgba(15,23,42,0.06)] sm:p-6" style={{ animationDelay: "220ms" }}>
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            aria-label="Previous slide"
            className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-[#d7dfeb] bg-white p-3 text-[#1d4ed8] shadow-[0_8px_18px_rgba(15,23,42,0.08)] transition duration-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <FaArrowLeft className="text-sm" />
          </button>

          <div className="overflow-hidden px-2 sm:px-3">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-2 sm:w-1/2 lg:w-1/4"
                >
                  <div className="group overflow-hidden rounded-[1rem] border border-[#d8e0eb] bg-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(15,23,42,0.09)]">
                    <div className="relative overflow-hidden">
                      <img
                        src={slide}
                        alt={slideLabels[index] || `Slide ${index + 1}`}
                        className="h-[220px] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= slides.length - itemsPerView}
            aria-label="Next slide"
            className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-[#d7dfeb] bg-white p-3 text-[#1d4ed8] shadow-[0_8px_18px_rgba(15,23,42,0.08)] transition duration-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <FaArrowRight className="text-sm" />
          </button>

          <div className="mt-6 flex items-center justify-center gap-2">
            {slides.slice(0, Math.max(1, slides.length - itemsPerView + 1)).map((_, index) => (
              <button
                key={index}
                aria-label={`Go to slide group ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-[#1d4ed8]"
                    : "w-2 bg-blue-200 hover:bg-blue-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;