import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Carousel from "../components/Home/Carousel";
import CardSlider from "../components/Home/CardSlider";
import CounterSection from "../components/Home/CounterSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import DynamicControlPanel from "../components/Home/DynamicControlPanel";
import Services from "../components/Home/Services";
import AboutSection from "../components/Home/aboutSection";
import CardSliderNew from "../components/Home/CardSliderNew";
import Faq_section from "../components/Home/Faq_section";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Spay | Secure Payment Gateway for Businesses.</title>
        <link rel="canonical" href="https://spay.live/" />  
    <meta  name="robots" content="index, follow, max-image-preview:large" />
       <meta
          name="description"
          content="Get a reliable payment gateway in Mumbai with Spay Fintech Pvt Ltd. Accept UPI, cards, and
                  online payments with secure, fast, and easy integration."
        />
       
      </Helmet>

      <div className="home-page relative">
        {/* Hero Section with Gradient Overlay */}
        <div className="relative w-full overflow-hidden">
          {/* Overlay gradients */}
          <div className="absolute inset-0  pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" />

          {/* Hero Carousel */}
          <Carousel autoPlay={true} interval={5000} />
        </div>

        {/* Main Content Sections - Seamless Flow */}
        <div className="relative w-full flex flex-col gap-0 md:gap-4">
          {/* Trusted Card Slider */}
          <section className="relative">
            {/* <CardSlider /> */}
            <CardSliderNew/>
          </section>

                 {/* <section className="relative">
            <CardSlider />
            
          </section> */}

          <section className="relative">
            <AboutSection />
          </section>


    <section className="relative">
            <Services />
          </section>

          {/* Counter Section */}
          <section className="relative">
            <CounterSection />
          </section>

          {/* Features Section */}
          {/* <section className="relative">
            <FeaturesSection />
          </section> */}

         

          {/* Dynamic Control Panel Section */}
          <section className="relative">
            <DynamicControlPanel />
          </section>


            <section className="relative">
            <Faq_section />
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
