import React from 'react';

const IconBox = ({ Icon, color, label }) => {
  return (
    <div
      className="m-2 rounded-xl shadow-lg overflow-hidden flex flex-col justify-center items-center p-5"
      style={{ background: "#180842", width: "100%" }}
    >
      <Icon
        className={`text-5xl sm:text-6xl md:text-8xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-300 cursor-pointer ${color}`}
      />
      {label && <p className="mt-2 text-center text-white">{label}</p>}
    </div>
  );
};

export default IconBox;