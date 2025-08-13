import React from "react";
import applestore_icon from "../assets/applestore_icon.svg";
import googleplay_icon from "../assets/googleplay_icon.svg";
import useapp from "../assets/useapp.jpg";

export const StartToday = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-[#1F4B43] rounded-lg flex justify-between w-[75vw]">
        
        
        
        
        
        <div className="flex flex-col justify-center pl-16">

        <div className=" mb-5 flex flex-col">
            
            <div className="flex">
                <div className="justify-center px-3 py-2 rounded-full text-[14px] text-white bg-white/10">
                Start today
            </div>
            </div>

            <p className="text-32px leading-[32px] font-500 font-bold py-2">
                Download the App
            </p>
            <p className="text-[15px] w-[480.85px] py-2 ">
                Take classes on the go with the just home app. Stream or download to
                watch on the plane, the subway, or wherever you learn best.
            </p>
        </div>
            
          


          <div className="flex gap-4 items-center mt-4">
            <div className="flex items-center gap-4 bg-white justify-center px-4 rounded-lg py-2">
              <div>
                <img src={applestore_icon} alt="" />
              </div>
              <div className="text-[#1F4B43] px-3 flex flex-col justify-center border-l-2 border-gray-300">
                <p className="text-[13px] text-400">Download on the</p>
                <p className="text-[19px] font-bold text-500">Apple Store</p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center  bg-white px-4 rounded-lg py-2" >
              <div>
                <img src={googleplay_icon} alt="" />
              </div>
              <div className="text-[#1F4B43] px-3  flex flex-col justify-center border-l-2 border-gray-300 ">
                <p className="text-[13px] text-400">Get in on</p>
                <p className="text-[19px] font-bold text-500">Google Play</p>
              </div>
            </div>
          </div>
        </div>
        
        
        
        
        <div>
          <img src={useapp} alt="" />
        </div>




      </div>
    </div>
  );
};
