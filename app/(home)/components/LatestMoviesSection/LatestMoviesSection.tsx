import getLatestUpcomingMovies from "@/lib/getLatestUpcomingMovies";
import SectionHeading from "../../../../components/SectionHeading";
import { BsFillFileEarmarkPlayFill } from "react-icons/bs";
import SectionCard from "@/components/SectionCard";
export default async function LatestMoviesSection() {
  const movies = await getLatestUpcomingMovies();

  return (
    <section className="custom-container flex flex-col gap-4">
      <SectionHeading
        title={"جدیدترین فیلم ها"}
        Icon={BsFillFileEarmarkPlayFill}
        linkText={"تمامی فیلم ها"}
        href={"/movies"}
      />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 lg:gap-4">
        {movies &&
          movies.map((movie) => {
            return <SectionCard key={movie._id} item={movie} />;
          })}
      </div>
    </section>
  );
}
