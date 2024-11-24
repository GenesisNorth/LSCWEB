// import React from 'react'

// import WeeklyCard from "../Card/WeeklyCard";

// import image from "../assets/img.jpg";
// import image1 from "../assets/img1.jpeg";
// import image2 from "../assets/img2.jpeg";
// import image3 from "../assets/img3.jpeg";
// import image4 from "../assets/img4.jpeg";
// import image5 from "../assets/img5.jpeg";


// const WeeklyService = () => {
//   return (
//     <div className="w-[1204px] h-[1224px] space-y-[32px]">
//       <h2 className="w-full h-[54px] text-center font-semibold text-[36px]">
//         A peek into what a conventional week is like
//       </h2>
//       <div className="w-full h-[560px] space-y-[18px]">
//         <div className="flex justify-between space-x-[24px] ">
//           <WeeklyCard
//             img={image1}
//             action="Seek ye first"
//             start="6:00"
//             finish="6:30"
//             meridian="a.m"
//             first="Join us for our early morning prayers that happens every first day"
//             second="of the month and every monday of the week, it is a place where we"
//             third="seek God&apos;s face as a church and commit the week into his hands."
//           />
//           <WeeklyCard
//             img={image2}
//             action="Wednesday - Digging deep"
//             start="6:00"
//             finish="7:30"
//             meridian="p.m"
//             first="Join us very Wednesday where we look in depthly at the word of"
//             second="God, discuss and digest it, raise question pertaining to our"
//             third="Christian faith and most importantly, learn to be better Christians."
//           />
//         </div>
//         <div className="flex justify-between">
//           <WeeklyCard
//             img={image3}
//             action="Saturday - Prayer Meetings"
//             start="5:00"
//             finish="6:00"
//             meridian="p.m"
              
//             first="What&apos;s a life without prayers? We rekindle our prayer fire by"
//             second="praying with other believers, hence, do not miss out on"
//             third="our Saturday prayer meetings."
//           />
//           <WeeklyCard
//             img={image4}
//             action="Sunday Service"
//             start="8:00"
//             finish="11:00"
//             meridian="a.m"
//             first="David said &apos;I was glad when i I was asked to go to the house of the"
//             second="lord&apos;, that's the story of every LSC Abuja member, and we want you"
//             third="to be a part. Join us next Sunday!"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WeeklyService;


import React from "react";

import WeeklyCard from "../Card/WeeklyCard";
import image from "../assets/img1.jpeg";
import image1 from "../assets/img2.jpeg";
import image2 from "../assets/img3.jpeg";
import image3 from "../assets/img4.jpeg";



const WeeklyService = () => {
  return (
    <div className="w-full max-w-[1204px] space-y-[32px] px-4">
      <h2 className="w-full text-center font-semibold text-[28px] sm:text-[36px]">
        A peek into what a conventional week is like
      </h2>
      <div className="space-y-8 sm:space-y-[18px]">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:space-x-[24px] space-y-6 sm:space-y-0">
          <WeeklyCard
            img={image}
            action="Seek ye first"
            start="6:00"
            finish="6:30"
            meridian="a.m"
            first="Join us for our early morning prayers that happens every first day"
            second="of the month and every Monday of the week, it is a place where we"
            third="seek God&apos;s face as a church and commit the week into his hands."
          />
          <WeeklyCard
            img={image1}
            action="Wednesday - Digging deep"
            start="6:00"
            finish="7:30"
            meridian="p.m"
            first="Join us every Wednesday where we look in-depth at the word of"
            second="God, discuss and digest it, raise questions pertaining to our"
            third="Christian faith and most importantly, learn to be better Christians."
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:space-x-[24px] space-y-6 sm:space-y-0">
          <WeeklyCard
            img={image2}
            action="Saturday - Prayer Meetings"
            start="5:00"
            finish="6:00"
            meridian="p.m"
            first="What&apos;s a life without prayers? We rekindle our prayer fire by"
            second="praying with other believers, hence, do not miss out on"
            third="our Saturday prayer meetings."
          />
          <WeeklyCard
            img={image3}
            action="Sunday Service"
            start="8:00"
            finish="11:00"
            meridian="a.m"
            first="David said &apos;I was glad when I was asked to go to the house of the"
            second="lord&apos;, that's the story of every LSC Abuja member, and we want you"
            third="to be a part. Join us next Sunday!"
          />
        </div>
      </div>
    </div>
  );
};

export default WeeklyService;