import React from "react";

const AboutSection2 = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-3">
            OUR MISSION & VISION
          </h2>
          <div className="flex justify-center items-center gap-4">
            <div className="h-1 w-12 bg-yellow-500 rounded"></div>
            <div className="h-1 w-12 bg-blue-600 rounded"></div>
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Mission Card */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl group">
            <div className="px-8 pt-10 pb-28 md:px-10 md:pt-12 text-center">
              <i className="fas fa-crosshairs text-7xl md:text-8xl text-yellow-500 mb-6 block"></i>
              {/* Alternative: fa-bullseye or fa-bullseye-arrow */}

              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">MISSION</h3>

              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>

            {/* Angled yellow bottom tag */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-yellow-500 clip-path-bottom-tag flex items-center justify-center">
              <span className="text-white text-5xl md:text-6xl font-black tracking-wide drop-shadow-lg">
                01
              </span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl group">
            <div className="px-8 pt-10 pb-28 md:px-10 md:pt-12 text-center">
              <i className="fas fa-lightbulb text-7xl md:text-8xl text-blue-600 mb-6 block"></i>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">VISION</h3>

              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
              </p>
            </div>

            {/* Angled blue bottom tag */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-blue-600 clip-path-bottom-tag flex items-center justify-center">
              <span className="text-white text-5xl md:text-6xl font-black tracking-wide drop-shadow-lg">
                02
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Global style for angled clip-path */}
      <style jsx global>{`
        .clip-path-bottom-tag {
          clip-path: polygon(0 25%, 100% 25%, 100% 100%, 0 100%);
          /* 25% creates a moderate angle — decrease to 15-20% for sharper angle */
        }
      `}</style>
    </section>
  );
};

export default AboutSection2;