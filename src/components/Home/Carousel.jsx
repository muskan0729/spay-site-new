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
          <span style={{ color: "#0cd7ff" }}>
            Lightning-Fast transactions
          </span>
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
      title:
        "Enjoy Safe and Secure Transactions with Our Payment Solutions",
      description:
        "While many payment gateways promise security, Spay goes further by offering 24/7 helpline support. Your issues are our responsibility, ensuring you have the most secure payment experience possible.",
      align: "left",
    },
    {
      image: slide4,
      title:
        "Enjoy Safe and Secure Transactions with Our Payment Solutions",
      description:
        "While many payment gateways promise security, Spay goes further by offering 24/7 helpline support. Your issues are our responsibility, ensuring you have the most secure payment experience possible.",
      align: "left",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // ✅ Improved autoplay (no dependency on current)
  useEffect(() => {
    if (!autoPlay || slides.length === 0) return;

    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval]);

  if (slides.length === 0) return <p>No Slides Found</p>;

  const getAlignmentClasses = (align) => {
    switch (align) {
      case "top-center":
        return "items-start justify-center pt-8 sm:pt-12 md:pt-16 text-center";
      case "left":
        return "items-center justify-start px-4 sm:px-8 md:px-12 lg:px-20 text-left";
      default:
        return "items-center justify-center";
    }
  };

  return (
    <div className="w-full relative overflow-hidden">

      {/* Slide Image */}
      <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[650px] xl:h-[750px] 2xl:h-[850px]">
        <img
          src={slides[current].image}
          alt="slide"
          className="w-full h-full object-cover transition-all duration-700"
        />

        {/* ✅ Dark overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
      </div>

      {/* Caption Overlay */}
      <div
        className={`absolute inset-0 flex ${getAlignmentClasses(
          slides[current].align
        )}`}
      >
        <div className="py-6 sm:py-8 md:py-10 max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl 2xl:max-w-3xl">

          <h2
            className="text-white font-bold leading-tight"
            style={{
              fontSize: "clamp(1.3rem, 4.5vw, 3rem)",
            }}
          >
            {slides[current].title}
          </h2>

          {slides[current].description && (
            <p
              className="hidden sm:block mt-3 md:mt-5 text-white font-semibold leading-relaxed"
              style={{
                fontSize: "clamp(0.9rem, 1.5vw, 1.25rem)",
              }}
            >
              {slides[current].description}
            </p>
          )}
        </div>
      </div>

      {/* Dots - Mobile Optimized */}
      <div className="absolute bottom-4 sm:bottom-6 w-full flex justify-center gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 ${
              current === index
                ? "w-6 h-2.5 bg-white"
                : "w-3 h-2.5 bg-gray-400 hover:bg-gray-300"
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
