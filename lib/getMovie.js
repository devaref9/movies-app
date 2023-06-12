export default async function getMovie(movieId) {
  const res = await fetch(`https://moviesapi.ir/api/v1/movies/${movieId}`);

  if (!res.ok) return undefined;

  return res.json();
}
