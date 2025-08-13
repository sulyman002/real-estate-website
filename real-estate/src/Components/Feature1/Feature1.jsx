import React from "react";
// import categoryData from "../assets/category";
import arrow_left_icon from "../assets/arrow_left_icon.svg";
// import CategoryItem from "../categoryItem/CategoryItem";
// import { CategoryItem } from "../categoryItem/categoryItem.jsx";

export const Feature1 = () => {
  return (
    <>
      <div className="  px-10 md:px-20 lg:px-40 xl:px-60 py-24">
        <div className="">
          <h2 className="text-[30px] lg:text-[40px] text-[#1A1A1A] text-bold">Featured Categories</h2>
          
          {/* flex flex-col md:flex-row lg:justify-between lg:items-center gap-2 py-2 */}
          <div className="flex items-center justify-between py-4">
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
            {/* flex-col lg:grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:grid md:grid-cols-2  py-4 gap-4 flex lg:justify-between lg:items-center */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:overflow-hidden">
            {/* {categoryData.map((item, index) => {
              return (
                <CategoryItem
                  key={index}
                  name={item.name}
                  image={item.image}
                  properties={item.properties}
                />
              );
            })} */}
          </div>
        </div>
      </div>
    </>
  );
};
