"use client";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";

interface WorkButtonProps {
  title: string;
  position?: "left" | "right";
  onClick?: () => void;
  /**
   * Extra tailwind classes applied for hover effects (example: 'group-hover:text-blue-400')
   * This keeps the component flexible without forcing rewrite.
   */
  hoverClassName?: string;
}

const WorkButton: React.FC<WorkButtonProps> = ({
  title,
  position = "right",
  onClick,
  hoverClassName = "group-hover:text-black",
}) => {
  return (
    <button
      onClick={onClick}
      className={
        "font-sans relative flex items-center gap-2 mx-auto mt-4 shadow-xl text-lg text-gray-50 bg-[#0A0D2D] backdrop-blur-md lg:font-semibold " +
        "border-gray-50 before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:rounded-full before:bg-white before:transition-all " +
        "before:duration-700 hover:before:w-full before:-z-10 z-10 px-6 py-3 hover:text-black overflow-hidden border-2 rounded-full group " +
        hoverClassName
      }
    >
      {position === "left" && (
        <FaLocationArrow className="w-5 h-5 rotate-45 transition-transform duration-300 group-hover:rotate-90" />
      )}
      {title}
      {position === "right" && (
        <FaLocationArrow className="w-5 h-5 -rotate-25 transition-transform duration-300 group-hover:rotate-45" />
      )}
    </button>
  );
};

export default WorkButton;
