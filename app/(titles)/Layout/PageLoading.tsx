import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Layout from "./Layout";

export default function PageLoading() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Layout>
        <div className="custom-container flex flex-col gap-10">
          <div className="flex justify-center">
            <Skeleton style={{ height: "40px", width: "125px" }} />
          </div>
          <div className="flex justify-end gap-4">
            <Skeleton style={{ height: "50px", width: "200px" }} />
            <Skeleton style={{ height: "50px", width: "200px" }} />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-6">
            {new Array(12).fill(0).map((item, index) => {
              return (
                <div key={index} className="rounded-xl">
                  <Skeleton style={{ height: "290px" }} />
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </SkeletonTheme>
  );
}
