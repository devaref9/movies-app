"use client";

import { usePathname, useSearchParams } from "next/navigation";
import PaginationBtn from "./PaginationBtn";
import Link from "next/link";
import React from "react";

type PropsType = {
  totalPages: number;
  currentPage: number;
};

const Pagination = ({ totalPages, currentPage }:PropsType) => {
  const params = useSearchParams();
  const current = new URLSearchParams(Array.from(params.entries()));
  current.delete("page");
  const query = current.toString();

  const pathname = usePathname();
  let numbers: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i < 3 ||
      (currentPage <= i && i < currentPage + 3) ||
      (currentPage - 3 < i && i <= currentPage) ||
      (currentPage - 3 === i && i === 3) ||
      (currentPage + 3 === totalPages - 2 && i === totalPages - 2) ||
      i > totalPages - 2
    ) {
      numbers.push(i);
    } else continue;
  }
  return (
    <div className="flex gap-2 justify-center">
      {currentPage > 1 && (
        <Link
          className="btn-link justify-center items-center flex px-6"
          href={pathname + "?" + `${query}&page=${currentPage - 1}`}
        >
          قبلی
        </Link>
      )}

      {numbers.map((number, index) => {
        if (index > 0 && number - numbers[index - 1] > 2) {
          return (
            <React.Fragment key={number}>
              <PaginationBtn
                active={false}
                content={"..."}
                href={"/"}
                className="pointer-events-none"
              />
              <PaginationBtn
                active={currentPage === number}
                content={number}
                href={pathname + "?" + `${query}&page=${number}`}
              />
            </React.Fragment>
          );
        } else
          return (
            <PaginationBtn
              active={currentPage === number}
              key={number}
              content={number}
              href={pathname + "?" + `${query}&page=${number}`}
            />
          );
      })}
      {currentPage < totalPages && (
        <Link
          className="btn-link justify-center items-center flex px-6"
          href={pathname + "?" + `${query}&page=${currentPage + 1}`}
        >
          بعدی
        </Link>
      )}
    </div>
  );
};

export default Pagination;
