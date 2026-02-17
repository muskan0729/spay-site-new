import { useEffect, useState } from "react";

import slide1 from "../../assets/images/bg3.webp";
import slide2 from "../../assets/images/freepik.webp";
import slide3 from "../../assets/images/2slide.webp";
import slide4 from "../../assets/images/3slide.webp";

const Carousel = ({ autoPlay = true, interval = 4000 }) => {
  const slides = [
    {
      image: slide1,
      title: (
        <>
          Accept Payments Seamlessly with <br />
          <span style={{ color: "#0cd7ff" }}>Lightning-Fast transactions</span>
        </>
      ),
      align: "top-center",
    },
    {
      image: slide2,
      title: "Boost Your Business with Fast Payments",
      description:
        "Manage all transactions easily and grow your business with Spay payment solutions.",
      align: "left",
    },
    {
      image: slide3,
      title: "Enjoy Safe and Secure Transactions with Our Payment Solutions",
      description:
        "While many payment gateways promise security, Spay goes further by offering 24/7 helpline support. Your issues are our responsibility, ensuring you have the most secure payment experience possible.",
      align: "left",
    },
    {
      image: slide4,
      title: "Enjoy Safe and Secure Transactions with Our Payment Solutions",
      description:
        "While many payment gateways promise security, Spay goes further by offering 24/7 helpline support. Your issues are our responsibility, ensuring you have the most secure payment experience possible.",
      align: "left",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    if (!autoPlay || slides.length === 0) return;

    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [current, autoPlay, interval]);

  if (slides.length === 0) return <p>No Slides Found</p>;

  const getAlignmentClasses = (align) => {
    switch(align) {
      case "top-center":
        return "items-start justify-center pt-4 md:pt-10 text-center";
      case "left":
        return "items-center justify-start pl-4 md:pl-10 lg:pl-26 text-left";
      default:
        return "items-center justify-center";
    }
  };

  return (
    <div className="w-full relative overflow-hidden">
      {/* Slide Image */}
      <img
        src={slides[current].image}
        alt="slide"
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-all duration-700"
      />

      {/* Caption Overlay */}
      <div
        className={`absolute inset-0 flex ${getAlignmentClasses(slides[current].align)}`}
      >
        <div className="px-4 md:px-6 lg:px-8 py-4 md:py-6 max-w-xl lg:max-w-2xl">
          <h2 
            className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl" 
            style={{ fontSize: "clamp(1.25rem, 5vw, 2.5rem)" }}
          >
            {slides[current].title}
          </h2>

          {slides[current].description && (
            <p 
              className="hidden md:block mt-2 md:mt-4 text-white font-semibold text-sm md:text-base lg:text-lg"
              style={{ fontSize: "clamp(0.875rem, 2vw, 1.125rem)" }}
            >
              {slides[current].description}
            </p>
          )}
        </div>
      </div>

      {/* Dots - Made more touch-friendly for mobile */}
      <div className="absolute bottom-3 md:bottom-5 w-full flex justify-center gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all ${
              current === index 
                ? "w-4 md:w-5 h-2 md:h-2.5 bg-white" 
                : "w-2 md:w-3 h-2 md:h-2.5 bg-gray-400 hover:bg-gray-300"
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;