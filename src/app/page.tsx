import ADBanner from "@/components/ad-banner";
import Benefits from "@/components/sections/home/benefits";
import FeaturedCourses from "@/components/sections/home/featured-courses";
import Intro from "@/components/sections/home/intro";
import LatestArticles from "@/components/sections/home/latest-articles";
import Metrics from "@/components/sections/home/metrics";
import StartNow from "@/components/sections/home/start-now";
import StudentsFeedback from "@/components/sections/home/students-feedback";
import TopCategories from "@/components/sections/home/top-categories";

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <Intro />

      <TopCategories />

      <FeaturedCourses />

      <ADBanner />

      <Metrics />

      <Benefits />

      <StudentsFeedback />

      <StartNow />

      <LatestArticles />
    </main>
  );
}
