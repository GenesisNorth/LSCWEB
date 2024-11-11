import React from 'react';

const items = [
  { id: 1, content: "Item 1", bgColor: "bg-red-200 rounded-[100px]" },
  { id: 2, content: "Item 2", bgColor: "bg-orange-200 rounded-[50px]" },
  { id: 3, content: "Item 3", bgColor: "bg-yellow-200 rounded-[100px]" },
  { id: 4, content: "Item 4", bgColor: "bg-green-200 rounded-[50px]" }
];

const Carousel = () => {
  const loopingItems = [...items, ...items, ...items];
  
  // Calculate the total distance for one item (height + margin)
  const itemTotalHeight = 270 + 10; // 270px height + 10px margin
  
  return (
    <div className="overflow-hidden desktop:h-[580px] w-[280px] relative">
      <div className="absolute animate-step-scroll flex flex-col">
        {loopingItems.map((item, index) => (
          <div
            key={index}
            className={`
              ${item.bgColor}
              h-[270px] w-[280px]
              mb-[10px]
              flex items-center justify-center
            `}
          >
            {item.content}
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