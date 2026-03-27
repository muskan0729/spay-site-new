import { useEffect, useState } from "react";

import slide1 from "../../assets/images/spay_banner.svg";
import slide2 from "../../assets/images/spay_banner_1.svg";
import slide3 from "../../assets/images/spay_banner.svg";
import slide4 from "../../assets/images/spay_banner_1.svg";

const Carousel = ({ autoPlay = true, interval = 4000 }) => {
  const slides = [
    {
      image: slide1,
      title: (
        <>
          <span className="text-white drop-shadow-lg">
            Reliable Payment Gateway
          </span>
          <br />
          <span className="text-[#0cd7ff] drop-shadow-lg">
            for Your Business
          </span>
        </>
      ),
      description:
        "Accept payments smoothly with secure, fast, and easy-to-use solutions designed for modern businesses",
      align: "left",
    },
    {
      image: slide2,
      overlay: "bg-black/10",
      title: (
        <>
          <span className="text-black drop-shadow-lg">
            Online Payment Gateway
          </span>
          <br />
          <span className="text-[#12309c] drop-shadow-lg">
            with UPI & Smart Payment Portals
          </span>
        </>
      ),
      description: (
        <span className="text-black">
          Our online payment gateway for businesses in Mumbai makes it easy to
          accept UPI, card, and digital payments with a seamless experience.
        </span>
      ),
      align: "left",
    },
    {
      image: slide3,
      title: (
        <>
          <span className="text-white drop-shadow-lg">
            API Payment Gateway
          </span>
          <br />
          <span className="text-[#0cd7ff] drop-shadow-lg">
            for Fast & Scalable Integrations
          </span>
        </>
      ),
      description:
        "Powerful fraud detection to keep transactions safe paired with smooth payment gateway integration",
      align: "left",
    },
    {
      image: slide4,
      overlay: "bg-black/10",
      title: (
        <>
          <span className="text-black drop-shadow-lg">
            International & Crypto
          </span>
          <br />
          <span className="text-[#12309c] drop-shadow-lg">
            Payment Gateway Solutions
          </span>
        </>
      ),
      description: (
        <span className="text-black">
          We provide reliable and scalable digital payment solutions for startups
          and SMEs that help businesses grow with confidence.
        </span>
      ),
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

  const getAlignmentClasses = () => {
    return "items-center justify-start text-left px-6 md:px-20";
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] min-h-[420px] overflow-hidden">

      {/* Background */}
      <img
        src={slides[current].image}
        alt="slide"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      {slides[current].overlay && (
        <div className={`absolute inset-0 ${slides[current].overlay}`}></div>
      )}

      {/* Content */}
      <div className={`absolute inset-0 flex ${getAlignmentClasses()}`}>
        
        {/* ✅ Keep desktop-like width */}
        <div className="w-[90%] md:w-[600px]">

          {/* Title */}
          <h1 className="font-bold leading-tight text-[1.6rem] md:text-[2.6rem]">
            {slides[current].title}
          </h1>

          {/* Description */}
          {slides[current].description && (
            <div className="mt-4 text-[0.95rem] md:text-[1.1rem] leading-relaxed">
              {slides[current].description}
            </div>
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
                : "w-3 h-2.5 bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;