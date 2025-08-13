import React from "react";
import arrow_left_icon from "../assets/arrow_left_icon.svg";
import news_image1 from "../assets/news1.jpg";
import news_image2 from "../assets/news2.jpg";
import news_image3 from "../assets/news3.jpg";
import news_image4 from "../assets/news4.jpg";
import arrow_left_black from "../assets/arrow_left_black.svg";

export const RecentArticle = () => {
  const news = [
    {
      type: "Apartment",
      date: "March 19, 2024",
      title: "Housing Markets That Changed the Most This Week",
      image: news_image1,
    },
    {
      type: "Apartment",
      date: "March 19, 2024",
      title: "Read Unveils the Best Canadian Cities for Biking",
      image: news_image2,
    },
    {
      type: "Office",
      date: "March 19, 2024",
      title: "10 Walkable Cities Where You Can Live Affordably",
      image: news_image3,
    },
    {
      type: "Shop",
      date: "March 19, 2024",
      title: "New Apartment Nice in the Best Canadian Cities",
      image: news_image4,
    },
  ];

  return (
    <div className="flex items-center justify-center py-40">
      <div className="w-[75vw]">
        
        <div className="flex justify-center items-center">
          <div className="w-[75vw]">
            <h2 className="text-[40px] text-[#1A1A1A] text-bold">
              Recent Articles & News
            </h2>

            <div className="flex justify-between items-center py-4">
              <p className="text-[17px] text-[#1A1A1A]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <div className="flex text-[15px] gap-2">
                <span className="text-[#1A1A1A]"> View All News</span>{" "}
                <img
                  className="fill-current text-white"
                  src={arrow_left_icon}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-[#1A1A1A] flex w-[75vw] justify-between"> 
          {news.map((item) => {
            return (
              <div className="w-[328px] rounded-[16px] bg-white shadow-2xl py-4">
                <div>
                  <div className="rounded-t-lg"> 
                    <img src={item.image} alt="" className="rounded-t-lg"/>
                  </div>
                  <div className="flex flex-col items-center p-4">
                    <p className="text-[15px] leading-[28.5px] font-400">{item.type + "." + item.date}</p>
                    <p className="text-17px font-bold px-5 text-center leading-25.84px py-2">{item.title}</p>
                    <div className="flex items-center gap-2 py-2 cursor-pointer">
                      <span>Read More</span>
                      <img src={arrow_left_black} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
