import SingleTitle from "@/app/(titles)/components/SingleTitle/SingleTitle";
import getTitleById from "@/lib/getTittleById";
import DownloadSection from "../../components/DownloadSection";
import Comments from "../../components/Comments";
import { SearchParamsType } from "@/types";
import TitlesTabs from "../../components/TitlesTabs";

type pageProps = {
  params: {
    serieId: string;
  };
  searchParams: SearchParamsType;
};

const TABS = {
  DOWNLOAD: "دانلود",
  COMMENTS: "دیدگاه ها",
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params: { serieId } }: pageProps) {
  const serie = await getTitleById(serieId);
  return {
    title: serie?.titleText.text,
    description: `This is the page of ${serie?.titleText.text} `,
  };
}

export default async function SeriePage({
  params: { serieId },
  searchParams,
}: pageProps) {
  let content =
    searchParams.section === "دانلود" || !searchParams.section ? (
      <DownloadSection />
    ) : (
      <Comments titleId={serieId} />
    );
  const serie = await getTitleById(serieId);
  return (
    <>
      <SingleTitle title={serie} />
      <TitlesTabs searchParams={searchParams} TABS={TABS} titleId={serieId} />
      <section>
        <div className="custom-container pt-6">{content}</div>
      </section>
    </>
  );
}
