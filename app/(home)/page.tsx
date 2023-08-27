import AboutSection from "@/app/(home)/components/AboutSection/AboutSection";
import BannerSection from "@/app/(home)/components/BannerSection/BannerSection";
import LatestMoviesSection from "@/app/(home)/components/LatestMoviesSection/LatestMoviesSection";
import LatestSeriesSection from "@/app/(home)/components/LatestSeriesSection/LatestSeriesSection";
import { Suspense, SuspenseList } from "react";
import { InfinitySpin } from "react-loader-spinner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-10">
      <Suspense fallback={<p>Loading...</p>}>
        <BannerSection />
      </Suspense>

      <Suspense fallback={<p>Loading...</p>}>
        <LatestMoviesSection />
        <LatestSeriesSection />
      </Suspense>
      <AboutSection />
    </main>
  );
}
