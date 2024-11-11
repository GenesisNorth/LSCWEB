import React from 'react'
import image from "../assets/img.jpg";

const Story = () => {
  return (
    <div className="space-y-[32px]">
      <p className="font-semibold text-[40px] text-center text-neutral-900">
        MY LSC STORY
      </p>
      <div className="h-[370px] w-[1200px] flex justify-between">
        <div className="w-[726px] h-[370px] rounded-[16px] bg-[#EEE7F6] flex justify-between p-[16px]">
          <div className="w-[199px] h-[338px] rounded-[16px]">
            <img
              src={image}
              className="w-full h-full object-cover rounded-[16px]"
              alt="Nil"
            />
          </div>
          <div className="flex w-[469px] flex-col justify-between">
            <h2 className="text-[18px] text-[#333333] leading-[32px] text-left">
              “As I reflect on my years in this church, I am filled with
              gratitude for the community and faith that have shaped my life. I
              came here as a young seeker, lost and searching for purpose, and
              through the warmth of this congregation, I found not only my faith
              but a family.&rdquo;
            </h2>
            <div className="space-y-[5px]">
              <h2 className="font-medium">Abidemi Sharon</h2>
              <h2 className="text-[14px]">A choirister</h2>
            </div>
          </div>
        </div>
        <div className="w-[150px] h-full rounded-[16px]">
          <img
            src={image}
            className="w-full h-full object-cover rounded-[16px]"
            alt="Nil"
          />
        </div>
        <div className="w-[150px] h-full rounded-[16px]">
          <img
            src={image}
            className="w-full h-full object-cover rounded-[16px]"
            alt="Nil"
          />
        </div>
        <div className="w-[150px] h-full rounded-[16px]">
          <img
            src={image}
            className="w-full h-full object-cover rounded-[16px]"
            alt="Nil"
          />
        </div>
      </div>
    </div>
  );
};

export default Story;
