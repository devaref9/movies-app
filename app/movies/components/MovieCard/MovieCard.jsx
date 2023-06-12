"use client";

import { MovieContext } from "../../../contexts/MovieContext";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { BiBookmarkAltMinus, BiBookmarkAltPlus } from "react-icons/bi";

export default function MovieCard({ movie }) {
  const desc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis molestias eveniet odio consectetur maiores nobis dolores commodia. Doloribus.";

  function truncate(source, size) {
    return source?.length > size ? source.slice(0, size - 1) + "…" : source;
  }

  const truncatedDesc = truncate(desc, 64);

  const { favMovies, setFavMovies } = useContext(MovieContext);
  const [isAdded, setIsAdded] = useState(favMovies.includes(movie.id));

  const handleToggleFav = () => {
    if (!isAdded) {
      if (!favMovies.includes(movie.id))
        setFavMovies((prev) => [...prev, movie.id]);
    } else {
      const newFavMovies = favMovies.filter((id) => id !== movie.id);
      setFavMovies(newFavMovies);
    }
    setIsAdded((prev) => !prev);
  };

  return (
    <div className="relative group rounded-xl bg-gray-100 hover:bg-orange-300 shadow-md overflow-hidden md:max-w-2xl my-4 transform translate-y-3 hover:translate-y-0 duration-500 ease-in-out">
      <Link href={`/movies/${movie.id}`}>
        <div className="relative w-full h-80">
          <div className="absolute z-10 right-0 left-0 top-0 bottom-0  bg-gradient-to-tr  from-gray-900 to-black opacity-0 transition-opacity group-hover:opacity-30"></div>
          <Image
            src={movie.poster}
            alt={movie.title}
            fill
            style={{ height: "100%", width: "100%",objectFit:"cover" }}
          />
        </div>
        <div className="py-3 px-4 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg lg:text-base text-slate-800">
              {truncate(movie.title, 20)}
            </h3>
            <div className="flex gap-1">
              <span className="text-xs font-bold text-slate-800">7.2/10</span>
            </div>
          </div>
          <p className="text-md lg:text-sm text-slate-800">{truncatedDesc}</p>
        </div>
      </Link>
      <div
        onClick={handleToggleFav}
        className="absolute z-10 top-2 right-2 cursor-pointer"
      >
        {isAdded ? (
          <BiBookmarkAltMinus className="text-gray-200 text-2xl hover:text-red-500 transition-all" />
        ) : (
          <BiBookmarkAltPlus className="text-gray-200 text-2xl hover:text-emerald-400 transition-all" />
        )}
      </div>
    </div>
  );
}
