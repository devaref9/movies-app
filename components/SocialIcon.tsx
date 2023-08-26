import React from "react";
import { IconType } from "react-icons/lib";

type PropsType = {
  href: string,
  Icon: IconType
}

export default function SocialIcon({ href, Icon }:PropsType) {
  return (
    <div className="group p-[6px] border-[3px] border-gray-500 border-opacity-30 rounded-full cursor-pointer transition hover:border-primary hover:border-opacity-30">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        className="bg-[#272727] flex items-center justify-center rounded-full w-10 h-10 group-hover:bg-primary transition"
      >
        <Icon className="text-gray-400 text-2xl group-hover:text-black transition" />
      </a>
    </div>
  );
}
