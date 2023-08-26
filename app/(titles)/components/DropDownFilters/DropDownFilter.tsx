"use client";

import useOutsideAlerter from "@/hooks/useOutsideAlerter";
import { FilterOptionsType } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type PropsType = {
  label: string;
  options: FilterOptionsType;
  param: string;
};

const DropDownFilter = ({ label, options, param }: PropsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [filterValue, setFilterValue] = useState<number>(-1);
  const [filterTitle, setFilterTitle] = useState<string>("همه");
  const filterRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const params = useSearchParams();
  const router = useRouter();

  const func = () => {
    isOpen && setIsOpen(false);
  };
  useOutsideAlerter(filterRef, func);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const getNewQuery = () => {
    const current = new URLSearchParams(Array.from(params.entries()));
    current.delete(param.toString());
    current.delete("page");
    const query = current.toString();
    return query;
  };

  return (
    <div
      className="w-[150px] md:[w-180px] lg:w-[230px] relative"
      ref={filterRef}
    >
      <label
        className={`transition ${
          isOpen ? "text-white" : "text-gray-500"
        } absolute top-0 right-[6px] bg-dark px-2 -translate-y-1/2 z-10 `}
      >
        {label}
      </label>
      <button
        onClick={handleToggle}
        className={`transition w-full flex justify-between items-center py-[14px] px-[10px] text-right rounded-md border  ${
          isOpen ? "border-primary" : "border-gray-400"
        } `}
      >
        <span>{filterTitle}</span>
        <FaChevronDown className={`transition ${isOpen ? "" : "rotate-180"}`} />
      </button>
      <ul
        className={`transition ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none scale-90"
        } absolute -right-0 top-[calc(100%+10px)] left-0 z-20 rounded-md max-h-40 overflow-y-auto`}
      >
        <li
          onClick={(e) => {
            setFilterValue(-1);
            const targetElement = e.target as HTMLElement;
            setFilterTitle(targetElement.innerText);
            setIsOpen(false);
            const query = getNewQuery();
            router.push(`${pathname}?${query}&page=1`);
          }}
          className={`cursor-pointer ${
            filterValue === -1
              ? "text-primary bg-[#272727]"
              : "text-gray-500 bg-[#111618] "
          } px-[10px] py-2 text-[15px] transition hover:text-primary hover:bg-[#272727]`}
        >
          همه
        </li>
        {options.map((option, index: number) => {
          return (
            <li
              onClick={(e) => {
                setFilterValue(index);
                const targetElement = e.target as HTMLElement;
                setFilterTitle(targetElement.innerText);
                setIsOpen(false);
                const query = getNewQuery();
                router.push(
                  `${pathname}?${query}&${param}=${option.paramValue}&page=1`
                );
              }}
              key={index}
              className={`cursor-pointer
              ${
                filterValue === index
                  ? "text-primary bg-[#272727]"
                  : "text-gray-500 bg-[#111618]"
              } px-[10px] py-2 text-[15px]transition hover:text-primary hover:bg-[#272727]`}
            >
              {option.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropDownFilter;
