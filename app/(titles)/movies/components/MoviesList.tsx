import SectionCard from "@/components/SectionCard";
import { TitleType } from "@/types";

export default function MoviesList({ movies }: { movies: TitleType[] | undefined }) {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-6">
        {movies?.map((movie) => {
          return <SectionCard key={movie._id} item={movie} />;
        })}
      </div>
    </>
  );
}
