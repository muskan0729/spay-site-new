import React from "react";

import upi from "../../assets/images/upi.png";
import rupay from "../../assets/images/Rupay.png";
import mastercard from "../../assets/images/mastercard.png";
import visa from "../../assets/images/Visa_2021.svg.png";

const CardSlider = () => {
  const logos = [upi, rupay, mastercard, visa];

  return (
    <div className="mt-4 overflow-hidden relative w-full">
      <div className="slider-track">
        {[...logos, ...logos, ...logos, ...logos,...logos].map((logo, index) => (
          <div key={index} className="slide-item">
            <img
              src={logo}
              alt="logo"
              className="h-[90px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
