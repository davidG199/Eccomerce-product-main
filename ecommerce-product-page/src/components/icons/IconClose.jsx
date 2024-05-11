import React from "react";

const IconClose = ({ fill, className, onClick, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      className={className}
      onClick={onClick}
      viewBox="0 0 14 15"
    >
      <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" />
    </svg>
  );
};

export default IconClose;
