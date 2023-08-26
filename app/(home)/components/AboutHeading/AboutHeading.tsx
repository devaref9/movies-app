import React from "react";
type PropsType = {
  title: string;
};

export default function AboutHeading({ title }: PropsType) {
  return (
    <h3 className="relative flex self-start [word-spacing:-4px] text-white font-bold text-[22px] lg:text-[26px] before:content-[''] before:absolute before:bottom-2.5 before:left-0 before:right-0  before:h-2 before:w-full before:bg-primary-dark before:-z-10">
      {title}
    </h3>
  );
}
