import { useEffect, useState } from "react";

import slide1 from "../../assets/images/csgo1.jpeg";
import slide2 from "../../assets/images/Slide2N.jpeg";
import slide3 from "../../assets/images/s3.jpeg";
import slide4 from "../../assets/images/Slide4N.jpeg";

const Carousel = ({ autoPlay = true, interval = 4000 }) => {
  const slides = [
    {
      image: slide1,
      title: (
        <>
          <span className="text-white drop-shadow-lg">
            Accept Payments Seamlessly with
          </span>
          <br />
          <span className="text-[#0cd7ff] drop-shadow-lg">
            Lightning-Fast Transactions
          </span>
        </>
      ),
      align: "left",
    },
    {
      image: slide2,
      title: (
        <>
          <span className="text-white drop-shadow-lg">
            Boost Your Business with
          </span>
          <br />
          <span className="text-[#0cd7ff] drop-shadow-lg">
            Fast Payments
          </span>
        </>
      ),
      description:
        "Manage all transactions easily and grow your business with Spay solutions.",
      align: "left",
    },
    {
      image: slide3,
      title: (
        <>
          <span className="text-white drop-shadow-lg">
            Safe & Secure
          </span>
          <br />
          <span className="text-[#0cd7ff] drop-shadow-lg">
            Payment Solutions
          </span>
        </>
      ),
      description:
        "Advanced fraud protection and seamless integrations.",
      align: "left",
    },
    {
      image: slide4,
      title: (
        <>
          <span className="text-white drop-shadow-lg">
            24/7 Support &
          </span>
          <br />
          <span className="text-[#0cd7ff] drop-shadow-lg">
            Advanced Security
          </span>
        </>
      ),
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
        return "items-center justify-start text-left px-6 md:px-20";
      case "center":
      default:
        return "items-center justify-center text-center";
    }
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] min-h-[420px] overflow-hidden">
      
      {/* Background Image */}
      <img
        src={slides[current].image}
        alt="slide"
        className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700"
      />

      {/* Light Overlay for readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div
        className={`absolute inset-0 flex ${getAlignmentClasses(
          slides[current].align
        )}`}
      >
        <div className="max-w-2xl px-4">
          <h2
            className="font-bold leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
          >
            {slides[current].title}
          </h2>

          {slides[current].description && (
            <p
              className="hidden sm:block mt-4 text-white/90"
              style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)" }}
            >
              {slides[current].description}
            </p>
          )}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "w-6 h-2.5 bg-white"
                : "w-3 h-2.5 bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;