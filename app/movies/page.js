import getAllMovies from "@/lib/getAllMovies";
import MoviesList from "./components/MoviesList/MoviesList";
import FiltersDropDown from "./components/FiltersDropDown/FiltersDropDown";
import { InfiniteScrollWrapper } from "./components/InfiniteScroll";
// import DynamicPagination from "./components/DynamicPagination/DynamicPagination";

export const metadata = {
  title: "Movies",
};

export default async function MoviesPage({ searchParams }) {
  // This is For Dynamic Pagination
  // const page = Number(searchParams?.page) || 1;

  // const totalData = 60;
  // const dataPerPage = 10;
  // const totalPages = Math.ceil(totalData / dataPerPage);

  // let currentPage = 1;

  // if (page >= 1) currentPage = page;

  // const moviesData = await getAllMovies(currentPage);
  // const movies = moviesData.data;

  return (
    <main className="py-6 flex flex-col gap-1 lg:gap-4">
      {/* 
    <FiltersDropDown />
  */}
      {/* 
      <MoviesList movies={movies} />
    */}
      <InfiniteScrollWrapper />
      {/* 
      <DynamicPagination
        page={page}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    */}
    </main>
  );
}
