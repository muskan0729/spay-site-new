import { useEffect, useState } from "react";

import slide1 from "../../assets/images/Slide1N.jpeg";
import slide2 from "../../assets/images/Slide2N.jpeg";
import slide3 from "../../assets/images/Slide3N.jpeg";
import slide4 from "../../assets/images/Slide4N.jpeg";

const Carousel = ({ autoPlay = true, interval = 4000 }) => {
  const slides = [
    {
      image: slide1,
      title: (
        <>
          Accept Payments Seamlessly with <br />
          <span className="text-[#0cd7ff]">
            Lightning-Fast Transactions
          </span>
        </>
      ),
      align: "center",
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
      title:
        "Enjoy Safe and Secure Transactions with Our Payment Solutions",
      description:
        "Spay offers advanced fraud protection and seamless integrations.",
      align: "left",
    },
    {
      image: slide4,
      title:
        "24/7 Support & Advanced Security",
      description:
        "Your business stays protected and always running smoothly.",
      align: "left",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval]);

  const getAlignmentClasses = (align) => {
    switch (align) {
      case "left":
        return "items-center justify-start px-6 md:px-16 text-left";
      case "center":
      default:
        return "items-center justify-center text-center";
    }
  };

  return (  
    <div className="relative w-full h-[70vh] min-h-[450px] overflow-hidden">

      {/* Image */}
      <img
        src={slides[current].image}
        alt="slide"
        className="absolute inset-0 w-full h-full object-contain transition-all duration-700"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div
        className={`absolute inset-0 flex ${getAlignmentClasses(
          slides[current].align
        )}`}
      >
        <div className="max-w-3xl">
          <h2
            className="text-white font-bold leading-tight"
            style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
          >
            {slides[current].title}
          </h2>

          {slides[current].description && (
            <p
              className="hidden sm:block mt-4 text-white font-medium"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}
            >
              {slides[current].description}
            </p>
          )}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 w-full flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "w-6 h-2.5 bg-white"
                : "w-3 h-2.5 bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;