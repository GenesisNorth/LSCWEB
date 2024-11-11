import React from 'react'
import image from "../assets/img.jpg";

const Member = () => {
  return (
    <div className="w-full h-[527px] gap-[32px]">
      <p className="text-[36px] font-semibold text-center">
        Be a part of God&apos;s move by:
      </p>
      <div className="flex justify-between items-center space-y-[46px]">
        <div className="w-[514px] space-y-[30px]  h-[395px]">
          <div className="border-l-4 border-purple-700 space-y-[13px] h-[197px] px-[24px]">
            <div className="gap-[4px] text-left">
              <h2 className="font-semibold text-[24px]">Becoming a Member</h2>
              <p className="text-[16px] text-[#444444] leading-[26px]">
                We warmly invite you to become a member of our church
                <br /> community. By joining us, you&apos;ll not only find
                spiritual
                <br /> growth and support but also a vibrant community of
                <br /> caring individuals who share in faith and fellowship.
              </p>
            </div>
            <button className="px-[16px] py-[12px] rounded-[12px] text-[14px] font-medium outline outline-purple-500">
              Yes, I want to be a member
            </button>
          </div>
          <h2 className="font-semibold text-[24px] text-neutral-700">
            Joining a Family
          </h2>
          <h2 className="font-semibold text-[24px] text-neutral-700">
            Joining the Workforce
          </h2>
          <h2 className="font-semibold text-[24px] text-neutral-700">
            Starting Believers&apos; Class
          </h2>
        </div>
        <div className="w-[640px] h-[441px]">
          <img src={image} className="rounded-lg  w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Member;
