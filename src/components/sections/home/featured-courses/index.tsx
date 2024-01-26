"use client";

import Section from "@/components/shared/section";
import useFeaturedCourses from "./useFeaturedCourses";
import { cn } from "@/lib/utils";
import CardCourse from "./components/card-course";

export default function FeaturedCourses() {
  const { featuredCourses, ButtonShowAll, showAll } = useFeaturedCourses();

  return (
    <Section
      title="Featured Courses"
      subtitle="Explore our Popular Courses"
      action={ButtonShowAll}
    >
      <div
        className={cn(
          "pt-3 grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          showAll ? "" : "max-h-[30rem] overflow-hidden"
        )}
      >
        {featuredCourses.map((course) => (
          <CardCourse key={course.id} {...course} />
        ))}
      </div>
    </Section>
  );
}
