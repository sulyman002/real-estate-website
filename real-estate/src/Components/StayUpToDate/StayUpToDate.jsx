import React from "react";

import arrow_left_black from "../assets/arrow_left_black.svg";
import kite from "../assets/kite.svg";

export const StayUpToDate = () => {
  return (
    <div className="bg-[#F9F9F9] ">
      <div className="flex items-center justify-center text-[#1A1A1A] flex-col py-40">
        <div className="flex items-center justify-center h-[60px] w-[60px] rounded-full bg-[#E7C873]">
          <img src={kite} alt="" />
        </div>
        <p className="font-500 text-[20px] md:text-[40px] py-4 leading-[40px] font-bold">
          Stay Up to Date
        </p>
        <p className="flex items-center   text-center font-400 text-[15px] leading-[28.5px]">
          Subscribe to our newsletter to receive our weekly feed.
        </p>

        <div class="flex items-center my-6 bg-white shadow-2xl rounded-full overflow-hidden w-[90%] md:w-[60%] lg:w-[40%]">
          <input
            type="email"
            placeholder="Your e-mail"
            class="flex-1 bg-transparent px-6 py-4 outline-none"
          />
          <button class="flex cursor-pointer items-center gap-2 px-6 py-2 text-sm font-medium text-gray-700 hover:text-black">
            Send
             <img src={arrow_left_black} alt="" />
          </button>
        </div>

        
      </div>
    </div>
  );
};
