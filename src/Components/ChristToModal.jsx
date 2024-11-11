import React from 'react'

import { BsQuote } from "react-icons/bs";
import { FiPlay } from "react-icons/fi";

const ChristToModal = () => {
  return (
    <div className="w-[1204px] space-y-[32px] h-[529px]">
      <h2 className="text-[40px] font-semibold text-center">
        A life without Christ is a life full of crises
      </h2>
      <div className="flex justify-between w-full h-full ">
        <div className="h-[277px] w-[545px] space-y-[8px]">
          <div className="w-[60px] h-[60px] bg-neutral-300 flex items-center justify-center rounded-[30px]">
            <BsQuote className="w-[40px] h-[40px]" />
          </div>
          <p className="text-left text-[20px] font-medium">
            For God so loved the world that he gave his only
            <br /> begotten son, that whosoever believeth in him shall
            <br /> live and not die
          </p>
          <h2 className="leading-[32px] text-[24px] font-medium">John 3:16</h2>
          <button className="px-[16px] py-[12px] rounded-[12px] text-[14px] font-medium outline outline-purple-500">
            I just gave my life to christ
          </button>
        </div>
        <div className="w-[633px] h-[437px] flex justify-center items-center">
          <div><FiPlay className="w-[40px] h-[40px]"/></div>
        </div>
      </div>
    </div>
  );
};

export default ChristToModal;
