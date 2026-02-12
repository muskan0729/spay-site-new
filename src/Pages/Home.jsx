import Carousel from "../components/Home/Carousel";

// import slide1 from "../assets/images/bg3.webp";
// import slide2 from "../assets/images/freepik.webp";
// import slide3 from "../assets/images/2slide.webp";
// import slide4 from "../assets/images/3slide.webp";
import CardSlider from "../components/Home/CardSlider";
import CounterSection from "../components/Home/CounterSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import DynamicControlPanel from "../components/Home/DynamicControlPanel";



const Home = () => {
  //    const slides = [
  //   {
  //     image: slide1,
  //     title: (
  //       <>
  //         Accept Payments Seamlessly with <br />
  //         <span style={{color:"#0cd7ff"}}>Lightning-Fast transactions</span>
  //       </>
  //     ),
  //     align: "top-center",
  //   },
  //   {
  //     image: slide2,
  //     title: "Boost Your Business with Fast Payments",
  //     description:
  //       "Manage all transactions easily and grow your business with Spay payment solutions.",
  //        align: "left",
  //   },
  //   {
  //     image: slide3,
  //     title: "Enjoy Safe and Secure Transactions with Our Payment Solutions",
  //     description:
  //       "While many payment gateways promise security, Spay goes further by offering 24/7 helpline support. Your issues are our responsibility, ensuring you have the most secure payment experience possible.",
  //        align: "left",
  //   },
  //   {
  //     image: slide4,
  //     title: "Enjoy Safe and Secure Transactions with Our Payment Solutions",
  //     description:
  //       "While many payment gateways promise security, Spay goes further by offering 24/7 helpline support. Your issues are our responsibility, ensuring you have the most secure payment experience possible.",
  //        align: "left",
  //   },    
  // ];
  return (
    <div>
      <div className="min-w-[1200px]">
      {/* <Carousel slides={slides} autoPlay={true} interval={2000} /> */}
            <Carousel  autoPlay={true} interval={2000} />

</div>
          <div className="p-6">
      <CardSlider />
    </div>
      <CounterSection />
      <FeaturesSection/>
      <DynamicControlPanel/>
    </div>
    
  );
};

export default Home;
