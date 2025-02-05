// import React from 'react';

const Juniorchurch = () => {
    return (
      <div className="bg-white px-4 sm:px-6 lg:px-[120px] mb-[20px]">
        <h2 className="text-center text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-[#222222] mb-[70px]">
          Our Junior Church
        </h2>
  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="bg-[#EEE7F6] rounded-[12px] p-6">
              <img
                src="/src/assets/daddy.jpg"
                alt="Pastor 1"
                className="w-full h-[300px] object-cover rounded-[12px]"
              />
            </div>
            <div className="bg-[#EEE7F6] rounded-[12px] p-6">
              <img
                src="/src/assets/pstadeboye.jpg"
                alt="Pastor 2"
                className="w-full h-[300px] object-cover rounded-[12px]"
              />
            </div>
            <div className="bg-[#EEE7F6] rounded-[12px] p-6">
              <img
                src="/src/assets/pstadeboye.jpg"
                alt="Pastor 3"
                className="w-full h-[300px] object-cover rounded-[12px]"
              />
            </div>
            <div className="bg-[#EEE7F6] rounded-[12px] p-6">
              <img
                src="/src/assets/pstadeboye.jpg"
                alt="Pastor 4"
                className="w-full h-[300px] object-cover rounded-[12px]"
              />
            </div>
          </div>
  
          <div className="flex flex-col justify-start lg:justify-center items-center lg:items-start mt-6 lg:mt-0">
            <p className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold text-[#111111]">
              Our Junior Church
            </p>
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] leading-[26px] text-[#444444] mt-[16px]">
              Pastor E.A Adeboye and Pastor Mrs. E. A. Adeboye. Lorem ipsum dolor sit amet consectetur.
              Vulputate eu leo suscipit integer viverra. Nibh laoreet consectetur cursus tincidunt proin
              tristique eget imperdiet elementum. Arcu tellus dignissim eget tellus. Ultricies egestas
              nullam arcu amet nulla ornare.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Juniorchurch;