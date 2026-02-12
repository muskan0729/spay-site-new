import React from "react";
import heroBg from "../../assets/images/bg_occ7.jpg";
import benefitImage from "../../assets/images/benefit_occ.webp";

const Section1 = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative ">
  {/* Background Image */}
  <div
    className="absolute inset-0 "
    style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      width:"800px"
    }}
  ></div>

  {/* Overlay for text readability */}
  {/* <div className="absolute inset-0 bg-"></div> */}

  {/* Content */}
  <div className="relative  mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
    {/* Left column can be empty or just spacing */}
    <div className="md:w-1/2"></div>

    {/* Right Column - Text */}
    <div className="md:w-1/2 flex flex-col justify-center text-left md:text-left space-y-6 pe-20">
      <h1 className="text-4xl font-bold text-[#00008b] leading-tight text-center">
        One-Click Checkout
      </h1>
      <p className="text-black text-md text-center leading-loose ">
        Navigating through multiple forms before reaching{" "}
        <span className="">
          the checkout can be frustrating for customers. This lengthy process
          often leads them to reconsider their purchase. To enhance the
          shopping experience, implementing a one-click checkout option is
          essential.
        </span>
      </p>

    </div>
  </div>
</div>


      {/* Benefits Section */}
      <section className="py-15 bg-white">
        <div className=" mx-auto px-4 md:px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-blue-900 mb-4">
              Benefits of One-Click Checkout
            </h2>
            <p className="text-black text-center leading-relaxed max-w-4xl mx-auto">
              With one-click checkout, customers can complete their purchase
              without the need for lengthy forms. They simply fill in a few essential
              details, like contact information and payment options.
            </p>
          </div>

          {/* Content Row */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Column - Image */}
            <div className="md:w-1/2 flex justify-center md:justify-end px-20">
              <div className="rounded-xl shadow-lg overflow-hidden w-full  ">
                <img
                  src={benefitImage}
                  alt="Benefits"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Advantages List */}
            <div className="md:w-1/2 flex justify-center md:justify-start">
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 w-full max-w-md space-y-6">
                <h4 className="text-blue-900 text-2xl font-bold">
                  Advantages Include:
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-black font-medium leading-relaxed">
                    <i className="fas fa-check-circle text-green-600 mt-1"></i>

                    Secure and expedited checkout
                  </li>
                  <li className="flex items-start gap-3 text-black font-medium leading-relaxed">
<i className="fas fa-check-circle text-green-600 mt-1"></i>
                    A seamless experience for customers
                  </li>
                  <li className="flex items-start gap-3 text-black font-medium leading-relaxed">
<i className="fas fa-check-circle text-green-600 mt-1"></i>
                    Reduced chances of cart abandonment
                  </li>
                  <li className="flex items-start gap-3 text-black font-medium leading-relaxed">
<i className="fas fa-check-circle text-green-600 mt-1"></i>
                    Increased sales potential
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
