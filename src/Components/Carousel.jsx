// import React from 'react';
// import image from "../assets/img.jpg";
// import image1 from "../assets/img1.jpeg";
// import image2 from "../assets/img2.jpeg";
// import image3 from "../assets/img3.jpeg";
// import image4 from "../assets/img4.jpeg";
// import image5 from "../assets/img5.jpeg";
// import { img } from 'framer-motion/client';


// // my own test
// const items = [
//   { id: 1, imageUrl: image, bgColor: "bg-red-200 rounded-[100px]" },
//   { id: 2, imageUrl: image1, bgColor: "bg-orange-200 rounded-[50px]" },
//   { id: 3, imageUrl: image2, bgColor: "bg-yellow-200 rounded-[100px]" },
//   { id: 4, imageUrl: image3, bgColor: "bg-green-200 rounded-[50px]" }
// ];



// const Carousel = () => {
//   const loopingItems = [...items, ...items, ...items];
  
//   // Calculate the total distance for one item (height + margin)
//   const itemTotalHeight = 270 + 10; // 270px height + 10px margin
  
//   return (
//     <div className="overflow-hidden desktop:h-[580px] w-[280px] relative">
//       <div className="absolute animate-step-scroll flex flex-col">
//         {loopingItems.map((item, index) => (
//           <div
//             key={index}
//             className={`
//               ${item.bgColor}
//               h-[270px] w-[280px]
//               mb-[10px]
//               flex items-center justify-center
//             `}
//           >
//             {/* {item.content} */}
//             {/* <img
//               src={item.imageUrl}
//               alt={`Carousel Item ${item.id}`}
//               className="h-full w-full
//               mb-[10px] object-contain rounded-lg"
//             /> */}
//           </div>
//         ))}
//       </div>
      
//       <style>{`
//         @keyframes stepScroll {
//           0%, 5% {
//             transform: translateY(0);
//           }
//           25%, 30% {
//             transform: translateY(-${itemTotalHeight}px);
//           }
//           50%, 55% {
//             transform: translateY(-${itemTotalHeight * 2}px);
//           }
//           75%, 80% {
//             transform: translateY(-${itemTotalHeight * 3}px);
//           }
//           100% {
//             transform: translateY(-${itemTotalHeight * 4}px);
//           }
//         }
//         .animate-step-scroll {
//           animation: stepScroll 30s linear infinite;
//           will-change: transform;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Carousel;





import React from "react";

import image from "../assets/pdi.jpg";
import image2 from "../assets/teeworship.jpeg";
import image3 from "../assets/pst.jpg";
import image4 from "../assets/team.jpg";


const items = [
  { id: 1, content: image, bgColor: "rounded-[100px]" },
  { id: 2, content: image2, bgColor: "rounded-[50px]" },
  { id: 3, content: image3, bgColor: "rounded-[100px]" },
  { id: 4, content: image4, bgColor: "rounded-[50px]" },
];

const Carousel = () => {
  const loopingItems = [...items, ...items, ...items];
  const itemTotalHeight = 270 + 10; // 270px height + 10px margin

  return (
    <div className="overflow-hidden desktop:h-[580px] w-[280px] relative">
      <div className="absolute animate-step-scroll flex flex-col">
        {loopingItems.map((item, index) => (
          <div
            key={index}
            className={`h-[270px] w-[280px] mb-[10px] shadow-md overflow-hidden ${item.bgColor}`}
          >
            {/* Render Image */}
            <img
              src={item.content}
              alt={`Carousel Item ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes stepScroll {
          0%, 5% {
            transform: translateY(0);
          }
          25%, 30% {
            transform: translateY(-${itemTotalHeight}px);
          }
          50%, 55% {
            transform: translateY(-${itemTotalHeight * 2}px);
          }
          75%, 80% {
            transform: translateY(-${itemTotalHeight * 3}px);
          }
          100% {
            transform: translateY(-${itemTotalHeight * 4}px);
          }
        }
        .animate-step-scroll {
          animation: stepScroll 30s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default Carousel;



