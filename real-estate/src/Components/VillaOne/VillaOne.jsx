import React from "react";
import villa_one_image from "../assets/villa_one_image.jpg";
import location_icon from "../assets/location_icon.svg";
import bed_icon from "../assets/bed_icon.svg";
import bath_icon from "../assets/bath_icon.svg";
import sqft_icon from "../assets/sqft_icon.svg";
import arrow_left_black from "../assets/arrow_left_black.svg";

export const VillaOne = () => {
  return (
    <div className="w-full flex justify-center items-center py-40">
      <div className="flex flex-col gap-6 xl:flex-row w-[75vw] h-[700px] rounded-[15px]">
        <div
          style={{ backgroundImage: `url(${villa_one_image})` }}
          className="h-[700px]  flex-1 w-full rounded-[15px]"
        >
          <div className="flex pt-6 pl-6 gap-3">
            <p className="text-[13px] rounded-full bg-[#1F4B43] px-3 py-[3px] cursor-pointer">
              FOR SALE
            </p>

            <p className="text-[13px] rounded-full bg-[#E7C873] px-3 py-[3px] cursor-pointer">
              FEATURED
            </p>
          </div>
        </div>

        <div className="flex flex-col flex-1 text-[#1A1A1A] justify-center pl-30">
          <h2 className="font-500 text-[40px] leading-[48px] font-bold">
            Villa One Hyde Park
          </h2>
          <div className="flex items-center gap-2 py-4">
            <img src={location_icon} alt="" />
            <p className="text-[16px] leading-[30.4px]">
              2050 Bloomingdale Ave
            </p>
          </div>
          <p className="text-[16px] leading-[30.4px] ">
            Enchanting three bedroom, three bath home with spacious one bedroom,
            one bath cabana, in-laws quarters. Charming living area features
            fireplace and fabulous art deco details. ...
          </p>
          <div className="flex gap-2 items-center mt-4">
            <div className="text-[#1A1A1A] flex items-center gap-4">
              {" "}
              <img src={bed_icon} alt="" /> 4 Bed
            </div>
            <div className="text-[#1A1A1A] flex items-center gap-4">
              {" "}
              <img src={bath_icon} alt="" /> 2 Baths
            </div>
            <div className="text-[#1A1A1A] flex items-center gap-4">
              {" "}
              <img src={sqft_icon} alt="" /> 450 sqft
            </div>
          </div>

          <p className="text-[#EB664E] font-600 text-[21px] font-bold py-4">
            $120,000
          </p>
          <div className="flex">
            <button
            className="flex items-center text-black bg-[#E7C873] justify-center gap-2 px-4 py-3 rounded-lg mt-4"
            onClick={(event) => event.preventDefault()}
          >
            Learn More
            <img src={arrow_left_black} alt="" />
          </button>
          </div>

          <div className="px-4 py-4 text-[#1A1A1A"></div>
        </div>
      </div>
    </div>
  );
};
