import DropDownFilter from "@/app/(titles)/components/DropDownFilters/DropDownFilter";
import TitlesList from "@/app/(titles)/components/TitlesList/TitlesList";
import Pagination from "@/components/Pagination";
import getAllSeries from "@/lib/getAllSeries";
import { SearchParamsType } from "@/types";
import Layout from "../Layout/Layout";
import PageLoading from "../Layout/PageLoading";

export const metadata = {
  title: "سریال ها",
};

type pageProps = {
  searchParams: SearchParamsType;
};

export default async function SeriesPage({ searchParams }: pageProps) {
  let currentPageNumber = 1;
  const totalPages = 8;

  if (Number(searchParams.page) >= 1) {
    currentPageNumber = Number(searchParams.page);
  }

  const series = await getAllSeries(searchParams);

  return (
    <Layout>
      <section className="custom-container flex flex-col gap-10">
        <h2 className="text-center text-3xl font-bold">همه سریال ها</h2>
        <div className="self-end flex gap-5">
          <DropDownFilter
            label={"ژانر"}
            options={[{ title: "درام", paramValue: "Drama" }]}
            param={"genre"}
          />
          <DropDownFilter
            label={"مرتب سازی"}
            options={[
              { title: "جدید ترین", paramValue: "year.decr" },
              { title: "قدیمی ترین", paramValue: "year.incr" },
            ]}
            param={"sort"}
          />
        </div>
        <TitlesList titles={series} />
        <Pagination totalPages={totalPages} currentPage={currentPageNumber} />
      </section>
    </Layout>
  );
}
