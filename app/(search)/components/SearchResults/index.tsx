import Link from "next/link";
import { InfinitySpin } from "react-loader-spinner";
import SearchResultItem from "../SearchResultItem";
import { Dispatch, SetStateAction } from "react";
import { TitleType } from "@/types";

type PropsType = {
  data: { results: TitleType[] | undefined; hasNext: boolean } | undefined;
  setSearchIsOpen: Dispatch<SetStateAction<Boolean>>;
  isLoading: boolean;
  searchKeyword?: string;
};

const SearchResults = ({
  data,
  setSearchIsOpen,
  isLoading,
  searchKeyword,
}: PropsType) => {
  let content;
  if (data && data.results?.length === 0 && !isLoading) {
    content = <p className="text-center">نتیجه ای یافت نشد</p>;
  }
  if (data && data.results?.length && data.results?.length > 0 && !isLoading) {
    content = data.results ? data.results.map((result) => {
      return <SearchResultItem result={result} key={result._id} />;
    }) : <></>;
  }

  return (
    <div
      className={`absolute w-[325px] min-h-[35px] flex flex-col justify-center top-[calc(100%+12px)] text-white left-0 bg-dark  px-3 rounded-lg transition-all
    ${
      data
        ? "opacity-100 scale-100 pointer-events-auto"
        : "opacity-0 scale-90 pointer-events-none"
    }
    `}
    >
      {isLoading && (
        <div className="flex justify-center ms-[50px]">
          <InfinitySpin width="100" color="#fdba74" />
        </div>
      )}
      {content}
      {!isLoading && data?.hasNext && (
        <Link
          onClick={() => {
            setSearchIsOpen(false);
          }}
          className="flex justify-center text-center transition text-sm hover:text-primary py-2"
          href={`/keyword=${searchKeyword}`}
        >
          دیدن تمامی نتایج
        </Link>
      )}
    </div>
  );
};

export default SearchResults;
