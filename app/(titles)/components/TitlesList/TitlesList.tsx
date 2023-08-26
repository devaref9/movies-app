import SectionCard from "@/components/SectionCard";
import { TitleType } from "@/types";

type TitleListProps = {
  titles: TitleType[] | undefined ;
};

export default async function TitlesList({ titles }: TitleListProps) {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-6">
        {titles?.map((title) => {
          return <SectionCard key={`title-${title._id}`} item={title} />;
        })}
      </div>
    </>
  );
}
