// import React from 'react'


// import image from "../assets/img.jpg";
// import image1 from "../assets/img1.jpeg";
// import image2 from "../assets/img2.jpeg";
// import image3 from ".../assets/img2.jpeg.jpeg";
// import image4 from "../assets/img4.jpeg";
// import image5 from "../assets/img5.jpeg";
// import { div } from 'framer-motion/client';

// const images = [
//   "/assets/img.jpg", 
//   "/assets/img1.jpeg",
//    "../assets/img2.jpeg",
//    "../assets/img3.jpeg",
//    "../assets/img4.jpeg",
//    "../assets/img5.jpeg"
// ];


// const PhotoBank = () => {
//   return (
//     <div className="columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4">
//         {images.map((image, index) => (
//             <div key={index} className="mb-4 break-inside-avoid"> 
//               <img src={images} className="w-full object-cover rounded-lg" />
//             </div>
//         ))}
//     </div>
//   )
// }

// export default PhotoBank


import React, { useState } from "react";

// Importing images
// import image1 from "../assets/img.jpg";
// import image2 from "../assets/img2.png";
// import image3 from "../assets/img3.jpg";
// import image4 from "../assets/business.jpeg";
// import image5 from "../assets/combo.png";
// import image6 from "../assets/coffe.jpeg";

import image1 from "../assets/clean.jpg";
import image2 from "../assets/team.jpg";
import image3 from "../assets/pst.jpg";
import image4 from "../assets/rally.jpg";
import image5 from "../assets/teeworship.jpeg";
import image6 from "../assets/guys.jpg";
import image7 from "../assets/pfi.jpeg";
import image8 from "../assets/firstlady.jpg";
import image9 from "../assets/pdi.jpg";
import image10 from "../assets/daraa.jpeg";
import image11 from "../assets/levites.jpg";
import image12 from "../assets/cake.jpg";
import image13 from "../assets/dancing.jpg";
import image14 from "../assets/yellow.jpg";
import image15 from "../assets/food.jpg";





const PhotoBank = () => {
  // State to manage visibility of additional photos
  const [showMore, setShowMore] = useState(false);

  // Array of photo objects
  const photos = [
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image4 },
    { id: 5, src: image5 },
    { id: 6, src: image6 },
    { id: 7, src: image7 },
    { id: 8, src: image8},
    { id: 9, src: image9 },
    { id: 10, src: image10 },
    { id: 11, src: image11 },
    { id: 12, src: image12 },
    { id: 13, src: image13 },
    { id: 14, src: image14 },
    { id: 15, src: image15 },
    // { id: 16, src: image16 },
    // { id: 17, src: image17 },
    // { id: 18, src: image18 },
  ];

  // Determine which photos to display
  const visiblePhotos = showMore ? photos : photos.slice(0, 9);

  return (
    <div className="w-full mx-auto mt-16">
      <h2 className="text-4xl mb-12 font-semibold text-center">Our Photo Bank</h2>

    <div className="bg-[#F2EFEA]">
      <div className="grid grid-cols-3 gap-6 px-4 lg:px-16">
        {visiblePhotos.map((photo) => (
          <div key={photo.id} className="bg-cover bg-center rounded-[12px] h-[300px]" style={{ backgroundImage: `url(${photo.src})` }} />
        ))}
      </div>
    </div>
    <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowMore((prev) => !prev)}
          className="px-8 py-3 bg-[#462F77] text-white rounded-[12px] text-[16px] font-medium"
        >
          {showMore ? "Show Less Photos" : "Show More Photos"}
        </button>
      </div>

      
    </div>
  );
};

export default PhotoBank;



