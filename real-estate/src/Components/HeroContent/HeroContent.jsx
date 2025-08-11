import React from "react";
import arrow_left_icon from "../assets/arrow_left_icon.svg";
// import { LastContent } from "../HeroSectionLastContent/LastContent.jsx";

export const HeroContent = () => {
  return (
    <>
      <div className="flex justify-center py-[220px]">
        <div className="w-[75vw] flex flex-col gap-3">
          <h1 className="text-[60px] font-bold w-[35vw] leading-[60px] tracking-wider">
            The <span className="text-[#E7C873]">#1</span> site real estate
            professionals trust*
          </h1>

          <p className="text-[16px] py-4">
            From as low as $10 per day with limited time offer discounts
          </p>

          <div className="text-[16px] flex gap-4 items-center text-[#E7C873]">
            <span>Browse More Properties</span>
            <img src={arrow_left_icon} alt="" />
          </div>
        </div>
      </div>
     

      {/* <LastContent /> */}
    </>
  );
};
