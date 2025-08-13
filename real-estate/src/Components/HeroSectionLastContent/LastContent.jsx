import React from "react";
import rating_container from "../assets/rating_container.png";

export const LastContent = () => {
  return (
    <div
      style={{ backgroundImage: `url(${rating_container})` }}
      className="bg-cover mr-[800px] py-10 px-8 text-[#1A1A1A] flex items-center justify-center gap-16 pl-14"
      // mt-16 h-[110px] flex items-center absolute button-0 right-[950px
    >
      <div>
        <p className="text-[30px] flex flex-col items-center font-bold">680</p>
        <p className="text-[15px] leading-[37.5px] font-bold">Award Winning</p>
      </div>

      <div>
        <p className="text-[30px] flex flex-col items-center font-bold">8K+</p>
        <p className="text-[15px] leading-[37.5px] font-bold">Happy Customer</p>
      </div>
      <div>
        <p className="text-[30px] flex flex-col items-center font-bold">500+</p>
        <p className="text-[15px] leading-[37.5px] font-bold">Property Ready</p>
      </div>
      
    </div>
  );
};
