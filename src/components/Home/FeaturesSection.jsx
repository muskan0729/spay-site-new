import React from "react";
import bg2 from "../../assets/images/bg2.webp";

const FeaturesSection = () => {
  const features = [
    { icon: "fa-business-time", title: "Multi Payment Option Available" },
    { icon: "fa-credit-card", title: "Domestic And International Card" },
    { icon: "fa-chalkboard-teacher", title: "Dynamic Control Panel" },
    { icon: "fa-file-alt", title: "Instant Onboarding" },
    { icon: "fa-computer", title: "Real-Time Dashboard" },
    { icon: "fa-file-invoice", title: "Comprehensive Report" },
  ];

  return (
    <section
      className="relative w-full min-h-[350px] bg-cover bg-center py-10 bg-gradient-to-b from-black/20 via-black/30 to-black/40"
      style={{ backgroundImage: `url(${bg2})` }}
    >
      {/* overlay like spay.live */}
      <div className="absolute inset-0 "></div>

      <div className="relative z-10 mt-2 mx-auto px-6">
        <h2 className="text-center text-white text-4xl font-bold">
          Features for Your Growth
        </h2>

        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-8 pt-10 px-20">
          {features.map((feature, index) => (
            <div
              key={index}
    className="group bg-white/0 border border-white/25 
             rounded-2xl px-8 py-7 flex flex-col items-center justify-center text-center
             shadow-lg shadow-cyan-500/40 hover:shadow-[0_0_20px_rgba(12,215,255,0.6)] 
             hover:border-cyan-300/60 hover:scale-105 transition-all duration-300"
>
              {/* icon circle */}
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full 
                           bg-white/10 border border-white/30 
                           group-hover:bg-cyan-400/20 group-hover:border-cyan-300/60
                           transition duration-300"
              >
                <i
                  className={`fas ${feature.icon} text-white text-3xl group-hover:text-cyan-300`}
                ></i>
              </div>

              <h4 className="mt-6 text-white font-semibold text-[17px]">
                {feature.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
