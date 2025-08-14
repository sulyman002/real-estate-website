import React from "react";
import location_icon from "../assets/location_icon.svg";
import bed_icon from "../assets/bed_icon.svg";
import bath_icon from "../assets/bath_icon.svg";
import sqft_icon from "../assets/sqft_icon.svg";

export const CategoryItem2 = (props) => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md h-[452.8px] w-[447px]">
        <div
          style={{ backgroundImage: `url(${props.image})` }}
          className="h-[297px] w-full bg-cover rounded-lg"
        >
          <div className="flex pt-6 pl-6 gap-3">
          <p className="text-[13px] text-white rounded-full bg-[#1F4B43] px-3 py-[3px] cursor-pointer">
              FOR SALE
            </p>
            {props.featured === true && (
              <p className="text-[13px] rounded-full bg-[#E7C873] px-3 py-[3px] cursor-pointer">
              FEATURED
            </p>
            )}
              
            
          </div>
        </div>
        <div className="px-4 py-4">
          <div className="flex justify-between">
            <p className="font-bold text-[19px] text-[#1A1A1A]">{props.name}</p>
            <p className="text-[#EB664E] font-600 text-[21px] font-bold">
              {props.price}
            </p>
          </div>
          <div className="flex items-center gap-4 py-4">
            <img src={location_icon} alt="" />
            <p className="text-[16px] text-[#1A1A1A]">{props.location}</p>
          </div>
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
        </div>
      </div>
    </div>
  );
};
