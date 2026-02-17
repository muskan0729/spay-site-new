import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Carousel from "../components/Home/Carousel";
import CardSlider from "../components/Home/CardSlider";
import CounterSection from "../components/Home/CounterSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import DynamicControlPanel from "../components/Home/DynamicControlPanel";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>SPay - Secure Payment Gateway for Businesses</title>
        <meta name="description" content="Accept payments online with SPay's secure payment gateway. Fast, reliable, and trusted by 5000+ businesses. Multi payment options, 99.9% uptime." />
        <meta name="keywords" content="payment gateway, online payments, secure transactions, business payments" />
      </Helmet>

      <div className="home-page">
        {/* Hero Section with Gradient Overlay */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-transparent to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          <Carousel autoPlay={true} interval={5000} />
        </div>

        {/* Main Content Sections - Seamless Flow */}
        <div className="space-y-0"> {/* Remove space-y-8/16 */}
          {/* CardSlider - Now seamlessly connects */}
          <CardSlider />
          
          {/* CounterSection - Directly below */}
          <CounterSection />
          
          <FeaturesSection />
          <DynamicControlPanel />
        </div>
      </div>
    </>
  );
};

export default Home;