import React from "react";
import logo_icon from "../assets/logo_black.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import arrow_up from "../assets/arrow_up.svg"

export const Rooter = () => {
  return (
    <div className="relative h-auto py-8 flex items-center justify-center bg-[#F2F1F1]">
      <div className="flex flex-col items-center md: justify-center md:flex-row gap-10 md:gap-16 lg:gap-60">
        <div className="text-[#1A1A1A] text-[15px] leading-[28.5px]">Copyright © 2024. JustHome</div>
        <div>
          {" "}
          <img src={logo_icon} alt="" />
        </div>
        <div className="flex items-center justify-center gap-4">
            <img src={facebook} alt="" className="cursor-pointer" />
            <img src={twitter} alt="" className="cursor-pointer" />
            <img src={instagram} alt="" className="cursor-pointer" />
            <img src={linkedin} alt="" className="cursor-pointer" />
        </div>
      </div>
      <div className="absolute flex right-0 button-0 items-center justify-center h-[50px] w-[50px] bg-black rounded-full mr-8 cursor-pointer" onClick={() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
      }}> 
        <div className="flex items-center justify-center"><img src={arrow_up} alt="" /></div>
        
      </div>
    </div>
  );
};
