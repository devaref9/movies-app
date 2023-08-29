"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { BsArrowUp } from "react-icons/bs";

const ScrollToTop = () => {
  const [isHover, setIsHover] = useState(false);
  const isBigScreen = useMediaQuery({ query: "(min-width: 992px)" });
  const [showTopBtn, setShowTopBtn] = useState<boolean | null>(null);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={`p-2 hidden lg:block lg:p-3 transition-all bg-primary text-black lg:hover:shadow-md lg:hover:shadow-primary-dark rounded-full fixed right-5 bottom-10 z-30 cursor-pointer  
        ${
          showTopBtn
            ? "bottom-16 lg:bottom-5 translate-y-0 opacity-100"
            : "bottom-0 translate-y-full opacity-0"
        }
        `}
      onClick={goToTop}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <BsArrowUp className="text-2xl lg:text-3xl" />
    </div>
  );
};

export default ScrollToTop;
