import React from "react";
import { FiClock } from "react-icons/fi";
import PropTypes from "prop-types";

const WeeklyCard = ({
  imgSrc,
  imgAlt,
  action,
  start,
  finish,
  meridian,
  first,
  second,
  third,
}) => {
  return (
    <div className="w-full max-w-[588px] min-h-[500px] sm:h-[560px] relative group parent-container rounded-[12px] overflow-hidden">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={imgSrc}
        alt={imgAlt}
        loading="lazy"
      />
      <div className="absolute bottom-0 left-0 w-full px-4 py-6 space-y-4 bg-[rgba(0, 0, 0, 0.3)] backdrop-blur-md text-white h-auto sm:h-[185px] overflow-y-auto">
        <div className="flex justify-between">
          <p className="font-semibold text-[20px]">{action}</p>
          <div className="flex justify-center gap-[5px] p-[8px] rounded-[12px] border-white border w-[148px] h-[37px]">
            <FiClock className="w-[20px] h-[20px]" />
            <p className="text-[14px] font-medium">
              {start} - {finish} {meridian}
            </p>
          </div>
        </div>
        <div className="font-medium text-[16px] text-left">
          <p className="block sm:hidden">{`${first} ${second} ${third}`}</p>
          <div className="hidden sm:block">
            <p>{first}</p>
            <p>{second}</p>
            <p>{third}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

WeeklyCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  finish: PropTypes.string.isRequired,
  meridian: PropTypes.string.isRequired,
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
  third: PropTypes.string.isRequired,
};

export default WeeklyCard;
