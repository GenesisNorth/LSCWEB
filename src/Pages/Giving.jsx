// import React from 'react';

import Footer from "../Components/Footer";
import GivingAction from "../Components/Giving/GivingAction";
import GivingWelcome from "../Components/Giving/GivingWelcome";
// import Hero from "../Components/Hero";
// import PhotoBank from "../Components/PhotoBank";
// import UpcomingEvents from "../Components/UpcomingEvents";

const HomePage = () => {
  return (
    <div className="bg-[#EEE7F6]">
      {/* Welcome Section */}
      <div className="h-auto w-full flex items-center pt-[130px] pb-[23px] justify-center bg-white rounded-b-[65px]">
        <GivingWelcome />
      </div>

      {/* Giving Action Section */}
      <div className="w-full">
        <GivingAction />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;
