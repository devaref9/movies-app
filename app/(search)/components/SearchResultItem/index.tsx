import { TitleType } from "@/types";
import Image from "next/image";
import Link from "next/link";

const SearchResultItem = ({ result }: {result : TitleType}) => {
  return (
    <Link
      href={`${result.titleType.isSeries ? "/series" : "/movies"}/${result.id}`}
      key={result.id}
      className="py-2 flex gap-2 items-center justify-between group"
    >
      <div className="relative h-12 w-12 rounded-md overflow-hidden transition-all border-2 border-dark group-hover:border-primary">
        <Image
          style={{
            objectFit: "cover",
            verticalAlign: "middle",
            objectPosition: "top",
          }}
          src={
            result.primaryImage?.url
              ? result.primaryImage.url
              : "https://m.media-amazon.com/images/M/MV5BYWM1YTgxNjMtNzY2NC00YjVmLWE1ODUtNTdiYTI4YjZhODMwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
          }
          alt={result.titleText.text}
          fill
          sizes="15vw"
        />
      </div>
      <p className="text-left font-medium transition group-hover:text-primary">
        {result.titleText.text}
      </p>
    </Link>
  );
};

export default SearchResultItem;
