import React from "react";
import categoryData from "../assets/category";
import arrow_left_icon from "../assets/arrow_left_icon.svg";
import { CategoryItem } from "../categoryItem/categoryItem";

export const Feature1 = () => {
  return (
    <>
      <div className="flex justify-center pt-28 pb-24">
        <div className="">
          <h2 className="text-[40px] text-[#1A1A1A] text-bold">Featured Categories</h2>
          
          <div className="flex justify-between items-center py-2">
            <p className="text-[17px] text-[#1A1A1A]">Lorem ipsum dolor sit amer</p>
            
            <div className="flex text-[15px] gap-2">
              <span className="text-[#1A1A1A]"> View All Category </span>{" "}
              <img
                className="fill-current text-white"
                src={arrow_left_icon}
                alt=""
              />
            </div>
          </div>

          <div className="w-[75vw] py-4 gap-4 flex justify-between items-center">
            {categoryData.map((item, index) => {
              return (
                <CategoryItem
                  key={index}
                  name={item.name}
                  image={item.image}
                  properties={item.properties}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
