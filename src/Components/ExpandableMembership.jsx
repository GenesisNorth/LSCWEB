
// import React from 'react';
import PropTypes from 'prop-types';

const ExpandableItem = ({ title, description, isExpanded, onExpand, onImageClick, onClick }) => {
  return (
    <div className={`space-y-[13px] px-[24px] mb-4 ${isExpanded ? 'border-l-4 border-purple-700' : ''}`}>
      <div className="gap-[4px] text-left">
        <h2
          className={`font-semibold text-[24px] cursor-pointer ${isExpanded ? "text-purple-700" : "text-neutral-700"}`}
          onClick={() => {
            onExpand();
            onImageClick(); 
          }}
        >
          {title}
        </h2>

        {isExpanded && (
          <div>
            <p className="text-[16px] text-[#444444] leading-[26px] mb-4">{description}</p>
            <button
              onClick={onClick} 
              className="px-[16px] py-[8px] rounded-[12px] text-[14px] font-medium outline outline-purple-500 bg-purple-500 text-white"
            >
              I Want to be a Member
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


ExpandableItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onExpand: PropTypes.func.isRequired,
  onImageClick: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired, 
};

export default ExpandableItem;