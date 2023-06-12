import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function loading() {
  return (
    <div className="py-6 px-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-6">
      {new Array(10).fill(0).map((item, index) => {
        return (
          <div key={index} className="rounded-xl">
            <Skeleton style={{ height: "288px" }} />
            <Skeleton style={{ height: "24px" }} />
            <Skeleton count={2} />
          </div>
        );
      })}
    </div>
  );
}