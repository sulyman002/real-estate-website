import React from "react";
import arrow_left_black from "../assets/arrow_left_black.svg";
import dial_icon_black from "../assets/dial_icon_black.svg";
import agent from "../assets/agent.png";

export const RealEstate = () => {
  return (
    <div className="flex bg-[#F9F9F9] py-40 items-center justify-center">
      <div className="grid grid-cols-2 w-[75vw]">
        <div className="text-[#1A1A1A] flex flex-col justify-center">
          <p className="text-[40px] leading-[52px] font-500 w-[390px]">
            Become a Real Estate Agent
          </p>
          <p className="text-[16px] leading-[30.4px] font-400 w-[436.8px] py-4">
            Pellentesque egestas elementum egestas faucibus sem. Velit nunc
            egestas ut morbi. Leo diam diam.
          </p>
          <div className="flex gap-8 items-center  ">
            <button
              className="flex items-center text-[#1A1A1A] bg-[#E7C873] justify-center gap-2 px-4 py-3 rounded-lg mt-4"
              onClick={(event) => event.preventDefault()}
            >
              Learn More
              <img src={arrow_left_black} alt="" />
            </button>

            <div className="flex gap-2 items-center text-[#1A1A1A] justify-center">
              <div className="bg-white cursor-pointer flex items-center justify-center h-[45px] w-[45px] rounded-full shadow-2xl">
                <img src={dial_icon_black} alt="" />
              </div>
              <span>+68 685 88666</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <img src={agent} alt="" />
        </div>
      </div>
    </div>
  );
};
