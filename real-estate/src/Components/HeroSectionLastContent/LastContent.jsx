import React from "react";
import rating_container from "../assets/rating_container.png";

export const LastContent = () => {
  return (
    <div
      style={{ backgroundImage: `url(${rating_container})` }}
      className="bg-cover  py-10 px-8"
      // mt-16 h-[110px] flex items-center absolute button-0 right-[950px
    >
      <div>
        <p>600</p>
        <p>600</p>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};
