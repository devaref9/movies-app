import getMovie from "@/lib/getMovie";
import Image from "next/image";

export async function generateMetadata({ params: { movieId } }) {
  const MovieData = getMovie(movieId);
  const movie = await MovieData;
  return {
    title: movie.title,
    description: `This is the page of ${movie.title}`,
  };
}

export default async function MoviePage({ params: { movieId } }) {
  const MovieData = getMovie(movieId);
  const movie = await MovieData;
  return (
    <main
      style={{ height: "calc(100vh - 120px)" }}
      className="flex items-center w-full grow"
    >
      <div className="relative overflow-hidden h-full w-full">
        <Image style={{objectFit:"cover"}} src={movie.images[1]} alt={movie.title} fill />
        <div
          className="absolute flex gap-8 justify-between rounded-lg mx-8 p-6 lg:p-10 bg-gray-400 bg-opacity-25 shadow-neutral-400 shadow-sm  top-1/2 -translate-y-1/2
              left-0 "
        >
          <div className="flex py-2 lg:py-12 flex-col gap-4 xl:basis-2/3 text-gray-200">
            <h2 className="font-bold text-2xl tracking-widest">
              {movie.title}
            </h2>
            <p classsName="text-xl" style={{ lineHeight: "28px" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cupiditate libero placeat officia et ipsam dignissimos numquam
              odit quis eaque tenetur dicta modi ratione, illum beatae
              laboriosam? Et perspiciatis aut officiis!
            </p>
            <div className="flex gap-2 mt-4">
              {movie.genres.map((genre) => {
                return (
                  <span
                    key={movie.id}
                    class="inline-flex items-center rounded-md bg-tranparent px-2 py-1 text-xs font-medium text-orange-300 ring-1 ring-inset ring-orange-300"
                  >
                    {genre}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="relative basis-1/3 h-auto rounded-md overflow-hidden shadow-md hidden xl:block">
            <Image style={{objectFit:"cover"}} src={movie.images[2]} alt={movie.title} fill />
          </div>
        </div>
      </div>
    </main>
  );
}
