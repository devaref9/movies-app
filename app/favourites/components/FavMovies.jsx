"use client";
import { MovieContext } from "@/app/contexts/MovieContext";
import MovieCard from "@/app/movies/components/MovieCard/MovieCard";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";

export default function FavMovies({ movies }) {
  const { favMovies } = useContext(MovieContext);
  const [currentMovies, setCurrentMovies] = useState([]);
  useEffect(() => {
    setCurrentMovies(movies.filter((movie) => favMovies.includes(movie.id)));
  }, [favMovies, movies]);
  return (
    <>
      {currentMovies.length > 0 ? (
        <div className="-mt-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-6">
          {currentMovies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>
      ) : (
        <p>List is empty.</p>
      )}
    </>
  );
}
