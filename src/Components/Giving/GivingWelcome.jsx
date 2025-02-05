// import React from "react";

const GivingWelcome = () => {
    return (
      <div className="w-full bg-[#F2EFEA]">
        <div className="relative h-[70vh] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('src/assets/pst.jpg')",
            }}
          >
  
            <div className="absolute inset-0 bg-[rgba(51,51,51,0.6)]"></div>
          </div>
  
          <div className="absolute top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-center gap-4 w-full px-4 md:px-0">
            <h1 className="text-white font-poppins font-medium text-[32px] md:text-[48px] lg:text-[96px] leading-[150%] text-center">
              With Open Hands
            </h1>
            <p className="text-white font-poppins italic font-normal text-[16px] md:text-[24px] lg:text-[36px] leading-[150%] text-center">
              Giving back to the One who first gave
            </p>
          </div>
        </div>
  
        <div className="flex flex-col items-center gap-8 pt-8 pb-16 bg-white">
          {/* Quote Section */}
          <div className="flex flex-row justify-center items-center gap-10 w-full max-w-[1440px] px-4">
            {/* Left Quote Icon */}
            <div
              className="w-10 h-10 bg-[#7F56D9] flex justify-center items-center"
              style={{ transform: "matrix(-1, 0, 0, 1, 0, 0)" }}
            >
              <span className="text-black font-lateef text-[124px] leading-[100%] hidden md:block">
                “
              </span>
            </div>
            <p className="text-center font-poppins italic text-[18px] md:text-[24px] font-light leading-[150%] text-black max-w-[879px]">
              Bring ye all the tithes into the storehouse, that there may be meat
              in mine house, and prove me now herewith, saith the LORD of hosts,
              if I will not open you the windows of heaven, and pour you out a
              blessing, that there shall not be room enough to receive it. And I
              will rebuke the devourer for your sakes, and he shall not destroy
              the fruits of your ground; neither shall your vine cast her fruit
              before the time in the field, saith the LORD of hosts. And all
              nations shall call you blessed: for ye shall be a delightsome land,
              saith the LORD of hosts.
            </p>
            {/* Right Quote Icon */}
            <div
              className="w-10 h-10 bg-[#7F56D9] flex justify-center items-center"
            >
              <span className="text-black font-lateef text-[124px] leading-[100%] hidden md:block">
                “
              </span>
            </div>
          </div>
          <div className="w-full text-center font-poppins text-[24px] md:text-[32px] font-medium text-[#111111]">
            Malachi 3:10-12
          </div>
        </div>
      </div>
    );
  };
  
  export default GivingWelcome;