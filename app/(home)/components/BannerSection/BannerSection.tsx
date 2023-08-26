import MovieCarousel from "@/components/MoviesCarousel/MoviesCarousel";
import getTrendingMovies from "@/lib/getTrendingMovies";

export default async function BannerSection() {
  const results = await getTrendingMovies();
  return (
    <>
      <MovieCarousel movies={results} />
    </>
  );
}
