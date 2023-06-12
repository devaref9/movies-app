"use client";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "../MovieCard/MovieCard";

export default function MoviesList({ movies }) {
  return (
    <section className="px-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-6">
      {movies.map((movie,index) => {
        return <MovieCard key={index} movie={movie} />;
      })}
    </section>
  );
}
