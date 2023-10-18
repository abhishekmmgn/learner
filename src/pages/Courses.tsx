import { InstructorCourseCard } from "../components/cards/CourseCard";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { db } from "../firebase-cofig";
import { doc, getDoc, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useAuthContext } from "../contexts/AuthProvider";
import { Separator } from "../components/ui/separator";
import { CourseCardSkeleton } from "../components/skeletons/CourseCardSkeleton";

export default function Courses() {
  const { user, loading } = useAuthContext();
  const [courses, setCourses] = useState<object>([]);

  useEffect(() => {
    const getCourse = async () => {
      const docRef = await doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userCourses = docSnap.data()?.courses;
        console.log("Document data:", userCourses);

        setCourses(userCourses);

        let i = 0;
        userCourses.forEach(async (course: any) => {
          const courseRef = await doc(db, "courses", course);
          const courseSnap = await getDoc(courseRef);
          if (courseSnap.exists()) {
            i++;
            // setCourses((courses: any) => [...courses, courseSnap.data()]);
            console.log("Courses fetching...", i);
          }
        });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    user && getCourse();
  }, []);
  console.log("User: ", user?.uid);
  console.log(courses);

  if (loading) {
    return (
      <div className="w-full xl:max-w-6xl flex flex-wrap items-center justify-center md:grid gap-4 lg:grid-cols-2 xl:grid-cols-3 px-4 py-10 md:pl-6 lg:pl-8">
        <CourseCardSkeleton />
        <CourseCardSkeleton />
        <CourseCardSkeleton />
        <CourseCardSkeleton />
        <CourseCardSkeleton />
        <CourseCardSkeleton />
      </div>
    );
  }

  if (courses?.length > 0) {
    return (
      <div className="px-4 py-6 space-y-6 md:pl-6 xl:pl-8 sm:py-8 md:py-10 lg:pt-12 md:pb-0">
        <div className="space-y-4">
          <h1 className="max-w-[332px] text-xl font-semibold line-clamp-1 lg:text-xl lg:max-w-[80%] md:px-0">
            Analytics
          </h1>
          <div className="h-20 w-full p-4 bg-background rounded-xl flex gap-4 items-center justify-evenly text-center line-clamp-1">
            <div>
              <h2 className="font-bold text-xl">{courses.length}</h2>
              <h2>Courses</h2>
            </div>
            <Separator orientation="vertical" />
            <div>
              <h2 className="font-bold text-xl">{courses.length + 10000}</h2>
              <h2>Total Students Enrolled</h2>
            </div>
            <Separator orientation="vertical" />
            <div>
              <h2 className="font-bold text-xl">{courses.length + 4}</h2>
              <h2>Popular Courses</h2>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="max-w-[332px] text-xl font-semibold line-clamp-1 lg:text-xl lg:max-w-[80%] md:px-0">
            Your Courses
          </h1>
          <div className="w-full xl:max-w-6xl flex flex-col items-center md:grid gap-4 lg:grid-cols-2 md:gap-6 xl:grid-cols-3">
            {courses.map((course: any) => (
              <>
                <InstructorCourseCard
                  key={course.id}
                  courseId={course}
                  title="Hello world"
                />
                <InstructorCourseCard
                  key={course.id}
                  courseId={course}
                  title="Hello world"
                />
                <InstructorCourseCard
                  key={course.id}
                  courseId={course}
                  title="Hello world"
                />
              </>
            ))}
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
            Create any course.
          </p>
        </div>
        <Link to="/new" className="w-full max-w-md sm:max-w-sm">
          <Button className="btn-outline mx-auto">New Course</Button>
        </Link>
      </div>
    );
  }
}
