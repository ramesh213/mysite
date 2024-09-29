import React from "react";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

const ProgressLine = ({ percentage, IconComponent }) => {
  return (
    <div className="w-[80%] flex items-center justify-center gap-4 max-md:w-[90%] ">
      {/* Icon and Percentage Display */}
      <div className="flex justify-between items-center ">
        {/* Use IconComponent prop to dynamically render the icon */}
        <div className="text-2xl">{IconComponent}</div>
      </div>

      {/* Progress Bar */}
      <div className="w-[80%] bg-gray-300 h-2 rounded-full">
        <div
          className={`bg-blue-500 h-2 rounded-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="text-sm font-medium">{percentage}%</span>
    </div>
  );
};

export default ProgressLine;
