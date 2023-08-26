import Image from "next/image";
import CardDetailsBar from "./CardDetailsBar";
import Link from "next/link";
import { TitleType } from "@/types";

export default async function SectionCard({ item }: { item: TitleType }) {
  return (
    <div className="relative h-[290px] min-w-[175px] sm:w-auto rounded-default overflow-hidden shadow-md group">
      <div className="h-full relative w-full overflow-hidden">
        <Image
          style={{
            objectFit: "cover",
            verticalAlign: "middle",
            objectPosition: "top",
          }}
          src={
            item.primaryImage?.url
              ? item.primaryImage.url
              : "https://m.media-amazon.com/images/M/MV5BYWM1YTgxNjMtNzY2NC00YjVmLWE1ODUtNTdiYTI4YjZhODMwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
          }
          alt={item.titleText.text}
          fill
          sizes="20vw"
          loading="eager"
        />
        <div className="absolute right-0 left-0 bottom-0 top-0 transition-all backdrop-blur-sm backdrop-filter opacity-0 group-hover:opacity-100"></div>
      </div>
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
      <span className="absolute transition group-hover:opacity-0 text-xl text-primary-dark bottom-9 left-2 bg-black bg-opacity-70 px-2 rounded-lg font-medium">
        {item.ratingsSummary?.aggregateRating}
      </span>
      <CardDetailsBar
        className="transition duration-500 group-hover:opacity-0"
        text={"زیرنویس"}
      />
      <div className="py-2 px-1 absolute z-10 top-1/4 transition-transform duration-500 translate-y-[85%] bottom-0 left-0 right-0 bg-black bg-opacity-80 rounded-t-lg group-hover:translate-y-0">
        <div className="mb-1">
          <Link
            href={`${
              item.titleType.isSeries
                ? `/series/${item.id}`
                : `/movies/${item.id}`
            }`}
          >
            <h3 className="text-center font-medium transition-all group-hover:text-primary">
              {item.titleText.text}
            </h3>
          </Link>
        </div>
        <div>
          <div>
            <span className="text-sm font-medium"> خلاصه داستان: </span>
            <p className="text-xs mt-1">
              بروس وین به قتل رسیده و پسر خوانده اش با فرزندان دشمنان بتمن متحد
              می شود. همانطور که شهر خطرناک تر می شود، این فراریان، به نسل بعدی
              ناجیان آن تبدیل خواهند شد و به «شوالیه های گاتهام» معروف می شوند.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
