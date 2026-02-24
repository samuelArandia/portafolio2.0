import React from 'react';

const IconBox = ({ Icon, color, label }) => {
  return (
    <div
      className="m-1 sm:m-2 rounded-xl shadow-lg shadow-indigo-500/40 overflow-hidden flex flex-col justify-center items-center p-3 sm:p-5 bg-gray-900 w-full min-w-[80px] sm:min-w-[100px]"
    >
      <Icon
        className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-300 cursor-pointer ${color}`}
      />
      {label && <p className="mt-1 sm:mt-2 text-center text-white text-xs sm:text-sm md:text-base">{label}</p>}
    </div>
  );
};

export default IconBox;
