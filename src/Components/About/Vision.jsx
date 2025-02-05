// import React from 'react';

const Vision = () => {
    return (
      <div className="flex flex-col lg:flex-row bg-[#EEE7F6] w-full h-auto lg:h-[571.35px] rounded-b-[65px] px-4 sm:px-6 lg:px-[120px] py-[24px] justify-between items-center">
        <div className="flex flex-col w-full lg:w-[686px] space-y-[16px] lg:space-y-[24px]">
          <h2 className="font-semibold text-[24px] sm:text-[28px] lg:text-[32px] text-[#222222] text-center lg:text-left leading-[36px]">
            Our Vision and Mission
          </h2>
  
          <ul className="custom-list space-y-[12px] text-[16px] text-[#222222] leading-[24px] px-2 lg:px-0">
            <li>To Make Heaven</li>
            <li>To take as many people with us</li>
            <li>To have a member of RCCG in every family of all nations</li>
            <li>To accomplish No. 1 above, holiness will be our lifestyle</li>
            <li>
              To accomplish No. 2 and 3 above, we will plant churches within five
              minutes walking distance in every city and town of developing
              countries and within five minutes driving distance in every city
              and town of developed countries.
            </li>
            <li>
              We will pursue these objectives until every Nation in the world is
              reached for the Lord Jesus Christ.
            </li>
          </ul>
        </div>
  
        <div className="w-full sm:w-[350px] lg:w-[430px] h-[200px] sm:h-[250px] lg:h-[300px] flex items-center justify-center mt-4 lg:mt-0">
          <img
            src="src/assets/IMG_0168.jpg"
            alt="Together"
            className="w-full h-full object-cover rounded-[16px]"
          />
        </div>
  
        <style>
          {`
            .custom-list {
              list-style: none;
              margin: 0;
              padding: 0;
            }
            .custom-list li {
              position: relative;
              padding-left: 30px;
            }
            .custom-list li::before {
              content: '✔';
              font-size: 12px;
              color: #4CAF50;
              border: 1px solid #4CAF50;
              border-radius: 50%;
              position: absolute;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
              width: 20px;
              height: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          `}
        </style>
      </div>
    );
  };
  
  export default Vision;
  