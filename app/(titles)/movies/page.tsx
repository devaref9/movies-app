import DropDownFilter from "@/app/(titles)/components/DropDownFilters/DropDownFilter";
import MoviesList from "./components/MoviesList";

import Pagination from "@/components/Pagination";
import getAllMovies from "@/lib/getAllMovies";
import { SearchParamsType } from "@/types";
import Layout from "../Layout/Layout";

export const metadata = {
  title: "فیلم ها",
};

type pageProps = {
  searchParams: SearchParamsType;
};

export default async function MoviesPage({ searchParams }: pageProps) {
  let currentPageNumber = 1;
  const totalPages = 8;

  if (Number(searchParams.page) >= 1) {
    currentPageNumber = Number(searchParams.page);
  }

  const movies = await getAllMovies(searchParams);

  return (
    <Layout>
      <section className="custom-container flex flex-col gap-10">
        <h2 className="text-center text-3xl font-bold">همه فیلم ها</h2>
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
        <MoviesList movies={movies} />
        <Pagination totalPages={totalPages} currentPage={currentPageNumber} />
      </section>
    </Layout>
  );
}
