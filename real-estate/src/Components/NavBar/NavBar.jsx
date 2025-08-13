import React, { useState } from "react";
import logo_icon from "../assets/logo_icon.svg";
import dial_icon from "../assets/dial_icon.svg";
import profile_icon from "../assets/profile_icon.svg";
import hamburger_icon from "../assets/hamburger.svg";
import close_icon from "../assets/icon-close.svg";

export function NavBar() {
const [isClick, setIsclick] = useState(false);

  return (
    <div className="flex w-full justify-between items-center p-4 lg:pt-8 px-8 xl:px-14 xl:py-10 relative">
      <div>
        <img src={logo_icon} alt="" />
      </div>

      <div>
        <div className="cursor-pointer lg:hidden" onClick={() => setIsclick(true)}>
          <img src={hamburger_icon} alt="" />
        </div>
        <ul className={`navDetails gap-8 text-[16px] font-bold ${isClick ? "flex ": "hidden"} fixed flex-col lg:flex-row lg:flex lg:static top-0 pt-30 lg:pt-0 pl-10 bg-[#1b4f5c]/80 left-0 backdrop-blur-1sm w-full`}>
          <div className="flex justify-end pr-4 cursor-pointer " onClick={() => setIsclick(false)}><img src={close_icon} alt="" /></div>
          <li>Home</li>
          <li>Listings</li>
          <li>Members</li>
          <li>Blog</li>
          <li>Pages</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="gap-8 items-center text-[16px] hidden lg:flex">
        <div className="flex gap-2 items-center sm:hidden">
          <img src={dial_icon} alt="" />
          <span>+68 685 88666</span>
        </div>
        <div className="w-8 h-8 rounded-full flex items-center justify-center border-1 ">
          <img src={profile_icon} alt="" />
        </div>
        <div className="border-1 rounded-full px-8 py-2 ">Add Property</div>
      </div>
    </div>
  );
}
