import React from "react";
import { CategoryItem2 } from "../CategoryItem2/CategoryItem2";
import Category2 from "../assets/category2";
import arrow_left_icon from "../assets/arrow_left_icon.svg";
import left_arrow from "../assets/left_arrow.svg";
import right_arrow from "../assets/right_arrow.svg";

export const Feature2 = () => {
  return (
    <>
      
        <div className="py-20 md:py-30 flex flex-col bg-[#F9F9F9] flex-wrap">
        <div className="">




          {/* here */}
          <div className=" flex flex-col px-10 md:px-20 xl:px-50 lg:px-30">
            <h2 className="text-[30px] md:text-[40px] text-[#1A1A1A] text-bold">
              Featured Categories
            </h2>

            <div className="flex gap-3 flex-col md:flex-row md:justify-between md:items-center py-4">
              <p className="text-[17px] text-[#1A1A1A]">
                Lorem ipsum dolor sit amer
              </p>

              <div className="flex text-[15px] gap-3">
                <span className="text-[#1A1A1A] "> View All Category </span>{" "}
                <img
                  className="fill-current text-white w-5"
                  src={arrow_left_icon}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>





        {/* here */}
        <div className="flex flex-col px-10 xl:grid-cols-4 xl:px-50 md:grid md:grid-cols-2 md:px-20 lg:px-30 gap-8 overflow-hidden ">
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

        <div className="w-full flex mt-6 ">


          {/* here */}
          <div className=" flex items-center gap-2 px-10 md:px-20 lg:px-30 xl:px-50">
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
