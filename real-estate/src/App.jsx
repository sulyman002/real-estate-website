import React from "react";
import { HeroSection } from "./Components/HeroSection/HeroSection.jsx";
import { Feature1 } from "./Components/Feature1/Feature1.jsx";
import { Feature2 } from "./Components/Feature2/Feature2.jsx";
import { WhyShould } from "./Components/WhyShould/WhyShould.jsx";
import { Discover } from "./Components/Discover/Discover.jsx";
import { VillaOne } from "./Components/VillaOne/VillaOne.jsx";
import { OurCustomers } from "./Components/OurCustomers/OurCustomers.jsx";
import { Exclusive } from "./Components/Exclusive/Exclusive.jsx";
import { RealEstate } from "./Components/RealEstate/RealEstate.jsx";
import { RecentArticle } from "./Components/RecentArticle/RecentArticle.jsx";
import { StartToday } from "./Components/StartToday/StartToday.jsx";
import { StayUpToDate } from "./Components/StayUpToDate/StayUpToDate.jsx"
import { Rooter } from "./Components/Rooter/Rooter.jsx"

function App() {
  return (
    <>
      <HeroSection />
      <Feature1 />
      <Feature2 />
      <WhyShould />
      <Discover />
      <VillaOne />
      <OurCustomers />
      <Exclusive />
      <RealEstate />
      <RecentArticle />
      <StartToday />
      <StayUpToDate />
      <Rooter />
    </>
  );
}

export default App;
