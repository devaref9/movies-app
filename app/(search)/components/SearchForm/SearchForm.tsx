"use client";

import getSearchResults from "@/lib/getSearchResults";
import { useRef, useState } from "react";
import { BsSearch, BsGear } from "react-icons/bs";
import SearchResults from "../SearchResults";
import useOutsideAlerter from "@/hooks/useOutsideAlerter";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "usehooks-ts";

export default function SearchForm() {
  const [searchIsOpen, setSearchIsOpen] = useState<Boolean>(false);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const debouncedFilter = useDebounce<string | number>(searchKeyword, 300);

  const {
    data: searchResponse,
    isFetching,
    isLoading,
  } = useQuery(
    ["search", debouncedFilter],
    () => getSearchResults(searchKeyword, 4),
    { enabled: Boolean(debouncedFilter) }
  );

  const func = () => {
    searchIsOpen && setSearchIsOpen(false);
    setSearchKeyword("");
  };
  useOutsideAlerter(searchRef, func);

  const handleSearchClick = () => {
    setSearchIsOpen(true);
  };

  return (
    <>
      <BsSearch
        onClick={handleSearchClick}
        className="text-light self-center text-2xl cursor-pointer"
      />
      <div
        className={` ${
          searchIsOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-[400px] opacity-0"
        } transition-all duration-500 flex items-center absolute left-[15px] lg:left-[50px] top-1/2 -translate-y-1/2 text-white bg-dark py-2 px-2 min-w-[200px] lg:min-w-[300px] rounded-xl z-30`}
      >
        <BsSearch className="text-xl cursor-pointer me-3" />
        <input
        ref={searchRef}
          type="text"
          placeholder="جستجو"
          className="bg-transparent text-sm outline-0 border-0 font-medium grow border-r-[1px] border-gray-500 py-2 placeholder-gray-500 px-2"
          onChange={(e) => {
            setSearchKeyword(e.target.value);
          }}
          value={searchKeyword}
        />
        <BsGear className="text-xl cursor-pointer" />
        <SearchResults
          data={searchResponse}
          isLoading={isFetching || isLoading}
          setSearchIsOpen={setSearchIsOpen}
          searchKeyword={searchRef.current?.value}
        />
      </div>
    </>
  );
}
