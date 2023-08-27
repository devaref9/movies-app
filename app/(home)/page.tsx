import AboutSection from "@/app/(home)/components/AboutSection/AboutSection";
import BannerSection from "@/app/(home)/components/BannerSection/BannerSection";
import LatestMoviesSection from "@/app/(home)/components/LatestMoviesSection/LatestMoviesSection";
import LatestSeriesSection from "@/app/(home)/components/LatestSeriesSection/LatestSeriesSection";
import { Suspense, SuspenseList } from "react";
import { InfinitySpin } from "react-loader-spinner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-10">
      <SuspenseList revealOrder="forwards">
        <Suspense>
          <BannerSection />
        </Suspense>

        <Suspense>
          <LatestMoviesSection />
          <LatestSeriesSection />
        </Suspense>
      </SuspenseList>
      <AboutSection />
    </main>
  );
}
