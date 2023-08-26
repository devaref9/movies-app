import Image from "next/image";
import TitleButtons from "../TitleButtons";
import TitleFeedbacks from "../TitleFeedbacks";
import TitleHeader from "../TitleHeader";
import { TitleType } from "@/types";

export default function SingleTitle({
  title,
}: {
  title: TitleType | undefined;
}) {
  return (
    title && (
      <section className="flex items-center w-full grow">
        <div className="relative overflow-hidden h-[120vh] w-full">
          <div className="relative w-full h-full">
            <Image
              style={{ objectFit: "cover" }}
              src={title.primaryImage?.url}
              alt={title.titleText.text}
              fill
              sizes="75vw"
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
                  src={title.primaryImage?.url}
                  alt={title.titleText.text}
                  fill
                  sizes="50vw"
                />
              </div>
              <div className="flex flex-col gap-4 items-center lg:flex-row lg:items-start lg:justify-between lg:gap-8 lg:basis-[75%] text-gray-200">
                <TitleHeader title={title} />
                <div className="flex flex-col items-center gap-4 lg:gap-16">
                  <TitleFeedbacks ratingsSummary={title.ratingsSummary} />
                  <TitleButtons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
}
