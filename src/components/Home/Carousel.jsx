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

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!autoPlay || slides.length === 0) return;

    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [current, autoPlay, interval]);

  if (slides.length === 0) return <p>No Slides Found</p>;


  return (
    <div className="w-full relative overflow-hidden">
      {/* Slide Image */}
      <img
        src={slides[current].image}
        alt="slide"
        className="w-full h-[600px]  transition-all duration-700"
      />

      {/* Caption Overlay */}
      <div
        className={`absolute inset-0 flex ${slides[current].align === "top-center"
            ? "items-start justify-center pt-2 text-center"
            : slides[current].align === "left"
              ? "items-center justify-start pl-26 text-left"
              : "items-center justify-center"
          }`}
      >
        <div className=" px-8 py-6 max-w-2xl rounded-xl">
          <h2 className="text-white font-bold " style={{ fontSize: "30px" }}>
            {slides[current].title}
          </h2>

          {slides[current].description && (
            <p className="hidden md:block mt-4 text-white font-semibold text-lg" style={{ fontSize: "17px" }}>
              {slides[current].description}
            </p>
          )}
        </div>
      </div>




      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 -translate-y-1/2 bg-black/50 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/70 transition"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 -translate-y-1/2 bg-black/50 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/70 transition"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${current === index ? "bg-white" : "bg-gray-400"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
