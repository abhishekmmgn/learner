import { Button } from "../components/ui/button";
import Back from "../components/Back";
import { useAuthContext } from "../contexts/AuthProvider";
import GeneralSkeleton from "../components/skeletons/GeneralSkeleton";
import {
  getCourseDetails,
  enrollCourse,
  getUserCourses,
} from "../utils/Course";
import DeleteCourse from "@/components/DeleteCourse";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { number } from "yup";

export default function CourseDetails() {
  const [enrolled, setEnrolled] = useState(false);
  const { user, isInstructor } = useAuthContext();

  const location = useLocation();
  const courseId: string = location.pathname.split("/")[2];

  function handleCourseEnroll() {
    enrollCourse(courseId)
      .then((res) => {
        if (res.success) {
          setEnrolled(true);
          toast.success("Course enrolled successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const {
    data: courseData,
    isLoading,
    isError: courseIsError,
    error: courseError,
  } = useQuery(["course", courseId], getCourseDetails);
  const {
    data: userData,
    isError: userIsError,
    error: userError,
  } = useQuery(["userCourses", user?.uid], getUserCourses, {
    enabled: !!user,
    onSuccess: () => {
      userData?.map((course: { courseId: string; progress: number }) => {
        if (course.courseId === courseId) {
          setEnrolled(true);
        }
      });
    },
  });

  if (courseIsError || userIsError) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl font-medium text-destructive">
          {courseError
            ? (courseError as Error).message
            : (userError as Error).message}
        </p>
      </div>
    );
  }
  if (isLoading) {
    return <GeneralSkeleton />;
  }
  if (courseData) {
    return (
      <>
        <Back />
        <div className="flex flex-col items-center gap-6 pb-4 md:py-8">
          {/* <img
            src={courseData.image}
            alt="Course Photo"
            className="w-full aspect-video bg-tertiary/80 max-w-4xl"
          /> */}
          <div className="w-full max-w-4xl px-4 md:px-6 xl:px-0 space-y-6 xl:space-y-8">
            <div className="space-y-6">
              <div className="w-full">
                <h1 className="text-xl font-semibold line-clamp-2 md:text-2xl">
                  {courseData.title}
                </h1>
                <p className="mt-1 text-tertiary-foreground line-clamp-5 md:line-clamp-3">
                  {courseData.description}
                </p>
              </div>
              <div className="w-full md:max-w-xl mx-auto">
                {/* Modify course */}
                {isInstructor && user && (
                  <div className="space-y-3">
                    <Button variant="secondary">Edit Course</Button>
                    <DeleteCourse courseId={courseId} />
                  </div>
                )}
                {user && !isInstructor && !enrolled && (
                  <Button onClick={handleCourseEnroll}>Enroll</Button>
                )}
              </div>
            </div>

            <div className="space-y-4">
              {/* Syllabus */}
              {/* <div>
                <p className="mb-3 md:text-lg font-medium">Syllabus</p>
                <div className="p-4 rounded-lg bg-background text-sm+ md:text-base lg:text-base+"></div>
              </div> */}

              {/* Information */}
              <div>
                <p className="mb-3 md:text-lg font-medium">Information</p>
                <div className="p-4 rounded-lg bg-background text-sm+ md:text-base lg:text-base+">
                  <p className="font-medium">Duration</p>
                  <p className="mb-3 text-tertiary-foreground">
                    {courseData.duration}
                  </p>
                  <p className="font-medium">Topics</p>
                  <p className="mb-3 text-tertiary-foreground">
                    {courseData.topics?.map((topic) => {
                      return topic + ", ";
                    })}
                  </p>
                  <p className="font-medium">Instructor</p>
                  <p className="mb-3 text-tertiary-foreground">
                    {courseData.instructor}
                  </p>
                  <p className="font-medium">Students</p>
                  <p className="text-tertiary-foreground">
                    {courseData.students}
                  </p>
                </div>
              </div>

              {/* Language */}
              <div>
                <p className="mb-3 md:text-lg font-medium">Languages</p>
                <div className="p-4 rounded-lg bg-background text-sm+ md:text-base lg:text-base+">
                  <p className="font-medium">Audio</p>
                  <p className="mb-3 text-tertiary-foreground">
                    {courseData.audio?.map((item) => {
                      return item + ", ";
                    })}
                  </p>
                  <p className="font-medium">Subtitles</p>
                  <p className="mb-3 text-tertiary-foreground">
                    {courseData.subtitles?.map((subtitle) => {
                      return subtitle + ", ";
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl font-medium">
          The course you are looking for does not exist.
        </p>
      </div>
    );
  }
}
