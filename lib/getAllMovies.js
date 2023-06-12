export default async function getAllMovies(page) {
  const res = await fetch(`https://moviesapi.ir/api/v1/movies?page=${page}`);

  if (!res.ok) return undefined;

  return res.json();
}
