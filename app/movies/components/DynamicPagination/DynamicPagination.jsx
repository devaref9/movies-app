import Link from "next/link";
import React from "react";

export default function DynamicPagination({ page, currentPage, totalPages }) {
  let pageNumbers = [];

  for (let i = currentPage - 3; i <= currentPage + 3; i++) {
    if (i < 1) continue;
    if (i > totalPages) break;
    pageNumbers.push(i);
  }

  return (
    <div className="flex gap-0.5 justify-center items-center mt-2">
      <Link href={`/movies?page=${page - 1}`}>
        <button
          className={`btn btn-primary ${
            currentPage <= 1 ? "btn-primary--disabled" : ""
          }`}
          disabled={currentPage <= 1 ? true : false}
        >
          Prev
        </button>
      </Link>
      {pageNumbers.map((page) => {
        return (
          <Link
            href={`/movies?page=${page}`}
            key={page}
            className={`btn btn-primary 
            ${page === currentPage ? "btn-primary--active" : ""}
             rounded-full
              `}
          >
            {page}
          </Link>
        );
      })}
      <Link href={`/movies?page=${page + 1}`}>
        <button
          className={`btn btn-primary 
          ${currentPage >= totalPages ? "btn-primary--disabled" : ""}`}
          disabled={currentPage >= totalPages ? true : false}
        >
          Next
        </button>
      </Link>
    </div>
  );
}
