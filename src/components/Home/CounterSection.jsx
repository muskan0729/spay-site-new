import React, { useEffect, useState } from "react";

import clogo1 from "../../assets/images/clogo1.png";
import clogo2 from "../../assets/images/clogo2.png";
import clogo3 from "../../assets/images/clogo3.png";

const CounterSection = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const target1 = 99.9;
    const target2 = 95.5;
    const target3 = 25000;

    let current1 = 0;
    let current2 = 0;
    let current3 = 0;

    const speed = 50;

    const timer = setInterval(() => {
      if (current1 < target1) {
        current1 += 0.5;
        setCount1(current1 > target1 ? target1 : current1);
      }

      if (current2 < target2) {
        current2 += 0.5;
        setCount2(current2 > target2 ? target2 : current2);
      }

      if (current3 < target3) {
        current3 += 500;
        setCount3(current3 > target3 ? target3 : current3);
      }

      if (current1 >= target1 && current2 >= target2 && current3 >= target3) {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-2 w-full bg-gray-50 py-8">
      <div className=" mx-auto grid grid-cols-1 text-[#213da2] md:grid-cols-3 text-center gap-6 px-4 ">
        
        {/* Success Rate */}
        <div className="p-4 flex flex-col items-center">
          <img src={clogo2} alt="Success Rate" className="h-[75px]" />
          <h3 className="font-bold text-xl mt-2">Success Rate</h3>
          <h2 className="font-bold text-3xl mt-2">
            {count2.toFixed(1)}%
          </h2>
        </div>

        {/* Uptime */}
        <div className="p-4 flex flex-col items-center">
          <img src={clogo1} alt="Uptime" className="h-[75px]" />
          <h3 className="font-bold text-xl mt-2">Uptime</h3>
          <h2 className="font-bold text-3xl mt-2">
            {count1.toFixed(1)}%
          </h2>
        </div>

        {/* Visitor Count */}
        <div className="p-4 flex flex-col items-center">
          <img src={clogo3} alt="Visitor Count" className="h-[75px]" />
          <h3 className="font-bold text-xl mt-2">Visitor Count</h3>
          <h2 className="font-bold text-3xl mt-2">
            {Math.floor(count3 / 1000)}K
          </h2>
        </div>

      </div>
    </div>
  );
};

export default CounterSection;
