import { TitleType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MovieCarouselSelected = ({ movie }: { movie: TitleType }) => {
  return (
    <div className="relative h-full w-full">
      <Image
        style={{ objectFit: "unset" }}
        src={movie?.primaryImage.url}
        alt={movie?.titleText.text}
        fill
        sizes="(min-width:768px)40vw"
      />
      <div className="absolute right-0 left-0 top-0 bottom-0 bg-gradient-to-r from-transparent to-black"></div>
      <div className="flex flex-col gap-4 absolute w-full h-full pt-40 pe-16 ps-10 bg-black bg-opacity-25">
        <h2 className="font-bold text-4xl text-left shadow-sm ">
          {movie?.titleText.text}
        </h2>
        <span className="text-left text-xl shadow-sm">
          <strong className="text-4xl text-primary-dark">
            {movie?.ratingsSummary.aggregateRating}
          </strong>
          /10
        </span>
        <p className="text-right text-sm font-normal shadow-sm">
          بروس وین به قتل رسیده و پسر خوانده اش با فرزندان دشمنان بتمن متحد می
          شود. همانطور که شهر خطرناک تر می شود، این فراریان، به نسل بعدی ناجیان
          آن تبدیل خواهند شد و به «شوالیه های گاتهام» معروف می شوند.
        </p>
        <Link className="self-end btn btn-primary" href={`/movies/${movie.id}`}>
          ادامه + دانلود
        </Link>
      </div>
    </div>
  );
};

export default MovieCarouselSelected;
