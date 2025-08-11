import React from "react";
import location_icon from "../assets/location_icon.svg";
import bed_icon from "../assets/bed_icon.svg";
import bath_icon from "../assets/bath_icon.svg";
import sqft_icon from "../assets/sqft_icon.svg";
import left_arrow from "../assets/left_arrow.svg";
import right_arrow from "../assets/right_arrow.svg";

export const CategoryItem2 = (props) => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md h-[452.8px] w-[447px]">
        <div
          style={{ backgroundImage: `url(${props.image})` }}
          className="h-[297px] bg-cover rounded-lg w-[427px]"
        >
          <p className="px-4 py-2 rounded-full pt-4 pl-4">FOR SALE</p>
        </div>
        <div>
          <div>
            <p className="font-bold text-[19px]">{props.name}</p>
            <p className="text-[#EB664E] font-600 text-[21px] font-bold">{props.price}</p>
          </div>
          <div>
            <img src={location_icon} alt="" />
            <p className="text-[16px]">{props.location}</p>
          </div>
          <div className="flex gap-2 items-center">
            <div>{bed_icon} 4 Beds</div>
            <div>{bath_icon} 2 Baths</div>
            <div>{sqft_icon} 450 sqft</div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-6">
        <div className="px-4 py-2 rounded-full text-black">{left_arrow}</div>
        <div className="px-4 py-2 rounded-full text-black">{right_arrow}</div>
      </div>
    </div>
  );
};
