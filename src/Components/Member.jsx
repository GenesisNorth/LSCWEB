// import { useState, useRef, useEffect } from 'react';
// import image from "../assets/img.jpg";
// import image5 from "../assets/img5.jpeg";
// import MembershipForm from './MembershipForm'; 

// const Member = () => {
//   const [showForm, setShowForm] = useState(false);

//   const formRef = useRef(null);

//   const handleButtonClick = () => {
//     setShowForm(true);
//   };

//   // Close the form if clicked outside the form
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (formRef.current && !formRef.current.contains(event.target)) {
//         setShowForm(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div className="relative w-full h-auto gap-[32px]">
//       {showForm && (
//         <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
//           <div ref={formRef} className="relative bg-white p-6 rounded-lg shadow-lg w-full sm:w-[80%] md:w-[60%] lg:w-[50%] desktop:w-[40%]">
//             <button
//               onClick={() => setShowForm(false)}
//               className="absolute top-2 right-5 text-black text-3xl z-60"
//             >
//               &times;
//             </button>
//             <MembershipForm />
//           </div>
//         </div>
//       )}

//       {/* Main page content */}
//       <div className={showForm ? "filter blur-sm opacity-50 transition-all" : ""}>
//         <p className="text-[36px] font-semibold text-center">
//           Be a part of God&apos;s move by:
//         </p>
//         <div className="flex justify-between items-center space-y-[46px]">
//           <div className="w-[514px] space-y-[30px] h-auto">
//             <div className="border-l-4 border-purple-700 space-y-[13px] px-[24px]">
//               <div className="gap-[4px] text-left">
//                 <h2 className="font-semibold text-[24px]">Becoming a Member</h2>
//                 <p className="text-[16px] text-[#444444] leading-[26px]">
//                 We warmly invite you to become a member of our church
//                 <br /> community. By joining us, you&apos;ll not only find
//                 spiritual
//                 <br /> growth and support but also a vibrant community of
//                 <br /> caring individuals who share in faith and fellowship.
//               </p>
//               </div>
//               <button
//                 onClick={handleButtonClick}
//                 className="px-[16px] py-[12px] rounded-[12px] text-[14px] font-medium outline outline-purple-500"
//               >
//                 Yes, I want to be a member
//               </button>
//             </div>

//             <div className="border-l-4 border-purple-700 space-y-[13px] px-[24px]">
//               <div className="gap-[4px] text-left">
//                 <h2 className="font-semibold text-[24px]">Test a Member</h2>
//                 <p className="text-[16px] text-[#444444] leading-[26px]">
//                 We warmly invite you to become a member of our church
//                 <br /> community. By joining us, you&apos;ll not only find
//                 spiritual
//               </p>
//               </div>
//               <button
//                 onClick={handleButtonClick}
//                 className="px-[16px] py-[12px] rounded-[12px] text-[14px] font-medium outline outline-purple-500"
//               >
//                 Yes, I want to be a member
//               </button>
//             </div>
//             <h2 className="font-semibold text-[24px] text-neutral-700">Joining a Family</h2>
//             <h2 className="font-semibold text-[24px] text-neutral-700">Joining the Workforce</h2>
//             <h2 className="font-semibold text-[24px] text-neutral-700">Starting Believers&apos; Class</h2>
//           </div>
//           <div className="w-[640px] h-[441px]">
//             <img src={image5} className="rounded-lg w-full h-full object-cover" alt="Church Community" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Member;





// import { useState, useRef, useEffect } from "react";
// import image5 from "../assets/img5.jpeg";
// import MembershipForm from "./MembershipForm";

// const Member = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [expandedSections, setExpandedSections] = useState({});
//   const formRef = useRef(null);

//   const handleToggleSection = (section) => {
//     setExpandedSections((prevState) => ({
//       ...prevState,
//       [section]: !prevState[section],
//     }));
//   };

//   const handleButtonClick = () => {
//     setShowForm(true);
//   };

//   // Close the form if clicked outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (formRef.current && !formRef.current.contains(event.target)) {
//         setShowForm(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div className="relative w-full h-auto gap-[32px]">
//       {showForm && (
//         <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
//           <div
//             ref={formRef}
//             className="relative bg-white p-6 rounded-lg shadow-lg w-full sm:w-[80%] md:w-[60%] lg:w-[50%] desktop:w-[40%]"
//           >
//             <button
//               onClick={() => setShowForm(false)}
//               className="absolute top-2 right-5 text-black text-3xl z-60"
//             >
//               &times;
//             </button>
//             <MembershipForm />
//           </div>
//         </div>
//       )}

//       <div className={showForm ? "filter blur-sm opacity-50 transition-all" : ""}>
//         <p className="text-[36px] font-semibold text-center">
//           Be a part of God&apos;s move by:
//         </p>
//         <div className="flex justify-between items-center space-y-[46px]">
//           <div className="w-[514px] space-y-[30px] h-auto">
//             {/* Becoming a Member */}
//             <div className="border-l-4 border-purple-700 space-y-[13px] px-[24px]">
//               <h2
//                 className="font-semibold text-[24px] cursor-pointer"
//                 onClick={() => handleToggleSection("becomingMember")}
//               >
//                 Becoming a Member
//               </h2>
//               {expandedSections.becomingMember && (
//                 <>
//                   <p className="text-[16px] text-[#444444] leading-[26px]">
//                     We warmly invite you to become a member of our church
//                     <br /> community. By joining us, you&apos;ll not only find
//                     spiritual growth and support but also a vibrant community of
//                     <br /> caring individuals who share in faith and fellowship.
//                   </p>
//                   <button
//                     onClick={handleButtonClick}
//                     className="px-[16px] py-[12px] rounded-[12px] text-[14px] font-medium outline outline-purple-500"
//                   >
//                     Yes, I want to be a member
//                   </button>
//                 </>
//               )}
//             </div>

           

//             {/* Joining a Family */}
//             <div className="border-l-4 border-purple-700 space-y-[13px] px-[24px]">
//               <h2
//                 className="font-semibold text-[24px] cursor-pointer"
//                 onClick={() => handleToggleSection("joinFamily")}
//               >
//                 Joining a Family
//               </h2>
//               {expandedSections.joinFamily && (
//                 <>
//                   <p className="text-[16px] text-[#444444] leading-[26px]">
//                     We warmly invite you to become a member of our church
//                     <br /> community. By joining us, you&apos;ll not only find
//                     spiritual
//                   </p>
//                   <button
//                     onClick={handleButtonClick}
//                     className="px-[16px] py-[12px] rounded-[12px] text-[14px] font-medium outline outline-purple-500"
//                   >
//                     Yes, I want to join a Family
//                   </button>
//                 </>
//               )}
//             </div>

//              {/* Joining the Workforce */}
//              <div className="border-l-4 border-purple-700 space-y-[13px] px-[24px]">
//               <h2
//                 className="font-semibold text-[24px] cursor-pointer"
//                 onClick={() => handleToggleSection("joinWorkforce")}
//               >
//                 Joining the Workforce
//               </h2>
//               {expandedSections.joinWorkforce && (
//                 <>
//                   <p className="text-[16px] text-[#444444] leading-[26px]">
//                     We warmly invite you to become a member of our church
//                     <br /> community. By joining us, you&apos;ll not only find
//                     spiritual
//                   </p>
//                   <button
//                     onClick={handleButtonClick}
//                     className="px-[16px] py-[12px] rounded-[12px] text-[14px] font-medium outline outline-purple-500"
//                   >
//                     Yes, I want to be a worker
//                   </button>
//                 </>
//               )}
//             </div>

//               {/* Believers Class */}
//               <div className="border-l-4 border-purple-700 space-y-[13px] px-[24px]">
//               <h2
//                 className="font-semibold text-[24px] cursor-pointer"
//                 onClick={() => handleToggleSection("beginBelieversClass")}
//               >
//                 Begin Believers' Class
//               </h2>
//               {expandedSections.beginBelieversClass && (
//                 <>
//                   <p className="text-[16px] text-[#444444] leading-[26px]">
//                     We warmly invite you to become a member of our church
//                     <br /> community. By joining us, you&apos;ll not only find
//                     spiritual
//                   </p>
//                   <button
//                     onClick={handleButtonClick}
//                     className="px-[16px] py-[12px] rounded-[12px] text-[14px] font-medium outline outline-purple-500"
//                   >
//                     Yes, I want to begin a class
//                   </button>
//                 </>
//               )}
//             </div>

//             {/* Additional Sections */}
//             {/* {["Joining a Family","gen gen" ,"Joining the Workforce", "Starting Believers' Class"].map(
//               (title, index) => (
//                 <h2
//                   key={index}
//                   className="font-semibold text-[24px] text-neutral-700 cursor-pointer"
//                   onClick={() => handleToggleSection(title)}
//                 >
//                   {title}
//                 </h2>
//               )
//             )} */}
//           </div>

//           <div className="w-[640px] h-[441px]">
//             <img
//               src={image5}
//               className="rounded-lg w-full h-full object-cover"
//               alt="Church Community"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Member;


import { useState, useRef, useEffect } from "react";
import image1 from "../assets/img5.jpeg";
import image2 from "../assets/blaniyi.jpeg"; 
import image3 from "../assets/img11.jpeg"; 
import image4 from "../assets/img12.jpeg"; 


import ExpandableItem from "./ExpandableMembership";
import MembershipForm from "./MembershipForm";

const Member = () => {
  const [showForm, setShowForm] = useState(false);
  const [formTitle, setFormTitle] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const formRef = useRef(null);

  const handleOpenForm = (title) => {
    setFormTitle(title);
    setShowForm(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowForm(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    // Close the form with Escape key
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowForm(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const items = [
    {
      title: "Becoming a Member",
      description:
        "We warmly invite you to become a member of our church community. By joining us, you’ll not only find spiritual growth and support but also a vibrant community of caring individuals who share in faith and fellowship.",
    },
    {
      title: "Joining a Family",
      description:
        "Find your spiritual family within the church community and grow in faith together.",
    },
    {
      title: "Joining the Workforce",
      description:
        "Become an active contributor to the church's activities and discover your purpose.",
    },
    {
      title: "Starting Believers' Class",
      description:
        "Begin your journey to understanding foundational Christian principles.",
    },
  ];


  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index); 
  };

  const images = [image1, image2, image3, image4]; 

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative w-full h-auto gap-[32px]">
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div
            ref={formRef}
            className="relative bg-white p-6 rounded-lg shadow-lg w-full sm:w-[80%] md:w-[60%] lg:w-[50%] desktop:w-[40%]"
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-5 text-black text-3xl z-60"
            >
              &times;
            </button>
            <MembershipForm title={formTitle} />
          </div>
        </div>
      )}

      {/* Main page content */}
      <div className={showForm ? "filter blur-sm opacity-50 transition-all" : ""}>
        <p className="text-[36px] font-semibold text-center">
          Be a part of God&apos;s move by:
        </p>
        <div className="flex flex-wrap justify-between items-center space-y-[46px]">
          <div className="w-full sm:w-[514px] space-y-[30px] h-auto">
            {items.map((item, index) => (
              <div key={index}>
                <ExpandableItem
                  title={item.title}
                  description={item.description}
                  isExpanded={expandedIndex === index} 
                  onExpand={() => handleExpand(index)} 
                  onImageClick={() => {
                    handleImageChange(index); 
                  }} 
                  onClick={() => handleOpenForm(item.title)} 
                />
                
                {expandedIndex === index && (
                  <div className="w-full sm:w-[320px] mx-auto mt-4 lg:hidden">
                    <img
                      src={images[index]} 
                      className="rounded-lg w-full h-auto object-cover"
                      alt="Item Display"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="w-full sm:w-[640px] h-[441px] hidden lg:block">
            <img
              src={images[currentImageIndex]}
              className="rounded-lg w-full h-full object-cover"
              alt="Main Display"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;