import React from "react";
import wide_icon from "../assets/wide_range_icon.svg";
import buyAndRent_icon from "../assets/buyORrent_icon.svg";
import trusted_icon from "../assets/trusted_icon.svg";

export function WhyShould() {
  return (
    <div className="py-30 px-[25vw] flex items-center flex-col justify-center text-black">
      <div className="text-center">
        <h1 className="font-500 text-[40px] font-bold leading-[52px] text-center">
          Why You Should Work With Us
        </h1>
        <p className="font-400 text-[17px] leading-[32.3px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-10 py-10 items-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <div>
            <img src={wide_icon} alt="" />
          </div>
          <div className="text-center">
            <p className="font-500 text-[21px] leading-[25.2px] font-bold">
              Wide Range of Properties
            </p>
            <p className="font-400 text-15px leading-[28.5px] pt-2">
              We offer expert legal help for all related property items in
              Dubai.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <div>
            <img src={buyAndRent_icon} alt="" />
          </div>
          <div className="text-center">
            <p className="font-500 text-[21px] leading-[25.2px] font-bold">
              Buy or Rent Homes
            </p>
            <p className="font-400 text-15px leading-[28.5px] pt-2">
              We sell your home at the best market price and very quickly as
              well.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <div>
            <img src={trusted_icon} alt="" />
          </div>
          <div className="text-center">
            <p className="font-500 text-[21px] leading-[25.2px] font-bold">
              Trusted by Thousands
            </p>
            <p className="font-400 text-15px leading-[28.5px] pt-2">
              We offer you free consultancy to get a loan for your new home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
