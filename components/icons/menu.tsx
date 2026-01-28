import React from "react";

const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props} 
    >
      <g clipPath="url(#clip0_51_742)">
        <path
          d="M3 15H21V13H3V15ZM3 19H21V17H3V19ZM3 11H21V9H3V11ZM3 5V7H21V5H3Z"
          fill="#323232"
        />
      </g>
      <defs>
        <clipPath id="clip0_51_742">
          <rect width={24} height={24} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MenuIcon;
