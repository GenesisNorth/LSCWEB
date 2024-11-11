import { useState } from "react";
import { FiArrowDown, FiArrowDownRight } from "react-icons/fi";

const FrequentlyAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is LSC Abuja also RCCG",
      answer: "You can return any item within 30 days for a full refund.",
    },
    {
      question: "What time does service start",
      answer:
        "You can track your order using the tracking link provided in your confirmation email.",
    },
    {
      question: "Is there midweek service",
      answer: "We accept credit cards, PayPal, and bank transfers.",
    },
    {
      question: "How do I get there from Police sign board",
      answer: "We accept credit cards, PayPal, and bank transfers.",
    },
    {
      question: "Is there a bus that can come pick me up",
      answer: "We accept credit cards, PayPal, and bank transfers.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[1204px] mx-auto space-y-[32px]">
      <h2 className="text-[40px] font-semibold text-center">
        Frequently Asked Questions
      </h2>
      <div className="w-[896px] space-y-[20px] mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-[18px] px-[39px] py-[24px]"
          >
            <button
              className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-lg">{faq.question}</span>
              <span>
                {openIndex === index ? <FiArrowDownRight /> : <FiArrowDown />}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-700">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAQ;
