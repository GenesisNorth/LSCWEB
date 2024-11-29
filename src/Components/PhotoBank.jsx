import React, { useState } from "react";

// Importing images
import image1 from "../assets/img.jpg";
import image2 from "../assets/img2.png";
import image3 from "../assets/img3.jpg";
import image4 from "../assets/business.jpeg";
import image5 from "../assets/combo.png";
import image6 from "../assets/coffe.jpeg";

const PhotoBank = () => {
  // State to manage visibility of additional photos
  const [showMore, setShowMore] = useState(false);

  // Array of photo objects
  const photos = [
    { id: 1, src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" },
    { id: 2, src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" },
    { id: 3, src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" },
    { id: 4, src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" },
    { id: 5, src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" },
    { id: 6, src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" },
    { id: 7, src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" },
    { id: 8, src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" },
    { id: 9, src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" },
    { id: 10, src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" },
    { id: 11, src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" },
    { id: 12, src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" },
    { id: 13, src: image1 },
    { id: 14, src: image2 },
    { id: 15, src: image3 },
    { id: 16, src: image4 },
    { id: 17, src: image5 },
    { id: 18, src: image6 },
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
