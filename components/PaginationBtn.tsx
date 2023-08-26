import Link from "next/link";
import React from "react";

type PropsType = {
  href: string;
  content: string | number;
  className?: string;
  active: boolean;
};

const PaginationBtn = ({ href, content, className = "", active = false }: PropsType) => {
  return (
    <Link
      className={`btn-link w-12 h-12 ${className} ${
        active ? "btn-link--active" : ""
      }  flex justify-center items-center`}
      href={href}
    >
      {content}
    </Link>
  );
};

export default PaginationBtn;
