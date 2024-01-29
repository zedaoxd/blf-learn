import Header from "@/components/modules/courses/components/header";
import ListCourses from "@/components/modules/courses/components/list-courses";
import { Course } from "@/components/modules/courses/components/types";
import Show from "@/lib/show";

type CoursesProps = {
  searchParams: { search?: string; listType?: "list" | "grid" };
};

export default function Courses({ searchParams }: CoursesProps) {
  const { listType } = searchParams;

  const courses: Course[] = [
    {
      id: "b1deb8d4-4eb5-4b94-aa9c-db5d3fdf11bd",
      author: "John Doe",
      duration: "2",
      level: "beginner",
      lessons: 10,
      price: 10_000,
      discontPercentage: 0.2,
      students: 100,
      title: "Beginner NextJS Course",
      thumbnail:
        "https://sbruodoekbkbgiiyjxcc.supabase.co/storage/v1/object/public/images/nextjs.jpg",
    },
  ];

  return (
    <div className="container mt-10">
      <div className="grid grid-cols-4 gap-3">
        <div className="col-span-3 flex flex-col gap-8">
          <Header searchParams={searchParams} />

          <Show when={listType === undefined || listType === "list"}>
            <ListCourses courses={courses} />
          </Show>
        </div>

        <div className="h-full border">filters</div>
      </div>
    </div>
  );
}