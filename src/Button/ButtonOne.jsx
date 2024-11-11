import PropTypes from "prop-types";

const ButtonOne = ({ children, className }) => {
  return (
    <button
      className={`px-[24px] h-[59px] py-[16px] bg-purple-500 hover:bg-purple-700 gap-[10px]  text-[18px] ${className} flex justify-between items-center rounded-[12px] font-medium text-white`}
    >
      {children}
    </button>
  );
};

export default ButtonOne;

ButtonOne.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  className: PropTypes.string,
};
