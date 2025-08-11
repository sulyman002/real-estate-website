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
          className="h-[297px] bg-cover rounded-lg w-[427px]"
        >
          <p className="px-4 py-2 rounded-full pt-4 pl-4">FOR SALE</p>
          {props.featured === true && (
            <p className="px-4 py-2 rounded-full pt-4 pl-4">FEATURED</p>
          )}

          <p className="px-4 py-2 rounded-full pt-4 pl-4">{props.featured}</p>
        </div>
        <div>
          <div>
            <p className="font-bold text-[19px]">{props.name}</p>
            <p className="text-[#EB664E] font-600 text-[21px] font-bold">
              {props.price}
            </p>
          </div>
          <div>
            <img src={location_icon} alt="" />
            <p className="text-[16px]">{props.location}</p>
          </div>
          <div className="flex gap-2 items-center">
            <div> <img src={bed_icon} alt="" /> 4 Bed</div>
            <div><img src={bath_icon} alt="" /> 2 Baths</div>
            <div><img src={sqft_icon} alt="" /> 450 Sqft</div>
          </div>
        </div>
      </div>
    </div>
  );
};
