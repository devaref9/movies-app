"use client";

import InfiniteScroll from "react-infinite-scroll-component";
import { useCallback, useEffect, useState } from "react";
import getAllMovies from "@/lib/getAllMovies";
import MoviesList from "./MoviesList/MoviesList";
import FiltersDropDown from "./FiltersDropDown/FiltersDropDown";
import { InfinitySpin } from "react-loader-spinner";

export function InfiniteScrollWrapper() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = useCallback(async () => {
    const res = await getAllMovies(page);
    setMovies([...movies, ...res.data]);
    setPage((prev) => prev + 1);
  }, [movies,page]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <FiltersDropDown />
      <InfiniteScroll
        dataLength={movies.length} //This is important field to render the next data
        next={() => fetchData()}
        hasMore={movies.length <= 50}
        loader={
          <div className="flex justify-center">
            <InfinitySpin width="100" color="#fdba74" />
          </div>
        }
        endMessage={
          <div
            className="flex justify-center my-6"
            style={{ textAlign: "center" }}
          >
            <b>Yay! You have seen it all</b>
          </div>
        }
      >
        <MoviesList movies={movies} />
      </InfiniteScroll>
    </>
  );
}
