import React from "react";
import hyde from "../assets/hyde_park.jpg";
import living_room from "../assets/living_room.jpg";
import left_arrow_white from "../assets/arrow_left_white.svg";
import right_arrow_white from "../assets/arrow_left_right.svg";
import liv_video from "../assets/liv_video.jpg";
import play_icon from "../assets/play_icon.svg";
import arrow_black from "../assets/arrow_black.svg";

export const Exclusive = () => {
  return (
    <div className="flex items-center justify-center bg-[#2D3A4F] py-30">
      <div className="w-[75vw]">
        <div className="flex flex-col items-center justify-center py-6">
          <p className="font-500 text-[40px] leading-[52px]">
            Exclusive Properties
          </p>
          <p className="text-[17px] font-400 leading-[32.3px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex gap-8 flex-col justify-center xl:grid xl:grid-cols-2">
          <div
            style={{ backgroundImage: `url(${hyde})` }}
            className="h-[700px] xl:h-[700px] bg-cover bg-no-repeat xl:flex-1  rounded-[15px]"
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

          <div className="flex flex-col gap-8">
            <div
              style={{ backgroundImage: `url(${living_room})` }}
              className="bg-cover bg-no-repeat h-[334.5px] rounded-lg flex items-center justify-center"
            >
              <div className="w-full flex justify-center mt-6 px-4">
                <div className="w-full flex items-center justify-between">
                  <div className="w-[60px] h-[40px] bg-white/10 backdrop-blur-2xl flex items-center justify-center shadow-2xl rounded-full text-black cursor-pointer ">
                    <img src={left_arrow_white} alt="" />
                  </div>
                  <div className="w-[60px] h-[40px] bg-white/10 backdrop-blur-2xl flex items-center justify-center shadow-2xl rounded-full text-black cursor-pointer ">
                    <img src={right_arrow_white} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 grid-cols-2">
              <div
                style={{ backgroundImage: `url(${liv_video})` }}
                className="bg-no-repeat bg-cover h-[331.44px] flex items-center justify-center rounded-[16px]"
              >
                <div className="h-[60px] w-[60px] rounded-full flex items-center justify-center bg-black/20 backdrop-blur-1xl ">
                  <img
                    src={play_icon}
                    alt=""
                    className="flex items-center justify-center"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-6 pl-6 bg-[#E7C873] text-[#1A1A1A] rounded-[16px]">
                <div>
                  <p className="font-500 text-[40px] leading-[52px]">280+</p>
                  <p className="font-400 text-[19px] leading-[34.2px]">
                    Properties
                  </p>
                  <p className="font-400 text-[15px] leading-[28.5px]  py-4">
                    Explore our wide variety of properties to fid your dream
                    home today
                  </p>
                </div>
                <div className="w-full flex justify-end pr-10 mt-6">
                  <div className="h-[51px] w-[51px] rounded-full bg-white flex items-center justify-center cursor-pointer">
                    <img src={arrow_black} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
