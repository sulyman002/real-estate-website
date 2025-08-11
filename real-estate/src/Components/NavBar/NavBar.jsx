import React from 'react'
import logo_icon from '../assets/logo_icon.svg'
import dial_icon from '../assets/dial_icon.svg'
import profile_icon from '../assets/profile_icon.svg'

export function NavBar() {
  return (
    <div className='flex w-full justify-between items-center px-14 py-10'>
        <div>
          <img src={logo_icon} alt="" />
        </div>

        <ul className='flex gap-8 text-[16px font-bold'>
          <li>Home</li>
          <li>Listings</li>
          <li>Members</li>
          <li>Blog</li>
          <li>Pages</li>
          <li>Contact</li>
        </ul>

        <div className='flex gap-8 items-center text-[16px]'>
          <div className='flex gap-2 items-center'>
            <img src={dial_icon} alt="" />
            <span>+68 685 88666</span>
          </div>
          <div className='w-8 h-8 rounded-full flex items-center justify-center border-1 '>
              <img src={profile_icon} alt="" />
          </div>
          <div className='border-1 rounded-full px-8 py-2 '>Add Property</div>
        </div>
    </div>
  )
}
