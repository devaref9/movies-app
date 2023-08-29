"use client";
import Image from "next/image";
import Link from "next/link";
import CardDetailsBar from "./CardDetailsBar";
import { TitleType } from "@/types";

export default function MovieCarouselCard({ movie }: { movie: TitleType }) {
  return (
    <>
      <div className="h-full flex flex-col">
        <Link
          href={`/movies/${movie?.id}`}
          className="h-full relative rounded-md overflow-hidden"
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-black opacity-50 z-10"></div>
          <CardDetailsBar text={"زیرنویس"} />
          <span className="absolute bottom-2 right-2 z-20 bg-black bg-opacity-50 px-2 rounded-lg">
            <strong className="text-2xl text-primary-dark">
              {movie?.ratingsSummary.aggregateRating}
            </strong>
            /10
          </span>
          <Image
            style={{ objectFit: "cover" }}
            src={movie?.primaryImage.url}
            alt={movie?.titleText.text}
            fill
            sizes="(max-width:640px)30vw,(min-width:641px)20vw"
            loading="eager"
          />
        </Link>
        <h3
          dir="ltr"
          className="text-white text-center mt-1 font-medium text-lg truncate"
        >
          {movie?.titleText.text}
        </h3>
      </div>
    </>
  );
}
