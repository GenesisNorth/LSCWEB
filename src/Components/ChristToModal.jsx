// import React from 'react'

import { BsQuote } from "react-icons/bs";
import { FiPlay } from "react-icons/fi";

const ChristToModal = () => {
  return (
    <div className="w-full max-w-[1204px] space-y-[32px] h-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-[40px] font-semibold text-center">
        A life without Christ is a life full of crises
      </h2>
      <div className="flex flex-col md:flex-row justify-between w-full h-full space-y-8 md:space-y-0">
        {/* Left Section */}
        <div className="h-auto md:h-[277px] w-full md:w-[545px] space-y-[8px]">
          <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] bg-neutral-300 flex items-center justify-center rounded-full">
            <BsQuote className="w-[20px] h-[20px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px] flex items-center justify-center" />
          </div>
          <p className="text-left text-base sm:text-lg md:text-[20px] font-medium">
            For God so loved the world that he gave his only
            <br /> begotten son, that whosoever believeth in him shall
            <span className="hidden sm:inline">
             <br /> live and not die
            </span>
            <span className="inline sm:hidden"> live and not die</span>
          </p>
          <h2 className="leading-[32px] text-lg sm:text-xl md:text-[24px] font-medium">
            John 3:16
          </h2>
          <button className="px-[16px] py-[12px] rounded-[12px] text-sm sm:text-[14px] font-medium outline outline-purple-500">
            I just gave my life to Christ
          </button>
        </div>
        {/* Right Section */}
        <div className="w-full md:w-[633px] h-[200px] md:h-[437px] flex justify-center items-center">
          <div>
            <FiPlay className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
  
  
};

export default ChristToModal;
