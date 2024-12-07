import React from "react";
import image1 from "../assets/pdi.webp";

const UpcomingEvent = () => {
  return (
    <div className="relative w-full h-[521px] mt-16">
      <div
        className="absolute w-full h-full bg-cover bg-center opacity-60"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: "cover",
        }}
      ></div>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl font-semibold text-white mb-4">Upcoming Events</h2>

        <button className="px-8 py-3 bg-[#462F77] text-white rounded-[12px] text-[16px] font-medium hover:bg-[#362263] transition duration-300">
          View All Events
        </button>
      </div>
    </div>
  );
};

export default UpcomingEvent;
