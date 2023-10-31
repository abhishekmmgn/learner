import { InstructorCourseCard } from "../components/cards/CourseCard";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useAuthContext } from "../contexts/AuthProvider";
import { Separator } from "../components/ui/separator";
import { CourseCardSkeleton } from "../components/skeletons/CourseCardSkeleton";
import { useQuery } from "react-query";
import { getCoursesByUserId } from "@/utils/Course";
import { CourseType } from "@/types/CourseType";

export default function MyCourses() {
  const { user } = useAuthContext();

  const { data, isLoading, isError, error } = useQuery(
    "courses",
    () => getCoursesByUserId(user?.uid),
    { enabled: !!user }
  );

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl font-medium text-destructive">
          {(error as Error).message}
        </p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="px-4 md:px-6 xl:px-8 pt-8 md:pt-10 flex flex-col items-stretch gap-4 md:grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <CourseCardSkeleton />
        <CourseCardSkeleton />
        <CourseCardSkeleton />
        <CourseCardSkeleton />
        <CourseCardSkeleton />
        <CourseCardSkeleton />
      </div>
    );
  }

  if (data) {
    return (
      <div className="px-4 md:px-6 xl:px-8 pt-8 md:pt-10 space-y-6 sm:space-y-8">
        {user && (
          <div className="space-y-4">
            <h1 className="max-w-[332px] text-xl font-semibold line-clamp-1 lg:text-xl lg:max-w-[80%] md:px-0">
              Analytics
            </h1>
            <div className="h-20 w-full p-4 bg-background rounded-xl flex gap-4 items-center justify-evenly text-center line-clamp-1">
              <div>
                <h2 className="font-bold text-xl">{data.length}</h2>
                <h2>Courses</h2>
              </div>
              <Separator orientation="vertical" />
              <div>
                <h2 className="font-bold text-xl">{data.length + 10000}</h2>
                <h2>Total Students Enrolled</h2>
              </div>
              <Separator orientation="vertical" />
              <div>
                <h2 className="font-bold text-xl">{data.length}</h2>
                <h2>Popular Courses</h2>
              </div>
            </div>
          </div>
        )}
        <div className="space-y-4">
          <h1 className="max-w-[332px] text-xl font-semibold line-clamp-1 lg:text-xl lg:max-w-[80%] md:px-0">
            Your Courses
          </h1>
          <div className="flex flex-col items-stretch gap-4 sm:grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            <>
              {Array.isArray(data)
                ? data.map(
                    (
                      course: CourseType & { courseId: string },
                      index: number
                    ) => (
                      <InstructorCourseCard
                        title={course.title}
                        students={course.students}
                        courseId={course.courseId}
                        // image={course.image}
                        key={index}
                      />
                    )
                  )
                : null}
            </>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-6 items-center justify-center px-4 md:px-8 h-full w-full">
        <div>
          <h1 className="mt-16 text-center text-2xl font-semibold">
            You don't have any courses.
          </h1>
          <p className="text-center font-medium text-secondary-foreground text-base">
            Create a new course.
          </p>
        </div>
        <Link to="/new" className="w-full max-w-md sm:max-w-sm">
          <Button className="btn-outline mx-auto">New Course</Button>
        </Link>
      </div>
    );
  }
}
