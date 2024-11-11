import React from 'react'

import ChristToModal from "./ChristToModal";
import FrequentlyAQ from "./FrequentlyAQ";
import Member from "./Member";
import Story from "./Story";
import WeeklyService from "./WeeklyService";

const Hero = () => {
  return (
    <div className="w-[1204px] space-y-[100px]">
      <Member />
      <WeeklyService />
      <Story />
      <ChristToModal/>
      <FrequentlyAQ/>
    </div>
  );
};

export default Hero;
