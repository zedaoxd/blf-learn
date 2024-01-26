import FeaturedCourses from "@/components/sections/home/featured-courses";
import Intro from "@/components/sections/home/intro";
import TopCategories from "@/components/sections/home/top-categories";

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <Intro />

      <TopCategories />

      <FeaturedCourses />
    </main>
  );
}
