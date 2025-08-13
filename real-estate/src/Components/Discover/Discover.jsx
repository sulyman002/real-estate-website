import React from "react";
import discover_image from "../assets/discover_image.jpg";
import arrow_left_black from '../assets/arrow_left_black.svg';

export const Discover = () => {
  return (
    <div
      style={{ backgroundImage: `url(${discover_image})` }}
      className="h-[750.78px] w-full flex items-center justify-center flex-col text-center px-4  gap-4"
    >
      <h1 className="md:w-[592.92px] text-[60px] font-500 font-bold  leading-[78px]">
        Discover a place you'll love to live
      </h1>
      <p className="md:w-[475.63px] font-400 text-[16px] leading-[30.4px]">
        Pellentesque egestas elementum egestas faucibus sem. Velit nunc egestas
        ut morbi. Leo diam diam
      </p>
      <button className="flex items-center text-black bg-[#E7C873] justify-center gap-2 px-4 py-3 rounded-lg" onClick={(event) => event.preventDefault()}>
        View Properties
        <img src={arrow_left_black} alt="" />
      </button>
    </div>
  );
};
