import { TitleType } from "@/types";
import React from "react";

const MovieHeader = ({ movie }: { movie: TitleType }) => {
  return (
    <div className="flex flex-col gap-2 lg:gap-4">
      <h2 className="text-3xl text-center lg:text-start font-bold pb-2 lg:pb-6">
        دانلود {movie.titleType.isSeries ? "سریال" : "فیلم"}{" "}
        {movie.titleText.text}
      </h2>
      <div className="flex justify-center lg:justify-start gap-6 text-lg items-center">
        {movie.runtime?.seconds ? (
          <>
            <span>{movie.runtime.seconds / 60} دقیقه</span>
            <span className="w-[6px] h-[6px] rounded-full bg-white"></span>
          </>
        ) : (
          ""
        )}

        <span>{movie.releaseYear?.year}</span>
      </div>
      <div className="flex justify-center lg:justify-start gap-2 mt-4">
        {movie.genres?.genres.map((genre,index) => {
          return (
            <span
              key={index}
              className="inline-flex items-center rounded-md bg-tranparent px-2 py-1 text-white ring-1 ring-inset ring-white"
            >
              {genre.text}
            </span>
          );
        })}
      </div>
      <p className="font-light">
        بروس وین به قتل رسیده و پسر خوانده اش با فرزندان دشمنان بتمن متحد می
        شود. همانطور که شهر خطرناک تر می شود، این فراریان، به نسل بعدی ناجیان آن
        تبدیل خواهند شد و به «شوالیه های گاتهام» معروف می شوند.
      </p>
    </div>
  );
};

export default MovieHeader;
