"use client";

import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";

type PropsType = {
  title: string;
  text: string;
};

const Accordion = ({ title, text }: PropsType) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleToggleActive = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div
      className={`w-full rounded-md duration-500 group ${
        isActive ? "is-active" : ""
      }`}
    >
      <div
        className="flex gap-1 py-3 px-3 items-center justify-between cursor-pointer border border-gray-500 border-opacity-30 rounded-md"
        onClick={handleToggleActive}
      >
        <h3 className="text-[15px] font-medium">{title}</h3>
        <FaChevronLeft className="relative duration-500 group-[.is-active]:-rotate-[90deg]" />
      </div>
      <div className="my-1 rounded-md transition-all overflow-hidden bg-[#333] duration-500 max-h-0  group-[.is-active]:max-h-[300px] group-[.is-active]:my-2">
        <p className="py-2 px-3 text-sm leading-7">{text}</p>
      </div>
    </div>
  );
};
export default Accordion;
