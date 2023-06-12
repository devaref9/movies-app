import MovieCarousel from "./movies/components/MoviesCarousel/MoviesCarousel";
import MoviesPage from "./movies/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <MovieCarousel />
      <MoviesPage />
    </main>
  );
}
