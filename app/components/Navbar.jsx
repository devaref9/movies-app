"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { BsX } from "react-icons/bs";
import MenuItem from "./MenuItem";
import Image from "next/image";
import Logo from "../../public/assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <nav className="w-full flex flex-col">
      <div className="relative bg-orange-300 px-4 py-3 sm:px-8 sm:py-4 shadow-lg">
        <div className="relative z-30 flex justify-between items-center">
          <Link href="/">
            <div className="relative h-8 w-24">
              <Image fill src={Logo} alt="Zard Film" />
            </div>
          </Link>
          <button
            className="text-slate-800 text-3xl sm:hidden hover:text-gray-100 transition-all"
            onClick={handleMenuClick}
          >
            {isOpen ? <BsX /> : <BiMenu className="" />}
          </button>
          <ul className="hidden sm:flex sm:gap-8">
            <MenuItem title="Home" href="/" />
            <MenuItem title="Movies" href="/movies" />
            <MenuItem title="Favourites" href="/favourites" />
          </ul>
        </div>
        <div className="absolute z-20 bottom-0 right-0 left-0 top-full sm:hidden">
          <ul
            className={`${
              isOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0"
            }
          } w-full flex flex-col gap-2 py-5 text-center bg-orange-300 duration-700 ease-in-out`}
          >
            <MenuItem title="Home" href="/" />
            <MenuItem title="Movies" href="/movies" />
            <MenuItem title="Favourites" href="/favourites" />
          </ul>
        </div>
      </div>
    </nav>
  );
}
