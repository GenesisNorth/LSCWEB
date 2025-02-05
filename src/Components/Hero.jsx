
// import React from 'react'

import ChristToModal from "./ChristToModal";
import FrequentlyAQ from "./FrequentlyAQ";
import Member from "./Member";
import Story from "./Story";
import WeeklyService from "./WeeklyService";

const Hero = () => {
  return (
    <div className="w-full max-w-[1204px] mx-auto space-y-[100px] px-4 sm:px-6">
      <Member />
      <WeeklyService />
      <Story />
      <ChristToModal/>
      <FrequentlyAQ/>
    </div>
  );
};

export default Hero;