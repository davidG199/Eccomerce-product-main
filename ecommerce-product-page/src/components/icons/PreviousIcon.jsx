import React from "react";

const PreviousIcon = ({ className, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`icon-carrousel ${className}`}
      onClick={onClick}
      width="13"
      height="18"
      fill="none"
    >
      <path 
      stroke="#1D2026" 
      stroke-width="3" 
      d="M11 1 3 9l8 8" />
    </svg>
  );
};

export default PreviousIcon;
