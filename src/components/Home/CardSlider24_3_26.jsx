import React from 'react'

const CardSlider24_3_26 = () => {
  const [selected, setSelected] = useState(null);

  const options = [
    {
      name: "Personal Account",
      icon: "/path-to-personal-icon.png", // replace with your image path
    },
    {
      name: "Business Account",
      icon: "/path-to-business-icon.png", // replace with your image path
    },
  ];

  return (
    <div className="flex justify-center gap-6 mt-8">
      {options.map((option, index) => (
        <div
          key={index}
          onClick={() => setSelected(option.name)}
          className={`
            cursor-pointer 
            flex flex-col items-center justify-center 
            p-6 sm:p-8 md:p-10 
            rounded-lg 
            border-2 transition-all
            ${selected === option.name ? "border-blue-600 bg-blue-50" : "border-gray-300 bg-white"}
            hover:border-blue-400
          `}
        >
          <img src={option.icon} alt={option.name} className="w-12 h-12 mb-3" />
          <h3 className="text-gray-800 font-semibold text-lg">{option.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default CardSlider24_3_26
