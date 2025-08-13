import React from 'react'
import { NavBar } from '../NavBar/NavBar';
import { HeroContent } from '../HeroContent/HeroContent.jsx';
import backgroundImage from '../assets/background_image.jpg';
import { LastContent } from "../HeroSectionLastContent/LastContent.jsx";

export function HeroSection() {
  return (
    <div style={{backgroundImage: `url(${backgroundImage})` }} className="bg-cover">
        <NavBar />
        <HeroContent />
        <LastContent />
    </div>
  )
}


