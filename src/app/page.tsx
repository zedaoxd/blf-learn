import ADBanner from "@/components/ad-banner";
import FeaturedCourses from "@/components/sections/home/featured-courses";
import Intro from "@/components/sections/home/intro";
import Metrics from "@/components/sections/home/metrics";
import TopCategories from "@/components/sections/home/top-categories";

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <Intro />

      <TopCategories />

      <FeaturedCourses />

      <ADBanner />

      <Metrics />
    </main>
  );
}
