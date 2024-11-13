import { useState, useRef, useEffect } from 'react';
import image from "../assets/img.jpg";
import MembershipForm from './MembershipForm'; 

const Member = () => {
  const [showForm, setShowForm] = useState(false);

  const formRef = useRef(null);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  // Close the form if clicked outside the form
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowForm(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full h-auto gap-[32px]">
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div ref={formRef} className="relative bg-white p-6 rounded-lg shadow-lg w-full sm:w-[80%] md:w-[60%] lg:w-[50%] desktop:w-[40%]">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-5 text-black text-3xl z-60"
            >
              &times;
            </button>
            <MembershipForm />
          </div>
        </div>
      )}

      {/* Main page content */}
      <div className={showForm ? "filter blur-sm opacity-50 transition-all" : ""}>
        <p className="text-[36px] font-semibold text-center">
          Be a part of God&apos;s move by:
        </p>
        <div className="flex justify-between items-center space-y-[46px]">
          <div className="w-[514px] space-y-[30px] h-auto">
            <div className="border-l-4 border-purple-700 space-y-[13px] px-[24px]">
              <div className="gap-[4px] text-left">
                <h2 className="font-semibold text-[24px]">Becoming a Member</h2>
                <p className="text-[16px] text-[#444444] leading-[26px]">
                  We warmly invite you to become a member of our church community.
                  By joining us, you&apos;ll not only find spiritual growth and
                  support but also a vibrant community of caring individuals who share in faith and fellowship.
                </p>
              </div>
              <button
                onClick={handleButtonClick}
                className="px-[16px] py-[12px] rounded-[12px] text-[14px] font-medium outline outline-purple-500"
              >
                Yes, I want to be a member
              </button>
            </div>
            <h2 className="font-semibold text-[24px] text-neutral-700">Joining a Family</h2>
            <h2 className="font-semibold text-[24px] text-neutral-700">Joining the Workforce</h2>
            <h2 className="font-semibold text-[24px] text-neutral-700">Starting Believers&apos; Class</h2>
          </div>
          <div className="w-[640px] h-[441px]">
            <img src={image} className="rounded-lg w-full h-full object-cover" alt="Church Community" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
