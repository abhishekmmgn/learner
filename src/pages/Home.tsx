import { getCourses } from "../utils/Course";
import { CourseCard } from "../components/cards/CourseCard";
import { CourseCardSkeleton } from "../components/skeletons/CourseCardSkeleton";
import { useQuery } from "react-query";
import { CourseType } from "../types/CourseType";

export default function Home() {
  const { data, isLoading, isError, error } = useQuery("courses", getCourses);
  
  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl font-medium text-destructive">
          {(error as Error).message}
        </p>
      </div>
    );
  } else {
    return (
      <div className="px-4 md:px-6 xl:px-8 pt-8 md:pt-10 flex flex-col items-stretch gap-4 sm:grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {isLoading ? (
          <>
            <CourseCardSkeleton />
            <CourseCardSkeleton />
            <CourseCardSkeleton />
            <CourseCardSkeleton />
            <CourseCardSkeleton />
            <CourseCardSkeleton />
          </>
        ) : (
          <>
            {Array.isArray(data)
              ? data.map(
                  (
                    course: CourseType & { courseId: string },
                    index: number
                  ) => (
                    <CourseCard
                      title={course.title}
                      students={course.students}
                      instructor={course.instructor}
                      duration={course.duration}
                      courseId={course.courseId}
                      // image={course.image}
                      key={index}
                    />
                  )
                )
              : null}
          </>
        )}
      </div>
    );
  }
}
