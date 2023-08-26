import getLatestUpcomingSeries from "@/lib/getLatestUpcomingSeries";
import SectionHeading from "@/components/SectionHeading";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import SectionCard from "@/components/SectionCard";

export default async function LatestSeriesSection() {
  const series = await getLatestUpcomingSeries();
  return (
    <section className="custom-container flex flex-col gap-4">
      <SectionHeading
        title={"سریال های در حال پخش"}
        Icon={BsFillCollectionPlayFill}
        linkText={"تمامی سریال ها"}
        href={"/series"}
      />
      <div className="flex flex-row overflow-x-auto scrollbar--custom gap-6 sm:overflow-hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 sm:gap-4">
        {series &&
          series.map((serie) => {
            return <SectionCard key={serie._id} item={serie} />;
          })}
      </div>
    </section>
  );
}
