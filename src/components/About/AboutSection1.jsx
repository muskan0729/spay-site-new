import React from "react";
import aboutBg from "../../assets/images/aboutus.webp";
import aboutImg from "../../assets/images/aboutus1.webp";

const AboutSection1 = () => {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 hidden xl:block"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
      ></div>

      {/* Mobile Image */}
      <div className="xl:hidden flex justify-center py-8">
        <img
          src={aboutImg}
          alt="Government Sector"
          className="w-[360px] h-auto"
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto px-6 py-10 flex flex-col xl:flex-row items-center xl:items-start">
        {/* Left Column - empty for spacing on desktop */}
        <div className="hidden xl:block xl:w-7/12"></div>

        {/* Right Column - Text */}
        <div className="w-full xl:w-5/10 pe-10 flex flex-col text-center xl:text-left space-y-6">
          <h1 className="text-4xl font-semibold text-[#1f2b9a] mt-2">
            About Us
          </h1>
          <h4 className="text-2xl font-semibold text-[#1f2b9a] ">
            Trusted Payment Gateway Aggregator
          </h4>
          <p className="text-black text-md leading-relaxed ">
            At Spay, we pride ourselves on being a best-in-class payment solutions provider. 
            Our passion for payment solutions drives us to explore every possibility to empower emerging businesses. 
            We are dedicated to supporting startups and SMEs, and our platform is specifically designed to meet their unique needs.
          </p>
          <p className="text-black text-lg leading-relaxed mt-2">
            Our user-friendly application is accessible even to non-tech-savvy merchants, 
            ensuring that every transaction is our responsibility. We prioritize the safety and security of your funds, 
            ensuring they reach their destination safely.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection1;
