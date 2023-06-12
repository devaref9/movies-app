"use client";
import Link from "next/link";
import { useState } from "react";

export default function FiltersDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOptionsOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="flex justify-end text-left px-8">
      <div className="relative ps-1">
        <button
          onClick={handleOptionsOpen}
          type="button"
          className="btn btn-primary text-sm inline-flex w-full justify-center gap-x-1.5"
        >
          Options
          <svg
            className="-mr-1 h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "" : "hidden"
          } absolute left-0 top-0 mr-2 -translate-x-full z-10 w-56 origin-top-right rounded-md bg-gray-100 text-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          <Link
            href="/"
            className="block px-4 py-2 text-sm hover:bg-slate-300 transition-all"
          >
            Highest Rating
          </Link>
          <Link
            href="/"
            className="block px-4 py-2 text-sm hover:bg-slate-300 transition-all"
          >
            Latest
          </Link>
          <Link
            href="/"
            className="block px-4 py-2 text-sm hover:bg-slate-300 transition-all"
          >
            History Top 250
          </Link>
        </div>
      </div>
    </div>
  );
}
