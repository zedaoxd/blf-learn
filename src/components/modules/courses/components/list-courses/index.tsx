import { Course } from "../types";
import CardCourseHorizontal from "./components/card-course-horizontal";

type ListCoursesProps = {
  courses: Course[];
};

export default function ListCourses({ courses }: ListCoursesProps) {
  return (
    <div className="flex flex-col gap-5">
      {courses.map((course) => (
        <CardCourseHorizontal key={course.id} {...course} />
      ))}
    </div>
  );
}
