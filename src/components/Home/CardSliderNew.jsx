import React, { useState } from "react";
import upi from "../../assets/images/upi.png";
import rupay from "../../assets/images/Rupay.png";
import mastercard from "../../assets/images/mastercard.png";
import visa from "../../assets/images/Visa_2021.svg.png";

const CardSliderNew = () => {
  const [selected, setSelected] = useState(null);

  const cards = [
    { name: "Instant Payments", icon: upi },
    { name: "Domestic Cards", icon: rupay },
    { name: "Global Acceptance", icon: mastercard },
    { name: "Worldwide", icon: visa },
  ];

  return (
    <section className="py-10 px-4 sm:px-6 md:px-10">
      
      {/* Heading */}
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center mb-10 mt-4">
        Trusted by{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600">
          Global Payment Networks
        </span>
      </h3>

      {/* Scroll Container */}
      <div className="overflow-x-auto">
        <div className="flex gap-4 sm:gap-6 w-max mx-auto">
          
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => setSelected(card.name)}
              className={`
                group flex items-center gap-3 sm:gap-4
                border rounded-xl cursor-pointer
                px-4 sm:px-6 py-4 sm:py-5 
                min-w-[220px] sm:min-w-[260px]
                transition-all duration-300 flex-shrink-0
                ${
                  selected === card.name
                    ? "border-blue-600 bg-blue-50 shadow-lg"
                    : "border-gray-300 bg-white hover:border-blue-400 hover:shadow-md"
                }
              `}
            >
              {/* Icon */}
              <div
                className={`
                  w-12 h-12 sm:w-14 sm:h-14 
                  flex items-center justify-center 
                  rounded-full p-2 sm:p-3 
                  transition-all duration-300
                  ${
                    selected === card.name
                      ? "bg-blue-200"
                      : "bg-gray-100 group-hover:bg-blue-100"
                  }
                `}
              >
                <img
                  src={card.icon}
                  alt={card.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Text */}
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                {card.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSliderNew;