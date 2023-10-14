import InstructorCourseCard from "../components/cards/InstructorCourseCard";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function Courses() {
  const hasCourses = true;

  return (
    <>
      {hasCourses ? (
        <div className="py-6 md:pl-6 space-y-6 xl:pl-8 sm:py-8 md:py-10 lg:pt-12 md:pb-0 sm:space-y-8 xl:space-y-10">
          <div className="w-full px-4 xl:max-w-6xl flex flex-col items-center justify-center md:grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            <InstructorCourseCard
              title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
              photo="https://source.unsplash.com/random"
            />
            <InstructorCourseCard
              title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
              photo="https://source.unsplash.com/random"
            />
            <InstructorCourseCard
              title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
              photo="https://source.unsplash.com/random"
            />
            <InstructorCourseCard
              title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
              photo="https://source.unsplash.com/random"
            />
            <InstructorCourseCard
              title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
              photo="https://source.unsplash.com/random"
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-8 items-center justify-center px-4 md:px-8 h-full w-full md:gap-8">
          <div>
            <h1 className="mt-16 text-center text-2xl font-semibold md:text-3xl">
              You don't have any courses.
            </h1>
            <p className="text-center font-medium text-secondary-foreground text-base lg:text-lg">
              Create any course.
            </p>
          </div>
          <Link to="/new" className="w-full max-w-md sm:max-w-sm">
            <Button className="btn-outline mx-auto">New Course</Button>
          </Link>
        </div>
      )}
    </>
  );
}
