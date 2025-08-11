import React from "react";
import { CategoryItem2 } from "../CategoryItem2/CategoryItem2";
import Category2 from "../assets/category2";
import arrow_left_icon from "../assets/arrow_left_icon.svg";
import left_arrow from "../assets/left_arrow.svg";
import right_arrow from "../assets/right_arrow.svg";

export const Feature2 = () => {
  return (
    <>
      <div className="pr-[12.5vw]">
        <div className="">
          <h2 className="text-[40px] text-[#1A1A1A] text-bold">
            Featured Categories
          </h2>

          <div className="flex justify-between items-center py-2">
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

          <div>
            {Category2.map((item, index) => {
              return (
                <CategoryItem2
                  key={index}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  featured={item.true}
                />
              );
            })}
          </div>

          <div className="flex items-center gap-4 mt-6">
            <div className="px-4 py-2 rounded-full text-black">
              <img src={left_arrow} alt="" />
            </div>
            <div className="px-4 py-2 rounded-full text-black">
              <img src={right_arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
