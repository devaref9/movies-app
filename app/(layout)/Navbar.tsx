"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import SearchForm from "../(search)/components/SearchForm/SearchForm";
import MobileNavbar from "./MobileNavbar";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const [showBG, setShowBG] = useState<Boolean>(false);
  const { data: session } = useSession();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShowBG(true);
      } else {
        setShowBG(false);
      }
    });
  }, []);

  return (
    <>
      <nav className="w-full fixed top-0 z-50 left-0 right-0 flex flex-col border-t-2 border-primary">
        <div
          className={`relative transition-all duration-500 border-b border-b-gray-500 border-opacity-50 lg:border-b-0  ${
            showBG
              ? "bg-black bg-opacity-60 backdrop-blur-md backdrop-filter"
              : "bg-gradient-to-t from-transparent to-black"
          }`}
        >
          <div className="flex custom-container">
            <div className="relative z-30 py-3 lg:py-4 flex items-center">
              <Link href="/">
                <div className="relative h-[35px] w-[140px]">
                  <Image
                    fill
                    src={Logo}
                    alt="فیلمکیو"
                    priority={true}
                    sizes="16vw"
                  />
                </div>
              </Link>
              <ul className="hidden sm:flex sm:gap-8 ms-7">
                <li className="text-light hover:text-primary transition-all">
                  <Link className="[word-spacing:-4px]" href="/movies">
                    فیلم ها
                  </Link>
                </li>
                <li className="text-light hover:text-primary transition-all">
                  <Link className="[word-spacing:-4px]" href="/series">
                    سریال ها
                  </Link>
                </li>
              </ul>
            </div>
            <div className="grow"></div>
            <div className="flex lg:gap-4">
              <div className="flex lg:self-center lg:gap-2">
                <Link
                  href={"/"}
                  className="btn btn-primary hidden lg:flex items-center justify-center"
                >
                  اشتراک
                </Link>
                <Link
                  href={"/login"}
                  className="btn lg:btn-secondary flex items-center justify-center border-s border-e border-gray-500 border-opacity-50 lg:border-0 me-4 lg:me-0"
                >
                  {session ? "پنل کاربری" : "ورود"}
                </Link>
              </div>
              <SearchForm />
            </div>
          </div>
        </div>
      </nav>
      <MobileNavbar />
    </>
  );
}
