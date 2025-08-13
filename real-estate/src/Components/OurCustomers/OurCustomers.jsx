import React from "react";
import cameron from "../assets/cameron.png";
import esther from "../assets/esther.jpg";
import devon from "../assets/devon.jpg";
import stars from "../assets/stars.svg";
import quote_icon from "../assets/quote_icon.svg";
import amazon from "../assets/amazon.png"
import amd from "../assets/amd.png"
import cisco from "../assets/cisco.png"
import dropcam from "../assets/dropcam.png"
import logitech from "../assets/logitech.png"
import spotify from "../assets/spotify.png"

export const OurCustomers = () => {
  const Customers = [
    {
      name: "Cameron Williamson",
      role: "Designer",
      image: cameron,
      quote:
        "Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.",
    },
    {
      name: "Esther Howard",
      role: "Marketing",
      image: esther,
      quote:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
    },
    {
      name: "Devon Lane",
      role: "Developer",
      image: devon,
      quote:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
    },
  ];
  return (
    <div className="w-full flex justify-center items-center py-30">
      <div className=" w-[75vw] flex flex-col gap-6">
        <div className="text-[#1A1A1A] flex items-center flex-col lg:flex-row gap-6 lg:justify-between">
          <p className="font-500 text-[40px] leading-[52px] w-[450px]">
            What our customers are saying us?
          </p>
          <div className="flex lg:gap-12 gap-30 pr-8">
            <div className="flex flex-col justify-start">
              <p className="text-[26px] font-medium font-500 leading-[33.8px]">
                10m+
              </p>
              <p className="text-[15px] font-400 leading-[37.5px]">
                Happy People
              </p>
            </div>
            <div className="flex flex-col justify-start">
              <p className="text-[26px] font-medium font-500 leading-[33.8px]">
                4.88
              </p>
              <p className="text-[15px] font-400 leading-[37.5px]">
                Overall rating
              </p>
              <div>
                <img src={stars} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center lg:flex-row gap-4 justify-between">
          {Customers.map((customer, index) => {
            return (
              <div
                key={index}
                className="w-[447px] text-[#1A1A1A] rounded-lg bg-[#F9F9F9] p-6 flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="h-[90px] w-[90px] rounded-full">
                      <img src={customer.image} alt="" className="rounded-full"/>
                    </div>
                    <div>
                      <h3 className="font-500 text-19px font-bold leading-[22.8px]">
                        {customer.name}
                      </h3>
                      <p className="text-[15px] leading-[28.5px] font-400">
                        {customer.role}
                      </p>
                    </div>
                  </div>
                  <div>
                    <img src={quote_icon} alt="" className="w-[45] h-[44px]" />
                  </div>
                </div>
                <div className="text-[17px] leading-[32.3px] mt-6">
                  Searches for multiplexes, property comparisons, and the loan
                  estimator. Works great. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dores.
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-30">
            <div className="flex flex-col items-center justify-center w-full">
                <p className="text-[17px] font-400 leading-[32.3px] text-[#1A1A1A] py-6">Thousands of world’s leading companies trust Space</p>
                <div className="flex justify-between px-20 items-center w-full mt-4">
                    <img src={amazon} alt="" className="w-[99px] h-[31px]"/>
                    <img src={amd} alt="" className="w-[99px] h-[31px]"/>
                    <img src={cisco} alt="" className="w-[99px] h-[31px]"/>
                    <img src={dropcam} alt="" className="w-[99px] h-[31px]"/>
                    <img src={logitech} alt="" className="w-[99px] h-[31px]"/>
                    <img src={spotify} alt="" className="w-[99px] h-[31px]"/>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};
