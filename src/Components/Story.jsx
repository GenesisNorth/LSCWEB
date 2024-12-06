// import React from 'react'
// import image from "../assets/img.jpg";
// import image1 from "../assets/img1.jpeg";
// import image2 from "../assets/img2.jpeg";
// import image3 from "../assets/img3.jpeg";
// import image4 from "../assets/img4.jpeg";
// import image5 from "../assets/img5.jpeg";
// import image6 from "../assets/img6.jpeg";
// import image7 from "../assets/img7.jpeg";
// import image8 from "../assets/img8.jpeg";
// import image9 from "../assets/img9.jpeg";




// const Story = () => {
//   return (
//     <div className="space-y-[32px] px-4">
//       <p className="text-3xl md:text-[40px] font-semibold text-center">
//         MY LSC STORY
//       </p>

//       <div className="flex flex-col sm:flex-row justify-between w-full min-h-[370px] space-y-6 sm:space-y-0">
//         <div className="flex flex-col sm:flex-row w-full sm:w-[726px] min-h-[370px] rounded-[16px] bg-[#EEE7F6] p-[16px] space-y-4 sm:space-y-0 sm:space-x-4">
//           <div className="w-[150px] h-[150px] sm:w-[199px] sm:h-[338px] rounded-full sm:rounded-[16px] overflow-hidden order-2 sm:order-1 mt-6 sm:mt-0">
//             <img
//               src={image6}
//               className="w-full h-full object-cover"
//               alt="Nil"
//             />
//           </div>

//           <div className="flex flex-col justify-between w-full sm:w-[469px] space-y-4 order-1 sm:order-2">
//             <h2 className="text-[16px] sm:text-[18px] text-[#333333] leading-[28px] sm:leading-[32px] text-left">
//               “As I reflect on my years in this church, I am filled with
//               gratitude for the community and faith that have shaped my life. I
//               came here as a young seeker, lost and searching for purpose, and
//               through the warmth of this congregation, I found not only my faith
//               but a family.&rdquo;
//             </h2>
//             <div className="space-y-[5px]">
//               <h2 className="font-medium text-base sm:text-lg">Abidemi Sharon</h2>
//               <h2 className="text-[12px] sm:text-[14px]">A choirister</h2>
//             </div>
//           </div>
//         </div>

//         {/* Extra Images Section (Hidden on Small Screens) */}
//         <div className="hidden sm:block w-[150px] h-[150px] sm:w-[150px] sm:h-[370px] rounded-[16px] overflow-hidden">
//           <img
//             src={image8}
//             className="w-full h-full object-cover"
//             alt="Nil"
//           />
//         </div>
//         <div className="hidden sm:block w-[150px] h-[150px] sm:w-[150px] sm:h-[370px] rounded-[16px] overflow-hidden">
//           <img
//             src={image9}
//             className="w-full h-full object-cover"
//             alt="Nil"
//           />
//         </div>
//         <div className="hidden sm:block w-[150px] h-[150px] sm:w-[150px] sm:h-[370px] rounded-[16px] overflow-hidden">
//           <img
//             src={image7}
//             className="w-full h-full object-cover"
//             alt="Nil"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Story;


import React from 'react'
import image6 from "../assets/img6.jpeg";
import image7 from "../assets/img7.jpeg";
import image8 from "../assets/img8.jpeg";
import image9 from "../assets/img9.jpeg";

const Story = () => {
  return (
    <div className="space-y-[32px] px-4">
      <p className="text-3xl md:text-[40px] font-semibold text-center">
        MY LSC STORY
      </p>

      <div className="flex flex-col sm:flex-row justify-between w-full min-h-[370px] space-y-6 sm:space-y-0">
        <div className="flex flex-col sm:flex-row w-full sm:w-[726px] min-h-[370px] rounded-[16px] bg-[#EEE7F6] p-[16px] space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="w-[150px] h-[150px] sm:w-[199px] sm:h-[338px] rounded-full sm:rounded-[16px] overflow-hidden order-2 sm:order-1 mt-6 sm:mt-0">
            <img
              src={image6}
              className="w-full h-full object-cover"
              alt="Nil"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col justify-between w-full sm:w-[469px] space-y-4 order-1 sm:order-2">
            <h2 className="text-[16px] sm:text-[18px] text-[#333333] leading-[28px] sm:leading-[32px] text-left">
              “As I reflect on my years in this church, I am filled with
              gratitude for the community and faith that have shaped my life. I
              came here as a young seeker, lost and searching for purpose, and
              through the warmth of this congregation, I found not only my faith
              but a family.&rdquo;
            </h2>
            <div className="space-y-[5px]">
              <h2 className="font-medium text-base sm:text-lg">Moyin</h2>
              <h2 className="text-[12px] sm:text-[14px]">A choirister</h2>
            </div>
          </div>
        </div>

        {/* Extra Images Section (Hidden on Small Screens) */}
        <div className="hidden sm:block w-[150px] h-[150px] sm:w-[150px] sm:h-[370px] rounded-[16px] overflow-hidden">
          <img
            src={image8}
            className="w-full h-full object-cover"
            alt="Nil"
            loading="lazy"
          />
        </div>
        <div className="hidden sm:block w-[150px] h-[150px] sm:w-[150px] sm:h-[370px] rounded-[16px] overflow-hidden">
          <img
            src={image9}
            className="w-full h-full object-cover"
            alt="Nil"
            loading="lazy"
          />
        </div>
        <div className="hidden sm:block w-[150px] h-[150px] sm:w-[150px] sm:h-[370px] rounded-[16px] overflow-hidden">
          <img
            src={image7}
            className="w-full h-full object-cover"
            alt="Nil"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Story;