import React from "react";

const NextIcon = ({ className, onClick }) => {
  return (
    <svg
      width="13"
      height="18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
        className={`icon-carrousel ${className}`}
      >
      <path
        d="m2 1 8 8-8 8"
        stroke="#000000"
        stroke-width="3"
        viewBox="0 0 14 15"
      />
    </svg>
  );
};

export default NextIcon;
