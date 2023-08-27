import Image from "next/image";
import MovieFeedbacks from "./components/MovieFeedbacks/MovieFeedbacks";
import MovieButtons from "./components/MovieButtons/MovieButtons";
import MovieHeader from "./components/MovieHeader/MovieHeader";
import getTitleById from "@/lib/getTittleById";
import DownloadSection from "../../components/DownloadSection";
import TitlesTabs from "../../components/TitlesTabs";
import { SearchParamsType } from "@/types";
import Comments from "../../components/Comments";

type pageProps = {
  params: {
    movieId: string;
  };
  searchParams: SearchParamsType;
};

const TABS = {
  DOWNLOAD: "دانلود",
  COMMENTS: "دیدگاه ها",
};

export async function generateMetadata({ params: { movieId } }: pageProps) {
  const movie = await getTitleById(movieId);
  return {
    title: movie?.titleText.text,
    description: `This is the page of ${movie?.titleText.text} `,
  };
}

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Page({
  params: { movieId },
  searchParams,
}: pageProps) {
  const movie = await getTitleById(movieId);

  let content =
    searchParams.section === TABS.DOWNLOAD || !searchParams.section ? (
      <DownloadSection />
    ) : (
      <Comments titleId={movieId} />
    );

  return (
    movie && (
      <>
        <section className="flex items-center w-full grow">
          <div className="relative overflow-hidden h-[120vh] w-full">
            <div className="relative w-full h-full">
              <Image
                style={{ objectFit: "cover" }}
                src={movie.primaryImage?.url}
                alt={movie.titleText.text}
                fill
                sizes="75vw"
                priority
              />
              <div className="absolute left-0 top-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black"></div>
            </div>
            <div
              className="absolute mx-8 top-[12%] lg:top-[20%]
            left-0 "
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
                <div className="relative mx-auto lg:m-0 lg:basis-[25%] h-[150px] w-[150px] lg:w-full lg:h-[480px] rounded-md overflow-hidden shadow-md">
                  <Image
                    style={{ objectFit: "cover" }}
                    src={movie.primaryImage?.url || ""}
                    alt={movie.titleText.text || ""}
                    fill
                    sizes="20vw"
                    priority
                  />
                </div>
                <div className="flex flex-col gap-4 items-center lg:flex-row lg:items-start lg:justify-between lg:gap-8 lg:basis-[75%] text-gray-200">
                  <MovieHeader movie={movie} />
                  <div className="flex flex-col items-center gap-4 lg:gap-16">
                    <MovieFeedbacks ratingsSummary={movie.ratingsSummary} />
                    <MovieButtons />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <TitlesTabs searchParams={searchParams} TABS={TABS} titleId={movieId} />
        <section>
          <div className="custom-container pt-6">{content}</div>
        </section>
      </>
    )
  );
}
