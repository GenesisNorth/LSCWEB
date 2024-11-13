// import React from 'react'

import Hero from "../Components/Hero";
import PhotoBank from "../Components/PhotoBank";
import Welcome from "../Components/Welcome";

const HomePage = () => {
  return (
    <div>
      <div className="h-[745px] w-full sm:h-[755px] px-auto sm:px-[120px] flex items-end pb-[23px] justify-center bg-[#F2EFEA] rounded-b-[65px] overflow-hidden">
        <Welcome/>
      </div>
      <div className="flex justify-center my-[100px]">
        <Hero/>
      </div>
      <PhotoBank/>
    </div>
  );
};

export default HomePage;
