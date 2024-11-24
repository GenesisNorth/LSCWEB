import React from 'react'


// import image from "../assets/img.jpg";
// import image1 from "../assets/img1.jpeg";
// import image2 from "../assets/img2.jpeg";
// import image3 from ".../assets/img2.jpeg.jpeg";
// import image4 from "../assets/img4.jpeg";
// import image5 from "../assets/img5.jpeg";
// import { div } from 'framer-motion/client';

const images = [
  "/assets/img.jpg", 
  "/assets/img1.jpeg",
   "../assets/img2.jpeg",
   "../assets/img3.jpeg",
   "../assets/img4.jpeg",
   "../assets/img5.jpeg"
];


const PhotoBank = () => {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4">
        {images.map((image, index) => (
            <div key={index} className="mb-4 break-inside-avoid"> 
              <img src={images} className="w-full object-cover rounded-lg" />
            </div>
        ))}
    </div>
  )
}

export default PhotoBank






