import { CourseCard } from "../cards/CourseCard";
import Sort from "../Sort";
import { useQuery } from "react-query";
import { getCoursesByTopics } from "../../utils/Course";
import { CourseCardSkeleton } from "../skeletons/CourseCardSkeleton";
import { CourseType } from "../../types/CourseType";

export default function SearchResults({ query }: { query: string }) {
  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery(["search-results", query], getCoursesByTopics);

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
    <>
      <CourseCardSkeleton />
      <CourseCardSkeleton />
      <CourseCardSkeleton />
      <CourseCardSkeleton />
      <CourseCardSkeleton />
      <CourseCardSkeleton />
    </>;
  }
  if (data) {
    return (
      <div className="px-4 md:px-6 xl:px-8 pt-[84px] md:pt-24 space-y-6">
        <div>
          <div className="flex items-center justify-between gap-4">
            <Sort />
          </div>
          <h1 className="mt-4 max-w-[332px] text-xl font-semibold line-clamp-1 lg:text-xl">
            Search Results
          </h1>
        </div>
        <div className="flex flex-col items-stretch gap-4 md:grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
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
        </div>
      </div>
    );
  }
}
