import CourseCardGallery from "../components/cards/CourseCardGallery";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useAuthContext } from "../contexts/AuthProvider";
import LibrarySkeleton from "../components/skeletons/LibraryPageSkeleton";
import { useQuery } from "react-query";
import { getEnrolledCourses } from "../utils/Course";
import { enrolledCourseType } from "../types/CourseType";
import { useState } from "react";

export default function Library() {
  const { user } = useAuthContext();
  const [notStarted, setNotStarted] = useState<Array<enrolledCourseType>>([]);
  const [currentlyLearning, setCurrentlyLearning] = useState<
    Array<enrolledCourseType>
  >([]);
  const [completed, setCompleted] = useState<Array<enrolledCourseType>>([]);

  const { data, isLoading, isError, error } = useQuery(
    "enrolled-courses",
    () => getEnrolledCourses(user?.uid),
    {
      enabled: !!user,
      onSuccess: (data) => {
        {
          const currentlyLearning: Array<enrolledCourseType> = [];
          const completed: Array<enrolledCourseType> = [];
          const notStarted: Array<enrolledCourseType> = [];

          Array.isArray(data)
            ? data.map((course: enrolledCourseType) => {
                if (course.progress > 0 && course.progress < 100) {
                  currentlyLearning.push(course);
                } else if (course.progress === 100) {
                  completed.push(course);
                } else if (course.progress === 0) {
                  notStarted.push(course);
                }
              })
            : null;

          setCurrentlyLearning(currentlyLearning);
          setNotStarted(notStarted);
          setCompleted(completed);
        }
      },
    }
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
    return <LibrarySkeleton />;
  }

  if (data) {
    return (
      <div className="px-4 md:px-6 xl:px-8 pt-8 md:pt-10 space-y-6 sm:space-y-8">
        {currentlyLearning.length > 0 && (
          <CourseCardGallery
            title="Currently Learning"
            courses={currentlyLearning}
          />
        )}
        {notStarted.length > 0 && (
          <CourseCardGallery title="Not Started" courses={notStarted} />
        )}
        {completed.length > 0 && (
          <CourseCardGallery title="Completed" courses={completed} />
        )}
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-4 items-center justify-center px-4 md:px-8 h-full w-full md:gap-8">
        <div>
          <h1 className="mt-16 text-center text-2xl font-semibold md:text-3xl">
            You don't have any courses.
          </h1>
          <p className="text-center font-medium text-secondary-foreground text-base lg:text-lg">
            Enroll in any course and start learning.
          </p>
        </div>
        <Link to="/" className="w-full max-w-md sm:max-w-sm">
          <Button className="btn-outline mx-auto">Discover Courses</Button>
        </Link>
      </div>
    );
  }
}
