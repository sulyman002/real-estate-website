import React from "react";
import { CategoryItem2 } from "../CategoryItem2/CategoryItem2";
import Category2 from "../assets/category2";
import arrow_left_icon from "../assets/arrow_left_icon.svg";
import left_arrow from "../assets/left_arrow.svg";
import right_arrow from "../assets/right_arrow.svg";

export const Feature2 = () => {
  return (
    <>
      {/* w-full flex flex-col justify-center bg-[#F9F9F9] py-30 */}
      <div className="py-30 flex flex-col flex-wrap">
        <div className="flex justify-center items-center">
          <div className="w-[75vw] ">
            <h2 className="text-[40px] text-[#1A1A1A] text-bold">
              Featured Categories
            </h2>

            <div className="flex justify-between items-center py-4">
              <p className="text-[17px] text-[#1A1A1A]">
                Lorem ipsum dolor sit amer
              </p>

              <div className="flex text-[15px] gap-2">
                <span className="text-[#1A1A1A]"> View All Category </span>{" "}
                <img
                  className="fill-current text-white"
                  src={arrow_left_icon}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex pl-[12vw] bg-red-400  gap-4 overflow-hidden ">
          {Category2.map((item, index) => {
            return (
              <CategoryItem2
                key={index}
                id={item.id}
                image={item.image}
                name={item.name}
                location={item.location}
                price={item.price}
                featured={item.featured}
              />
            );
          })}
        </div>

        <div className="w-full flex justify-center items-center mt-6">
          <div className="w-[75vw]  flex items-center gap-2">
            <div className="w-[60px] h-[40px] bg-white flex items-center justify-center shadow-2xl rounded-full text-black cursor-pointer ">
              <img src={left_arrow} alt="" />
            </div>
            <div className="w-[60px] h-[40px] bg-white flex items-center justify-center shadow-2xl rounded-full text-black cursor-pointer ">
              <img src={right_arrow} alt="" />
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};
