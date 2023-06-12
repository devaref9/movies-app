import getAllMovies from "@/lib/getAllMovies";
import FavMovies from "./components/FavMovies";

export const metadata = {
  title: "Favourite Movies",
};

export default async function FavouritesPage() {
  const totalPages = 6;
  let movies = [];
  for (let i = 1; i <= totalPages; i++) {
    const moviesData = await getAllMovies(i);
    movies = [...movies, ...moviesData.data];
  }

  return (
    <main
      className="py-6 px-8"
    >
      <section className="flex flex-col gap-2">
        <h2 className="text-slate-800 text-2xl font-bold">Favourite Movies</h2>
        <FavMovies movies={movies} />
      </section>
    </main>
  );
}
