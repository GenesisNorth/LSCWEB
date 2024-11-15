const items = [
  { id: 1, content: "Item 1", bgColor: "bg-red-200 rounded-[50px]" },
  { id: 2, content: "Item 2", bgColor: "bg-orange-200  rounded-[100px]" },
  { id: 3, content: "Item 3", bgColor: "bg-yellow-200 rounded-[50px]" },
  { id: 4, content: "Item 4", bgColor: "bg-green-200 rounded-[100px]" },
];

const OppCarousel = () => {
  const loopingItems = [...items, ...items, ...items];
  const itemTotalHeight = 270 + 10; // 270px height + 10px margin

  return (
    <div className="overflow-hidden desktop:h-[580px] desktop:w-[280px] relative">
      <div className="absolute animate-step-scroll-down flex flex-col top-0">
        {loopingItems.map((item, index) => (
          <div
            key={index}
            className={` ${item.bgColor} h-[270px] w-[280px] mb-[10px] flex items-center justify-center shadow-md text-gray-700 font-medium `}
          >
            {item.content}
          </div>
        ))}
      </div>
      <style>
        {`
            @keyframes stepScrollDown {
              0%, 5% { transform: translateY(-${itemTotalHeight * 4}px); }
              25%, 30% { transform: translateY(-${itemTotalHeight * 3}px); }
              50%, 55% { transform: translateY(-${itemTotalHeight * 2}px); }
              75%, 80% { transform: translateY(-${itemTotalHeight}px); }
              100% { transform: translateY(0); }
            }
            .animate-step-scroll-down {
              animation: stepScrollDown 30s linear infinite;
              will-change: transform;
            }
          `}
      </style>
    </div>
  );
};

export default OppCarousel;
